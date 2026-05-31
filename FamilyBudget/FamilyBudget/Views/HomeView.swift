import SwiftUI

struct HomeView: View {
    @Environment(\.managedObjectContext) private var ctx
    @StateObject private var vm = TransactionViewModel(context: PersistenceController.shared.container.viewContext)
    @State private var showAdd = false
    @State private var selectedMonth = Date()

    var body: some View {
        NavigationView {
            ScrollView {
                VStack(spacing: 20) {
                    balanceCard
                    incomeExpenseRow
                    recentSection
                }
                .padding()
            }
            .navigationTitle("iFamilyBudget")
            .toolbar {
                ToolbarItem(placement: .navigationBarTrailing) {
                    Button { showAdd = true } label: {
                        Image(systemName: "plus.circle.fill").font(.title2)
                    }
                }
            }
            .sheet(isPresented: $showAdd, onDismiss: { vm.fetchTransactions() }) {
                AddTransactionView()
                    .environment(\.managedObjectContext, ctx)
            }
        }
    }

    private var balanceCard: some View {
        ZStack {
            LinearGradient(colors: [.blue, .purple],
                           startPoint: .topLeading, endPoint: .bottomTrailing)
                .cornerRadius(20)
            VStack(spacing: 6) {
                Text("ยอดคงเหลือเดือนนี้")
                    .font(.subheadline).foregroundColor(.white.opacity(0.85))
                Text(vm.balance().formatted(.currency(code: "THB")))
                    .font(.system(size: 34, weight: .bold)).foregroundColor(.white)
                Text(monthLabel)
                    .font(.caption).foregroundColor(.white.opacity(0.7))
            }
            .padding(24)
        }
        .frame(maxWidth: .infinity).frame(height: 140)
    }

    private var incomeExpenseRow: some View {
        HStack(spacing: 12) {
            statCard(title: "รายรับ",
                     amount: vm.totalIncome(),
                     icon: "arrow.down.circle.fill",
                     color: .green)
            statCard(title: "รายจ่าย",
                     amount: vm.totalExpense(),
                     icon: "arrow.up.circle.fill",
                     color: .red)
        }
    }

    private func statCard(title: String, amount: Double, icon: String, color: Color) -> some View {
        HStack {
            Image(systemName: icon).font(.title2).foregroundColor(color)
            VStack(alignment: .leading, spacing: 2) {
                Text(title).font(.caption).foregroundColor(.secondary)
                Text(amount.formatted(.currency(code: "THB"))).font(.subheadline.bold())
            }
        }
        .frame(maxWidth: .infinity, alignment: .leading)
        .padding(14)
        .background(Color(.systemBackground))
        .cornerRadius(12)
        .shadow(color: .black.opacity(0.06), radius: 4)
    }

    private var recentSection: some View {
        VStack(alignment: .leading, spacing: 12) {
            HStack {
                Text("รายการล่าสุด").font(.headline)
                Spacer()
                NavigationLink("ดูทั้งหมด") { TransactionListView() }
                    .font(.subheadline)
            }
            let recent = Array(vm.transactionsForMonth().prefix(5))
            if recent.isEmpty {
                Text("ยังไม่มีรายการเดือนนี้")
                    .foregroundColor(.secondary)
                    .frame(maxWidth: .infinity).padding()
            } else {
                ForEach(recent, id: \.id) { tx in
                    TransactionRowView(transaction: tx)
                }
            }
        }
        .padding()
        .background(Color(.systemBackground))
        .cornerRadius(16)
        .shadow(color: .black.opacity(0.05), radius: 8)
    }

    private var monthLabel: String {
        let f = DateFormatter()
        f.locale = Locale(identifier: "th_TH")
        f.dateFormat = "MMMM yyyy"
        return f.string(from: Date())
    }
}
