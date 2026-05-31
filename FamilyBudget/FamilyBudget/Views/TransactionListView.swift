import SwiftUI

struct TransactionListView: View {
    @Environment(\.managedObjectContext) private var ctx
    @StateObject private var vm = TransactionViewModel(context: PersistenceController.shared.container.viewContext)
    @State private var filterType: String = "all"
    @State private var showAdd = false
    @State private var selectedMonth = Date()

    private var filtered: [TransactionEntity] {
        let monthly = vm.transactionsForMonth(selectedMonth)
        switch filterType {
        case "income": return monthly.filter { $0.type == "income" }
        case "expense": return monthly.filter { $0.type == "expense" }
        default: return monthly
        }
    }

    var body: some View {
        NavigationView {
            VStack(spacing: 0) {
                monthPicker
                filterPicker
                List {
                    ForEach(filtered, id: \.id) { tx in
                        TransactionRowView(transaction: tx)
                            .swipeActions(edge: .trailing) {
                                Button(role: .destructive) {
                                    vm.deleteTransaction(tx)
                                } label: { Label("ลบ", systemImage: "trash") }
                            }
                    }
                }
                .listStyle(.plain)
            }
            .navigationTitle("รายการทั้งหมด")
            .toolbar {
                ToolbarItem(placement: .navigationBarTrailing) {
                    Button { showAdd = true } label: {
                        Image(systemName: "plus.circle.fill")
                    }
                }
            }
            .sheet(isPresented: $showAdd, onDismiss: { vm.fetchTransactions() }) {
                AddTransactionView().environment(\.managedObjectContext, ctx)
            }
        }
    }

    private var monthPicker: some View {
        HStack {
            Button { selectedMonth = Calendar.current.date(byAdding: .month, value: -1, to: selectedMonth)! } label: {
                Image(systemName: "chevron.left")
            }
            Spacer()
            Text(monthLabel(selectedMonth)).font(.headline)
            Spacer()
            Button { selectedMonth = Calendar.current.date(byAdding: .month, value: 1, to: selectedMonth)! } label: {
                Image(systemName: "chevron.right")
            }
        }
        .padding(.horizontal, 20).padding(.vertical, 10)
        .background(Color(.systemGroupedBackground))
    }

    private var filterPicker: some View {
        Picker("ประเภท", selection: $filterType) {
            Text("ทั้งหมด").tag("all")
            Text("รายรับ").tag("income")
            Text("รายจ่าย").tag("expense")
        }
        .pickerStyle(.segmented)
        .padding(.horizontal).padding(.vertical, 8)
        .background(Color(.systemGroupedBackground))
    }

    private func monthLabel(_ date: Date) -> String {
        let f = DateFormatter()
        f.locale = Locale(identifier: "th_TH")
        f.dateFormat = "MMMM yyyy"
        return f.string(from: date)
    }
}
