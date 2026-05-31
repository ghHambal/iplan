import SwiftUI

struct ContentView: View {
    var body: some View {
        TabView {
            HomeView()
                .tabItem { Label("หน้าหลัก", systemImage: "house.fill") }
            TransactionListView()
                .tabItem { Label("รายการ", systemImage: "list.bullet") }
            SummaryView()
                .tabItem { Label("สรุป", systemImage: "chart.pie.fill") }
            BudgetView()
                .tabItem { Label("งบประมาณ", systemImage: "target") }
            FamilySharingView()
                .tabItem { Label("ครอบครัว", systemImage: "person.2.fill") }
        }
    }
}
