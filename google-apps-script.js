/**
 * Google Apps Script Backend for Single-Page Lesson Plan Manager
 * 
 * วิธีการติดตั้งใช้งาน:
 * 1. เปิด Google Sheet ของคุณ
 * 2. ไปที่ Extension > Apps Script (ส่วนขยาย > แอปสคริปต์)
 * 3. คัดลอกโค้ดทั้งหมดในไฟล์นี้ไปวางแทนที่โค้ดเดิมใน Apps Script
 * 4. เปลี่ยนชื่อโปรเจกต์เป็น "iPlane Backend"
 * 5. กด บันทึก (Save)
 * 6. กด Deploy (การทำให้ใช้งานได้) > New Deployment (การทำให้ใช้งานได้ใหม่)
 * 7. เลือกประเภทเป็น "Web App" (เว็บแอป)
 * 8. ตั้งค่าคอนฟิก:
 *    - Execute as: Me (ตัวคุณเอง)
 *    - Who has access: Anyone (ทุกคน) -> *สำคัญมาก เพื่อให้แอปยิงเชื่อมต่อได้โดยตรง*
 * 9. กด Deploy และทำการให้สิทธิ์การเข้าถึง (Authorize Access) กับบัญชี Google ของคุณ
 * 10. คัดลอก URL ของ Web App ที่ได้ ไปใส่ในช่องตั้งค่าในตัวเว็บแอปพลิเคชัน iPlane
 */

// ชื่อแผ่นงานที่จะใช้งาน (เลือก Sheet1 หรือเปลี่ยนให้ตรงกับชีตของคุณ)
const SHEET_NAME = 'Sheet1';

// ฟังก์ชันสำหรับ CORS Headers
function corsResponse(data) {
  const jsonString = JSON.stringify(data);
  return ContentService.createTextOutput(jsonString)
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * GET Request: ดึงข้อมูลทั้งหมดจาก Google Sheet
 * ตัวแอปจะเรียกใช้ตอนโหลดหน้าเว็บ เพื่ออัปเดตข้อมูลให้เป็นปัจจุบัน
 */
function doGet(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    if (!sheet) {
      return corsResponse({ status: 'error', message: 'ไม่พบแผ่นงานชื่อ ' + SHEET_NAME });
    }
    
    const rows = sheet.getDataRange().getValues();
    if (rows.length <= 1) {
      return corsResponse({ status: 'success', data: [] });
    }
    
    const headers = rows[0]; // หัวข้อคอลัมน์
    const data = [];
    
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      const record = {};
      headers.forEach((header, index) => {
        const key = String(header).trim();
        if (key) {
          record[key] = row[index];
        }
      });
      record['rowIndex'] = i + 1; // ลำดับแถวจริงใน Sheet (เอาไว้ใช้อ้างอิงตอนอัปเดต)
      data.push(record);
    }
    
    return corsResponse({ status: 'success', data: data });
  } catch (err) {
    return corsResponse({ status: 'error', message: err.toString() });
  }
}

/**
 * POST Request: บันทึกข้อมูลหลังการสอน และ อัปโหลดไฟล์ PDF ลายเซ็นลง Google Drive
 */
function doPost(e) {
  try {
    let payload;
    if (e.postData && e.postData.contents) {
      payload = JSON.parse(e.postData.contents);
    } else {
      return corsResponse({ status: 'error', message: 'ไม่พบข้อมูลส่งมา (No payload)' });
    }
    
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    if (!sheet) {
      return corsResponse({ status: 'error', message: 'ไม่พบแผ่นงานชื่อ ' + SHEET_NAME });
    }
    
    const headers = sheet.getDataRange().getValues()[0].map(h => String(h).trim());
    const onceValue = String(payload.once).trim(); // ค้นหาด้วย 'ครั้งที่'
    
    let targetRowIndex = -1;
    const onceColIndex = headers.indexOf('ครั้งที่');
    
    if (onceColIndex === -1) {
      return corsResponse({ status: 'error', message: 'ไม่พบคอลัมน์ชื่อ "ครั้งที่" ใน Google Sheets' });
    }
    
    // ค้นหาแถวที่ 'ครั้งที่' ตรงกัน
    const values = sheet.getDataRange().getValues();
    for (let i = 1; i < values.length; i++) {
      if (String(values[i][onceColIndex]).trim() === onceValue) {
        targetRowIndex = i + 1;
        break;
      }
    }
    
    // หากไม่พบ ให้สร้างแถวใหม่ หรือถ้าอ้างอิง rowIndex มาโดยตรง
    if (targetRowIndex === -1 && payload.rowIndex) {
      targetRowIndex = parseInt(payload.rowIndex);
    }
    
    if (targetRowIndex === -1) {
      return corsResponse({ status: 'error', message: 'ไม่พบแถวข้อมูลของครั้งที่สอนนี้: ' + onceValue });
    }
    
    // ค้นหาดัชนีคอลัมน์สำหรับการเขียนบันทึกหลังการสอน
    const outcomeColIndex = headers.indexOf('ผลการจัดการเรียนรู้');
    const solutionColIndex = headers.indexOf('แนวทางแก้ปัญหา');
    const pdfColIndex = headers.indexOf('ลิงก์ไฟล์ PDF'); // ถ้าไม่มี จะหาคอลัมน์ถัดไปหรือสร้างเพิ่ม
    
    if (outcomeColIndex === -1 || solutionColIndex === -1) {
      return corsResponse({ status: 'error', message: 'ไม่พบคอลัมน์ "ผลการจัดการเรียนรู้" หรือ "แนวทางแก้ปัญหา" ใน Sheets' });
    }
    
    // 1. บันทึกข้อความลง Google Sheets
    sheet.getCell(targetRowIndex, outcomeColIndex + 1).setValue(payload.outcomes || '');
    sheet.getCell(targetRowIndex, solutionColIndex + 1).setValue(payload.solutions || '');
    
    // 2. บันทึกและอัปโหลดไฟล์ PDF ไปยัง Google Drive (หากส่งมา)
    let pdfUrl = '';
    if (payload.pdfBase64) {
      // ดึง Base64 data (ตัด header 'data:application/pdf;base64,' ออกถ้ามี)
      let base64Data = payload.pdfBase64;
      if (base64Data.indexOf('base64,') > -1) {
        base64Data = base64Data.split('base64,')[1];
      }
      
      const decodedPdf = Utilities.base64Decode(base64Data);
      const pdfBlob = Utilities.newBlob(decodedPdf, 'application/pdf', payload.pdfFileName || ('Lesson_Plan_Week_' + onceValue + '.pdf'));
      
      let folder;
      // หากมีการกำหนด Folder ID มาในคำขอ จะบันทึกลงในโฟลเดอร์นั้นๆ
      if (payload.folderId) {
        try {
          folder = DriveApp.getFolderById(payload.folderId);
        } catch (e) {
          // หากหาโฟลเดอร์ตาม ID ไม่พบ ให้ใช้ Root
          folder = DriveApp.getRootFolder();
        }
      } else {
        // ค้นหาโฟลเดอร์ชื่อ "iPlane_PDFs" ใน Google Drive
        const folders = DriveApp.getFoldersByName('iPlane_PDFs');
        if (folders.hasNext()) {
          folder = folders.next();
        } else {
          folder = DriveApp.createFolder('iPlane_PDFs');
        }
      }
      
      // อัปโหลดไฟล์ใหม่ขึ้น Drive
      const file = folder.createFile(pdfBlob);
      // ตั้งค่าให้ใครก็ตามที่ลิงก์เห็นไฟล์นี้ได้ เพื่อให้กดดูจากชีตได้ง่ายขึ้น
      file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
      pdfUrl = file.getUrl();
      
      // บันทึกลิงก์ลงใน Google Sheets
      let actualPdfCol = pdfColIndex;
      if (actualPdfCol === -1) {
        // หากไม่มีคอลัมน์ ลิงก์ไฟล์ PDF ให้เพิ่มต่อท้ายขวาสุด
        actualPdfCol = headers.length;
        sheet.getCell(1, actualPdfCol + 1).setValue('ลิงก์ไฟล์ PDF');
      }
      sheet.getCell(targetRowIndex, actualPdfCol + 1).setValue(pdfUrl);
    }
    
    return corsResponse({
      status: 'success',
      message: 'บันทึกหลังการสอนและบันทึกไฟล์เรียบร้อยแล้ว',
      pdfUrl: pdfUrl,
      rowIndex: targetRowIndex
    });
    
  } catch (err) {
    return corsResponse({ status: 'error', message: err.toString() });
  }
}
