import CoreData

class PersistenceController {
    static let shared = PersistenceController()

    let container: NSPersistentCloudKitContainer

    init(inMemory: Bool = false) {
        container = NSPersistentCloudKitContainer(name: "FamilyBudget")

        if let description = container.persistentStoreDescriptions.first {
            if inMemory {
                description.url = URL(fileURLWithPath: "/dev/null")
            }
            description.setOption(true as NSNumber, forKey: NSPersistentHistoryTrackingKey)
            description.setOption(true as NSNumber, forKey: NSPersistentStoreRemoteChangeNotificationPostOptionKey)
            description.cloudKitContainerOptions = NSPersistentCloudKitContainerOptions(
                containerIdentifier: "iCloud.com.iplan.familybudget"
            )
        }

        container.loadPersistentStores { _, error in
            if let error { fatalError("Core Data failed: \(error)") }
        }
        container.viewContext.automaticallyMergesChangesFromParent = true
        container.viewContext.mergePolicy = NSMergeByPropertyObjectTrumpMergePolicy
    }

    func save() {
        let ctx = container.viewContext
        guard ctx.hasChanges else { return }
        try? ctx.save()
    }

    static var preview: PersistenceController = {
        let controller = PersistenceController(inMemory: true)
        let ctx = controller.container.viewContext
        for i in 0..<5 {
            let tx = TransactionEntity(context: ctx)
            tx.id = UUID()
            tx.amount = Double(i + 1) * 150
            tx.type = i % 2 == 0 ? "expense" : "income"
            tx.category = i % 2 == 0 ? "food" : "salary"
            tx.note = "ตัวอย่างรายการ \(i + 1)"
            tx.date = Calendar.current.date(byAdding: .day, value: -i, to: Date())
            tx.addedByName = i % 2 == 0 ? "สามี" : "ภรรยา"
        }
        try? ctx.save()
        return controller
    }()
}
