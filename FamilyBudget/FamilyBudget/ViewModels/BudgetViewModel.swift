import Foundation
import CoreData

class BudgetViewModel: ObservableObject {
    private let context: NSManagedObjectContext
    @Published var budgets: [BudgetEntity] = []

    init(context: NSManagedObjectContext) {
        self.context = context
        fetchBudgets()
    }

    func fetchBudgets() {
        let req = NSFetchRequest<BudgetEntity>(entityName: "BudgetEntity")
        budgets = (try? context.fetch(req)) ?? []
    }

    func setBudget(category: ExpenseCategory, limit: Double) {
        if let existing = budgets.first(where: { $0.category == category.rawValue }) {
            existing.monthlyLimit = limit
        } else {
            let b = BudgetEntity(context: context)
            b.id = UUID()
            b.category = category.rawValue
            b.monthlyLimit = limit
        }
        PersistenceController.shared.save()
        fetchBudgets()
    }

    func budgetLimit(for category: ExpenseCategory) -> Double {
        budgets.first { $0.category == category.rawValue }?.monthlyLimit ?? 0
    }

    func deleteBudget(for category: ExpenseCategory) {
        if let b = budgets.first(where: { $0.category == category.rawValue }) {
            context.delete(b)
            PersistenceController.shared.save()
            fetchBudgets()
        }
    }
}
