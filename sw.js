const CACHE_NAME = 'iplane-v3.34';
const STATIC_ASSETS = [
  './fonts/sarabun.css'
];

// Core app files: always try network first so updates show immediately.
// Cache is only a fallback for offline use.
const NETWORK_FIRST_PATTERNS = [
  /\/$|index\.html$/,
  /style\.css$/,
  /app\.js$/,
  /manifest\.json$/,
  /version\.json$/,
  /sw\.js$/
];

// ---- Generate default PWA icon via OffscreenCanvas ----
async function generateDefaultIconBlob() {
  try {
    const size = 512;
    const canvas = new OffscreenCanvas(size, size);
    const ctx = canvas.getContext('2d');

    // Dark background
    ctx.fillStyle = '#1e1b4b';
    ctx.beginPath();
    if (ctx.roundRect) {
      ctx.roundRect(0, 0, size, size, 80);
    } else {
      ctx.rect(0, 0, size, size);
    }
    ctx.fill();

    // Document body
    ctx.fillStyle = '#4f46e5';
    ctx.beginPath();
    if (ctx.roundRect) {
      ctx.roundRect(96, 56, 320, 400, 24);
    } else {
      ctx.rect(96, 56, 320, 400);
    }
    ctx.fill();

    // White ruled lines
    ctx.fillStyle = 'rgba(255,255,255,0.9)';
    ctx.fillRect(136, 130, 200, 20);
    ctx.fillStyle = 'rgba(255,255,255,0.6)';
    [168, 200, 232, 264].forEach(y => ctx.fillRect(136, y, 240, 14));
    ctx.fillStyle = 'rgba(255,255,255,0.4)';
    [306, 338, 370].forEach(y => ctx.fillRect(136, y, 200, 14));

    // iP brand label
    ctx.fillStyle = 'rgba(255,255,255,0.92)';
    ctx.font = 'bold 60px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('iP', 256, 418);

    return canvas.convertToBlob({ type: 'image/png' });
  } catch {
    // OffscreenCanvas not available — return a minimal 1x1 transparent PNG
    const b64 = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
    return new Blob([arr], { type: 'image/png' });
  }
}

// ---- Install ----
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(STATIC_ASSETS).catch(() => {}))
      .then(() => self.skipWaiting())
  );
});

// ---- Activate: remove old caches ----
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

// ---- Message: receive custom icon blob from app ----
self.addEventListener('message', async event => {
  if (!event.data || event.data.type !== 'SET_ICON') return;
  try {
    const cache = await caches.open(CACHE_NAME);
    const response = new Response(event.data.iconBlob, {
      headers: { 'Content-Type': 'image/png', 'Cache-Control': 'no-cache' }
    });
    await cache.put(new Request('./pwa-icon.png'), response);
  } catch (err) {
    console.warn('[SW] SET_ICON failed:', err);
  }
});

// ---- Fetch ----
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);
  const isPwaIcon = url.pathname.endsWith('pwa-icon.png');

  if (isPwaIcon) {
    event.respondWith(
      caches.open(CACHE_NAME).then(async cache => {
        const cached = await cache.match('./pwa-icon.png');
        if (cached) return cached;
        // Generate and cache a default icon on first request
        const blob = await generateDefaultIconBlob();
        const res = new Response(blob, {
          headers: { 'Content-Type': 'image/png', 'Cache-Control': 'max-age=86400' }
        });
        await cache.put('./pwa-icon.png', res.clone());
        return res;
      })
    );
    return;
  }

  const isNetworkFirst = NETWORK_FIRST_PATTERNS.some(re => re.test(url.pathname));

  if (isNetworkFirst) {
    // Network-first: always fetch fresh copy when online; cache as offline fallback
    event.respondWith(
      fetch(event.request).then(response => {
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(c => c.put(event.request, clone)).catch(() => {});
        }
        return response;
      }).catch(() => caches.match(event.request).then(cached => {
        if (cached) return cached;
        if (event.request.headers.get('accept') &&
            event.request.headers.get('accept').includes('text/html')) {
          return caches.match('./index.html');
        }
      }))
    );
    return;
  }

  // Cache-first for everything else (fonts, images, vendor libs)
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(c => c.put(event.request, clone)).catch(() => {});
        }
        return response;
      });
    })
  );
});
