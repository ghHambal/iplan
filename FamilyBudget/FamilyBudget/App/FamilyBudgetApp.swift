import SwiftUI

@main
struct FamilyBudgetApp: App {
    let persistence = PersistenceController.shared

    init() {
        NotificationManager.shared.requestPermission()
    }

    var body: some Scene {
        WindowGroup {
            ContentView()
                .environment(\.managedObjectContext, persistence.container.viewContext)
        }
    }
}
