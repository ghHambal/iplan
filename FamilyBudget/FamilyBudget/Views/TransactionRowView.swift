import SwiftUI

struct TransactionRowView: View {
    let transaction: TransactionEntity

    private var category: ExpenseCategory {
        ExpenseCategory(rawValue: transaction.category ?? "") ?? .other
    }
    private var isIncome: Bool { transaction.type == "income" }

    var body: some View {
        HStack(spacing: 12) {
            ZStack {
                Circle()
                    .fill(category.color.opacity(0.15))
                    .frame(width: 44, height: 44)
                Image(systemName: category.icon)
                    .foregroundColor(category.color)
            }
            VStack(alignment: .leading, spacing: 2) {
                Text(category.displayName).font(.subheadline.weight(.medium))
                if let note = transaction.note, !note.isEmpty {
                    Text(note).font(.caption).foregroundColor(.secondary).lineLimit(1)
                }
                if let addedBy = transaction.addedByName, !addedBy.isEmpty {
                    Text("โดย: \(addedBy)").font(.caption2).foregroundColor(.secondary)
                }
            }
            Spacer()
            VStack(alignment: .trailing, spacing: 2) {
                Text((isIncome ? "+" : "-") + transaction.amount.formatted(.currency(code: "THB")))
                    .font(.subheadline.bold())
                    .foregroundColor(isIncome ? .green : .red)
                if let date = transaction.date {
                    Text(date, style: .date)
                        .font(.caption2).foregroundColor(.secondary)
                }
            }
        }
        .padding(.vertical, 4)
    }
}
