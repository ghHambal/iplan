/**
 * Google Apps Script Backend for Single-Page Lesson Plan Manager (iPlane)
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
 *
 * [v2] เพิ่ม __CONFIG__ sheet สำหรับ sync ข้อมูลคอร์ส/ห้องเรียน/โปรไฟล์ข้ามอุปกรณ์
 */

// ==========================================
// CORS Response Helper
// ==========================================
function corsResponse(data) {
  const jsonString = JSON.stringify(data);
  return ContentService.createTextOutput(jsonString)
    .setMimeType(ContentService.MimeType.JSON);
}

// ==========================================
// CONFIG Sheet Helper (สำหรับ sync ข้ามอุปกรณ์)
// ==========================================
function getOrCreateConfigSheet(ss) {
  let sheet = ss.getSheetByName('__CONFIG__');
  if (!sheet) {
    sheet = ss.insertSheet('__CONFIG__');
    // สร้างหัวตาราง
    sheet.getRange(1, 1, 1, 2).setValues([['key', 'value']]);
    const headerRange = sheet.getRange(1, 1, 1, 2);
    headerRange.setFontWeight('bold');
    headerRange.setBackground('#dbeafe');
    headerRange.setFontColor('#1e3a8a');
    headerRange.setHorizontalAlignment('center');
    sheet.setFrozenRows(1);
    sheet.setColumnWidth(1, 180);
    sheet.setColumnWidth(2, 600);
    Logger.log('สร้าง __CONFIG__ sheet ใหม่เรียบร้อย');
  }
  return sheet;
}

/**
 * อ่าน config ทั้งหมดจาก __CONFIG__ sheet เป็น object {key: value}
 */
function readAllConfig(ss) {
  const sheet = getOrCreateConfigSheet(ss);
  const data = sheet.getDataRange().getValues();
  const config = {};
  for (let i = 1; i < data.length; i++) {
    const key = String(data[i][0]).trim();
    const val = data[i][1];
    if (key) config[key] = val;
  }
  return config;
}

/**
 * เขียน key-value ลง __CONFIG__ sheet (upsert)
 */
function writeConfig(ss, key, value) {
  const sheet = getOrCreateConfigSheet(ss);
  const data = sheet.getDataRange().getValues();
  let found = false;
  for (let i = 1; i < data.length; i++) {
    if (String(data[i][0]).trim() === key) {
      sheet.getRange(i + 1, 2).setValue(value);
      found = true;
      break;
    }
  }
  if (!found) {
    sheet.appendRow([key, value]);
  }
}

// ==========================================
// Lesson Plan Sheet Helper
// ==========================================
function createAndSetupSheet(ss, sheetName) {
  const sheet = ss.insertSheet(sheetName);
  
  const headers = [
    'Week', 'ครั้งที่', 'คาบที่สอน', 'วว/ดด/ปป ที่สอน',
    'หน่วยการเรียนรู้ที่', 'เรื่อง', 'จำนวนคาบ',
    'มาตรฐานการเรียนรู้/ตัวชี้วัด', 'จุดประสงค์การเรียนรู้',
    'กิจกรรมการเรียนรู้', 'การวัดและประเมินผล', 'สื่อการเรียนรู้',
    'ผลการจัดการเรียนรู้', 'แนวทางแก้ปัญหา', 'ลิงก์ไฟล์ PDF'
  ];
  
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  const headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setFontWeight('bold');
  headerRange.setBackground('#dcfce7');
  headerRange.setFontColor('#14532d');
  headerRange.setHorizontalAlignment('center');
  headerRange.setVerticalAlignment('middle');
  sheet.setRowHeight(1, 28);
  sheet.setFrozenRows(1);
  
  sheet.setColumnWidth(1, 60);
  sheet.setColumnWidth(2, 70);
  sheet.setColumnWidth(3, 80);
  sheet.setColumnWidth(4, 110);
  sheet.setColumnWidth(5, 120);
  sheet.setColumnWidth(6, 180);
  sheet.setColumnWidth(7, 80);
  sheet.setColumnWidth(8, 250);
  sheet.setColumnWidth(9, 250);
  sheet.setColumnWidth(10, 300);
  sheet.setColumnWidth(11, 180);
  sheet.setColumnWidth(12, 180);
  sheet.setColumnWidth(13, 250);
  sheet.setColumnWidth(14, 250);
  sheet.setColumnWidth(15, 200);

  return sheet;
}

// ==========================================
// GET Request Handler
// ==========================================
function doGet(e) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const action = (e.parameter && e.parameter.action) ? e.parameter.action : '';

    // --- [NEW] GET Config: ดึงการตั้งค่าคอร์ส/ห้องเรียน/โปรไฟล์ ---
    if (action === 'getConfig') {
      // บันทึก GAS URL ลงชีทโดยอัตโนมัติ เพื่อให้ผู้ใช้สามารถคัดลอกได้ง่ายจากหน้าชีท
      try {
        const webAppUrl = ScriptApp.getService().getUrl();
        if (webAppUrl) {
          writeConfig(ss, 'gasUrl', webAppUrl);
        }
      } catch (err) {
        Logger.log('ไม่สามารถเขียน gasUrl: ' + err.toString());
      }

      const config = readAllConfig(ss);
      // parse JSON fields
      const result = {};
      ['courses', 'classes'].forEach(key => {
        if (config[key]) {
          try { result[key] = JSON.parse(config[key]); }
          catch(e) { result[key] = []; }
        } else {
          result[key] = [];
        }
      });
      ['teacherName', 'hodName', 'schoolName', 'folderId', 'gasUrl', 'schoolLogo', 'teacherSignature'].forEach(key => {
        result[key] = config[key] || '';
      });
      return corsResponse({ status: 'success', config: result });
    }

    // --- GET Lesson Plans: ดึงข้อมูลแผนการสอนจาก sheet tab ---
    const sheetName = (e.parameter && e.parameter.sheetName) ? e.parameter.sheetName : 'Sheet1';
    let sheet = ss.getSheetByName(sheetName);
    if (!sheet) {
      sheet = createAndSetupSheet(ss, sheetName);
    }
    
    const rows = sheet.getDataRange().getDisplayValues();
    if (rows.length <= 1) {
      return corsResponse({ status: 'success', data: [] });
    }
    
    const headers = rows[0];
    const data = [];
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      const record = {};
      headers.forEach((header, index) => {
        const key = String(header).trim();
        if (key) record[key] = row[index];
      });
      record['rowIndex'] = i + 1;
      data.push(record);
    }
    return corsResponse({ status: 'success', data: data });

  } catch (err) {
    return corsResponse({ status: 'error', message: err.toString() });
  }
}

// ==========================================
// POST Request Handler
// ==========================================
function doPost(e) {
  try {
    let payload;
    if (e.postData && e.postData.contents) {
      payload = JSON.parse(e.postData.contents);
    } else {
      return corsResponse({ status: 'error', message: 'ไม่พบข้อมูลส่งมา (No payload)' });
    }
    
    const ss = SpreadsheetApp.getActiveSpreadsheet();

    // --- [NEW] SAVE Config: บันทึกการตั้งค่าคอร์ส/ห้องเรียน/โปรไฟล์ ---
    if (payload.action === 'saveConfig') {
      if (payload.courses !== undefined) {
        writeConfig(ss, 'courses', JSON.stringify(payload.courses));
      }
      if (payload.classes !== undefined) {
        writeConfig(ss, 'classes', JSON.stringify(payload.classes));
      }
      if (payload.teacherName !== undefined) {
        writeConfig(ss, 'teacherName', payload.teacherName);
      }
      if (payload.hodName !== undefined) {
        writeConfig(ss, 'hodName', payload.hodName);
      }
      if (payload.schoolName !== undefined) {
        writeConfig(ss, 'schoolName', payload.schoolName);
      }
      if (payload.folderId !== undefined) {
        writeConfig(ss, 'folderId', payload.folderId);
      }
      if (payload.schoolLogo !== undefined) {
        writeConfig(ss, 'schoolLogo', payload.schoolLogo);
      }
      if (payload.teacherSignature !== undefined) {
        writeConfig(ss, 'teacherSignature', payload.teacherSignature);
      }
      // บันทึก GAS URL ลงชีทโดยอัตโนมัติด้วย
      try {
        const webAppUrl = ScriptApp.getService().getUrl();
        if (webAppUrl) {
          writeConfig(ss, 'gasUrl', webAppUrl);
        }
      } catch (err) {}

      return corsResponse({ status: 'success', message: 'บันทึก config เรียบร้อยแล้ว' });
    }

    // --- [NEW] SAVE All Lessons: บันทึกแผนการสอนทั้งหมดของชั้นเรียน ---
    if (payload.action === 'saveAllLessons') {
      const sheetName = payload.sheetName;
      if (!sheetName) {
        return corsResponse({ status: 'error', message: 'ไม่พบชื่อแผ่นงาน (sheetName)' });
      }
      let sheet = ss.getSheetByName(sheetName);
      if (!sheet) {
        sheet = createAndSetupSheet(ss, sheetName);
      }
      
      // ล้างข้อมูลเดิมทั้งหมดตั้งแต่แถวที่ 2 ลงไป
      const lastRow = sheet.getLastRow();
      if (lastRow > 1) {
        sheet.deleteRows(2, lastRow - 1);
      }
      
      const lessons = payload.lessons || [];
      if (lessons.length > 0) {
        const headers = sheet.getDataRange().getDisplayValues()[0].map(h => String(h).trim());
        const rowsToAppend = [];
        
        lessons.forEach(p => {
          const newRow = new Array(headers.length).fill('');
          const fieldMappings = {
            'Week': p.week || '',
            'ครั้งที่': String(p.once || ''),
            'คาบที่สอน': p.period || '',
            'วว/ดด/ปป ที่สอน': p.date || '',
            'หน่วยการเรียนรู้ที่': p.unit || '',
            'เรื่อง': p.topic || '',
            'จำนวนคาบ': String(p.periodCount || ''),
            'มาตรฐานการเรียนรู้/ตัวชี้วัด': p.standard || '',
            'จุดประสงค์การเรียนรู้': p.objectives || '',
            'กิจกรรมการเรียนรู้': p.activities || '',
            'การวัดและประเมินผล': p.assessment || '',
            'สื่อการเรียนรู้': p.materials || '',
            'ผลการจัดการเรียนรู้': p.outcomes || '',
            'แนวทางแก้ปัญหา': p.solutions || '',
            'ลิงก์ไฟล์ PDF': p.pdfUrl || ''
          };
          headers.forEach((header, index) => {
            if (fieldMappings[header] !== undefined) {
              newRow[index] = fieldMappings[header];
            }
          });
          rowsToAppend.push(newRow);
        });
        
        if (rowsToAppend.length > 0) {
          sheet.getRange(2, 1, rowsToAppend.length, headers.length).setValues(rowsToAppend);
        }
      }
      
      return corsResponse({ status: 'success', message: 'บันทึกแผนการสอนทั้งหมดเรียบร้อยแล้ว' });
    }

    // --- SAVE Lesson Plan: บันทึกหลังการสอน + PDF ---
    const sheetName = payload.sheetName || 'Sheet1';
    let sheet = ss.getSheetByName(sheetName);
    if (!sheet) {
      sheet = createAndSetupSheet(ss, sheetName);
    }
    
    let values = sheet.getDataRange().getDisplayValues();
    let headers = values[0].map(h => String(h).trim());
    
    const onceValue = String(payload.once).trim();
    const onceColIndex = headers.indexOf('ครั้งที่');
    
    if (onceColIndex === -1) {
      return corsResponse({ status: 'error', message: 'ไม่พบคอลัมน์ชื่อ "ครั้งที่" ใน Google Sheets' });
    }
    
    let targetRowIndex = -1;
    for (let i = 1; i < values.length; i++) {
      if (String(values[i][onceColIndex]).trim() === onceValue) {
        targetRowIndex = i + 1;
        break;
      }
    }
    
    if (targetRowIndex === -1) {
      const newRow = new Array(headers.length).fill('');
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
        if (fieldMappings[header] !== undefined) newRow[index] = fieldMappings[header];
      });
      sheet.appendRow(newRow);
      values = sheet.getDataRange().getDisplayValues();
      targetRowIndex = values.length;
    } else {
      const outcomeColIndex = headers.indexOf('ผลการจัดการเรียนรู้');
      const solutionColIndex = headers.indexOf('แนวทางแก้ปัญหา');
      if (outcomeColIndex > -1) sheet.getRange(targetRowIndex, outcomeColIndex + 1).setValue(payload.outcomes || '');
      if (solutionColIndex > -1) sheet.getRange(targetRowIndex, solutionColIndex + 1).setValue(payload.solutions || '');
    }
    
    let pdfUrl = '';
    if (payload.pdfBase64) {
      let base64Data = payload.pdfBase64;
      if (base64Data.indexOf('base64,') > -1) {
        base64Data = base64Data.split('base64,')[1];
      }
      const decodedPdf = Utilities.base64Decode(base64Data);
      const pdfBlob = Utilities.newBlob(decodedPdf, 'application/pdf', payload.pdfFileName || ('Lesson_Plan_' + onceValue + '.pdf'));
      
      let folder;
      if (payload.folderId) {
        try {
          const parentFolder = DriveApp.getFolderById(payload.folderId);
          
          // 1. ค้นหาโฟลเดอร์สัปดาห์ เช่น "สัปดาห์ที่ 1"
          const weekNum = payload.week || '1';
          const weekName = 'สัปดาห์ที่ ' + weekNum;
          const weekFolders = parentFolder.getFoldersByName(weekName);
          let weekFolder;
          
          if (weekFolders.hasNext()) {
            weekFolder = weekFolders.next();
          } else {
            // หากไม่พบโฟลเดอร์สัปดาห์ที่ตรงเป๊ะ ให้ลองหาแบบไม่มีคำว่า "ที่" เช่น "สัปดาห์ 1"
            const altWeekName = 'สัปดาห์ ' + weekNum;
            const altWeekFolders = parentFolder.getFoldersByName(altWeekName);
            if (altWeekFolders.hasNext()) {
              weekFolder = altWeekFolders.next();
            } else {
              // หากยังไม่เจอ ให้สร้างโฟลเดอร์สัปดาห์นั้นขึ้นมาใหม่
              weekFolder = parentFolder.createFolder(weekName);
            }
          }
          
          // 2. ค้นหาโฟลเดอร์ชื่อครูผู้สอนด้านในสัปดาห์นั้น เช่น "ครูฮัมบาลีย์ วาจิ" หรือชื่อจากโปรไฟล์ครู
          const teacherName = (payload.teacherName || 'ครูฮัมบาลีย์ วาจิ').trim();
          const teacherFolders = weekFolder.getFoldersByName(teacherName);
          if (teacherFolders.hasNext()) {
            folder = teacherFolders.next();
          } else {
            folder = weekFolder.createFolder(teacherName);
          }
        }
        catch (e) {
          // หากเกิดข้อผิดพลาดในการเจาะโฟลเดอร์ ให้ย้อนกลับไปใช้โฟลเดอร์หลัก
          try { folder = DriveApp.getFolderById(payload.folderId); }
          catch (err) { folder = DriveApp.getRootFolder(); }
        }
      } else {
        const folders = DriveApp.getFoldersByName('iPlane_PDFs');
        folder = folders.hasNext() ? folders.next() : DriveApp.createFolder('iPlane_PDFs');
      }
      
      // ค้นหาและย้ายไฟล์เก่าที่มีชื่อเดียวกันลงถังขยะ เพื่อป้องกันการเกิดไฟล์ซ้ำซ้อนในโฟลเดอร์ Google Drive
      const fileName = pdfBlob.getName();
      const existingFiles = folder.getFilesByName(fileName);
      while (existingFiles.hasNext()) {
        const oldFile = existingFiles.next();
        oldFile.setTrashed(true);
      }
      
      const file = folder.createFile(pdfBlob);
      file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
      pdfUrl = file.getUrl();
      
      // [v3] อัปเดตลิงก์ PDF ให้ทุกห้องเรียนในวิชาเดียวกันโดยอัตโนมัติ เพื่อป้องกันการบันทึกทับและลิงก์เสีย
      const coursePrefix = sheetName.indexOf('_') > -1 ? sheetName.split('_')[0] : '';
      const allSheets = ss.getSheets();
      
      allSheets.forEach(function(s) {
        const sName = s.getName();
        let shouldUpdate = false;
        if (sName === sheetName) {
          shouldUpdate = true;
        } else if (coursePrefix && sName.indexOf(coursePrefix + '_') === 0) {
          shouldUpdate = true;
        }
        
        if (shouldUpdate) {
          const sValues = s.getDataRange().getDisplayValues();
          if (sValues.length > 0) {
            const sHeaders = sValues[0].map(function(h) { return String(h).trim(); });
            const sOnceCol = sHeaders.indexOf('ครั้งที่');
            let sPdfCol = sHeaders.indexOf('ลิงก์ไฟล์ PDF');
            
            if (sPdfCol === -1) {
              sPdfCol = sHeaders.length;
              s.getRange(1, sPdfCol + 1).setValue('ลิงก์ไฟล์ PDF');
            }
            
            if (sOnceCol > -1) {
              for (let i = 1; i < sValues.length; i++) {
                if (String(sValues[i][sOnceCol]).trim() === onceValue) {
                  s.getRange(i + 1, sPdfCol + 1).setValue(pdfUrl);
                  break;
                }
              }
            }
          }
        }
      });
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

/**
 * ฟังก์ชันทดสอบการทำงาน
 */
function testRun() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  Logger.log('--- เริ่มการทดสอบ iPlane Backend v2 ---');
  
  // ทดสอบ CONFIG sheet
  const configSheet = getOrCreateConfigSheet(ss);
  writeConfig(ss, 'testKey', 'testValue_' + new Date().getTime());
  const config = readAllConfig(ss);
  Logger.log('Config sheet data: ' + JSON.stringify(config));
  
  // ทดสอบ Lesson sheet
  const testSheetName = 'ทดสอบ_v2';
  let sheet = ss.getSheetByName(testSheetName);
  if (!sheet) {
    sheet = createAndSetupSheet(ss, testSheetName);
    Logger.log('สร้างแผ่นงานทดสอบ: ' + testSheetName);
  }
  Logger.log('เสร็จสิ้นการทดสอบโดยสมบูรณ์!');
}
