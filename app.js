/**
 * iPlane - Application Core Logic (Redesigned with advanced settings)
 */

// 1. Initial Default Dataset (จากตารางข้อมูลวิชาคณิตศาสตร์ ม.5)
const DEFAULT_LESSON_PLANS = [
  {
    week: "1",
    once: "1",
    period: "6-7",
    date: "12/05/2568",
    unit: "1",
    topic: "ความหมายเลขยกกำลัง",
    periodCount: "2",
    standard: "ค1.1 ม.5/1\nเข้าใจความหมายและใช้สมบัติเกี่ยวกับการบวก การคูณ การเท่ากัน และการไม่เท่ากันของจํานวนจริงในรูปกรณฑ์และจํานวนจริงในรูปเลขยกกําลังที่มี เลขชี้กําลังเป็นจํานวนตรรกยะ",
    objectives: "- ทราบถึงรายละเอียดรายวิชา ตลอดจนแนวทางการสัดและประเมินผล\n- รู้จัก และนำความสามารถของ ChatGPT ไปใช้ประโยชน์ได้",
    activities: "ขั้นนำเข้าสู่บทเรียน\n- ครูทักทายนักเรียน แนะนำรายวิชา ตลอดจนชี้แจ้งแนวการวัดและประเมินผล\n\nขั้นสอน\n- ครูตั้งคำถามนักเรียนว่าเลขยกกำลังคืออะไร ? \n- ครูแนะนำว่าในยุคปัจจุบันเราสามารถใช้ AI ในการสืบค้นสิ่งที่ต้องการหาคำตอบได้\n- ครูแนะนำการใช้งาน ChatGPT และให้นักเรียนช่วยกันหาคำตอบข้างต้น\n\nขั้นสรุป\n- นักเรียนและครูร่วมกันสรุปเกี่ยวกับความหมายของเลขยกกำลัง",
    assessment: "- สังเกตจากการสอบถามระหว่างเรียน",
    materials: "- หนังสือเรียนคณิตศาสตร์พื้นฐาน ม.5",
    outcomes: "นักเรียนเข้าใจเนื้อหาได้ดี แต่บางส่วนยังสับสนในขั้นตอนการแก้โจทย์ที่ซับซ้อน",
    solutions: "ครูควรเพิ่มเติมการอธิบายด้วยสื่อวิดีโอหรือสื่ออินเทอร์แอคทีฟ"
  },
  {
    week: "1",
    once: "2",
    period: "2-3",
    date: "15/05/2568",
    unit: "1",
    topic: "เลขยกกำลังที่มีเลขชี้กำลังเป็นจำนวนเต็ม",
    periodCount: "2",
    standard: "ค1.1 ม.5/1\nเข้าใจความหมายและใช้สมบัติเกี่ยวกับการบวก การคูณ การเท่ากัน และการไม่เท่ากันของจํานวนจริงในรูปกรณฑ์และจํานวนจริงในรูปเลขยกกําลังที่มี เลขชี้กําลังเป็นจํานวนตรรกยะ",
    objectives: "1. นักเรียนสามารถนิยามและเข้าใจความหมายของเลขยกกำลังที่มีเลขชี้กำลังเป็นจำนวนเต็มได้\n2. นักเรียนสามารถใช้สมบัติของเลขยกกำลังที่มีเลขชี้กำลังเป็นจำนวนเต็มในการคำนวณได้",
    activities: "ขั้นนำเข้าสู่บทเรียน\n- ครูให้ตัวแทนนักเรียนออกนำเสนอความหมายของเลขยกกำลังตามที่ได้ไปหามา\n\nขั้นสอน\n- ครูยกตัวอย่างเลขยกกำลังมา 1 ตัวอย่าง แล้วให้นักเรียนช่วยกันอธิบายความหมายพร้อมคำตอบ\n- ครูแนะนำบทนิยามที่ 1 ของเลขยกกำลังในหนังสือหน้าที่ 3\n- นักเรียนร่วมกันทำแบบฝึกทักษะหน้าที่ 1 ข้อที่ 1 โดยมีครูคอยให้คำแนะนำ\n\nขั้นสรุป\n- นักเรียนและครูร่วมกันสรุปเกี่ยวกับความหมายและสมบัติของเลขยกกำลัง",
    assessment: "- สังเกตจากการสอบถามระหว่างเรียน\n- ตรวจแบบฝึกทักษะ หน้าที่ 1 โดยผ่านเกณฑ์ 70% ขึ้นไป",
    materials: "- หนังสือเรียนคณิตศาสตร์พื้นฐาน ม.5\n- แบบฝึกทักษะ เรื่องเลขยกกำลัง",
    outcomes: "นักเรียนสามารถตอบคำถามในชั้นเรียนได้ดีมาก แต่ยังมีปัญหาเล็กน้อยเกี่ยวกับการคำนวณอย่างรวดเร็ว",
    solutions: "จัดกิจกรรมเสริมที่เน้นการฝึกคิดเร็ว คำนวณเร็ว เพื่อเสริมทักษะการคำนวณ"
  },
  {
    week: "2",
    once: "3",
    period: "6-7",
    date: "19/05/2568",
    unit: "1",
    topic: "เลขยกกำลังที่มีเลขชี้กำลังเป็นจำนวนเต็ม (ต่อ)",
    periodCount: "2",
    standard: "ค1.1 ม.5/1\nเข้าใจความหมายและใช้สมบัติเกี่ยวกับการบวก การคูณ การเท่ากัน และการไม่เท่ากันของจํานวนจริงในรูปกรณฑ์และจํานวนจริงในรูปเลขยกกําลังที่มี เลขชี้กําลังเป็นจํานวนตรรกยะ",
    objectives: "1. นักเรียนสามารถใช้สมบัติของเลขยกกำลังที่มีเลขชี้กำลังเป็นจำนวนเต็มในการคำนวณได้\n2. นักเรียนสามารถบวก ลบ คูณ และหารเลขยกกำลังที่มีเลขชี้กำลังเป็นจำนวนเต็มได้",
    activities: "ขั้นนำเข้าสู่บทเรียน\n- ครูให้นักเรียนกันทบทวนเรื่องสมบัติของเลขยกกำลัง\n\nขั้นสอน\n- ครูยกตัวอย่างเลขยกกำลังมา 2-3 ตัวอย่าง เพื่ออธิบายประกอบเรื่องเลขยกกำลังที่มีเลขชี้กำลังเป็นจำนวนเต็มบวก\n- ครูแนะนำทฤษฎีบทที่ 1 ของเลขยกกำลังในหนังสือหน้าที่ 4 นักเรียนร่วมกันทำแบบฝึกทักษะหน้าที่ 1 ข้อที่ 2 โดยมีครูคอยให้คำแนะนำ\n\nขั้นสรุป\n- นักเรียนและครูร่วมกันสรุปเกี่ยวกับความหมายและสมบัติของเลขยกกำลัง",
    assessment: "- สังเกตจากการสอบถามระหว่างเรียน\n- ตรวจแบบฝึกทักษะ หน้าที่ 1 โดยผ่านเกณฑ์ 70% ขึ้นไป",
    materials: "- หนังสือเรียนคณิตศาสตร์พื้นฐาน ม.5\n- แบบฝึกทักษะ เรื่องเลขยกกำลัง",
    outcomes: "นักเรียนมีส่วนร่วมในกิจกรรมดี แต่บางคนยังขาดความมั่นใจในการนำเสนอผลงาน",
    solutions: "ครูควรส่งเสริมกิจกรรมกลุ่มย่อย เพื่อช่วยให้นักเรียนมีความมั่นใจในการแสดงออกมากขึ้น"
  },
  {
    week: "2",
    once: "4",
    period: "2-3",
    date: "22/05/2568",
    unit: "1",
    topic: "เลขยกกำลังที่มีเลขชี้กำลังเป็นจำนวนเต็ม (ต่อ)",
    periodCount: "2",
    standard: "ค1.1 ม.5/1\nเข้าใจความหมายและใช้สมบัติเกี่ยวกับการบวก การคูณ การเท่ากัน และการไม่เท่ากันของจํานวนจริงในรูปกรณฑ์และจํานวนจริงในรูปเลขยกกําลังที่มี เลขชี้กําลังเป็นจํานวนตรรกยะ",
    objectives: "1. นักเรียนสามารถบวก ลบ คูณ และหารเลขยกกำลังที่มีเลขชี้กำลังเป็นจำนวนเต็มได้\n2. นักเรียนสามารถใช้กฎของเลขยกกำลังเพื่อแก้สมการที่เกี่ยวข้องกับเลขยกกำลังได้",
    activities: "ขั้นนำเข้าสู่บทเรียน\n- ครูให้นักเรียนกันทบทวนเรื่องเลขยกกำลังที่มีเลขชี้กำลังเป็นจำนวนเต็มบวก\n\nขั้นสอน\n- ครูยกตัวอย่างเลขยกตัวอย่างในหนังสือหน้า 5 เพื่ออธิบายประกอบเรื่องเลขยกกำลังที่มีเลขชี้กำลังเป็นจำนวนเต็มลบ\n- นักเรียนร่วมกันทำแบบฝึกทักษะหน้าที่ 2 ข้อที่ 1-4 โดยมีครูคอยให้คำแนะนำ\n\nขั้นสรุป\n- นักเรียนและครูร่วมกันสรุปเกี่ยวกับเรื่องเลขยกกำลังที่มีเลขชี้กำลังเป็นจำนวนเต็มลบ",
    assessment: "- สังเกตจากการสอบถามระหว่างเรียน\n- ตรวจแบบฝึกทักษะ หน้าที่ 2 โดยผ่านเกณฑ์ 70% ขึ้นไป",
    materials: "- หนังสือเรียนคณิตศาสตร์พื้นฐาน ม.5\n- แบบฝึกทักษะ เรื่องเลขยกกำลัง",
    outcomes: "นักเรียนส่วนใหญ่ทำแบบฝึกหัดได้ถูกต้อง แต่ยังพบปัญหาในการตีความโจทย์ประยุกต์",
    solutions: "ให้โจทย์เสริมที่เน้นการวิเคราะห์และตีความโจทย์เพื่อพัฒนาทักษะเชิงประยุกต์"
  },
  {
    week: "3",
    once: "5",
    period: "6-7",
    date: "26/05/2568",
    unit: "1",
    topic: "เลขยกกำลังที่มีเลขชี้กำลังเป็นจำนวนเต็ม (ต่อ)",
    periodCount: "2",
    standard: "ค1.1 ม.5/1\nเข้าใจความหมายและใช้สมบัติเกี่ยวกับการบวก การคูณ การเท่ากัน และการไม่เท่ากันของจํานวนจริงในรูปกรณฑ์และจํานวนจริงในรูปเลขยกกําลังที่มี เลขชี้กําลังเป็นจํานวนตรรกยะ",
    objectives: "นักเรียนสามารถใช้กฎของเลขยกกำลังเพื่อแก้สมการที่เกี่ยวข้องกับเลขยกกำลังได้",
    activities: "ขั้นนำเข้าสู่บทเรียน\n- ครูให้นักเรียนกันทบทวนเเรื่องเลขยกกำลังที่มีเลขชี้กำลังเป็นจำนวนเต็มลบ\n\nขั้นสอน\n- ครูยกตัวอย่างเลขยกกำลังมา 2-3 ตัวอย่าง เพื่ออธิบายประกอบเรื่องเลขยกกำลังที่มีเลขชี้กำลังเป็นจำนวนเต็มศูนย์\n- ครูแนะนำสมบัติของเลขยกกำลังในหนังสือหน้าที่ 3\n- นักเรียนร่วมกันทำแบบฝึกทักษะหน้าที่ 2 ข้อที่ 5-6 โดยมีครูคอยให้คำแนะนำ\n\nขั้นสรุป\n- นักเรียนและครูร่วมกันสรุปเกี่ยวกับเลขยกกำลังที่มีเลขชี้กำลังเป็นจำนวนเต็มศูนย์",
    assessment: "- สังเกตจากการสอบถามระหว่างเรียน\n- ตรวจแบบฝึกทักษะ หน้าที่ 2 โดยผ่านเกณฑ์ 70% ขึ้นไป",
    materials: "- หนังสือเรียนคณิตศาสตร์พื้นฐาน ม.5\n- แบบฝึกทักษะ เรื่องเลขยกกำลัง",
    outcomes: "นักเรียนเข้าใจวิธีการคำนวณ แต่มีปัญหาในการนำไปใช้ในโจทย์เชิงประยุกต์ที่ซับซ้อนกว่า",
    solutions: "เพิ่มการฝึกทำโจทย์ที่มีความหลากหลายและซับซ้อนมากขึ้น"
  },
  {
    week: "3",
    once: "6",
    period: "2-3",
    date: "29/05/2568",
    unit: "1",
    topic: "เลขยกกำลังที่มีเลขชี้กำลังเป็นจำนวนเต็ม (ต่อ)",
    periodCount: "2",
    standard: "ค1.1 ม.5/1\nเข้าใจความหมายและใช้สมบัติเกี่ยวกับการบวก การคูณ การเท่ากัน และการไม่เท่ากันของจํานวนจริงในรูปกรณฑ์และจํานวนจริงในรูปเลขยกกําลังที่มี เลขชี้กําลังเป็นจํานวนตรรกยะ",
    objectives: "นักเรียนสามารถประยุกต์ใช้เลขยกกำลังที่มีเลขชี้กำลังเป็นจำนวนเต็มในการแก้ปัญหาได้",
    activities: "ขั้นนำเข้าสู่บทเรียน\n- ครูให้นักเรียนกันทบทวนเรื่องเลขยกกำลังที่มีเลขชี้กำลังเป็นจำนวนเต็มศูนย์\n\nขั้นสอน\n- ครูยกตัวอย่างเลขยกกำลังมา 2-3 ตัวอย่าง แล้วให้นักเรียนช่วยกันอธิบายความหมายพร้อมคำตอบ\n- นักเรียนร่วมกันทำแบบฝึกทักษะหน้าที่ 2 ข้อที่ 7-8 โดยมีครูคอยให้คำแนะนำ\n\nขั้นสรุป\n- นักเรียนและครูร่วมกันสรุปเกี่ยวกับเลขยกกำลังที่มีเลขชี้กำลังเป็นจำนวนเต็ม\n- ครูแนะนำแนวทางการทดสอบย่อยครั้งที่ 1",
    assessment: "- สังเกตจากการสอบถามระหว่างเรียน\n- ตรวจแบบฝึกทักษะ หน้าที่ 2 โดยผ่านเกณฑ์ 70% ขึ้นไป",
    materials: "- หนังสือเรียนคณิตศาสตร์พื้นฐาน ม.5\n- แบบฝึกทักษะ เรื่องเลขยกกำลัง",
    outcomes: "นักเรียนสามารถสรุปหลักการสำคัญได้ชัดเจน แต่มีปัญหาเล็กน้อยในการอธิบายเหตุผลอย่างละเอียด",
    solutions: "เน้นกิจกรรมที่ให้นักเรียนอธิบายแนวคิดให้กับเพื่อนเพื่อฝึกทักษะการสื่อสารทางคณิตศาสตร์"
  },
  {
    week: "4",
    once: "7",
    period: "6-7",
    date: "02/06/2568",
    unit: "1",
    topic: "เลขยกกำลังที่มีเลขชี้กำลังเป็นจำนวนเต็ม (ต่อ)",
    periodCount: "2",
    standard: "ค1.1 ม.5/1\nเข้าใจความหมายและใช้สมบัติเกี่ยวกับการบวก การคูณ การเท่ากัน และการไม่เท่ากันของจํานวนจริงในรูปกรณฑ์และจํานวนจริงในรูปเลขยกกําลังที่มี เลขชี้กําลังเป็นจํานวนตรรกยะ",
    objectives: "นักเรียนสามารถประยุกต์ใช้เลขยกกำลังที่มีเลขชี้กำลังเป็นจำนวนเต็มในการแก้ปัญหาได้",
    activities: "ขั้นนำเข้าสู่บทเรียน\n- ครูให้นักเรียนกันทบทวนเรื่องเลขยกกำลังที่มีเลขชี้กำลังเป็นจำนวนเต็มศูนย์\n\nขั้นสอน\n- ครูยกตัวอย่างเลขยกกำลังมา 2-3 ตัวอย่าง แล้วให้นักเรียนช่วยกันอธิบายความหมายพร้อมคำตอบ\n- นักเรียนร่วมกันทำแบบฝึกทักษะหน้าที่ 2 ข้อที่ 7-8 โดยมีครูคอยให้คำแนะนำ\n\nขั้นสรุป\n- นักเรียนและครูร่วมกันสรุปเกี่ยวกับเลขยกกำลังที่มีเลขชี้กำลังเป็นจำนวนเต็ม\n- ครูแนะนำแนวทางการทดสอบย่อยครั้งที่ 1",
    assessment: "- สังเกตจากการสอบถามระหว่างเรียน\n- ตรวจแบบฝึกทักษะ หน้าที่ 2 โดยผ่านเกณฑ์ 70% ขึ้นไป",
    materials: "- หนังสือเรียนคณิตศาสตร์พื้นฐาน ม.5\n- แบบฝึกทักษะ เรื่องเลขยกกำลัง",
    outcomes: "นักเรียนสามารถสรุปหลักการสำคัญได้ชัดเจน แต่มีปัญหาเล็กน้อยในการอธิบายเหตุผลอย่างละเอียด",
    solutions: "เน้นกิจกรรมที่ให้นักเรียนอธิบายแนวคิดให้กับเพื่อนเพื่อฝึกทักษะการสื่อสารทางคณิตศาสตร์"
  },
  {
    week: "4",
    once: "8",
    period: "2-3",
    date: "05/06/2568",
    unit: "1",
    topic: "รากที่ n ของจำนวนจริง",
    periodCount: "2",
    standard: "ค1.1 ม.5/1\nเข้าใจความหมายและใช้สมบัติเกี่ยวกับการบวก การคูณ การเท่ากัน และการไม่เท่ากันของจํานวนจริงในรูปกรณฑ์และจํานวนจริงในรูปเลขยกกําลังที่มี เลขชี้กําลังเป็นจํานวนตรรกยะ",
    objectives: "1. นักเรียนสามารถนิยามและเข้าใจความหมายของรากที่ n ของจำนวนจริงได้\n2. นักเรียนสามารถคำนวณรากที่ n ของจำนวนจริงได้เมื่อ n เป็นจำนวนนับที่มากกว่า 1",
    activities: "ขั้นนำเข้าสู่บทเรียน\n- ครูให้นักเรียนกันทบทวนเรื่องเลขยกกำลังที่มีเลขชี้กำลังเป็นจำนวนเต็ม\n\nขั้นสอน\n- ครูยกตัวอย่างสัญลักษณ์ รากที่ n มา 2-3 ข้อ แล้วให้นักเรียนช่วยกันบอกความหมาย โดยมีครูคอยแนะนำ และสรุปความหมาย\n- ครูให้นักเรียนร่วมกันทำความเข้าใจ บทนิยามของรากที่ n ในหนังสือเรียนหน้าที่ 8\n- นักเรียนร่วมกันทำแบบฝึกทักษะหน้าที่ 3 โดยมีครูคอยให้คำแนะนำ\n\nขั้นสรุป\n- นักเรียนและครูร่วมกันสรุปเกี่ยวกับความหมายของรากที่ n",
    assessment: "- สังเกตจากการสอบถามระหว่างเรียน\n- ตรวจแบบฝึกทักษะ หน้าที่ 3 โดยผ่านเกณฑ์ 70% ขึ้นไป",
    materials: "- หนังสือเรียนคณิตศาสตร์พื้นฐาน ม.5\n- แบบฝึกทักษะ เรื่องเลขยกกำลัง",
    outcomes: "นักเรียนสามารถตอบคำถามในชั้นเรียนได้ดีมาก แต่ยังมีปัญหาเล็กน้อยเกี่ยวกับการคำนวณอย่างรวดเร็ว",
    solutions: "จัดกิจกรรมเสริมที่เน้นการฝึกคิดเร็ว คำนวณเร็ว เพื่อเสริมทักษะการคำนวณ"
  },
  {
    week: "5",
    once: "9",
    period: "6-7",
    date: "09/06/2568",
    unit: "1",
    topic: "รากที่ n ของจำนวนจริง (ต่อ)",
    periodCount: "2",
    standard: "ค1.1 ม.5/1\nเข้าใจความหมายและใช้สมบัติเกี่ยวกับการบวก การคูณ การเท่ากัน และการไม่เท่ากันของจํานวนจริงในรูปกรณฑ์และจํานวนจริงในรูปเลขยกกําลังที่มี เลขชี้กําลังเป็นจํานวนตรรกยะ",
    objectives: "1. นักเรียนสามารถนิยามและเข้าใจความหมายของรากที่ n ของจำนวนจริงได้\n2. นักเรียนสามารถคำนวณรากที่ n ของจำนวนจริงได้เมื่อ n เป็นจำนวนนับที่มากกว่า 1",
    activities: "ขั้นนำเข้าสู่บทเรียน\n- ครูให้นักเรียนกันทบทวนเรื่องเลขยกกำลังที่มีเลขชี้กำลังเป็นจำนวนเต็ม\n\nขั้นสอน\n- ครูยกตัวอย่างสัญลักษณ์ รากที่ n มา 2-3 ข้อ แล้วให้นักเรียนช่วยกันบอกความหมาย โดยมีครูคอยแนะนำ และสรุปความหมาย\n- ครูให้นักเรียนร่วมกันทำความเข้าใจ บทนิยาม 3 ของรากที่ n ในหนังสือเรียนหน้าที่ 8\n- นักเรียนร่วมกันทำแบบฝึกทักษะหน้าที่ 3 โดยมีครูคอยให้คำแนะนำ\n\nขั้นสรุป\n- นักเรียนและครูร่วมกันสรุปเกี่ยวกับความหมายของรากที่ n",
    assessment: "- สังเกตจากการสอบถามระหว่างเรียน\n- ตรวจแบบฝึกทักษะ หน้าที่ 3 โดยผ่านเกณฑ์ 70% ขึ้นไป",
    materials: "- หนังสือเรียนคณิตศาสตร์พื้นฐาน ม.5\n- แบบฝึกทักษะ เรื่องเลขยกกำลัง",
    outcomes: "ไม่มีการเรียนการสอน เนื่องจากหยุดวันรายอ",
    solutions: "-"
  },
  {
    week: "5",
    once: "10",
    period: "2-3",
    date: "12/06/2568",
    unit: "1",
    topic: "รากที่ n ของจำนวนจริง (ต่อ)",
    periodCount: "2",
    standard: "ค1.1 ม.5/1\nเข้าใจความหมายและใช้สมบัติเกี่ยวกับการบวก การคูณ การเท่ากัน และการไม่เท่ากันของจํานวนจริงในรูปกรณฑ์และจํานวนจริงในรูปเลขยกกําลังที่มี เลขชี้กําลังเป็นจํานวนตรรกยะ",
    objectives: "นักเรียนสามารถใช้สมบัติของรากที่ n ในการแก้สมการที่เกี่ยวข้องได้",
    activities: "ขั้นนำเข้าสู่บทเรียน\n- ครูให้นักเรียนกันทบทวนเรื่องความหมายของรากที่ n \n\nขั้นสอน\n- ครูแนะนำเทคนิคการการคำนวณหาค่าของรากที่ n\n- ครูยกตัวอย่างรากที่ n มา 2-3 ข้อ แล้วให้นักเรียนช่วยกันหาคำตอบ โดยมีครูคอยแนะนำ\n- นักเรียนร่วมกันทำแบบฝึกทักษะหน้าที่ 4 โดยมีครูคอยให้คำแนะนำ\n\nขั้นสรุป\n- นักเรียนและครูร่วมกันสรุปเกี่ยวกับการคำนวณหาค่าของรากที่ n",
    assessment: "- สังเกตจากการสอบถามระหว่างเรียน\n- ตรวจแบบฝึกทักษะ หน้าที่ 4 โดยผ่านเกณฑ์ 70% ขึ้นไป",
    materials: "- หนังสือเรียนคณิตศาสตร์พื้นฐาน ม.5\n- แบบฝึกทักษะ เรื่องเลขยกกำลัง",
    outcomes: "นักเรียนส่วนใหญ่ทำแบบฝึกหัดได้ถูกต้อง แต่ยังพบปัญหาในการตีความโจทย์ประยุกต์",
    solutions: "ให้โจทย์เสริมที่เน้นการวิเคราะห์และตีความโจทย์เพื่อพัฒนาทักษะเชิงประยุกต์"
  },
  {
    week: "6",
    once: "11",
    period: "6-7",
    date: "16/06/2568",
    unit: "1",
    topic: "รากที่ n ของจำนวนจริง (ต่อ)",
    periodCount: "2",
    standard: "ค1.1 ม.5/1\nเข้าใจความหมายและใช้สมบัติเกี่ยวกับการบวก การคูณ การเท่ากัน และการไม่เท่ากันของจํานวนจริงในรูปกรณฑ์และจํานวนจริงในรูปเลขยกกําลังที่มี เลขชี้กําลังเป็นจํานวนตรรกยะ",
    objectives: "นักเรียนสามารถเปรียบเทียบค่าของรากที่ n ของจำนวนจริงได้",
    activities: "ขั้นนำเข้าสู่บทเรียน\n- ครูให้นักเรียนกันทบทวนเรื่องความหมายของรากที่ n \n\nขั้นสอน\n- ครูแนะนำเทคนิคการการคำนวณหาค่าของรากที่ n\n- ครูยกตัวอย่างรากที่ n มา 2-3 ข้อ แล้วให้นักเรียนช่วยกันหาคำตอบ โดยมีครูคอยแนะนำ\n- นักเรียนร่วมกันทำแบบฝึกทักษะหน้าที่ 5 โดยมีครูคอยให้คำแนะนำ\n\nขั้นสรุป\n- นักเรียนและครูร่วมกันสรุปเกี่ยวกับการคำนวณหาค่าของรากที่ n",
    assessment: "- สังเกตจากการสอบถามระหว่างเรียน\n- ตรวจแบบฝึกทักษะ หน้าที่ 5 โดยผ่านเกณฑ์ 70% ขึ้นไป",
    materials: "- หนังสือเรียนคณิตศาสตร์พื้นฐาน ม.5\n- แบบฝึกทักษะ เรื่องเลขยกกำลัง",
    outcomes: "นักเรียนเข้าใจวิธีการคำนวณ แต่มีปัญหาในการนำไปใช้ในโจทย์เชิงประยุกต์ที่ซับซ้อนกว่า",
    solutions: "เพิ่มการฝึกทำโจทย์ที่มีความหลากหลายและซับซ้อนมากขึ้น"
  },
  {
    week: "6",
    once: "12",
    period: "2-3",
    date: "19/06/2568",
    unit: "1",
    topic: "รากที่ n ของจำนวนจริง (ต่อ)",
    periodCount: "2",
    standard: "ค1.1 ม.5/1\nเข้าใจความหมายและใช้สมบัติเกี่ยวกับการบวก การคูณ การเท่ากัน และการไม่เท่ากันของจํานวนจริงในรูปกรณฑ์และจํานวนจริงในรูปเลขยกกําลังที่มี เลขชี้กําลังเป็นจํานวนตรรกยะ",
    objectives: "นักเรียนสามารถเปรียบเทียบค่าของรากที่ n ของจำนวนจริงได้",
    activities: "ขั้นนำเข้าสู่บทเรียน\n- ครูให้นักเรียนกันทบทวนเรื่องความแตกต่างระหว่างค่าของรากที่ n กับ ค่าหลักของราก\n\nขั้นสอน\n- ครูเสริมว่า ค่าของรากที่ n ไม่ควรมีส่วนที่ติดราก และเราสามารถกำจัดรากได้โดยการคอนจูเกจ\n- ครูยกตัวอย่างรากที่ n มา 2-3 ข้อ แสดงการกำจัดรากได้โดยการคอนจูเกจ\n- นักเรียนร่วมกันทำแบบฝึกทักษะหน้าที่ 5 ข้อย่อย 2.3 ข้อ 1 - 4 โดยมีครูคอยให้คำแนะนำ\n\nขั้นสรุป\n- นักเรียนและครูร่วมกันสรุปเกี่ยวกับการแก้ปัญหาส่วนที่ติดรากได้โดยการคอนจูเกจ",
    assessment: "- สังเกตจากการสอบถามระหว่างเรียน\n- ตรวจแบบฝึกทักษะ หน้าที่ 5 โดยผ่านเกณฑ์ 70% ขึ้นไป",
    materials: "- หนังสือเรียนคณิตศาสตร์พื้นฐาน ม.5\n- แบบฝึกทักษะ เรื่องเลขยกกำลัง",
    outcomes: "นักเรียนสามารถสรุปหลักการสำคัญได้ชัดเจน แต่มีปัญหาเล็กน้อยในการอธิบายเหตุผลอย่างละเอียด",
    solutions: "เน้นกิจกรรมที่ให้นักเรียนอธิบายแนวคิดให้กับเพื่อนเพื่อฝึกทักษะการสื่อสารทางคณิตศาสตร์"
  },
  {
    week: "7",
    once: "13",
    period: "6-7",
    date: "23/06/2568",
    unit: "1",
    topic: "รากที่ n ของจำนวนจริง (ต่อ)",
    periodCount: "2",
    standard: "ค1.1 ม.5/1\nเข้าใจความหมายและใช้สมบัติเกี่ยวกับการบวก การคูณ การเท่ากัน และการไม่เท่ากันของจํานวนจริงในรูปกรณฑ์และจํานวนจริงในรูปเลขยกกําลังที่มี เลขชี้กําลังเป็นจํานวนตรรกยะ",
    objectives: "นักเรียนสามารถประยุกต์ใช้รากที่ n ในการแก้ปัญหาทางคณิตศาสตร์ได้",
    activities: "ขั้นนำเข้าสู่บทเรียน\n- ครูให้นักเรียนกันทบทวนเรื่องความแตกต่างระหว่างค่าของรากที่ n กับ ค่าหลักของราก\n\nขั้นสอน\n- ครูเสริมว่า ค่าของรากที่ n ไม่ควรมีส่วนที่ติดราก และเราสามารถกำจัดรากได้โดยการคอนจูเกจ\n- ครูยกตัวอย่างรากที่ n มา 2-3 ข้อ แสดงการกำจัดรากได้โดยการคอนจูเกจ\n- นักเรียนร่วมกันทำแบบฝึกทักษะหน้าที่ 5 ข้อย่อย 2.3 ข้อ 5 - 10 โดยมีครูคอยให้คำแนะนำ\n\nขั้นสรุป\n- นักเรียนและครูร่วมกันสรุปเกี่ยวกับการแก้ปัญหาส่วนที่ติดรากได้โดยการคอนจูเกจ",
    assessment: "- สังเกตจากการสอบถามระหว่างเรียน\n- ตรวจแบบฝึกทักษะ หน้าที่ 5-6 โดยผ่านเกณฑ์ 70% ขึ้นไป",
    materials: "- หนังสือเรียนคณิตศาสตร์พื้นฐาน ม.5\n- แบบฝึกทักษะ เรื่องเลขยกกำลัง",
    outcomes: "นักเรียนเข้าใจเนื้อหาได้ดี แต่บางส่วนยังสับสนในขั้นตอนการแก้โจทย์ที่ซับซ้อน",
    solutions: "ครูควรเพิ่มเติมการอธิบายด้วยสื่อวิดีโอหรือสื่ออินเทอร์แอคทีฟ"
  },
  {
    week: "7",
    once: "14",
    period: "2-3",
    date: "26/06/2568",
    unit: "2",
    topic: "เลขยกกำลังที่มีเลขชี้กำลังเป็นจำนวนตรรกยะ",
    periodCount: "2",
    standard: "ค1.1 ม.5/1\nเข้าใจความหมายและใช้สมบัติเกี่ยวกับการบวก การคูณ การเท่ากัน และการไม่เท่ากันของจํานวนจริงในรูปกรณฑ์และจํานวนจริงในรูปเลขยกกําลังที่มี เลขชี้กําลังเป็นจํานวนตรรกยะ",
    objectives: "1. นักเรียนสามารถนิยามและเข้าใจความหมายของเลขยกกำลังที่มีเลขชี้กำลังเป็นจำนวนตรรกยะได้\n2. นักเรียนสามารถใช้สมบัติของเลขยกกำลังที่มีเลขชี้กำลังเป็นจำนวนตรรกยะในการคำนวณได้",
    activities: "ขั้นนำเข้าสู่บทเรียน\n- ครูให้นักเรียนกันร่วมกันอธิบายความแตกต่างระหว่างเลขยกกำลังที่มีเลขชี้กำลังเป็นจำนวนเต็มกับรากที่ n\n\nขั้นสอน\n- ครูเสริมว่าเราสามารถเขียนรากที่ n ให้อยู่ในรูปเลขยกกำลังได้ จะกลายเป็นเลขยกกำลังที่มีเลขชี้กำลังเป็นจำนวนตรรกยะ (เศษส่วน) \n- ครูยกตัวอย่างมา 2-3 ข้อ \n- นักเรียนร่วมกันทำแบบฝึกทักษะหน้าที่ 6 ข้อ 1 ใหญ่ ข้อ 1 - 6 ย่อย โดยมีครูคอยให้คำแนะนำ\n\nขั้นสรุป\n- นักเรียนและครูร่วมกันสรุปเกี่ยวกับเลขยกกำลังที่มีเลขชี้กำลังเป็นจำนวนตรรกยะ (เศษส่วน) ",
    assessment: "- สังเกตจากการสอบถามระหว่างเรียน\n- ตรวจแบบฝึกทักษะ หน้าที่ 7 โดยผ่านเกณฑ์ 70% ขึ้นไป",
    materials: "- หนังสือเรียนคณิตศาสตร์พื้นฐาน ม.5\n- แบบฝึกทักษะ เรื่องเลขยกกำลัง",
    outcomes: "นักเรียนสามารถตอบคำถามในชั้นเรียนได้ดีมาก แต่ยังมีปัญหาเล็กน้อยเกี่ยวกับการคำนวณอย่างรวดเร็ว",
    solutions: "จัดกิจกรรมเสริมที่เน้นการฝึกคิดเร็ว คำนวณเร็ว เพื่อเสริมทักษะการคำนวณ"
  },
  {
    week: "8",
    once: "15",
    period: "6-7",
    date: "30/06/2568",
    unit: "2",
    topic: "เลขยกกำลังที่มีเลขชี้กำลังเป็นจำนวนตรรกยะ (ต่อ)",
    periodCount: "2",
    standard: "ค1.1 ม.5/1\nเข้าใจความหมายและใช้สมบัติเกี่ยวกับการบวก การคูณ การเท่ากัน และการไม่เท่ากันของจํานวนจริงในรูปกรณฑ์และจํานวนจริงในรูปเลขยกกําลังที่มี เลขชี้กําลังเป็นจํานวนตรรกยะ",
    objectives: "นักเรียนสามารถบวก ลบ คูณ และหารเลขยกกำลังที่มีเลขชี้กำลังเป็นจำนวนตรรกยะได้",
    activities: "ขั้นนำเข้าสู่บทเรียน\n- ครูให้นักเรียนกันร่วมกันอธิบายความแตกต่างระหว่างเลขยกกำลังที่มีเลขชี้กำลังเป็นจำนวนเต็มกับรากที่ n\n\nขั้นสอน\n- ครูเสริมว่าเราสามารถเขียนรากที่ n ให้อยู่ในรูปเลขยกกำลังได้ จะกลายเป็นเลขยกกำลังที่มีเลขชี้กำลังเป็นจำนวนตรรกยะ (เศษส่วน) \n- ครูยกตัวอย่างมา 2-3 ข้อ \n- นักเรียนร่วมกันทำแบบฝึกทักษะหน้าที่ 6 ข้อ 1 ใหญ่ ข้อ 7 - 12 ย่อย โดยมีครูคอยให้คำแนะนำ\n\nขั้นสรุป\n- นักเรียนและครูร่วมกันสรุปเกี่ยวกับเลขยกกำลังที่มีเลขชี้กำลังเป็นจำนวนตรรกยะ (เศษส่วน) ",
    assessment: "- สังเกตจากการสอบถามระหว่างเรียน\n- ตรวจแบบฝึกทักษะ หน้าที่ 8 โดยผ่านเกณฑ์ 70% ขึ้นไป",
    materials: "- หนังสือเรียนคณิตศาสตร์พื้นฐาน ม.5\n- แบบฝึกทักษะ เรื่องเลขยกกำลัง",
    outcomes: "นักเรียนมีส่วนร่วมในกิจกรรมดี แต่บางคนยังขาดความมั่นใจในการนำเสนอผลงาน",
    solutions: "ครูควรส่งเสริมกิจกรรมกลุ่มย่อย เพื่อช่วยให้นักเรียนมีความมั่นใจในการแสดงออกมากขึ้น"
  },
  {
    week: "8",
    once: "16",
    period: "2-3",
    date: "03/07/2568",
    unit: "2",
    topic: "เลขยกกำลังที่มีเลขชี้กำลังเป็นจำนวนตรรกยะ (ต่อ)",
    periodCount: "2",
    standard: "ค1.1 ม.5/1\nเข้าใจความหมายและใช้สมบัติเกี่ยวกับการบวก การคูณ การเท่ากัน และการไม่เท่ากันของจํานวนจริงในรูปกรณฑ์และจํานวนจริงในรูปเลขยกกําลังที่มี เลขชี้กําลังเป็นจํานวนตรรกยะ",
    objectives: "นักเรียนสามารถใช้กฎของเลขยกกำลังเพื่อแก้สมการที่เกี่ยวข้องกับเลขยกกำลังได้",
    activities: "ขั้นนำเข้าสู่บทเรียน\n- ครูให้นักเรียนกันร่วมกันอธิบายเลขยกกำลังที่มีเลขชี้กำลังเป็นจำนวนตรรกยะ (เศษส่วน)\n\nขั้นสอน\n- ครูเสริมว่าเราสามารถเขียนเลขยกกำลัง ให้อยู่ในรูปรากที่ n หรือกรณฑ์ได้ \n- ครูยกตัวอย่างมา 2-3 ข้อ \n- นักเรียนร่วมกันทำแบบฝึกทักษะหน้าที่ 7 ข้อ 2 ใหญ่ ข้อ 1 - 6 ย่อย โดยมีครูคอยให้คำแนะนำ\n\nขั้นสรุป\n- นักเรียนและครูร่วมกันสรุปเกี่ยวกับการเขียนเลขยกกำลัง ให้อยู่ในรูปรากที่ n หรือกรณฑ์",
    assessment: "- สังเกตจากการสอบถามระหว่างเรียน\n- ตรวจแบบฝึกทักษะ หน้าที่ 7 โดยผ่านเกณฑ์ 70% ขึ้นไป",
    materials: "- หนังสือเรียนคณิตศาสตร์พื้นฐาน ม.5\n- แบบฝึกทักษะ เรื่องเลขยกกำลัง",
    outcomes: "นักเรียนส่วนใหญ่ทำแบบฝึกหัดได้ถูกต้อง แต่ยังพบปัญหาในการตีความโจทย์ประยุกต์",
    solutions: "ให้โจทย์เสริมที่เน้นการวิเคราะห์และตีความโจทย์เพื่อพัฒนาทักษะเชิงประยุกต์"
  },
  {
    week: "9",
    once: "17",
    period: "6-7",
    date: "07/07/2568",
    unit: "2",
    topic: "เลขยกกำลังที่มีเลขชี้กำลังเป็นจำนวนตรรกยะ (ต่อ)",
    periodCount: "2",
    standard: "ค1.1 ม.5/1\nเข้าใจความหมายและใช้สมบัติเกี่ยวกับการบวก การคูณ การเท่ากัน และการไม่เท่ากันของจํานวนจริงในรูปกรณฑ์และจํานวนจริงในรูปเลขยกกําลังที่มี เลขชี้กําลังเป็นจํานวนตรรกยะ",
    objectives: "นักเรียนสามารถประยุกต์ใช้เลขยกกำลังที่มีเลขชี้กำลังเป็นจำนวนตรรกยะในการแก้ปัญหาได้",
    activities: "ขั้นนำเข้าสู่บทเรียน\n- ครูให้นักเรียนกันร่วมกันอธิบายการเขียนเลขยกกำลัง ให้อยู่ในรูปรากที่ n หรือกรณฑ์\n\nขั้นสอน\n- ครูตั้งคำถามปลายเปิดว่าเราสามารถนำความรู้เรื่องเลขยกกำลังไปประยุกต์ใช้ในชีวิตประจำวัน และสามารถแก้สมการบางอย่างได้หรือไม่?\n- ครูแนะนำว่าเราสามารถแก้สมการที่อยู่ในรูปยกกำลังได้\n- ครูยกตัวอย่างมา 2-3 ข้อ\n- นักเรียนร่วมกันทำแบบฝึกทักษะหน้าที่ 8 โดยมีครูคอยให้คำแนะนำ\n\nขั้นสรุป\n- นักเรียนและครูร่วมกันสรุปเกี่ยวกับการหาคำตอบของสมการที่อยู่ในรูปเลขยกกำลัง",
    assessment: "- สังเกตจากการสอบถามระหว่างเรียน\n- ตรวจแบบฝึกทักษะ หน้าที่ 8 โดยผ่านเกณฑ์ 70% ขึ้นไป",
    materials: "- หนังสือเรียนคณิตศาสตร์พื้นฐาน ม.5\n- แบบฝึกทักษะ เรื่องเลขยกกำลัง",
    outcomes: "นักเรียนเข้าใจวิธีการคำนวณและสามารถทำแบบฝึกหัดได้ถูกต้องส่วนใหญ่",
    solutions: "เพิ่มการฝึกโจทย์ที่ต้องประยุกต์ใช้สมบัติหลายข้อร่วมกัน"
  }
];

// 2. Application Global State Variables
let lessonPlans = [];
let selectedIndex = 0;
let currentSignatureDataUrl = '';
let isSignatureDrawn = false;

// 3. Profiles & Courses/Classes defaults
let profile = {
  teacherName: localStorage.getItem('iplane_teacher_name') || 'นายฮัมบาลีย์ วาจิ',
  hodName: localStorage.getItem('iplane_hod_name') || 'นางมารียานี แวนาแฮ',
  schoolName: localStorage.getItem('iplane_school_name') || 'คณิตศาสตร์'
};

let courses = [];
let classes = [];

let activeCourseId = localStorage.getItem('iplane_active_course_id') || 'c1';
let activeClassId = localStorage.getItem('iplane_active_class_id') || 'cl1';

let config = {
  gasUrl: localStorage.getItem('iplane_gas_url') || '',
  folderId: localStorage.getItem('iplane_folder_id') || ''
};

// 4. Drawing Canvas signature variables
let canvas, ctx;
let drawing = false;
let strokes = []; 
let currentStroke = [];
let penColor = '#0000FF'; 
const penWidth = 2.5;

// 5. App Initialization on DOM Load
document.addEventListener('DOMContentLoaded', () => {
  // Load database arrays
  loadDatabaseState();
  
  // Bind Canvas and UI controls
  setupSignaturePad();
  initializeUI();
  
  if (config.gasUrl) {
    fetchLiveGoogleData();
  }
});

// Load variables from LocalStorage or fallbacks
function loadDatabaseState() {
  // Load Courses
  const savedCourses = localStorage.getItem('iplane_courses');
  if (savedCourses) {
    courses = JSON.parse(savedCourses);
  } else {
    courses = [{ id: 'c1', name: 'คณิตศาสตร์พื้นฐาน', code: 'ค32101' }];
    localStorage.setItem('iplane_courses', JSON.stringify(courses));
  }

  // Load Classes
  const savedClasses = localStorage.getItem('iplane_classes');
  if (savedClasses) {
    classes = JSON.parse(savedClasses);
  } else {
    classes = [{ id: 'cl1', name: 'ชั้นมัธยมศึกษาปีที่ 5/2 Delima' }];
    localStorage.setItem('iplane_classes', JSON.stringify(classes));
  }

  // Load Lesson plans list for active Course-Class combination
  const storageKey = `iplane_lessons_${activeCourseId}_${activeClassId}`;
  const savedLessons = localStorage.getItem(storageKey);
  if (savedLessons) {
    try {
      lessonPlans = JSON.parse(savedLessons);
    } catch (e) {
      lessonPlans = JSON.parse(JSON.stringify(DEFAULT_LESSON_PLANS));
    }
  } else {
    lessonPlans = JSON.parse(JSON.stringify(DEFAULT_LESSON_PLANS));
    localStorage.setItem(storageKey, JSON.stringify(lessonPlans));
  }
}

// Bind all UI Actions, tabs, and modal controllers
function initializeUI() {
  lucide.createIcons();
  
  renderSidebar();
  renderSettingsDropdowns();
  updateProfileLabels();
  
  // Set values inside Settings Form inputs
  document.getElementById('input-teacher-name').value = profile.teacherName;
  document.getElementById('input-hod-name').value = profile.hodName;
  document.getElementById('input-school-name').value = profile.schoolName;
  
  document.getElementById('input-gas-url').value = config.gasUrl;
  document.getElementById('input-drive-folder').value = config.folderId;
  updateSyncStatusIndicator();

  // Settings Modal open/close controls
  const settingsModal = document.getElementById('settings-modal');
  document.getElementById('btn-settings').addEventListener('click', () => {
    settingsModal.classList.add('open');
    populateLessonEditorIndexSelect();
  });
  
  document.getElementById('btn-close-settings').addEventListener('click', () => {
    settingsModal.classList.remove('open');
  });

  // Modal Tab Switching Logic
  const tabButtons = document.querySelectorAll('.tab-btn');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // Find clicked button target tab name
      const tabTarget = e.currentTarget.dataset.tab;
      
      // Update active classes on buttons
      tabButtons.forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');
      
      // Update active classes on contents
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      document.getElementById(tabTarget).classList.add('active');
    });
  });

  // Action listeners inside Modal
  document.getElementById('btn-add-course').addEventListener('click', addNewCourse);
  document.getElementById('btn-add-class').addEventListener('click', addNewClassRoom);
  document.getElementById('btn-run-dates').addEventListener('click', runAutoDateRunner);
  document.getElementById('select-edit-lesson-index').addEventListener('change', loadLessonIntoInlineEditor);
  document.getElementById('btn-save-edited-lesson').addEventListener('click', saveInlineEditedLesson);
  document.getElementById('btn-save-settings').addEventListener('click', saveModalSettings);

  // Layout action button bindings
  document.getElementById('btn-save-offline').addEventListener('click', () => saveLessonProgress(true));
  document.getElementById('btn-sync-google').addEventListener('click', syncToGoogleSheets);
  document.getElementById('btn-export-pdf').addEventListener('click', exportPDFDocument);

  // Active dropdown switch updates
  document.getElementById('select-active-course').addEventListener('change', (e) => {
    activeCourseId = e.target.value;
    localStorage.setItem('iplane_active_course_id', activeCourseId);
    loadDatabaseState();
    renderSidebar();
    updateProfileLabels();
    selectLesson(0);
  });

  document.getElementById('select-active-class').addEventListener('change', (e) => {
    activeClassId = e.target.value;
    localStorage.setItem('iplane_active_class_id', activeClassId);
    loadDatabaseState();
    renderSidebar();
    updateProfileLabels();
    selectLesson(0);
  });

  // Select initial plan
  selectLesson(0);
}

// Update text banners based on profiles
function updateProfileLabels() {
  const currentCourse = courses.find(c => c.id === activeCourseId);
  const currentClass = classes.find(c => c.id === activeClassId);

  if (currentCourse) {
    document.getElementById('active-course-label').innerText = `วิชา: ${currentCourse.name} (${currentCourse.code})`;
  }
  if (currentClass) {
    document.getElementById('active-class-label').innerText = `ชั้นเรียน: ${currentClass.name}`;
  }
}

// Render Sidebar Weeks list
function renderSidebar() {
  const weekList = document.getElementById('week-list');
  weekList.innerHTML = '';

  lessonPlans.forEach((plan, index) => {
    const item = document.createElement('div');
    item.className = `week-item ${index === selectedIndex ? 'active' : ''}`;
    
    // Outcome text badge calculations
    const hasReflection = plan.outcomes && plan.outcomes.trim() !== '' && plan.outcomes !== '-';
    const statusText = hasReflection ? 'บันทึกแล้ว' : 'ยังไม่บันทึก';
    const statusClass = hasReflection ? 'saved' : 'pending';
    const statusIcon = hasReflection ? 'check-circle-2' : 'alert-circle';

    item.innerHTML = `
      <div class="week-item-info">
        <span class="week-item-title">ครั้งที่ ${plan.once} (สัปดาห์ ${plan.week})</span>
        <span class="week-item-topic">${plan.topic}</span>
      </div>
      <span class="status-badge ${statusClass}">
        <i data-lucide="${statusIcon}" style="width: 10px; height: 10px;"></i>
        <span>${statusText}</span>
      </span>
    `;

    item.addEventListener('click', () => selectLesson(index));
    weekList.appendChild(item);
  });
  
  lucide.createIcons({
    attrs: {
      class: 'status-badge-icon'
    }
  });
}

// Load dropdown options inside Modal tabs
function renderSettingsDropdowns() {
  const courseSelect = document.getElementById('select-active-course');
  courseSelect.innerHTML = '';
  courses.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c.id;
    opt.innerText = `${c.name} (${c.code})`;
    opt.selected = c.id === activeCourseId;
    courseSelect.appendChild(opt);
  });

  const classSelect = document.getElementById('select-active-class');
  classSelect.innerHTML = '';
  classes.forEach(cl => {
    const opt = document.createElement('option');
    opt.value = cl.id;
    opt.innerText = cl.name;
    opt.selected = cl.id === activeClassId;
    classSelect.appendChild(opt);
  });
}

// Select a lesson plan and load to workspace forms
function selectLesson(index) {
  selectedIndex = index;
  
  // Highlight in sidebar list
  const items = document.querySelectorAll('.week-item');
  items.forEach((item, idx) => {
    if (idx === index) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  const plan = lessonPlans[index];

  // Set Labels & Headers
  document.getElementById('selected-week-title').innerText = `สัปดาห์ที่ ${plan.week} - แผนการสอนครั้งที่ ${plan.once}`;
  document.getElementById('selected-week-subtitle').innerText = `เรื่อง: ${plan.topic} (วันที่สอน: ${plan.date})`;
  
  document.getElementById('lesson-date-badge').innerText = plan.date;
  document.getElementById('lbl-week').innerText = plan.week;
  document.getElementById('lbl-once').innerText = plan.once;
  document.getElementById('lbl-period').innerText = plan.period;
  document.getElementById('lbl-period-count').innerText = `${plan.periodCount} คาบ`;
  
  document.getElementById('lbl-unit').innerText = `หน่วยที่ ${plan.unit}`;
  document.getElementById('lbl-topic').innerText = plan.topic;
  
  // Fill details text
  document.getElementById('lbl-standard').innerText = plan.standard || '-';
  document.getElementById('lbl-objectives').innerText = plan.objectives || '-';
  document.getElementById('lbl-activities').innerText = plan.activities || '-';
  document.getElementById('lbl-assessment').innerText = plan.assessment || '-';
  document.getElementById('lbl-materials').innerText = plan.materials || '-';

  // Fill reflection inputs
  document.getElementById('txt-outcomes').value = (plan.outcomes === '-') ? '' : (plan.outcomes || '');
  document.getElementById('txt-solutions').value = (plan.solutions === '-') ? '' : (plan.solutions || '');

  // Safety clear signature pad
  clearSignature();
  
  document.querySelector('.app-main').scrollTop = 0;
}

// Save reflections locally to LocalStorage
function saveLessonProgress(showNotification = false) {
  const outcomeText = document.getElementById('txt-outcomes').value.trim();
  const solutionText = document.getElementById('txt-solutions').value.trim();

  if (!outcomeText || !solutionText) {
    if (showNotification) {
      alert('กรุณากรอกข้อมูล ผลการจัดการเรียนรู้ และ แนวทางแก้ปัญหา ให้ครบถ้วน');
    }
    return false;
  }

  lessonPlans[selectedIndex].outcomes = outcomeText;
  lessonPlans[selectedIndex].solutions = solutionText;

  // Save to active course-class local state key
  const storageKey = `iplane_lessons_${activeCourseId}_${activeClassId}`;
  localStorage.setItem(storageKey, JSON.stringify(lessonPlans));
  
  renderSidebar();

  if (showNotification) {
    alert('บันทึกข้อมูลหลังการสอนลงในเครื่องเรียบร้อยแล้ว');
  }
  return true;
}

// ==========================================
// 6. Settings Modal Actions
// ==========================================

// Add New Course (Tab 2)
function addNewCourse() {
  const name = document.getElementById('input-new-course-name').value.trim();
  const code = document.getElementById('input-new-course-code').value.trim();

  if (!name || !code) {
    alert('กรุณาระบุชื่อวิชาและรหัสวิชาให้ครบถ้วน');
    return;
  }

  const newId = 'c_' + Date.now();
  courses.push({ id: newId, name: name, code: code });
  
  localStorage.setItem('iplane_courses', JSON.stringify(courses));
  
  // Reset inputs & refresh selects
  document.getElementById('input-new-course-name').value = '';
  document.getElementById('input-new-course-code').value = '';
  renderSettingsDropdowns();
  
  alert('เพิ่มรายวิชาเรียบร้อยแล้ว');
}

// Add New Classroom Room (Tab 2)
function addNewClassRoom() {
  const name = document.getElementById('input-new-class-name').value.trim();

  if (!name) {
    alert('กรุณาระบุชื่อชั้นเรียน/ห้องเรียน');
    return;
  }

  const newId = 'cl_' + Date.now();
  classes.push({ id: newId, name: name });
  
  localStorage.setItem('iplane_classes', JSON.stringify(classes));
  
  document.getElementById('input-new-class-name').value = '';
  renderSettingsDropdowns();

  alert('เพิ่มชั้นเรียนเรียบร้อยแล้ว');
}

// Tab 3: Automatic Date Runner calculation
function runAutoDateRunner() {
  const startDateVal = document.getElementById('input-start-date').value;
  
  // Find selected checkboxes for teaching days
  const checkedBoxes = document.querySelectorAll('input[name="teach-days"]:checked');
  const daysOfWeek = Array.from(checkedBoxes).map(cb => parseInt(cb.value));

  if (!startDateVal) {
    alert('กรุณาระบุวันที่เริ่มเรียนคาบแรกในตารางปฏิทิน');
    return;
  }

  if (daysOfWeek.length === 0) {
    alert('กรุณาเลือกวันสอนปกติอย่างน้อย 1 วันในรอบสัปดาห์');
    return;
  }

  // Calculate dates array
  const calculatedDates = [];
  let currentDate = new Date(startDateVal);
  
  for (let i = 0; i < 17; i++) {
    if (i === 0) {
      calculatedDates.push(formatThaiDateString(currentDate));
    } else {
      let found = false;
      while (!found) {
        currentDate.setDate(currentDate.getDate() + 1);
        const dayNum = currentDate.getDay(); // 0 = Sunday, 1 = Monday...
        if (daysOfWeek.includes(dayNum)) {
          found = true;
        }
      }
      calculatedDates.push(formatThaiDateString(currentDate));
    }
  }

  // Render calculated list preview inside box
  const previewBox = document.getElementById('date-preview-list');
  previewBox.innerHTML = '';
  
  calculatedDates.forEach((d, idx) => {
    const item = document.createElement('div');
    item.className = 'date-preview-item';
    item.innerHTML = `<span>ครั้งที่ ${idx + 1}:</span> <span class="highlight">${d}</span>`;
    previewBox.appendChild(item);
  });

  // Attach calculated dates to our temporary local lessonPlans state
  lessonPlans.forEach((plan, idx) => {
    plan.date = calculatedDates[idx];
  });
  
  // Save progress key
  const storageKey = `iplane_lessons_${activeCourseId}_${activeClassId}`;
  localStorage.setItem(storageKey, JSON.stringify(lessonPlans));

  alert('คำนวณรันวันที่สอนทั้ง 17 คาบเสร็จสิ้นและเขียนค่าเข้าฐานข้อมูลแล้ว');
}

// Convert native Date objects into Sarabun official Thai string outputs
function formatThaiDateString(date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const BEYear = date.getFullYear() + 543;
  return `${day}/${month}/${BEYear}`;
}

// Tab 4: Inline lesson details editor index populate
function populateLessonEditorIndexSelect() {
  const select = document.getElementById('select-edit-lesson-index');
  select.innerHTML = '';
  
  lessonPlans.forEach((plan, idx) => {
    const opt = document.createElement('option');
    opt.value = idx;
    opt.innerText = `ครั้งที่ ${plan.once} - เรื่อง: ${plan.topic}`;
    select.appendChild(opt);
  });
  
  loadLessonIntoInlineEditor();
}

// Load lesson plan main metadata into Tab 4 forms
function loadLessonIntoInlineEditor() {
  const idx = parseInt(document.getElementById('select-edit-lesson-index').value);
  const plan = lessonPlans[idx];

  if (!plan) return;

  document.getElementById('edit-lesson-topic').value = plan.topic;
  document.getElementById('edit-lesson-standard').value = plan.standard;
  document.getElementById('edit-lesson-objectives').value = plan.objectives;
  document.getElementById('edit-lesson-activities').value = plan.activities;
  document.getElementById('edit-lesson-assessment').value = plan.assessment;
  document.getElementById('edit-lesson-materials').value = plan.materials;
}

// Save Inline modified data back to LocalStorage and rebuild preview panels
function saveInlineEditedLesson() {
  const idx = parseInt(document.getElementById('select-edit-lesson-index').value);
  const plan = lessonPlans[idx];

  if (!plan) return;

  plan.topic = document.getElementById('edit-lesson-topic').value.trim();
  plan.standard = document.getElementById('edit-lesson-standard').value.trim();
  plan.objectives = document.getElementById('edit-lesson-objectives').value.trim();
  plan.activities = document.getElementById('edit-lesson-activities').value.trim();
  plan.assessment = document.getElementById('edit-lesson-assessment').value.trim();
  plan.materials = document.getElementById('edit-lesson-materials').value.trim();

  // Save full array to LocalStorage
  const storageKey = `iplane_lessons_${activeCourseId}_${activeClassId}`;
  localStorage.setItem(storageKey, JSON.stringify(lessonPlans));
  
  // Rebuild selections and previews
  renderSidebar();
  selectLesson(selectedIndex);
  
  alert('บันทึกการแก้ไขเนื้อหาแผนหลักเรียบร้อยแล้ว');
}

// Save Modal profile and endpoints configs
function saveModalSettings() {
  profile.teacherName = document.getElementById('input-teacher-name').value.trim();
  profile.hodName = document.getElementById('input-hod-name').value.trim();
  profile.schoolName = document.getElementById('input-school-name').value.trim();

  localStorage.setItem('iplane_teacher_name', profile.teacherName);
  localStorage.setItem('iplane_hod_name', profile.hodName);
  localStorage.setItem('iplane_school_name', profile.schoolName);

  // Sync Google Endpoint
  config.gasUrl = document.getElementById('input-gas-url').value.trim();
  config.folderId = document.getElementById('input-drive-folder').value.trim();

  localStorage.setItem('iplane_gas_url', config.gasUrl);
  localStorage.setItem('iplane_folder_id', config.folderId);

  updateSyncStatusIndicator();
  updateProfileLabels();
  selectLesson(selectedIndex);
  
  document.getElementById('settings-modal').classList.remove('open');
}

// Update Sync indicator dot
function updateSyncStatusIndicator() {
  const syncStatus = document.getElementById('sync-status');
  const label = syncStatus.querySelector('.status-label');

  if (config.gasUrl) {
    syncStatus.className = 'status-indicator online';
    label.innerText = 'เชื่อมต่อฐานข้อมูล Google Cloud';
  } else {
    syncStatus.className = 'status-indicator offline';
    label.innerText = 'ระบบออฟไลน์ (บันทึกเฉพาะที่เครื่อง)';
  }
}

// Fetch live sheet data from Apps Script backend on startup
async function fetchLiveGoogleData() {
  if (!config.gasUrl) return;

  const currentCourse = courses.find(c => c.id === activeCourseId);
  const sheetTabName = currentCourse ? `${currentCourse.name}_${currentCourse.code}` : 'Sheet1';

  try {
    const url = `${config.gasUrl}?sheetName=${encodeURIComponent(sheetTabName)}`;
    const response = await fetch(url);
    const result = await response.json();

    if (result.status === 'success' && result.data && result.data.length > 0) {
      result.data.forEach(sheetItem => {
        const onceVal = String(sheetItem['ครั้งที่']).trim();
        const localIndex = lessonPlans.findIndex(p => String(p.once).trim() === onceVal);

        if (localIndex > -1) {
          if (sheetItem['ผลการจัดการเรียนรู้']) {
            lessonPlans[localIndex].outcomes = sheetItem['ผลการจัดการเรียนรู้'];
          }
          if (sheetItem['แนวทางแก้ปัญหา']) {
            lessonPlans[localIndex].solutions = sheetItem['แนวทางแก้ปัญหา'];
          }
        }
      });

      const storageKey = `iplane_lessons_${activeCourseId}_${activeClassId}`;
      localStorage.setItem(storageKey, JSON.stringify(lessonPlans));
      renderSidebar();
      selectLesson(selectedIndex);
    }
  } catch (error) {
    console.error('ไม่สามารถดึงข้อมูลจาก Google Sheets ได้:', error);
  }
}

// ==========================================
// 7. Sync and PDF Export Engine
// ==========================================

// Send reflection record + generated A4 PDF to Google Sheets & Drive
async function syncToGoogleSheets() {
  const saved = saveLessonProgress(false);
  if (!saved) {
    alert('กรุณากรอกบันทึกหลังสอนและเขียนลายเซ็นก่อนส่งข้อมูล');
    return;
  }

  if (!isSignatureDrawn) {
    alert('กรุณาเซ็นชื่อผู้สอนเพื่อแนบลงในรายงานแผนการสอนก่อนทำการซิงก์');
    return;
  }

  if (!config.gasUrl) {
    alert('กรุณาคลิกปุ่ม "ตั้งค่าระบบ & คอร์สวิชา" เพื่อใส่ Google Apps Script URL ก่อนซิงก์');
    document.getElementById('settings-modal').classList.add('open');
    return;
  }

  const syncBtn = document.getElementById('btn-sync-google');
  const syncBtnText = syncBtn.querySelector('span');
  
  syncBtnText.innerText = 'กำลังส่งข้อมูล...';
  syncBtn.disabled = true;

  try {
    populatePrintTemplate();
    const printEl = document.getElementById('print-template-container');
    printEl.style.display = 'block'; 

    const opt = {
      margin:       0,
      filename:     `แผนการสอน_ครั้งที่_${lessonPlans[selectedIndex].once}.pdf`,
      image:        { type: 'jpeg', quality: 0.95 },
      html2canvas:  { scale: 2, useCORS: true },
      jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // Generate PDF inside html2pdf and output base64 data uri
    const pdfDataUri = await html2pdf().set(opt).from(printEl).output('datauristring');
    printEl.style.display = 'none';

    // Route active course sheet name
    const currentCourse = courses.find(c => c.id === activeCourseId);
    const sheetTabName = currentCourse ? `${currentCourse.name}_${currentCourse.code}` : 'Sheet1';

    const payload = {
      sheetName: sheetTabName,
      week: lessonPlans[selectedIndex].week,
      once: lessonPlans[selectedIndex].once,
      period: lessonPlans[selectedIndex].period,
      date: lessonPlans[selectedIndex].date,
      unit: lessonPlans[selectedIndex].unit,
      topic: lessonPlans[selectedIndex].topic,
      periodCount: lessonPlans[selectedIndex].periodCount,
      standard: lessonPlans[selectedIndex].standard,
      objectives: lessonPlans[selectedIndex].objectives,
      activities: lessonPlans[selectedIndex].activities,
      assessment: lessonPlans[selectedIndex].assessment,
      materials: lessonPlans[selectedIndex].materials,
      
      outcomes: lessonPlans[selectedIndex].outcomes,
      solutions: lessonPlans[selectedIndex].solutions,
      pdfBase64: pdfDataUri,
      pdfFileName: `LessonPlan_Once_${lessonPlans[selectedIndex].once}.pdf`,
      folderId: config.folderId
    };

    const response = await fetch(config.gasUrl, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'text/plain' 
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json();

    if (result.status === 'success') {
      alert(`อัปเดต Google Sheet และ อัปโหลด PDF ขึ้น Drive เรียบร้อยแล้ว!\n\nแผ่นงาน (Tab): ${sheetTabName}\nลิงก์ไฟล์: ${result.pdfUrl || 'ไม่พบลิงก์'}`);
    } else {
      alert(`การบันทึกล้มเหลว: ${result.message}`);
    }
  } catch (error) {
    console.error(error);
    alert('เกิดข้อผิดพลาดในการเชื่อมต่อเครือข่าย หรือ โดนบล็อกสิทธิ์ CORS\n\nคำแนะนำในการแก้ไข:\n1. ตรวจสอบว่าใน Apps Script ตอน Deploy ได้เลือก Who has access เป็น "Anyone" (ทุกคน) แล้วหรือยัง\n2. ตรวจสอบว่าคัดลอก URL ของ Web App มาวางถูกต้อง (ลิงก์ต้องลงท้ายด้วย /exec เท่านั้น)\n3. มั่นใจว่าได้กดให้สิทธิ์การใช้งานบัญชีกับสคริปต์ (Authorize Access) ตอน Deploy แล้ว');
  } finally {
    syncBtnText.innerText = 'ส่งข้อมูล & ขึ้น Drive';
    syncBtn.disabled = false;
  }
}

// Export A4 PDF Document
function exportPDFDocument() {
  const saved = saveLessonProgress(false);
  if (!saved) {
    alert('กรุณากรอกบันทึกหลังสอนก่อนดึงเอกสาร PDF');
    return;
  }

  if (!isSignatureDrawn) {
    alert('กรุณาเขียนลายเซ็นดิจิทัลในแอปเพื่อลงนามแนบท้ายเอกสาร');
    return;
  }

  const exportBtn = document.getElementById('btn-export-pdf');
  const exportText = exportBtn.querySelector('span');
  exportText.innerText = 'กำลังสร้างไฟล์ PDF...';
  exportBtn.disabled = true;

  try {
    populatePrintTemplate();
    const printEl = document.getElementById('print-template-container');
    printEl.style.display = 'block';

    const opt = {
      margin:       0,
      filename:     `แผนการจัดการเรียนรู้_ครั้งที่_${lessonPlans[selectedIndex].once}_${lessonPlans[selectedIndex].topic}.pdf`,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true },
      jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(printEl).save().then(() => {
      printEl.style.display = 'none';
      exportText.innerText = 'ดาวน์โหลด PDF (หน้าเดียว)';
      exportBtn.disabled = false;
    });
  } catch (err) {
    console.error(err);
    alert('การสร้าง PDF ขัดข้อง');
    exportText.innerText = 'ดาวน์โหลด PDF (หน้าเดียว)';
    exportBtn.disabled = false;
  }
}

// Copy active values onto official single-page A4 PDF elements
function populatePrintTemplate() {
  const plan = lessonPlans[selectedIndex];
  const currentCourse = courses.find(c => c.id === activeCourseId);
  const currentClass = classes.find(c => c.id === activeClassId);

  // General course metadata
  document.getElementById('pdf-print-dept').innerText = `กลุ่มสาระการเรียนรู้${profile.schoolName}`;
  document.getElementById('pdf-print-course-name').innerText = currentCourse ? currentCourse.name : '-';
  document.getElementById('pdf-print-course-code').innerText = currentCourse ? currentCourse.code : '-';
  document.getElementById('pdf-print-class-name').innerText = currentClass ? currentClass.name : '-';

  // Specific lesson info
  document.getElementById('pdf-print-unit').innerText = plan.unit;
  document.getElementById('pdf-print-topic').innerText = plan.topic;
  document.getElementById('pdf-print-once').innerText = `ครั้งที่ ${plan.once}`;
  document.getElementById('pdf-print-period-count').innerText = `เวลา ${plan.periodCount} ชั่วโมง`;
  document.getElementById('pdf-print-date').innerText = plan.date;

  // Left column sections
  document.getElementById('pdf-print-standard').innerText = plan.standard;
  document.getElementById('pdf-print-objectives').innerText = plan.objectives;
  document.getElementById('pdf-print-activities').innerText = plan.activities;
  document.getElementById('pdf-print-assessment').innerText = plan.assessment;

  // Right column sections
  document.getElementById('pdf-print-materials').innerText = plan.materials;

  // Outcome reflection lists with dashed simulated underlines
  document.getElementById('pdf-print-outcomes').innerText = plan.outcomes || '-';
  document.getElementById('pdf-print-solutions').innerText = plan.solutions || '-';

  // Apply signatures and dynamic thai formatted dates
  const sigImg = document.getElementById('pdf-print-sig-teacher');
  sigImg.src = currentSignatureDataUrl;

  document.getElementById('pdf-print-teacher-name').innerText = profile.teacherName;
  document.getElementById('pdf-print-hod-name').innerText = profile.hodName;

  // Dates underneath signature lines
  document.getElementById('pdf-print-date-sig-teacher').innerText = plan.date;
  document.getElementById('pdf-print-date-sig-room').innerText = plan.date;
  document.getElementById('pdf-print-date-sig-hod').innerText = plan.date;
}

// ==========================================
// 8. Signature Canvas Drawing Logic
// ==========================================
function setupSignaturePad() {
  canvas = document.getElementById('signature-pad');
  ctx = canvas.getContext('2d');
  
  const placeholder = document.getElementById('sig-placeholder');

  resizeCanvas();
  window.addEventListener('resize', () => {
    resizeCanvas();
    drawStrokes();
  });

  const colorDots = document.querySelectorAll('.color-dot');
  colorDots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      colorDots.forEach(d => d.classList.remove('active'));
      e.target.classList.add('active');
      penColor = e.target.dataset.color;
    });
  });

  document.getElementById('btn-sig-clear').addEventListener('click', clearSignature);
  document.getElementById('btn-sig-undo').addEventListener('click', undoSignatureStroke);

  // Mouse actions
  canvas.addEventListener('mousedown', (e) => {
    const rect = canvas.getBoundingClientRect();
    if (canvas.width === 0 || canvas.height === 0 || canvas.width !== Math.floor(rect.width) || canvas.height !== Math.floor(rect.height)) {
      resizeCanvas();
      drawStrokes();
    }
    drawing = true;
    placeholder.style.display = 'none';
    const pos = getPos(e);
    currentStroke = [{ x: pos.x, y: pos.y }];
    strokes.push(currentStroke);
    
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
    ctx.lineWidth = penWidth;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = penColor;
  });

  canvas.addEventListener('mousemove', (e) => {
    if (!drawing) return;
    const pos = getPos(e);
    currentStroke.push({ x: pos.x, y: pos.y });

    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
    isSignatureDrawn = true;
  });

  canvas.addEventListener('mouseup', () => {
    if (!drawing) return;
    drawing = false;
    currentSignatureDataUrl = canvas.toDataURL('image/png');
  });

  canvas.addEventListener('mouseleave', () => {
    if (drawing) {
      drawing = false;
      currentSignatureDataUrl = canvas.toDataURL('image/png');
    }
  });

  // Touch Screen actions
  canvas.addEventListener('touchstart', (e) => {
    e.preventDefault(); 
    const rect = canvas.getBoundingClientRect();
    if (canvas.width === 0 || canvas.height === 0 || canvas.width !== Math.floor(rect.width) || canvas.height !== Math.floor(rect.height)) {
      resizeCanvas();
      drawStrokes();
    }
    placeholder.style.display = 'none';
    drawing = true;
    const pos = getPos(e.touches[0]);
    currentStroke = [{ x: pos.x, y: pos.y }];
    strokes.push(currentStroke);
    
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
    ctx.lineWidth = penWidth;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = penColor;
  });

  canvas.addEventListener('touchmove', (e) => {
    e.preventDefault();
    if (!drawing) return;
    const pos = getPos(e.touches[0]);
    currentStroke.push({ x: pos.x, y: pos.y });

    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
    isSignatureDrawn = true;
  });

  canvas.addEventListener('touchend', () => {
    drawing = false;
    currentSignatureDataUrl = canvas.toDataURL('image/png');
  });
}

function getPos(e) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  };
}

function resizeCanvas() {
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width;
  canvas.height = rect.height;
  
  ctx.lineWidth = penWidth;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.strokeStyle = penColor;
}

function drawStrokes() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (strokes.length === 0) {
    document.getElementById('sig-placeholder').style.display = 'flex';
    isSignatureDrawn = false;
    currentSignatureDataUrl = '';
    return;
  }

  document.getElementById('sig-placeholder').style.display = 'none';
  isSignatureDrawn = true;

  strokes.forEach(stroke => {
    if (stroke.length === 0) return;
    
    ctx.beginPath();
    ctx.moveTo(stroke[0].x, stroke[0].y);
    ctx.lineWidth = penWidth;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = penColor;

    for (let i = 1; i < stroke.length; i++) {
      ctx.lineTo(stroke[i].x, stroke[i].y);
    }
    ctx.stroke();
  });

  currentSignatureDataUrl = canvas.toDataURL('image/png');
}

function clearSignature() {
  strokes = [];
  if (ctx && canvas) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  const placeholder = document.getElementById('sig-placeholder');
  if (placeholder) {
    placeholder.style.display = 'flex';
  }
  isSignatureDrawn = false;
  currentSignatureDataUrl = '';
}

function undoSignatureStroke() {
  strokes.pop();
  drawStrokes();
}
