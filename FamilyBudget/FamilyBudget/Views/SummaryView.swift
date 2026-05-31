import SwiftUI
import Charts

struct SummaryView: View {
    @StateObject private var vm = TransactionViewModel(context: PersistenceController.shared.container.viewContext)
    @State private var selectedMonth = Date()

    private var byCategory: [(category: ExpenseCategory, amount: Double)] {
        vm.expenseByCategory(for: selectedMonth)
    }

    var body: some View {
        NavigationView {
            ScrollView {
                VStack(spacing: 20) {
                    monthPicker

                    // Overview cards
                    HStack(spacing: 12) {
                        summaryCard(title: "รายรับ", amount: vm.totalIncome(for: selectedMonth), color: .green)
                        summaryCard(title: "รายจ่าย", amount: vm.totalExpense(for: selectedMonth), color: .red)
                    }
                    .padding(.horizontal)

                    if !byCategory.isEmpty {
                        // Pie chart
                        VStack(alignment: .leading, spacing: 8) {
                            Text("รายจ่ายแยกหมวดหมู่").font(.headline).padding(.horizontal)
                            Chart(byCategory, id: \.category) { item in
                                SectorMark(
                                    angle: .value("Amount", item.amount),
                                    innerRadius: .ratio(0.55),
                                    angularInset: 2
                                )
                                .foregroundStyle(item.category.color)
                                .cornerRadius(4)
                            }
                            .frame(height: 220)
                            .padding(.horizontal)
                        }
                        .padding(.vertical)
                        .background(Color(.systemBackground))
                        .cornerRadius(16)
                        .padding(.horizontal)
                        .shadow(color: .black.opacity(0.05), radius: 8)

                        // Category breakdown list
                        VStack(alignment: .leading, spacing: 4) {
                            Text("รายละเอียด").font(.headline).padding(.bottom, 4)
                            ForEach(byCategory, id: \.category) { item in
                                categoryRow(item)
                            }
                        }
                        .padding()
                        .background(Color(.systemBackground))
                        .cornerRadius(16)
                        .padding(.horizontal)
                        .shadow(color: .black.opacity(0.05), radius: 8)
                    } else {
                        Text("ไม่มีรายจ่ายเดือนนี้")
                            .foregroundColor(.secondary).padding(40)
                    }
                }
                .padding(.vertical)
            }
            .navigationTitle("สรุปรายเดือน")
            .background(Color(.systemGroupedBackground))
        }
    }

    private var monthPicker: some View {
        HStack {
            Button { selectedMonth = Calendar.current.date(byAdding: .month, value: -1, to: selectedMonth)! } label: {
                Image(systemName: "chevron.left").font(.title3)
            }
            Spacer()
            Text(monthLabel(selectedMonth)).font(.headline)
            Spacer()
            Button { selectedMonth = Calendar.current.date(byAdding: .month, value: 1, to: selectedMonth)! } label: {
                Image(systemName: "chevron.right").font(.title3)
            }
        }
        .padding(.horizontal, 24)
    }

    private func summaryCard(title: String, amount: Double, color: Color) -> some View {
        VStack(alignment: .leading, spacing: 4) {
            Text(title).font(.caption).foregroundColor(.secondary)
            Text(amount.formatted(.currency(code: "THB"))).font(.title3.bold()).foregroundColor(color)
        }
        .frame(maxWidth: .infinity, alignment: .leading)
        .padding(14)
        .background(Color(.systemBackground))
        .cornerRadius(12)
        .shadow(color: .black.opacity(0.05), radius: 4)
    }

    private func categoryRow(_ item: (category: ExpenseCategory, amount: Double)) -> some View {
        let total = byCategory.reduce(0) { $0 + $1.amount }
        let pct = total > 0 ? item.amount / total : 0
        return HStack(spacing: 12) {
            Image(systemName: item.category.icon)
                .foregroundColor(item.category.color)
                .frame(width: 24)
            Text(item.category.displayName).font(.subheadline)
            Spacer()
            Text(item.amount.formatted(.currency(code: "THB")))
                .font(.subheadline.bold())
            Text(String(format: "%.0f%%", pct * 100))
                .font(.caption).foregroundColor(.secondary).frame(width: 36, alignment: .trailing)
        }
        .padding(.vertical, 6)
    }

    private func monthLabel(_ date: Date) -> String {
        let f = DateFormatter()
        f.locale = Locale(identifier: "th_TH")
        f.dateFormat = "MMMM yyyy"
        return f.string(from: date)
    }
}
