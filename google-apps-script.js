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

// ฟังก์ชันสำหรับ CORS Headers
function corsResponse(data) {
  const jsonString = JSON.stringify(data);
  return ContentService.createTextOutput(jsonString)
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * ฟังก์ชันผู้ช่วย: สร้างและเซตอัพแผ่นงาน (Sheet Tab) อัตโนมัติหากยังไม่มีในระบบ
 */
function createAndSetupSheet(ss, sheetName) {
  const sheet = ss.insertSheet(sheetName);
  
  // หัวข้อคอลัมน์มาตรฐาน 15 หัวข้อตรงตามแผนจัดการเรียนรู้
  const headers = [
    'Week',
    'ครั้งที่',
    'คาบที่สอน',
    'วว/ดด/ปป ที่สอน',
    'หน่วยการเรียนรู้ที่',
    'เรื่อง',
    'จำนวนคาบ',
    'มาตรฐานการเรียนรู้/ตัวชี้วัด',
    'จุดประสงค์การเรียนรู้',
    'กิจกรรมการเรียนรู้',
    'การวัดและประเมินผล',
    'สื่อการเรียนรู้',
    'ผลการจัดการเรียนรู้',
    'แนวทางแก้ปัญหา',
    'ลิงก์ไฟล์ PDF'
  ];
  
  // 1. เขียนหัวตารางในแถวที่ 1
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  // 2. ตกแต่งหัวตารางให้อ่านง่ายเป็นระเบียบ
  const headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setFontWeight('bold');
  headerRange.setBackground('#dcfce7'); // สีเขียวอ่อนแบบตารางวิชาการ
  headerRange.setFontColor('#14532d');  // ข้อความสีเขียวเข้ม
  headerRange.setHorizontalAlignment('center');
  headerRange.setVerticalAlignment('middle');
  sheet.setRowHeight(1, 28);
  
  // 3. ตรึงแถวแรกไว้ (Freeze) เพื่อให้เลื่อนดูข้อมูลได้สะดวก
  sheet.setFrozenRows(1);
  
  // 4. ตั้งค่าหน้าตากว้างความกว้างคอลัมน์เบื้องต้น
  sheet.setColumnWidth(1, 60);  // Week
  sheet.setColumnWidth(2, 70);  // ครั้งที่
  sheet.setColumnWidth(3, 80);  // คาบที่สอน
  sheet.setColumnWidth(4, 110); // วันที่สอน
  sheet.setColumnWidth(5, 120); // หน่วยที่
  sheet.setColumnWidth(6, 180); // เรื่อง
  sheet.setColumnWidth(7, 80);  // จำนวนคาบ
  
  // คอลัมน์ข้อความยาวๆ ให้ขยายกว้างเป็นพิเศษ
  sheet.setColumnWidth(8, 250); // มาตรฐาน
  sheet.setColumnWidth(9, 250); // จุดประสงค์
  sheet.setColumnWidth(10, 300); // กิจกรรม
  sheet.setColumnWidth(11, 180); // การวัดผล
  sheet.setColumnWidth(12, 180); // สื่อ
  sheet.setColumnWidth(13, 250); // ผลการสอน
  sheet.setColumnWidth(14, 250); // ปัญหาแก้
  sheet.setColumnWidth(15, 200); // PDF Link

  return sheet;
}

/**
 * GET Request: ดึงข้อมูลทั้งหมดจาก Google Sheet
 * ตัวแอปจะเรียกใช้ตอนโหลดหน้าเว็บ เพื่ออัปเดตข้อมูลให้เป็นปัจจุบัน
 */
function doGet(e) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheetName = (e.parameter && e.parameter.sheetName) ? e.parameter.sheetName : 'Sheet1';
    
    let sheet = ss.getSheetByName(sheetName);
    
    // หากไม่พบแผ่นงานชื่อนี้ ให้สร้างตารางโครงสร้างขึ้นมาให้อัตโนมัติ!
    if (!sheet) {
      sheet = createAndSetupSheet(ss, sheetName);
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
    
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheetName = payload.sheetName || 'Sheet1';
    
    let sheet = ss.getSheetByName(sheetName);
    
    // หากไม่มีแผ่นงานแท็บนี้ในแผ่นงาน Google Sheets ให้สร้างแท็บใหม่และเซตหัวตารางให้อัตโนมัติ!
    if (!sheet) {
      sheet = createAndSetupSheet(ss, sheetName);
    }
    
    // ดึงรายชื่อหัวตารางล่าสุด
    let values = sheet.getDataRange().getValues();
    let headers = values[0].map(h => String(h).trim());
    
    const onceValue = String(payload.once).trim(); // ค้นหาด้วย 'ครั้งที่'
    const onceColIndex = headers.indexOf('ครั้งที่');
    
    if (onceColIndex === -1) {
      return corsResponse({ status: 'error', message: 'ไม่พบคอลัมน์ชื่อ "ครั้งที่" ใน Google Sheets' });
    }
    
    let targetRowIndex = -1;
    
    // ค้นหาแถวที่ 'ครั้งที่' ตรงกัน
    for (let i = 1; i < values.length; i++) {
      if (String(values[i][onceColIndex]).trim() === onceValue) {
        targetRowIndex = i + 1;
        break;
      }
    }
    
    // หากไม่พบแถวข้อมูลเดิม ให้ทำการสร้างแถวใหม่โดยใส่แผนการสอนหลักลงไปอัตโนมัติ
    if (targetRowIndex === -1) {
      const newRow = new Array(headers.length).fill('');
      
      // แมปปิ้งฟิลด์จาก payload สู่คอลัมน์ต่างๆ ในชีตใหม่
      const fieldMappings = {
        'Week': payload.week || '',
        'ครั้งที่': payload.once || '',
        'คาบที่สอน': payload.period || '',
        'วว/ดด/ปป ที่สอน': payload.date || '',
        'หน่วยการเรียนรู้ที่': payload.unit || '',
        'เรื่อง': payload.topic || '',
        'จำนวนคาบ': payload.periodCount || '',
        'มาตรฐานการเรียนรู้/ตัวชี้วัด': payload.standard || '',
        'จุดประสงค์การเรียนรู้': payload.objectives || '',
        'กิจกรรมการเรียนรู้': payload.activities || '',
        'การวัดและประเมินผล': payload.assessment || '',
        'สื่อการเรียนรู้': payload.materials || '',
        'ผลการจัดการเรียนรู้': payload.outcomes || '',
        'แนวทางแก้ปัญหา': payload.solutions || ''
      };
      
      headers.forEach((header, index) => {
        if (fieldMappings[header] !== undefined) {
          newRow[index] = fieldMappings[header];
        }
      });
      
      sheet.appendRow(newRow);
      
      // อัปเดตรายชื่อและแถวข้อมูลใหม่
      values = sheet.getDataRange().getValues();
      targetRowIndex = values.length;
    } else {
      // หากพบแถวข้อมูลเดิม ให้เขียนทับ ผลการจัดการเรียนรู้ และ แนวทางแก้ปัญหา
      const outcomeColIndex = headers.indexOf('ผลการจัดการเรียนรู้');
      const solutionColIndex = headers.indexOf('แนวทางแก้ปัญหา');
      
      if (outcomeColIndex > -1) sheet.getCell(targetRowIndex, outcomeColIndex + 1).setValue(payload.outcomes || '');
      if (solutionColIndex > -1) sheet.getCell(targetRowIndex, solutionColIndex + 1).setValue(payload.solutions || '');
    }
    
    // บันทึกและอัปโหลดไฟล์ PDF ไปยัง Google Drive (หากส่งมา)
    let pdfUrl = '';
    if (payload.pdfBase64) {
      let base64Data = payload.pdfBase64;
      if (base64Data.indexOf('base64,') > -1) {
        base64Data = base64Data.split('base64,')[1];
      }
      
      const decodedPdf = Utilities.base64Decode(base64Data);
      const pdfBlob = Utilities.newBlob(decodedPdf, 'application/pdf', payload.pdfFileName || ('Lesson_Plan_Week_' + onceValue + '.pdf'));
      
      let folder;
      if (payload.folderId) {
        try {
          folder = DriveApp.getFolderById(payload.folderId);
        } catch (e) {
          folder = DriveApp.getRootFolder();
        }
      } else {
        const folders = DriveApp.getFoldersByName('iPlane_PDFs');
        if (folders.hasNext()) {
          folder = folders.next();
        } else {
          folder = DriveApp.createFolder('iPlane_PDFs');
        }
      }
      
      const file = folder.createFile(pdfBlob);
      file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
      pdfUrl = file.getUrl();
      
      const pdfColIndex = headers.indexOf('ลิงก์ไฟล์ PDF');
      let actualPdfCol = pdfColIndex;
      if (actualPdfCol === -1) {
        actualPdfCol = headers.length;
        sheet.getCell(1, actualPdfCol + 1).setValue('ลิงก์ไฟล์ PDF');
      }
      sheet.getCell(targetRowIndex, actualPdfCol + 1).setValue(pdfUrl);
    }
    
    return corsResponse({
      status: 'success',
      message: 'บันทึกหลังการสอนและแชร์ไฟล์เรียบร้อยแล้ว',
      pdfUrl: pdfUrl,
      rowIndex: targetRowIndex
    });
    
  } catch (err) {
    return corsResponse({ status: 'error', message: err.toString() });
  }
}
