import SwiftUI
import CloudKit

struct FamilySharingView: View {
    @State private var showShareSheet = false
    @State private var isLoading = false
    @State private var statusMessage = ""
    @State private var cloudSharingController: UICloudSharingController?

    var body: some View {
        NavigationView {
            List {
                // Status
                Section {
                    HStack(spacing: 16) {
                        ZStack {
                            Circle().fill(Color.blue.opacity(0.12)).frame(width: 56, height: 56)
                            Image(systemName: "icloud.fill").font(.title2).foregroundColor(.blue)
                        }
                        VStack(alignment: .leading, spacing: 2) {
                            Text("ซิงก์ผ่าน iCloud").font(.headline)
                            Text("ข้อมูลซิงก์อัตโนมัติผ่าน CloudKit ทุกอุปกรณ์ที่ลงชื่อ Apple ID เดียวกัน")
                                .font(.caption).foregroundColor(.secondary)
                        }
                    }
                    .padding(.vertical, 6)
                }

                // Share with different Apple ID
                Section(header: Text("แชร์กับภรรยา (Apple ID ต่างกัน)")) {
                    VStack(alignment: .leading, spacing: 12) {
                        Text("ส่งคำเชิญให้ภรรยาเข้าถึงข้อมูลร่วมกัน แม้ใช้ Apple ID คนละบัญชี")
                            .font(.subheadline).foregroundColor(.secondary)

                        Button {
                            shareViaCloudKit()
                        } label: {
                            if isLoading {
                                HStack {
                                    ProgressView().tint(.white)
                                    Text("กำลังสร้างลิงก์แชร์...").foregroundColor(.white)
                                }
                                .frame(maxWidth: .infinity)
                            } else {
                                Label("ส่งคำเชิญผ่าน iCloud", systemImage: "square.and.arrow.up")
                                    .frame(maxWidth: .infinity)
                            }
                        }
                        .buttonStyle(.borderedProminent)
                        .disabled(isLoading)

                        if !statusMessage.isEmpty {
                            Text(statusMessage).font(.caption).foregroundColor(.secondary)
                        }
                    }
                    .padding(.vertical, 8)
                }

                // iCloud Family Sharing setup guide
                Section(header: Text("เพิ่มภรรยาเป็นครอบครัวใน iCloud")) {
                    VStack(alignment: .leading, spacing: 14) {
                        Text("การแชร์ในครอบครัว iCloud ช่วยให้ใช้ App Store, Apple Music, iCloud+ ร่วมกัน")
                            .font(.subheadline).foregroundColor(.secondary)

                        ForEach(Array(steps.enumerated()), id: \.offset) { index, step in
                            HStack(alignment: .top, spacing: 12) {
                                Text("\(index + 1)")
                                    .font(.caption.bold())
                                    .foregroundColor(.white)
                                    .frame(width: 22, height: 22)
                                    .background(Color.blue)
                                    .clipShape(Circle())
                                Text(step).font(.subheadline)
                                    .fixedSize(horizontal: false, vertical: true)
                            }
                        }

                        Button {
                            openFamilySharingSettings()
                        } label: {
                            Label("เปิดการตั้งค่า iCloud", systemImage: "gear")
                                .frame(maxWidth: .infinity)
                        }
                        .buttonStyle(.bordered)
                    }
                    .padding(.vertical, 8)
                }

                Section(header: Text("เกี่ยวกับการซิงก์")) {
                    InfoRow(icon: "lock.icloud.fill", color: .blue, title: "ปลอดภัย", subtitle: "เข้ารหัสด้วย iCloud end-to-end")
                    InfoRow(icon: "bolt.fill", color: .yellow, title: "Real-time", subtitle: "ข้อมูลอัปเดตทันทีทั้งสองเครื่อง")
                    InfoRow(icon: "wifi.slash", color: .gray, title: "Offline", subtitle: "ใช้งานได้แม้ไม่มีอินเทอร์เน็ต")
                }
            }
            .navigationTitle("แชร์กับครอบครัว")
            .sheet(isPresented: $showShareSheet) {
                if let controller = cloudSharingController {
                    CloudSharingView(controller: controller)
                }
            }
        }
    }

    private let steps = [
        "ไปที่ การตั้งค่า > [ชื่อของคุณ]",
        "แตะ \"การแชร์ในครอบครัว\"",
        "แตะ เพิ่มสมาชิก (+)",
        "เชิญภรรยาด้วย Apple ID / อีเมล",
        "ภรรยายืนยันคำเชิญบน iPhone ของเธอ"
    ]

    private func openFamilySharingSettings() {
        if let url = URL(string: "App-Prefs:APPLE_ACCOUNT&path=FAMILY") {
            UIApplication.shared.open(url)
        } else if let url = URL(string: UIApplication.openSettingsURLString) {
            UIApplication.shared.open(url)
        }
    }

    private func shareViaCloudKit() {
        isLoading = true
        statusMessage = ""
        let container = CKContainer(identifier: "iCloud.com.iplan.familybudget")
        container.accountStatus { status, error in
            DispatchQueue.main.async {
                isLoading = false
                switch status {
                case .available:
                    createAndPresentShare(container: container)
                case .noAccount:
                    statusMessage = "⚠️ ยังไม่ได้ลงชื่อเข้า iCloud กรุณาลงชื่อในการตั้งค่า"
                default:
                    statusMessage = "⚠️ ไม่สามารถเชื่อมต่อ iCloud ได้: \(error?.localizedDescription ?? "ไม่ทราบสาเหตุ")"
                }
            }
        }
    }

    private func createAndPresentShare(container: CKContainer) {
        let recordID = CKRecord.ID(recordName: "FamilyBudgetShare")
        let record = CKRecord(recordType: "Share", recordID: recordID)
        let share = CKShare(rootRecord: record)
        share[CKShare.SystemFieldKey.title] = "Family Budget" as CKRecordValue
        share.publicPermission = .none

        let op = CKModifyRecordsOperation(recordsToSave: [record, share], recordIDsToDelete: nil)
        op.modifyRecordsResultBlock = { result in
            DispatchQueue.main.async {
                switch result {
                case .success:
                    let controller = UICloudSharingController(share: share, container: container)
                    controller.availablePermissions = [.allowPrivate, .allowReadWrite]
                    cloudSharingController = controller
                    showShareSheet = true
                case .failure(let error):
                    statusMessage = "⚠️ \(error.localizedDescription)"
                }
            }
        }
        container.privateCloudDatabase.add(op)
    }
}

struct CloudSharingView: UIViewControllerRepresentable {
    let controller: UICloudSharingController

    func makeUIViewController(context: Context) -> UICloudSharingController { controller }
    func updateUIViewController(_ uiViewController: UICloudSharingController, context: Context) {}
}

struct InfoRow: View {
    let icon: String
    let color: Color
    let title: String
    let subtitle: String

    var body: some View {
        HStack(spacing: 12) {
            Image(systemName: icon).foregroundColor(color).frame(width: 24)
            VStack(alignment: .leading, spacing: 1) {
                Text(title).font(.subheadline.weight(.medium))
                Text(subtitle).font(.caption).foregroundColor(.secondary)
            }
        }
    }
}
