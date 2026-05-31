import SwiftUI

struct AddTransactionView: View {
    @Environment(\.managedObjectContext) private var ctx
    @Environment(\.dismiss) private var dismiss

    @State private var amount = ""
    @State private var type: TransactionType = .expense
    @State private var category: ExpenseCategory = .food
    @State private var note = ""
    @State private var date = Date()
    @State private var addedBy = ""
    @State private var showError = false

    var body: some View {
        NavigationView {
            Form {
                Section(header: Text("ประเภท")) {
                    Picker("ประเภท", selection: $type) {
                        ForEach(TransactionType.allCases, id: \.self) { t in
                            Label(t.displayName, systemImage: t.icon).tag(t)
                        }
                    }
                    .pickerStyle(.segmented)
                    .onChange(of: type) { _ in
                        category = type == .expense ? .food : .salary
                    }
                }

                Section(header: Text("จำนวนเงิน (บาท)")) {
                    TextField("0.00", text: $amount)
                        .keyboardType(.decimalPad)
                        .font(.title2.bold())
                }

                Section(header: Text("หมวดหมู่")) {
                    Picker("หมวดหมู่", selection: $category) {
                        let cats = type == .expense ? ExpenseCategory.expenseCategories : ExpenseCategory.incomeCategories
                        ForEach(cats, id: \.self) { cat in
                            Label(cat.displayName, systemImage: cat.icon).tag(cat)
                        }
                    }
                }

                Section(header: Text("รายละเอียด")) {
                    TextField("หมายเหตุ (ไม่บังคับ)", text: $note)
                    DatePicker("วันที่", selection: $date, displayedComponents: .date)
                    TextField("บันทึกโดย (เช่น สามี / ภรรยา)", text: $addedBy)
                }
            }
            .navigationTitle(type == .expense ? "เพิ่มรายจ่าย" : "เพิ่มรายรับ")
            .navigationBarTitleDisplayMode(.inline)
            .toolbar {
                ToolbarItem(placement: .cancellationAction) {
                    Button("ยกเลิก") { dismiss() }
                }
                ToolbarItem(placement: .confirmationAction) {
                    Button("บันทึก") { save() }
                        .bold()
                }
            }
            .alert("กรุณากรอกจำนวนเงิน", isPresented: $showError) {
                Button("ตกลง", role: .cancel) {}
            }
        }
    }

    private func save() {
        guard let amt = Double(amount), amt > 0 else {
            showError = true
            return
        }
        let vm = TransactionViewModel(context: ctx)
        vm.addTransaction(amount: amt, type: type, category: category,
                          note: note, date: date, addedBy: addedBy.isEmpty ? "ไม่ระบุ" : addedBy)
        dismiss()
    }
}
