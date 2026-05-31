import SwiftUI

struct BudgetView: View {
    @Environment(\.managedObjectContext) private var ctx
    @StateObject private var budgetVM = BudgetViewModel(context: PersistenceController.shared.container.viewContext)
    @StateObject private var txVM = TransactionViewModel(context: PersistenceController.shared.container.viewContext)
    @State private var editingCategory: ExpenseCategory?
    @State private var budgetInput = ""

    var body: some View {
        NavigationView {
            List {
                Section(header: Text("ตั้งงบประมาณรายเดือน")) {
                    ForEach(ExpenseCategory.expenseCategories, id: \.self) { cat in
                        budgetRow(cat)
                    }
                }
                Section {
                    Text("แตะแต่ละหมวดเพื่อตั้งงบประมาณ ระบบจะแจ้งเตือนเมื่อใช้ถึง 80% และเกินงบ")
                        .font(.caption).foregroundColor(.secondary)
                }
            }
            .navigationTitle("งบประมาณ")
            .sheet(item: $editingCategory) { cat in
                budgetEditSheet(cat)
            }
        }
    }

    private func budgetRow(_ cat: ExpenseCategory) -> some View {
        let limit = budgetVM.budgetLimit(for: cat)
        let spent = txVM.expenseByCategory().first { $0.category == cat }?.amount ?? 0
        let progress = limit > 0 ? min(spent / limit, 1.0) : 0

        return VStack(alignment: .leading, spacing: 6) {
            HStack {
                Image(systemName: cat.icon).foregroundColor(cat.color)
                Text(cat.displayName).font(.subheadline)
                Spacer()
                if limit > 0 {
                    Text("\(spent.formatted(.currency(code: "THB"))) / \(limit.formatted(.currency(code: "THB")))")
                        .font(.caption).foregroundColor(progress >= 1 ? .red : .secondary)
                } else {
                    Text("ไม่ได้ตั้งงบ").font(.caption).foregroundColor(.secondary)
                }
                Image(systemName: "chevron.right").font(.caption2).foregroundColor(.secondary)
            }
            if limit > 0 {
                ProgressView(value: progress)
                    .tint(progress >= 1 ? .red : (progress >= 0.8 ? .orange : .green))
            }
        }
        .padding(.vertical, 4)
        .contentShape(Rectangle())
        .onTapGesture {
            budgetInput = limit > 0 ? String(format: "%.0f", limit) : ""
            editingCategory = cat
        }
    }

    private func budgetEditSheet(_ cat: ExpenseCategory) -> some View {
        NavigationView {
            Form {
                Section(header: Text(cat.displayName)) {
                    HStack {
                        Image(systemName: cat.icon).foregroundColor(cat.color)
                        TextField("งบประมาณ (บาท)", text: $budgetInput)
                            .keyboardType(.decimalPad)
                    }
                }
                if budgetVM.budgetLimit(for: cat) > 0 {
                    Section {
                        Button("ลบงบประมาณหมวดนี้", role: .destructive) {
                            budgetVM.deleteBudget(for: cat)
                            editingCategory = nil
                        }
                    }
                }
            }
            .navigationTitle("ตั้งงบ \(cat.displayName)")
            .navigationBarTitleDisplayMode(.inline)
            .toolbar {
                ToolbarItem(placement: .cancellationAction) {
                    Button("ยกเลิก") { editingCategory = nil }
                }
                ToolbarItem(placement: .confirmationAction) {
                    Button("บันทึก") {
                        if let v = Double(budgetInput), v > 0 {
                            budgetVM.setBudget(category: cat, limit: v)
                        }
                        editingCategory = nil
                    }.bold()
                }
            }
        }
    }
}

extension ExpenseCategory: Identifiable {
    public var id: String { rawValue }
}
