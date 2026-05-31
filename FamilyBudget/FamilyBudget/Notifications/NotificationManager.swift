import UserNotifications
import CoreData

class NotificationManager {
    static let shared = NotificationManager()

    func requestPermission() {
        UNUserNotificationCenter.current().requestAuthorization(options: [.alert, .badge, .sound]) { _, _ in }
    }

    func checkBudgetAlert(category: ExpenseCategory, spent: Double, context: NSManagedObjectContext) {
        let req = NSFetchRequest<BudgetEntity>(entityName: "BudgetEntity")
        req.predicate = NSPredicate(format: "category == %@", category.rawValue)
        guard let budget = (try? context.fetch(req))?.first,
              budget.monthlyLimit > 0 else { return }

        let ratio = spent / budget.monthlyLimit
        guard ratio >= 0.8 else { return }

        let content = UNMutableNotificationContent()
        content.sound = .default

        if ratio >= 1.0 {
            content.title = "⚠️ เกินงบ \(category.displayName)"
            content.body = String(format: "ใช้จ่าย %.0f บาท เกินงบ %.0f บาทแล้ว!", spent, budget.monthlyLimit)
        } else {
            content.title = "🔔 ใกล้เต็มงบ \(category.displayName)"
            content.body = String(format: "ใช้ไป %.0f%% ของงบ %.0f บาท", ratio * 100, budget.monthlyLimit)
        }

        let id = "budget-\(category.rawValue)"
        UNUserNotificationCenter.current().removePendingNotificationRequests(withIdentifiers: [id])
        let req2 = UNNotificationRequest(identifier: id,
                                         content: content,
                                         trigger: UNTimeIntervalNotificationTrigger(timeInterval: 1, repeats: false))
        UNUserNotificationCenter.current().add(req2)
    }
}
