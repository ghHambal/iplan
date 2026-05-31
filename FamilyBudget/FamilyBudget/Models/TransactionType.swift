import SwiftUI

enum TransactionType: String, CaseIterable {
    case income = "income"
    case expense = "expense"

    var displayName: String {
        switch self {
        case .income: return "รายรับ"
        case .expense: return "รายจ่าย"
        }
    }

    var color: Color {
        switch self {
        case .income: return .green
        case .expense: return .red
        }
    }

    var icon: String {
        switch self {
        case .income: return "arrow.down.circle.fill"
        case .expense: return "arrow.up.circle.fill"
        }
    }
}
