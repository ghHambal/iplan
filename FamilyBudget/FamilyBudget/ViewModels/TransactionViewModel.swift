import Foundation
import CoreData
import Combine

class TransactionViewModel: ObservableObject {
    private let context: NSManagedObjectContext
    @Published var transactions: [TransactionEntity] = []

    init(context: NSManagedObjectContext) {
        self.context = context
        fetchTransactions()
        NotificationCenter.default.addObserver(
            forName: .NSPersistentStoreRemoteChange,
            object: nil,
            queue: .main
        ) { [weak self] _ in self?.fetchTransactions() }
    }

    func fetchTransactions() {
        let req = NSFetchRequest<TransactionEntity>(entityName: "TransactionEntity")
        req.sortDescriptors = [NSSortDescriptor(key: "date", ascending: false)]
        transactions = (try? context.fetch(req)) ?? []
    }

    func transactionsForMonth(_ date: Date = Date()) -> [TransactionEntity] {
        let cal = Calendar.current
        return transactions.filter {
            guard let d = $0.date else { return false }
            return cal.isDate(d, equalTo: date, toGranularity: .month)
        }
    }

    func totalIncome(for date: Date = Date()) -> Double {
        transactionsForMonth(date)
            .filter { $0.type == TransactionType.income.rawValue }
            .reduce(0) { $0 + $1.amount }
    }

    func totalExpense(for date: Date = Date()) -> Double {
        transactionsForMonth(date)
            .filter { $0.type == TransactionType.expense.rawValue }
            .reduce(0) { $0 + $1.amount }
    }

    func balance(for date: Date = Date()) -> Double {
        totalIncome(for: date) - totalExpense(for: date)
    }

    func expenseByCategory(for date: Date = Date()) -> [(category: ExpenseCategory, amount: Double)] {
        let expenses = transactionsForMonth(date).filter { $0.type == "expense" }
        var map: [String: Double] = [:]
        for tx in expenses { map[tx.category ?? "other", default: 0] += tx.amount }
        return map.compactMap { key, val in
            guard let cat = ExpenseCategory(rawValue: key) else { return nil }
            return (cat, val)
        }.sorted { $0.amount > $1.amount }
    }

    func addTransaction(amount: Double, type: TransactionType, category: ExpenseCategory,
                        note: String, date: Date, addedBy: String) {
        let tx = TransactionEntity(context: context)
        tx.id = UUID()
        tx.amount = amount
        tx.type = type.rawValue
        tx.category = category.rawValue
        tx.note = note
        tx.date = date
        tx.addedByName = addedBy
        PersistenceController.shared.save()
        fetchTransactions()
        NotificationManager.shared.checkBudgetAlert(category: category,
                                                     spent: expenseByCategory().first { $0.category == category }?.amount ?? 0,
                                                     context: context)
    }

    func deleteTransaction(_ tx: TransactionEntity) {
        context.delete(tx)
        PersistenceController.shared.save()
        fetchTransactions()
    }
}
