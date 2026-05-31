import SwiftUI

enum ExpenseCategory: String, CaseIterable {
    case food, transport, utilities, health, entertainment, shopping, education, housing, other
    case salary, freelance, investment, gift, otherIncome

    var displayName: String {
        switch self {
        case .food: return "อาหาร & เครื่องดื่ม"
        case .transport: return "การเดินทาง"
        case .utilities: return "ค่าน้ำ/ไฟ/อินเทอร์เน็ต"
        case .health: return "สุขภาพ & ยา"
        case .entertainment: return "ความบันเทิง"
        case .shopping: return "ช้อปปิ้ง"
        case .education: return "การศึกษา"
        case .housing: return "ที่พัก & บ้าน"
        case .other: return "อื่น ๆ"
        case .salary: return "เงินเดือน"
        case .freelance: return "รับจ้าง/ฟรีแลนซ์"
        case .investment: return "การลงทุน/ดอกเบี้ย"
        case .gift: return "ของขวัญ/โบนัส"
        case .otherIncome: return "รายได้อื่น ๆ"
        }
    }

    var icon: String {
        switch self {
        case .food: return "fork.knife"
        case .transport: return "car.fill"
        case .utilities: return "bolt.fill"
        case .health: return "heart.fill"
        case .entertainment: return "gamecontroller.fill"
        case .shopping: return "cart.fill"
        case .education: return "book.fill"
        case .housing: return "house.fill"
        case .other: return "ellipsis.circle.fill"
        case .salary: return "banknote.fill"
        case .freelance: return "laptopcomputer"
        case .investment: return "chart.line.uptrend.xyaxis"
        case .gift: return "gift.fill"
        case .otherIncome: return "plus.circle.fill"
        }
    }

    var color: Color {
        switch self {
        case .food: return Color(hex: "FF6B6B")
        case .transport: return Color(hex: "4ECDC4")
        case .utilities: return Color(hex: "45B7D1")
        case .health: return Color(hex: "96CEB4")
        case .entertainment: return Color(hex: "F7DC6F")
        case .shopping: return Color(hex: "DDA0DD")
        case .education: return Color(hex: "98FB98")
        case .housing: return Color(hex: "F0E68C")
        case .other: return .gray
        case .salary: return .green
        case .freelance: return Color(hex: "87CEEB")
        case .investment: return .yellow
        case .gift: return Color(hex: "FFB6C1")
        case .otherIncome: return .mint
        }
    }

    static var expenseCategories: [ExpenseCategory] {
        [.food, .transport, .utilities, .health, .entertainment, .shopping, .education, .housing, .other]
    }

    static var incomeCategories: [ExpenseCategory] {
        [.salary, .freelance, .investment, .gift, .otherIncome]
    }
}

extension Color {
    init(hex: String) {
        let hex = hex.trimmingCharacters(in: CharacterSet.alphanumerics.inverted)
        var int: UInt64 = 0
        Scanner(string: hex).scanHexInt64(&int)
        let r = Double((int >> 16) & 0xFF) / 255
        let g = Double((int >> 8) & 0xFF) / 255
        let b = Double(int & 0xFF) / 255
        self.init(red: r, green: g, blue: b)
    }
}
