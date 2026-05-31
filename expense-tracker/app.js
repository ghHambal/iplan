'use strict';

const SUPABASE_URL = 'https://tuxpdrujjtntwtxdtyml.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_IXzeW3WazTznwmkPd27ErA_Cs8nN91u';

const sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ─── State ────────────────────────────────────────────────────────────────────
const state = {
  user: null, member: null, family: null,
  transactions: [], budgets: [], members: [],
  view: 'dashboard', month: new Date(),
  authMode: 'login', txType: 'expense', txCategory: null,
  editTxId: null, editBudgetId: null,
  catTab: 'expense',
  charts: {},
};

// ─── Categories ───────────────────────────────────────────────────────────────
const DEFAULT_EXPENSE = [
  '🍽️ อาหาร/เครื่องดื่ม', '🚗 เดินทาง/น้ำมัน', '💡 ค่าน้ำ/ไฟ/อินเทอร์เน็ต',
  '🏥 สุขภาพ/ยา', '🛍️ ช้อปปิ้ง/เสื้อผ้า', '🏠 ที่อยู่อาศัย/ผ่อนบ้าน',
  '📚 การศึกษา', '🎉 บันเทิง/ท่องเที่ยว', '💰 ออมทรัพย์', '📦 อื่นๆ',
];
const DEFAULT_INCOME = [
  '💵 เงินเดือน', '🎁 โบนัส', '💼 ค่าจ้าง/ฟรีแลนซ์',
  '📈 ลงทุน/ดอกเบี้ย', '💸 รายได้อื่นๆ',
];

function getCats(type) {
  if (!state.family) return type === 'expense' ? DEFAULT_EXPENSE : DEFAULT_INCOME;
  const stored = localStorage.getItem(`cats_${type}_${state.family.id}`);
  return stored ? JSON.parse(stored) : (type === 'expense' ? [...DEFAULT_EXPENSE] : [...DEFAULT_INCOME]);
}
function saveCats(type, cats) {
  if (state.family) localStorage.setItem(`cats_${type}_${state.family.id}`, JSON.stringify(cats));
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
const fmt = (n) => new Intl.NumberFormat('th-TH', { minimumFractionDigits: 0, maximumFractionDigits: 2 }).format(n);

function fmtDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('th-TH', { day: 'numeric', month: 'short', year: '2-digit' });
}

function monthLabel(d) {
  return d.toLocaleDateString('th-TH', { month: 'long', year: 'numeric' });
}

function isSameMonth(dateStr, ref) {
  const d = new Date(dateStr + 'T00:00:00');
  return d.getFullYear() === ref.getFullYear() && d.getMonth() === ref.getMonth();
}

function categoryIcon(cat) {
  if (!cat) return '📦';
  const first = [...cat][0];
  return first.charCodeAt(0) > 127 ? first : '📦';
}

function genCode() {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
}

let toastTimer;
function showToast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2600);
}

function el(id) { return document.getElementById(id); }
function authErr(msg) { const e = el('auth-error'); e.textContent = msg; e.classList.remove('hidden'); }

// ─── Init ─────────────────────────────────────────────────────────────────────
async function initApp() {
  const { data: { session } } = await sb.auth.getSession();
  if (session?.user) {
    state.user = session.user;
    await loadUserData();
  } else {
    showAuthView();
  }

  sb.auth.onAuthStateChange(async (event, session) => {
    if (event === 'SIGNED_IN' && session?.user) {
      state.user = session.user;
      await loadUserData();
    } else if (event === 'SIGNED_OUT') {
      Object.assign(state, { user: null, member: null, family: null, transactions: [], budgets: [], members: [] });
      showAuthView();
    }
  });

  el('loading-screen').style.display = 'none';
}

async function loadUserData() {
  const { data: member } = await sb
    .from('family_members').select('*, families(*)').eq('user_id', state.user.id).maybeSingle();

  if (member?.families) {
    state.member = member;
    state.family = member.families;
    await loadAll();
    showApp();
  } else {
    showFamilySetup();
  }
}

async function loadAll() {
  const [txRes, budgRes, memRes] = await Promise.all([
    sb.from('transactions').select('*').eq('family_id', state.family.id).order('date', { ascending: false }).order('created_at', { ascending: false }),
    sb.from('budgets').select('*').eq('family_id', state.family.id),
    sb.from('family_members').select('*').eq('family_id', state.family.id),
  ]);
  state.transactions = txRes.data || [];
  state.budgets = budgRes.data || [];
  state.members = memRes.data || [];
}

// ─── Realtime ─────────────────────────────────────────────────────────────────
function subscribeRealtime() {
  sb.channel(`fam-${state.family.id}`)
    .on('postgres_changes', { event: '*', schema: 'public', table: 'transactions', filter: `family_id=eq.${state.family.id}` }, (p) => {
      if (p.eventType === 'INSERT') state.transactions.unshift(p.new);
      else if (p.eventType === 'UPDATE') { const i = state.transactions.findIndex(t => t.id === p.new.id); if (i >= 0) state.transactions[i] = p.new; }
      else if (p.eventType === 'DELETE') state.transactions = state.transactions.filter(t => t.id !== p.old.id);
      renderCurrentView();
    })
    .on('postgres_changes', { event: '*', schema: 'public', table: 'budgets', filter: `family_id=eq.${state.family.id}` }, (p) => {
      if (p.eventType === 'INSERT') state.budgets.push(p.new);
      else if (p.eventType === 'UPDATE') { const i = state.budgets.findIndex(b => b.id === p.new.id); if (i >= 0) state.budgets[i] = p.new; }
      else if (p.eventType === 'DELETE') state.budgets = state.budgets.filter(b => b.id !== p.old.id);
      renderBudgets(); renderDashboard();
    })
    .subscribe();
}

// ─── View Routing ─────────────────────────────────────────────────────────────
function showAuthView() {
  el('view-auth').classList.remove('hidden');
  el('view-family-setup').classList.add('hidden');
  el('app').classList.add('hidden');
}
function showFamilySetup() {
  el('view-auth').classList.add('hidden');
  el('view-family-setup').classList.remove('hidden');
  el('app').classList.add('hidden');
  const pending = localStorage.getItem('pending_name');
  if (pending) el('setup-display-name').value = pending;
}
function showApp() {
  el('view-auth').classList.add('hidden');
  el('view-family-setup').classList.add('hidden');
  el('app').classList.remove('hidden');
  el('header-family-name').textContent = state.family.name;
  el('header-user-avatar').textContent = state.member.avatar_emoji || '👤';
  el('header-user-name').textContent = state.member.display_name || '';
  navigateTo('dashboard');
  subscribeRealtime();
}

function navigateTo(view) {
  state.view = view;
  document.querySelectorAll('.view-section').forEach(s => { s.classList.remove('active'); s.classList.add('hidden'); });
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const sec = el(`view-${view}`);
  sec.classList.remove('hidden'); sec.classList.add('active');
  document.querySelector(`.nav-item[data-view="${view}"]`)?.classList.add('active');
  renderCurrentView();
}

function renderCurrentView() {
  if (state.view === 'dashboard') renderDashboard();
  else if (state.view === 'transactions') renderTransactions();
  else if (state.view === 'summary') renderSummary();
  else if (state.view === 'budgets') renderBudgets();
  else if (state.view === 'settings') renderSettings();
}

// ─── Auth ─────────────────────────────────────────────────────────────────────
async function handleAuthSubmit(e) {
  e.preventDefault();
  el('auth-error').classList.add('hidden');
  const email = el('auth-email').value.trim();
  const password = el('auth-password').value;
  const name = el('auth-name').value.trim();
  const btn = el('btn-auth-submit');
  btn.disabled = true; btn.textContent = 'กำลังดำเนินการ...';

  try {
    if (state.authMode === 'login') {
      const { error } = await sb.auth.signInWithPassword({ email, password });
      if (error) throw error;
    } else {
      const { error } = await sb.auth.signUp({ email, password });
      if (error) throw error;
      if (name) localStorage.setItem('pending_name', name);
      showToast('สมัครสำเร็จ! กรุณาตรวจสอบอีเมลเพื่อยืนยัน');
    }
  } catch (err) {
    authErr(translateErr(err.message));
    btn.disabled = false;
    btn.textContent = state.authMode === 'login' ? 'เข้าสู่ระบบ' : 'สมัครสมาชิก';
  }
}

function translateErr(msg) {
  if (msg.includes('Invalid login credentials')) return 'อีเมลหรือรหัสผ่านไม่ถูกต้อง';
  if (msg.includes('Email not confirmed')) return 'กรุณายืนยันอีเมลก่อนเข้าสู่ระบบ';
  if (msg.includes('User already registered')) return 'อีเมลนี้ถูกใช้งานแล้ว';
  if (msg.includes('Password should be')) return 'รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร';
  return msg;
}

async function handleGoogleLogin() {
  const { error } = await sb.auth.signInWithOAuth({
    provider: 'google', options: { redirectTo: window.location.href }
  });
  if (error) showToast('ไม่สามารถใช้ Google Login ได้ขณะนี้');
}

// ─── Family Setup ─────────────────────────────────────────────────────────────
function getFamilySetupName() {
  const input = el('setup-display-name').value.trim();
  const pending = localStorage.getItem('pending_name');
  localStorage.removeItem('pending_name');
  return input || pending || (state.user?.email?.split('@')[0] ?? 'ผู้ใช้');
}

async function handleCreateFamily() {
  el('family-setup-error').classList.add('hidden');
  const displayName = getFamilySetupName();
  const inviteCode = genCode();

  const { data: family, error: fe } = await sb.from('families')
    .insert({ name: 'ครอบครัวของเรา', invite_code: inviteCode }).select().single();
  if (fe) { el('family-setup-error').textContent = 'สร้างครอบครัวไม่สำเร็จ: ' + fe.message; el('family-setup-error').classList.remove('hidden'); return; }

  const { data: member, error: me } = await sb.from('family_members')
    .insert({ family_id: family.id, user_id: state.user.id, role: 'owner', display_name: displayName, avatar_emoji: '👨' })
    .select('*, families(*)').single();
  if (me) { el('family-setup-error').textContent = 'เพิ่มสมาชิกไม่สำเร็จ: ' + me.message; el('family-setup-error').classList.remove('hidden'); return; }

  state.member = member; state.family = family;
  state.transactions = []; state.budgets = []; state.members = [member];
  showApp();
}

async function handleJoinFamily() {
  el('family-setup-error').classList.add('hidden');
  const code = el('invite-code-input').value.trim().toUpperCase();
  if (code.length !== 6) {
    el('family-setup-error').textContent = 'กรุณากรอกรหัสเชิญ 6 หลัก';
    el('family-setup-error').classList.remove('hidden'); return;
  }

  const { data: family, error: fe } = await sb.from('families').select('*').eq('invite_code', code).maybeSingle();
  if (fe || !family) {
    el('family-setup-error').textContent = 'ไม่พบรหัสเชิญนี้ กรุณาตรวจสอบอีกครั้ง';
    el('family-setup-error').classList.remove('hidden'); return;
  }

  const displayName = getFamilySetupName();
  const { data: member, error: me } = await sb.from('family_members')
    .insert({ family_id: family.id, user_id: state.user.id, role: 'member', display_name: displayName, avatar_emoji: '👩' })
    .select('*, families(*)').single();
  if (me) { el('family-setup-error').textContent = 'เข้าร่วมครอบครัวไม่สำเร็จ: ' + me.message; el('family-setup-error').classList.remove('hidden'); return; }

  state.member = member; state.family = family;
  await loadAll(); showApp();
}

// ─── Dashboard ────────────────────────────────────────────────────────────────
function renderDashboard() {
  const m = state.month;
  const mTxs = state.transactions.filter(t => isSameMonth(t.date, m));
  const income = mTxs.filter(t => t.type === 'income').reduce((s, t) => s + +t.amount, 0);
  const expense = mTxs.filter(t => t.type === 'expense').reduce((s, t) => s + +t.amount, 0);

  el('balance-amount').textContent = `฿${fmt(income - expense)}`;
  el('income-total').textContent = `฿${fmt(income)}`;
  el('expense-total').textContent = `฿${fmt(expense)}`;
  el('current-month-label').textContent = monthLabel(m);

  // Budget alerts
  const alertsEl = el('budget-alerts');
  alertsEl.innerHTML = '';
  state.budgets.forEach(b => {
    const spent = mTxs.filter(t => t.type === 'expense' && t.category === b.category).reduce((s, t) => s + +t.amount, 0);
    const pct = b.monthly_limit > 0 ? spent / b.monthly_limit : 0;
    if (pct >= 0.8) {
      const div = document.createElement('div');
      div.className = 'budget-alert-item' + (pct >= 1 ? ' danger' : '');
      div.textContent = `${pct >= 1 ? '🚨' : '⚠️'} ${b.category}: ใช้ไป ${Math.round(pct * 100)}% (฿${fmt(spent)} / ฿${fmt(b.monthly_limit)})`;
      alertsEl.appendChild(div);
    }
  });

  renderTxList('recent-transactions', mTxs.slice(0, 8));
}

// ─── Transactions View ────────────────────────────────────────────────────────
function renderTransactions() {
  const m = state.month;
  let txs = state.transactions.filter(t => isSameMonth(t.date, m));
  const typeF = el('filter-type').value;
  const catF = el('filter-category').value;
  if (typeF) txs = txs.filter(t => t.type === typeF);
  if (catF) txs = txs.filter(t => t.category === catF);

  const cats = [...new Set(state.transactions.map(t => t.category))].sort();
  el('filter-category').innerHTML = '<option value="">ทุกหมวด</option>' +
    cats.map(c => `<option value="${c}"${c === catF ? ' selected' : ''}>${c}</option>`).join('');

  renderTxList('all-transactions', txs);
}

function renderTxList(containerId, txs) {
  const container = el(containerId);
  if (!txs.length) {
    container.innerHTML = `<div class="empty-state"><div class="empty-icon">📭</div><p>ยังไม่มีรายการ<br>กดปุ่ม + เพื่อเพิ่มรายการแรก</p></div>`;
    return;
  }
  container.innerHTML = txs.map(t => {
    const icon = categoryIcon(t.category);
    const note = t.note ? ` · ${t.note}` : '';
    return `<div class="tx-item" data-id="${t.id}">
      <div class="tx-icon ${t.type}">${icon}</div>
      <div class="tx-info">
        <div class="tx-category">${t.category}</div>
        <div class="tx-meta">
          <span>${fmtDate(t.date)}</span>
          <span class="tx-by">${t.created_by_name || '—'}</span>
          ${note ? `<span>${note}</span>` : ''}
        </div>
      </div>
      <div class="tx-amount ${t.type}">${t.type === 'expense' ? '-' : '+'}฿${fmt(t.amount)}</div>
    </div>`;
  }).join('');
  container.querySelectorAll('.tx-item').forEach(item =>
    item.addEventListener('click', () => openTxModal(state.transactions.find(t => t.id === item.dataset.id)))
  );
}

// ─── Transaction Modal ────────────────────────────────────────────────────────
function openTxModal(tx = null) {
  state.editTxId = tx?.id ?? null;
  el('modal-tx-title').textContent = tx ? 'แก้ไขรายการ' : 'เพิ่มรายการ';
  const type = tx?.type ?? 'expense';
  state.txType = type;
  state.txCategory = tx?.category ?? null;

  document.querySelectorAll('.type-btn').forEach(b => b.classList.toggle('active', b.dataset.type === type));
  el('tx-amount').value = tx?.amount ?? '';
  el('tx-date').value = tx?.date ?? new Date().toISOString().slice(0, 10);
  el('tx-note').value = tx?.note ?? '';
  el('tx-error').classList.add('hidden');
  el('btn-delete-tx').style.display = tx ? '' : 'none';
  renderCatChips();
  el('modal-transaction').classList.remove('hidden');
  el('tx-amount').focus();
}

function closeTxModal() {
  el('modal-transaction').classList.add('hidden');
  state.editTxId = null;
}

function renderCatChips() {
  const cats = getCats(state.txType);
  el('tx-categories').innerHTML = cats.map(c =>
    `<button type="button" class="cat-chip${c === state.txCategory ? ' selected' : ''}" data-cat="${c}">${c}</button>`
  ).join('');
  el('tx-categories').querySelectorAll('.cat-chip').forEach(chip =>
    chip.addEventListener('click', () => {
      state.txCategory = chip.dataset.cat;
      el('tx-categories').querySelectorAll('.cat-chip').forEach(c => c.classList.toggle('selected', c === chip));
    })
  );
}

async function handleTxSubmit(e) {
  e.preventDefault();
  const amount = parseFloat(el('tx-amount').value);
  const date = el('tx-date').value;
  const note = el('tx-note').value.trim();
  const errEl = el('tx-error');
  errEl.classList.add('hidden');

  if (!amount || amount <= 0) { errEl.textContent = 'กรุณาระบุจำนวนเงิน'; errEl.classList.remove('hidden'); return; }
  if (!state.txCategory) { errEl.textContent = 'กรุณาเลือกหมวดหมู่'; errEl.classList.remove('hidden'); return; }

  const payload = {
    family_id: state.family.id, amount, type: state.txType,
    category: state.txCategory, note, date,
    created_by: state.user.id,
    created_by_name: state.member.display_name || state.user.email,
  };
  const btn = el('btn-save-tx');
  btn.disabled = true; btn.textContent = 'กำลังบันทึก...';

  try {
    if (state.editTxId) {
      const { error } = await sb.from('transactions').update(payload).eq('id', state.editTxId);
      if (error) throw error;
      showToast('แก้ไขรายการสำเร็จ ✓');
    } else {
      const { error } = await sb.from('transactions').insert(payload);
      if (error) throw error;
      showToast('บันทึกรายการสำเร็จ ✓');
    }
    closeTxModal();
    await loadAll();
    renderCurrentView();
  } catch (err) {
    errEl.textContent = 'เกิดข้อผิดพลาด: ' + err.message;
    errEl.classList.remove('hidden');
  } finally {
    btn.disabled = false; btn.textContent = '💾 บันทึก';
  }
}

async function deleteTx(id) {
  if (!confirm('ต้องการลบรายการนี้?')) return;
  const { error } = await sb.from('transactions').delete().eq('id', id);
  if (error) { showToast('เกิดข้อผิดพลาด'); return; }
  showToast('ลบรายการแล้ว');
  closeTxModal(); await loadAll(); renderCurrentView();
}

// ─── Summary ──────────────────────────────────────────────────────────────────
function renderSummary() {
  const m = state.month;
  const mTxs = state.transactions.filter(t => isSameMonth(t.date, m));
  const expenses = mTxs.filter(t => t.type === 'expense');
  const catMap = {};
  expenses.forEach(t => { catMap[t.category] = (catMap[t.category] || 0) + +t.amount; });

  const labels = Object.keys(catMap);
  const data = labels.map(l => catMap[l]);
  const colors = ['#ef4444','#f97316','#eab308','#22c55e','#06b6d4','#6366f1','#ec4899','#8b5cf6','#14b8a6','#f43f5e'];

  if (state.charts.pie) state.charts.pie.destroy();
  if (state.charts.bar) state.charts.bar.destroy();

  const pieCtx = el('chart-expense-pie').getContext('2d');
  state.charts.pie = new Chart(pieCtx, {
    type: 'doughnut',
    data: { labels, datasets: [{ data, backgroundColor: colors, borderWidth: 2, borderColor: '#fff' }] },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { position: 'bottom', labels: { font: { size: 12 }, padding: 10 } } }
    }
  });

  const barMonths = [], barInc = [], barExp = [];
  for (let i = 5; i >= 0; i--) {
    const d = new Date(m.getFullYear(), m.getMonth() - i, 1);
    barMonths.push(d.toLocaleDateString('th-TH', { month: 'short' }));
    const mt = state.transactions.filter(t => isSameMonth(t.date, d));
    barInc.push(mt.filter(t => t.type === 'income').reduce((s, t) => s + +t.amount, 0));
    barExp.push(mt.filter(t => t.type === 'expense').reduce((s, t) => s + +t.amount, 0));
  }

  const barCtx = el('chart-monthly-bar').getContext('2d');
  state.charts.bar = new Chart(barCtx, {
    type: 'bar',
    data: {
      labels: barMonths,
      datasets: [
        { label: 'รายรับ', data: barInc, backgroundColor: '#22c55e', borderRadius: 5 },
        { label: 'รายจ่าย', data: barExp, backgroundColor: '#ef4444', borderRadius: 5 },
      ]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { position: 'bottom' } },
      scales: { y: { beginAtZero: true, ticks: { callback: v => '฿' + fmt(v) } } }
    }
  });

  const total = data.reduce((s, v) => s + v, 0);
  const sorted = labels.map((l, i) => ({ l, v: data[i] })).sort((a, b) => b.v - a.v);
  el('category-breakdown').innerHTML = !sorted.length
    ? `<div class="empty-state"><div class="empty-icon">📊</div><p>ยังไม่มีข้อมูลเดือนนี้</p></div>`
    : sorted.map(({ l, v }) => {
        const pct = total > 0 ? v / total * 100 : 0;
        return `<div class="category-row">
          <div class="cat-break-header">
            <span>${l}</span>
            <span class="cat-break-amount">฿${fmt(v)} <span style="color:var(--text-muted);font-weight:400">(${pct.toFixed(1)}%)</span></span>
          </div>
          <div class="cat-bar"><div class="cat-bar-fill" style="width:${pct}%"></div></div>
        </div>`;
      }).join('');
}

// ─── Budgets ──────────────────────────────────────────────────────────────────
function renderBudgets() {
  renderBudgetList('budget-list');
}

function renderBudgetList(containerId) {
  const m = state.month;
  const mExp = state.transactions.filter(t => isSameMonth(t.date, m) && t.type === 'expense');
  const container = el(containerId);

  if (!state.budgets.length) {
    container.innerHTML = `<div class="empty-state"><div class="empty-icon">💳</div><p>ยังไม่ได้ตั้งงบประมาณ<br>กด "+ ตั้งงบ" เพื่อเริ่มต้น</p></div>`;
    return;
  }

  container.innerHTML = state.budgets.map(b => {
    const spent = mExp.filter(t => t.category === b.category).reduce((s, t) => s + +t.amount, 0);
    const pct = b.monthly_limit > 0 ? Math.min(spent / b.monthly_limit, 1) : 0;
    const cls = pct >= 1 ? 'over' : pct >= 0.8 ? 'warning' : 'safe';
    const icon = categoryIcon(b.category);
    return `<div class="budget-item">
      <div class="budget-item-header">
        <span class="budget-cat">${icon} ${b.category}</span>
        <div class="budget-amounts">
          <span class="spent" style="color:${cls === 'over' ? 'var(--danger)' : 'var(--text)'}">฿${fmt(spent)}</span>
          <span style="color:var(--text-muted)"> / ฿${fmt(b.monthly_limit)}</span>
        </div>
      </div>
      <div class="budget-progress"><div class="budget-fill ${cls}" style="width:${pct * 100}%"></div></div>
      <div class="budget-pct">${Math.round(pct * 100)}% ของงบประมาณ</div>
      <div class="budget-actions">
        <button class="btn-sm edit" data-id="${b.id}">✏️ แก้ไข</button>
        <button class="btn-sm del" data-id="${b.id}">🗑️ ลบ</button>
      </div>
    </div>`;
  }).join('');

  container.querySelectorAll('.btn-sm.edit').forEach(btn =>
    btn.addEventListener('click', (e) => { e.stopPropagation(); openBudgetModal(btn.dataset.id); })
  );
  container.querySelectorAll('.btn-sm.del').forEach(btn =>
    btn.addEventListener('click', (e) => { e.stopPropagation(); deleteBudget(btn.dataset.id); })
  );
}

function openBudgetModal(id = null) {
  state.editBudgetId = id;
  el('modal-budget-title').textContent = id ? 'แก้ไขงบประมาณ' : 'ตั้งงบประมาณ';
  const cats = getCats('expense');
  el('budget-category').innerHTML = cats.map(c => `<option value="${c}">${c}</option>`).join('');
  if (id) {
    const b = state.budgets.find(b => b.id === id);
    if (b) { el('budget-category').value = b.category; el('budget-limit').value = b.monthly_limit; }
  } else {
    el('budget-limit').value = '';
  }
  el('modal-budget').classList.remove('hidden');
}

async function handleBudgetSubmit(e) {
  e.preventDefault();
  const category = el('budget-category').value;
  const monthly_limit = parseFloat(el('budget-limit').value);
  if (!monthly_limit || monthly_limit <= 0) { showToast('กรุณาระบุจำนวนงบประมาณ'); return; }

  if (state.editBudgetId) {
    const { error } = await sb.from('budgets').update({ category, monthly_limit }).eq('id', state.editBudgetId);
    if (error) { showToast('เกิดข้อผิดพลาด: ' + error.message); return; }
    showToast('แก้ไขงบประมาณแล้ว ✓');
  } else {
    const { error } = await sb.from('budgets').upsert({ family_id: state.family.id, category, monthly_limit }, { onConflict: 'family_id,category' });
    if (error) { showToast('เกิดข้อผิดพลาด: ' + error.message); return; }
    showToast('ตั้งงบประมาณแล้ว ✓');
  }
  el('modal-budget').classList.add('hidden');
  await loadAll(); renderBudgets(); renderDashboard();
}

async function deleteBudget(id) {
  if (!confirm('ต้องการลบงบประมาณนี้?')) return;
  await sb.from('budgets').delete().eq('id', id);
  showToast('ลบงบประมาณแล้ว');
  state.budgets = state.budgets.filter(b => b.id !== id);
  renderBudgets();
}

// ─── Settings ─────────────────────────────────────────────────────────────────
function renderSettings() {
  el('setting-display-name').value = state.member.display_name || '';
  el('setting-family-name').value = state.family.name || '';
  el('invite-code-display').textContent = state.family.invite_code || '------';

  document.querySelectorAll('.emoji-opt').forEach(o =>
    o.classList.toggle('selected', o.dataset.emoji === state.member.avatar_emoji)
  );

  el('family-members-list').innerHTML = state.members.map(m => `
    <div class="member-item">
      <span class="member-avatar">${m.avatar_emoji || '👤'}</span>
      <div>
        <div class="member-name">${m.display_name || 'ไม่ระบุชื่อ'}</div>
        <div class="member-role">${m.role === 'owner' ? '👑 ผู้สร้าง' : '🧑 สมาชิก'}</div>
      </div>
    </div>`).join('');

  renderCatSettings();

  // Settings transactions manager
  const mOpts = getMonthOptions();
  el('settings-filter-month').innerHTML = mOpts.map(o => `<option value="${o.value}">${o.label}</option>`).join('');
  renderSettingsTxList();

  // Settings budgets
  renderBudgetList('settings-budget-list');
}

function getMonthOptions() {
  const opts = [];
  for (let i = 0; i < 12; i++) {
    const d = new Date(state.month.getFullYear(), state.month.getMonth() - i, 1);
    opts.push({ value: `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`, label: monthLabel(d) });
  }
  return opts;
}

function renderSettingsTxList() {
  const typeF = el('settings-filter-type').value;
  const monthF = el('settings-filter-month').value;
  let txs = state.transactions;
  if (typeF) txs = txs.filter(t => t.type === typeF);
  if (monthF) {
    const [y, mo] = monthF.split('-').map(Number);
    txs = txs.filter(t => {
      const d = new Date(t.date + 'T00:00:00');
      return d.getFullYear() === y && d.getMonth() + 1 === mo;
    });
  }
  renderTxList('settings-transaction-list', txs);
}

function renderCatSettings() {
  const cats = getCats(state.catTab);
  el('categories-list').innerHTML = cats.map((c, i) => `
    <div class="category-tag">
      <span>${c}</span>
      <span class="remove-cat" data-i="${i}">✕</span>
    </div>`).join('');
  el('categories-list').querySelectorAll('.remove-cat').forEach(btn =>
    btn.addEventListener('click', () => {
      const cats2 = getCats(state.catTab);
      cats2.splice(+btn.dataset.i, 1);
      saveCats(state.catTab, cats2);
      renderCatSettings();
    })
  );
}

async function handleSaveProfile() {
  const name = el('setting-display-name').value.trim();
  const emoji = document.querySelector('.emoji-opt.selected')?.dataset.emoji || '👤';
  const { error } = await sb.from('family_members').update({ display_name: name, avatar_emoji: emoji }).eq('id', state.member.id);
  if (error) { showToast('บันทึกไม่สำเร็จ'); return; }
  state.member.display_name = name; state.member.avatar_emoji = emoji;
  el('header-user-avatar').textContent = emoji;
  el('header-user-name').textContent = name;
  showToast('บันทึกโปรไฟล์แล้ว ✓');
}

async function handleSaveFamilyName() {
  const name = el('setting-family-name').value.trim();
  if (!name) return;
  const { error } = await sb.from('families').update({ name }).eq('id', state.family.id);
  if (error) { showToast('บันทึกไม่สำเร็จ'); return; }
  state.family.name = name; el('header-family-name').textContent = name;
  showToast('บันทึกชื่อครอบครัวแล้ว ✓');
}

function handleExportCSV() {
  const headers = ['วันที่', 'ประเภท', 'หมวดหมู่', 'จำนวนเงิน (บาท)', 'หมายเหตุ', 'บันทึกโดย'];
  const rows = state.transactions.map(t => [
    t.date,
    t.type === 'income' ? 'รายรับ' : 'รายจ่าย',
    t.category, t.amount, t.note || '', t.created_by_name || '',
  ]);
  const csv = [headers, ...rows].map(r => r.map(v => `"${String(v).replace(/"/g, '""')}"`).join(',')).join('\n');
  const blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `ครอบครัว_${state.family.name}_${new Date().toLocaleDateString('th-TH').replace(/\//g, '-')}.csv`;
  a.click();
  showToast('ส่งออก CSV แล้ว');
}

// ─── Event Listeners ──────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initApp();

  // Auth tabs
  document.querySelectorAll('.auth-tab').forEach(tab => tab.addEventListener('click', () => {
    state.authMode = tab.dataset.tab;
    document.querySelectorAll('.auth-tab').forEach(t => t.classList.toggle('active', t === tab));
    el('btn-auth-submit').textContent = state.authMode === 'login' ? 'เข้าสู่ระบบ' : 'สมัครสมาชิก';
    el('auth-name-group').style.display = state.authMode === 'register' ? '' : 'none';
    el('auth-error').classList.add('hidden');
  }));
  el('form-auth').addEventListener('submit', handleAuthSubmit);
  el('btn-google').addEventListener('click', handleGoogleLogin);

  // Family setup
  el('btn-create-family').addEventListener('click', handleCreateFamily);
  el('btn-join-family').addEventListener('click', handleJoinFamily);

  // Navigation
  document.querySelectorAll('.nav-item').forEach(btn => btn.addEventListener('click', () => navigateTo(btn.dataset.view)));
  el('fab-add').addEventListener('click', () => openTxModal());
  el('btn-view-all').addEventListener('click', () => navigateTo('transactions'));

  // Month navigation
  el('prev-month').addEventListener('click', () => {
    state.month = new Date(state.month.getFullYear(), state.month.getMonth() - 1, 1);
    renderDashboard();
  });
  el('next-month').addEventListener('click', () => {
    state.month = new Date(state.month.getFullYear(), state.month.getMonth() + 1, 1);
    renderDashboard();
  });

  // Transaction modal
  document.querySelectorAll('.type-btn').forEach(btn => btn.addEventListener('click', () => {
    state.txType = btn.dataset.type; state.txCategory = null;
    document.querySelectorAll('.type-btn').forEach(b => b.classList.toggle('active', b === btn));
    renderCatChips();
  }));
  el('form-transaction').addEventListener('submit', handleTxSubmit);
  el('btn-close-tx-modal').addEventListener('click', closeTxModal);
  el('tx-overlay').addEventListener('click', closeTxModal);
  el('btn-delete-tx').addEventListener('click', () => { if (state.editTxId) deleteTx(state.editTxId); });

  // Budget modal
  el('btn-add-budget').addEventListener('click', () => openBudgetModal());
  el('btn-add-budget-settings').addEventListener('click', () => openBudgetModal());
  el('form-budget').addEventListener('submit', handleBudgetSubmit);
  el('btn-close-budget-modal').addEventListener('click', () => el('modal-budget').classList.add('hidden'));
  el('budget-overlay').addEventListener('click', () => el('modal-budget').classList.add('hidden'));

  // Settings
  el('btn-save-profile').addEventListener('click', handleSaveProfile);
  el('btn-save-family-name').addEventListener('click', handleSaveFamilyName);
  el('btn-copy-invite').addEventListener('click', () => {
    const code = state.family?.invite_code;
    if (!code) return;
    navigator.clipboard.writeText(code).then(() => showToast('คัดลอกรหัสเชิญแล้ว ✓')).catch(() => {
      prompt('คัดลอกรหัสเชิญ:', code);
    });
  });
  el('btn-export-csv').addEventListener('click', handleExportCSV);
  el('btn-logout').addEventListener('click', async () => {
    if (confirm('ต้องการออกจากระบบ?')) await sb.auth.signOut();
  });

  // Emoji picker
  document.querySelectorAll('.emoji-opt').forEach(opt => opt.addEventListener('click', () => {
    document.querySelectorAll('.emoji-opt').forEach(o => o.classList.remove('selected'));
    opt.classList.add('selected');
  }));

  // Category tabs
  document.querySelectorAll('.cat-tab').forEach(tab => tab.addEventListener('click', () => {
    state.catTab = tab.dataset.type;
    document.querySelectorAll('.cat-tab').forEach(t => t.classList.toggle('active', t === tab));
    renderCatSettings();
  }));

  // Add custom category
  el('btn-add-category').addEventListener('click', () => {
    const input = el('new-category-input');
    const val = input.value.trim();
    if (!val) return;
    const cats = getCats(state.catTab);
    if (!cats.includes(val)) { cats.push(val); saveCats(state.catTab, cats); renderCatSettings(); }
    input.value = '';
  });
  el('new-category-input').addEventListener('keydown', e => {
    if (e.key === 'Enter') { e.preventDefault(); el('btn-add-category').click(); }
  });

  // Settings filters
  el('filter-type').addEventListener('change', renderTransactions);
  el('filter-category').addEventListener('change', renderTransactions);
  el('settings-filter-type').addEventListener('change', renderSettingsTxList);
  el('settings-filter-month').addEventListener('change', renderSettingsTxList);
});
