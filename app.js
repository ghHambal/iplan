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
// html-to-image จะ reject ทันทีถ้าเจอ <img> ที่ไม่มีรูปให้โหลดจริง (src ว่าง/ไม่มี attribute/ซ่อนด้วย display:none ก็ไม่รอด)
// จึงต้องใส่พิกเซลโปร่งใส 1x1 แทนเสมอเมื่อไม่มีลายเซ็น/โลโก้จริง ก่อน rasterize เป็น PDF
const TRANSPARENT_PIXEL_DATA_URL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=';
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

// รุ่นโมเดล Gemini ที่ใช้เป็นค่าเริ่มต้น (ใช้เมื่อครูไม่ได้ระบุรุ่นเองในหน้าตั้งค่า)
const DEFAULT_GEMINI_MODEL = 'gemini-2.5-flash';

let config = {
  gasUrl: localStorage.getItem('iplane_gas_url') || '',
  folderId: localStorage.getItem('iplane_folder_id') || '',
  geminiApiKey: localStorage.getItem('iplane_gemini_api_key') || '',
  geminiModel: localStorage.getItem('iplane_gemini_model') || ''
};

// 4. Drawing Canvas signature variables
let canvas, ctx;
let drawing = false;
let strokes = []; 
let currentStroke = [];
let penColor = '#0000FF'; 
const penWidth = 2.5;

let canvasStudent, ctxStudent;
let drawingStudent = false;
let strokesStudent = [];
let currentStrokeStudent = [];
let penColorStudent = '#0000FF';
const penWidthStudent = 2.5;
let currentSignatureStudentDataUrl = '';

// 5. App Initialization on DOM Load
document.addEventListener('DOMContentLoaded', () => {
  // Check URL parameters for auto configuration (useful for easy setup across devices)
  const urlParams = new URLSearchParams(window.location.search);
  const paramGasUrl = urlParams.get('gasUrl');
  const paramFolderId = urlParams.get('folderId');
  if (paramGasUrl) {
    localStorage.setItem('iplane_gas_url', decodeURIComponent(paramGasUrl));
    config.gasUrl = decodeURIComponent(paramGasUrl);
  }
  if (paramFolderId) {
    localStorage.setItem('iplane_folder_id', decodeURIComponent(paramFolderId));
    config.folderId = decodeURIComponent(paramFolderId);
  }
  if (paramGasUrl || paramFolderId) {
    // Clean up URL parameters so they don't stay in the browser address bar
    const cleanUrl = window.location.origin + window.location.pathname;
    window.history.replaceState({}, document.title, cleanUrl);
    setTimeout(() => {
      showToast('นำเข้าการเชื่อมต่อฐานข้อมูล Google เรียบร้อยแล้ว! ✓', 4000);
    }, 500);
  }

  // Load database arrays
  loadDatabaseState();
  
  // Bind Canvas and UI controls
  setupSignaturePad();
  setupReflectionCanvases();
  initializeUI();
  
  if (config.gasUrl) {
    fetchConfigFromCloud().then(() => {
      fetchLiveGoogleData();
    });
  }

  // Register window resize listener for responsive scaling
  window.addEventListener('resize', adjustPreviewScale);

  // ดึงข้อมูลล่าสุดจาก Cloud อัตโนมัติทุกครั้งที่กลับมาเปิดแอป/สลับแท็บกลับมา
  // (ทำให้เปิดจากอุปกรณ์ไหนก็เห็นข้อมูลล่าสุดจากเครื่องอื่นโดยไม่ต้องกดปุ่มซิงก์เอง)
  let lastCloudRefreshAt = Date.now();
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState !== 'visible' || !config.gasUrl) return;
    const now = Date.now();
    if (now - lastCloudRefreshAt < 60000) return; // กันยิง API ถี่เกินไปเวลาสลับแท็บบ่อยๆ
    lastCloudRefreshAt = now;
    fetchConfigFromCloud().then(() => fetchLiveGoogleData());
  });

  // อัปเดตส่วนนำเข้าข้ามเครื่องใน settings
  updateEasySetupShareSection();
});

// Decoupled Course and Classroom Data Loader and Savers
function loadCombinedLessons(courseId, classId) {
  // 1. Load course-specific academic details
  const courseKey = `iplane_course_lessons_${courseId}`;
  let coursePlans = null;
  const savedCoursePlans = localStorage.getItem(courseKey);
  if (savedCoursePlans) {
    try {
      coursePlans = JSON.parse(savedCoursePlans);
    } catch(e) {}
  }

  // 2. Load classroom-specific schedule & outcomes
  const classKey = `iplane_class_lessons_${classId}`;
  let classPlans = null;
  const savedClassPlans = localStorage.getItem(classKey);
  if (savedClassPlans) {
    try {
      classPlans = JSON.parse(savedClassPlans);
    } catch(e) {}
  }

  // 3. Fallback to Legacy Single Key if either is missing
  const legacyKey = `iplane_lessons_${courseId}_${classId}`;
  const legacyData = localStorage.getItem(legacyKey);
  let legacyPlans = null;
  if (legacyData) {
    try {
      legacyPlans = JSON.parse(legacyData);
    } catch(e) {}
  }

  // 4. Initialize Course Plans if not present
  if (!coursePlans) {
    if (legacyPlans && legacyPlans.length > 0) {
      coursePlans = legacyPlans.map(p => ({
        once: String(p.once),
        unit: p.unit || '1',
        topic: p.topic || `เรื่องการเรียนรู้ครั้งที่ ${p.once}`,
        periodCount: String(p.periodCount || '2'),
        standard: p.standard || 'มาตรฐานการเรียนรู้ ค1.1...',
        objectives: p.objectives || '- เพื่อให้นักเรียนเข้าใจเนื้อหาบทเรียน',
        activities: p.activities || 'ขั้นนำ:\n- ครูให้นักเรียนกันร่วมกันอธิบายการเขียนเลขยกกำลัง ให้อยู่ในรูปรากที่ n หรือกรณฑ์\n\nขั้นสอน\n- ครูตั้งคำถามปลายเปิดว่าเราสามารถนำความรู้เรื่องเลขยกกำลังไปประยุกต์ใช้ในชีวิตประจำวัน และสามารถแก้สมการบางอย่างได้หรือไม่?\n- ครูแนะนำว่าเราสามารถแก้สมการที่อยู่ในรูปยกกำลังได้\n- ครูยกตัวอย่างมา 2-3 ข้อ\n- นักเรียนร่วมกันทำแบบฝึกทักษะหน้าที่ 8 โดยมีครูคอยให้คำแนะนำ\n\nขั้นสรุป\n- นักเรียนและครูร่วมกันสรุปเกี่ยวกับการหาคำตอบของสมการที่อยู่ในรูปเลขยกกำลัง',
        assessment: p.assessment || '- สังเกตจากการสอบถามระหว่างเรียน\n- ตรวจแบบฝึกทักษะ หน้าที่ 8 โดยผ่านเกณฑ์ 70% ขึ้นไป',
        materials: p.materials || '- หนังสือเรียนคณิตศาสตร์พื้นฐาน ม.5\n- แบบฝึกทักษะ เรื่องเลขยกกำลัง'
      }));
    } else {
      coursePlans = JSON.parse(JSON.stringify(DEFAULT_LESSON_PLANS));
    }
    localStorage.setItem(courseKey, JSON.stringify(coursePlans));
  }

  // 5. Initialize Class Plans if not present
  if (!classPlans) {
    if (legacyPlans && legacyPlans.length > 0) {
      classPlans = legacyPlans.map(p => ({
        once: String(p.once),
        week: p.week || deriveWeekFromOnce(p.once),
        date: p.date || '',
        period: p.period || '1-2',
        periodCount: String(p.periodCount || '2'),
        outcomes: p.outcomes || '-',
        solutions: p.solutions || '-',
        pdfUrl: p.pdfUrl || ''
      }));
    } else {
      classPlans = coursePlans.map((p, idx) => ({
        once: String(p.once),
        week: deriveWeekFromOnce(p.once),
        date: '',
        period: '1-2',
        periodCount: String(p.periodCount || '2'),
        outcomes: '-',
        solutions: '-',
        pdfUrl: ''
      }));
    }
    localStorage.setItem(classKey, JSON.stringify(classPlans));
  }

  // 6. Merge Academic & Classroom specific data
  const combined = [];
  const totalLength = Math.max(coursePlans.length, classPlans.length);
  for (let i = 0; i < totalLength; i++) {
    const coursePlan = coursePlans[i] || {
      once: String(i + 1),
      unit: '1',
      topic: `เรื่องการเรียนรู้ครั้งที่ ${i + 1}`,
      periodCount: '2',
      standard: 'มาตรฐานการเรียนรู้...',
      objectives: '- เพื่อให้นักเรียนเข้าใจเนื้อหาบทเรียน',
      activities: 'ขั้นนำ:\n- ทักทาย\n\nขั้นสอน:\n- บรรยาย\n\nขั้นสรุป:\n- สรุป',
      assessment: '- สังเกตพฤติกรรมในคาบเรียน',
      materials: '- หนังสือเรียน'
    };
    const classPlan = classPlans[i] || {
      once: String(i + 1),
      week: deriveWeekFromOnce(i + 1),
      date: '',
      period: '1-2',
      periodCount: '2',
      outcomes: '-',
      solutions: '-',
      pdfUrl: ''
    };

    combined.push({
      ...coursePlan,
      ...classPlan
    });
  }

  // ซ่อมข้อมูล "สัปดาห์" ที่เพี้ยน — ครั้งสอนที่หลังกว่าต้องไม่อยู่สัปดาห์ก่อนหน้าครั้งก่อน (เป็นไปไม่ได้ตามธรรมชาติของตาราง)
  // เคยเกิดจากค่า Week ว่างใน Google Sheet แล้ว fallback เป็น '1' ทำให้ลำดับสัปดาห์สลับเพี้ยนเป็น 1,1,2,1,3,1...
  // ที่นี่จะคำนวณสัปดาห์ใหม่จากลำดับ "ครั้งที่" ทุกครั้งที่พบความขัดแย้งนี้ แล้วบันทึกค่าที่แก้แล้วกลับเข้า storage
  let lastWeekNum = 0;
  let weekDataRepaired = false;
  combined.forEach((plan) => {
    const weekNum = parseInt(plan.week, 10);
    if (isNaN(weekNum) || weekNum < lastWeekNum) {
      plan.week = deriveWeekFromOnce(plan.once);
      weekDataRepaired = true;
    }
    lastWeekNum = parseInt(plan.week, 10);
  });
  if (weekDataRepaired) {
    saveClassLessons(classId, combined);
  }

  return combined;
}

function saveCourseLessons(courseId, runtimePlans) {
  const courseKey = `iplane_course_lessons_${courseId}`;
  const coursePlans = runtimePlans.map(p => ({
    once: String(p.once),
    unit: p.unit || '1',
    topic: p.topic || '',
    periodCount: String(p.periodCount || '2'),
    standard: p.standard || '',
    objectives: p.objectives || '',
    activities: p.activities || '',
    assessment: p.assessment || '',
    materials: p.materials || ''
  }));
  localStorage.setItem(courseKey, JSON.stringify(coursePlans));
}

function saveClassLessons(classId, runtimePlans) {
  const classKey = `iplane_class_lessons_${classId}`;
  const classPlans = runtimePlans.map(p => ({
    once: String(p.once),
    week: String(p.week || deriveWeekFromOnce(p.once)),
    date: p.date || '',
    period: p.period || '1-2',
    periodCount: String(p.periodCount || '2'),
    outcomes: p.outcomes || '-',
    solutions: p.solutions || '-',
    pdfUrl: p.pdfUrl || ''
  }));
  localStorage.setItem(classKey, JSON.stringify(classPlans));
}

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
    // Ensure all classes have a courseId associated with them
    classes.forEach(c => {
      if (!c.courseId) c.courseId = 'c1';
    });
  } else {
    classes = [{ id: 'cl1', courseId: 'c1', name: 'ชั้นมัธยมศึกษาปีที่ 5/2 Delima', classLeader: 'นายสมชาย ดีเด่น' }];
    localStorage.setItem('iplane_classes', JSON.stringify(classes));
  }

  // Load Lesson plans list for active Course-Class combination using the Decoupled Schema
  lessonPlans = loadCombinedLessons(activeCourseId, activeClassId);
}

// Bind all UI Actions, tabs, and modal controllers
function initializeUI() {
  lucide.createIcons();
  
  renderSidebar();
  renderSettingsDropdowns();
  renderWorkspaceDropdowns();
  updateProfileLabels();
  
  // Set values inside Settings Form inputs
  document.getElementById('input-teacher-name').value = profile.teacherName;
  document.getElementById('input-hod-name').value = profile.hodName;
  document.getElementById('input-school-name').value = profile.schoolName;
  
  document.getElementById('input-gas-url').value = config.gasUrl;
  document.getElementById('input-drive-folder').value = config.folderId;
  document.getElementById('input-gemini-api-key').value = config.geminiApiKey;
  document.getElementById('input-gemini-model').value = config.geminiModel;
  updateSyncStatusIndicator();

  // Active Class Leader input binding
  const currentClassObj = classes.find(c => c.id === activeClassId);
  const classLeaderInput = document.getElementById('input-active-class-leader');
  if (currentClassObj) {
    classLeaderInput.value = currentClassObj.classLeader || '';
  }
  classLeaderInput.addEventListener('input', (e) => {
    const leaderVal = e.target.value.trim();
    const classIdx = classes.findIndex(c => c.id === activeClassId);
    if (classIdx > -1) {
      classes[classIdx].classLeader = leaderVal;
      localStorage.setItem('iplane_classes', JSON.stringify(classes));
    }
  });

  // School Logo Upload binding
  const logoInput = document.getElementById('input-school-logo');
  const logoPreviewContainer = document.getElementById('logo-preview-container');
  const settingsLogoPreview = document.getElementById('settings-logo-preview');
  const clearLogoBtn = document.getElementById('btn-clear-logo');

  const savedLogo = localStorage.getItem('iplane_school_logo');
  if (savedLogo) {
    settingsLogoPreview.src = savedLogo;
    logoPreviewContainer.style.display = 'flex';
  }

  // Helper to resize and compress logo to stay under Google Sheets cell size limits
  function resizeAndSaveLogo(file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvasEl = document.createElement('canvas');
        const canvasCtx = canvasEl.getContext('2d');
        
        // Calculate new dimensions preserving aspect ratio (max 180px)
        const maxDim = 180;
        let width = img.width;
        let height = img.height;
        if (width > height) {
          if (width > maxDim) {
            height = Math.round((height * maxDim) / width);
            width = maxDim;
          }
        } else {
          if (height > maxDim) {
            width = Math.round((width * maxDim) / height);
            height = maxDim;
          }
        }
        
        canvasEl.width = width;
        canvasEl.height = height;
        canvasCtx.drawImage(img, 0, 0, width, height);
        
        // Compress as PNG to preserve alpha transparency and prevent black backgrounds
        const compressedBase64 = canvasEl.toDataURL('image/png');
        
        localStorage.setItem('iplane_school_logo', compressedBase64);
        settingsLogoPreview.src = compressedBase64;
        logoPreviewContainer.style.display = 'flex';
        
        // Auto-sync config to Google Sheets
        if (config.gasUrl) {
          syncConfigToCloud();
        }
        alert('อัปโหลดและบีบอัดโลโก้โรงเรียนพร้อมซิงก์ขึ้น Google Sheets สำเร็จ! ✓');
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  }

  logoInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      resizeAndSaveLogo(file);
    }
  });

  clearLogoBtn.addEventListener('click', () => {
    localStorage.removeItem('iplane_school_logo');
    logoInput.value = '';
    logoPreviewContainer.style.display = 'none';
    settingsLogoPreview.src = '';
    if (config.gasUrl) {
      syncConfigToCloud();
    }
    alert('ล้างข้อมูลโลโก้โรงเรียนเรียบร้อยแล้ว');
  });

  // Settings Modal open/close controls
  // Dashboard view bindings
  document.getElementById('btn-dashboard').addEventListener('click', openDashboardView);
  document.getElementById('breadcrumb-dashboard').addEventListener('click', openDashboardView);

  // Settings Modal open/close controls
  const settingsModal = document.getElementById('settings-modal');
  const openSettings = () => {
    settingsModal.classList.add('open');
    populateLessonEditorIndexSelect();
  };
  
  document.getElementById('btn-settings').addEventListener('click', openSettings);
  
  const btnDashboardSettings = document.getElementById('btn-dashboard-settings');
  if (btnDashboardSettings) {
    btnDashboardSettings.addEventListener('click', openSettings);
  }

  const btnDashboardSync = document.getElementById('btn-dashboard-sync');
  if (btnDashboardSync) {
    btnDashboardSync.addEventListener('click', async () => {
      const span = btnDashboardSync.querySelector('span');
      const originalText = span.innerText;
      span.innerText = 'กำลังซิงก์...';
      btnDashboardSync.disabled = true;

      // ดึงทั้งรายวิชา/ห้องเรียน/โปรไฟล์ที่อาจถูกเพิ่ม-แก้จากเครื่องอื่น แล้วค่อยดึงแผนการสอนล่าสุด
      await fetchConfigFromCloud();
      await fetchLiveGoogleData();

      span.innerText = originalText;
      btnDashboardSync.disabled = false;
    });
  }
  
  const btnWorkspaceSettings = document.getElementById('btn-workspace-settings');
  if (btnWorkspaceSettings) {
    btnWorkspaceSettings.addEventListener('click', openSettings);
  }

  const btnWorkspaceSchedule = document.getElementById('btn-workspace-schedule');
  if (btnWorkspaceSchedule) {
    btnWorkspaceSchedule.addEventListener('click', openScheduleTableModal);
  }
  
  const btnCloseScheduleTable = document.getElementById('btn-close-schedule-table');
  if (btnCloseScheduleTable) {
    btnCloseScheduleTable.addEventListener('click', closeScheduleTableModal);
  }

  const btnCancelScheduleTable = document.getElementById('btn-cancel-schedule-table');
  if (btnCancelScheduleTable) {
    btnCancelScheduleTable.addEventListener('click', closeScheduleTableModal);
  }

  const btnSaveScheduleTable = document.getElementById('btn-save-schedule-table');
  if (btnSaveScheduleTable) {
    btnSaveScheduleTable.addEventListener('click', saveScheduleTable);
  }
  
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

  // Workspace Mobile/Tablet Tab Switching Logic
  const workspaceTabButtons = document.querySelectorAll('.w-tab-btn');
  workspaceTabButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const tabTarget = e.currentTarget.dataset.wtab;
      
      workspaceTabButtons.forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');
      
      document.querySelectorAll('.wtab-content').forEach(c => c.classList.remove('active'));
      const targetEl = document.getElementById(tabTarget);
      if (targetEl) {
        targetEl.classList.add('active');
      }
      
      // If reflection tab is opened, resize signature pad
      if (tabTarget === 'wtab-reflect') {
        setTimeout(() => {
          resizeCanvas();
          drawStrokes();
          resizeCanvasStudent();
          drawStrokesStudent();
        }, 50);
      }
    });
  });

  // Action listeners inside Modal
  document.getElementById('btn-add-course').addEventListener('click', addNewCourse);
  document.getElementById('btn-add-class').addEventListener('click', addNewClassRoom);
  document.getElementById('btn-run-dates').addEventListener('click', runAutoDateRunner);
  document.getElementById('select-edit-lesson-index').addEventListener('change', loadLessonIntoInlineEditor);
  document.getElementById('btn-save-edited-lesson').addEventListener('click', saveInlineEditedLesson);
  document.getElementById('btn-save-settings').addEventListener('click', saveModalSettings);
  document.getElementById('btn-download-template').addEventListener('click', downloadCSVTemplate);
  document.getElementById('btn-process-csv').addEventListener('click', importCSVData);
  document.getElementById('btn-fetch-config').addEventListener('click', async () => {
    const urlInput = document.getElementById('input-gas-url').value.trim();
    if (!urlInput) {
      alert('กรุณากรอก Google Apps Script URL ในช่องด้านบนก่อน');
      return;
    }
    // Temporarily use the typed URL even before saving
    const prevUrl = config.gasUrl;
    config.gasUrl = urlInput;
    const btn = document.getElementById('btn-fetch-config');
    const btnSpan = btn.querySelector('span');
    btnSpan.innerText = 'กำลังโหลด...';
    btn.disabled = true;
    await fetchConfigFromCloud();
    btnSpan.innerText = 'โหลดข้อมูลจาก Cloud ตอนนี้';
    btn.disabled = false;
    if (!prevUrl) config.gasUrl = ''; // restore if was empty before
  });

  // --- Tab: Auto-date class selector ---
  document.getElementById('select-autodate-class').addEventListener('change', (e) => {
    activeClassId = e.target.value;
    localStorage.setItem('iplane_active_class_id', activeClassId);
    loadDatabaseState();
    renderSidebar();
    renderSettingsDropdowns();
    renderWorkspaceDropdowns();
    updateProfileLabels();
    const activeCls = classes.find(c => c.id === activeClassId);
    if (activeCls && document.getElementById('input-active-class-leader')) {
      document.getElementById('input-active-class-leader').value = activeCls.classLeader || '';
    }
    selectLesson(0);
  });

  // --- Tab: Edit-lesson course selector ---
  document.getElementById('select-editlessson-course').addEventListener('change', (e) => {
    activeCourseId = e.target.value;
    localStorage.setItem('iplane_active_course_id', activeCourseId);
    const courseClasses = classes.filter(cl => cl.courseId === activeCourseId);
    if (courseClasses.length > 0) {
      activeClassId = courseClasses[0].id;
      localStorage.setItem('iplane_active_class_id', activeClassId);
    }
    loadDatabaseState();
    renderSidebar();
    renderSettingsDropdowns();
    renderWorkspaceDropdowns();
    updateProfileLabels();
    selectLesson(0);
    loadLessonIntoInlineEditor();
  });

  // --- Tab: CSV import course selector ---
  document.getElementById('select-csv-course').addEventListener('change', (e) => {
    activeCourseId = e.target.value;
    localStorage.setItem('iplane_active_course_id', activeCourseId);
    const courseClasses = classes.filter(cl => cl.courseId === activeCourseId);
    if (courseClasses.length > 0) {
      activeClassId = courseClasses[0].id;
      localStorage.setItem('iplane_active_class_id', activeClassId);
    }
    loadDatabaseState();
    renderSidebar();
    renderSettingsDropdowns();
    renderWorkspaceDropdowns();
    updateProfileLabels();
    selectLesson(0);
  });

  // --- Inline editor: active-course select auto-fill name/code ---
  document.getElementById('select-active-course').addEventListener('change', (e) => {
    const editNameInput = document.getElementById('input-edit-course-name');
    const editCodeInput = document.getElementById('input-edit-course-code');
    const selected = courses.find(c => c.id === e.target.value);
    if (selected && editNameInput) editNameInput.value = selected.name;
    if (selected && editCodeInput) editCodeInput.value = selected.code;
  });

  document.getElementById('select-active-class').addEventListener('change', (e) => {
    const editClassInput = document.getElementById('input-edit-class-name');
    const selected = classes.find(c => c.id === e.target.value);
    if (selected && editClassInput) editClassInput.value = selected.name;
  });

  // --- Save course name inline ---
  document.getElementById('btn-save-course-name').addEventListener('click', () => {
    const newName = document.getElementById('input-edit-course-name').value.trim();
    const newCode = document.getElementById('input-edit-course-code').value.trim();
    if (!newName) { alert('กรุณากรอกชื่อวิชาก่อนบันทึก'); return; }
    const course = courses.find(c => c.id === activeCourseId);
    if (course) {
      course.name = newName;
      if (newCode) course.code = newCode;
      localStorage.setItem('iplane_courses', JSON.stringify(courses));
      renderSidebar();
      renderSettingsDropdowns();
      renderWorkspaceDropdowns();
      updateProfileLabels();
      lucide.createIcons();
      if (config.gasUrl) syncConfigToCloud();
      showToast('บันทึกชื่อคอร์สวิชาเรียบร้อยแล้ว ✓');
    }
  });

  // --- Save class name inline ---
  document.getElementById('btn-save-class-name').addEventListener('click', () => {
    const newName = document.getElementById('input-edit-class-name').value.trim();
    if (!newName) { alert('กรุณากรอกชื่อห้องเรียนก่อนบันทึก'); return; }
    const cls = classes.find(c => c.id === activeClassId);
    if (cls) {
      cls.name = newName;
      localStorage.setItem('iplane_classes', JSON.stringify(classes));
      renderSidebar();
      renderSettingsDropdowns();
      renderWorkspaceDropdowns();
      updateProfileLabels();
      lucide.createIcons();
      if (config.gasUrl) syncConfigToCloud();
      showToast('บันทึกชื่อห้องเรียนเรียบร้อยแล้ว ✓');
    }
  });

  // Layout action button bindings
  document.getElementById('btn-save-offline').addEventListener('click', () => saveLessonProgress(true));
  document.getElementById('btn-ai-draft-reflection').addEventListener('click', draftReflectionWithAI);
  document.getElementById('btn-sync-google').addEventListener('click', openA4PreviewModal);
  document.getElementById('btn-export-pdf').addEventListener('click', openA4PreviewModal);

  // Immersive A4 Print Preview Modal bindings
  document.getElementById('btn-close-preview').addEventListener('click', closeA4PreviewModal);
  document.getElementById('btn-preview-close').addEventListener('click', closeA4PreviewModal);
  document.getElementById('btn-preview-save-offline').addEventListener('click', () => saveLessonProgress(true));
  
  document.getElementById('btn-preview-sync-google').addEventListener('click', () => {
    const saved = saveLessonProgress(false);
    if (!saved) {
      alert('กรุณากรอกบันทึกหลังสอนและเขียนลายเซ็นก่อนส่งข้อมูล');
      return;
    }
    if (!isSignatureDrawn) {
      alert('กรุณาเซ็นชื่อผู้สอนเพื่อแนบลงในรายงานแผนการสอนก่อนทำการซิงก์');
      return;
    }
    syncToGoogleSheets();
  });

  document.getElementById('btn-preview-export-pdf').addEventListener('click', () => {
    const saved = saveLessonProgress(false);
    if (!saved) {
      alert('กรุณากรอกบันทึกหลังสอนก่อนดึงเอกสาร PDF');
      return;
    }
    if (!isSignatureDrawn) {
      alert('กรุณาเขียนลายเซ็นดิจิทัลในแอปเพื่อลงนามแนบท้ายเอกสาร');
      return;
    }
    exportPDFDocument();
  });

  // Active dropdown switch updates (Settings Modal)
  document.getElementById('select-active-course').addEventListener('change', (e) => {
    activeCourseId = e.target.value;
    localStorage.setItem('iplane_active_course_id', activeCourseId);
    
    // Auto-select first class under this course
    const courseClasses = classes.filter(cl => cl.courseId === activeCourseId);
    if (courseClasses.length > 0) {
      activeClassId = courseClasses[0].id;
      localStorage.setItem('iplane_active_class_id', activeClassId);
    }
    
    loadDatabaseState();
    renderSidebar();
    renderSettingsDropdowns();
    renderWorkspaceDropdowns();
    updateProfileLabels();
    selectLesson(0);
  });

  document.getElementById('select-active-class').addEventListener('change', (e) => {
    activeClassId = e.target.value;
    localStorage.setItem('iplane_active_class_id', activeClassId);
    loadDatabaseState();
    renderSidebar();
    renderSettingsDropdowns();
    renderWorkspaceDropdowns();
    updateProfileLabels();
    
    // Load class leader
    const activeCls = classes.find(c => c.id === activeClassId);
    document.getElementById('input-active-class-leader').value = activeCls ? (activeCls.classLeader || '') : '';
    
    selectLesson(0);
  });

  // Direct Workspace View course and classroom dropdown updates!
  document.getElementById('select-workspace-course').addEventListener('change', (e) => {
    activeCourseId = e.target.value;
    localStorage.setItem('iplane_active_course_id', activeCourseId);
    
    // Auto-select first class under this course
    const courseClasses = classes.filter(cl => cl.courseId === activeCourseId);
    if (courseClasses.length > 0) {
      activeClassId = courseClasses[0].id;
      localStorage.setItem('iplane_active_class_id', activeClassId);
    }
    
    loadDatabaseState();
    renderSidebar();
    renderSettingsDropdowns();
    renderWorkspaceDropdowns();
    updateProfileLabels();
    selectLesson(0);
    
    // Automatically retrieve Sheets data if URL exists
    if (config.gasUrl) fetchLiveGoogleData();
  });

  document.getElementById('select-workspace-class').addEventListener('change', (e) => {
    activeClassId = e.target.value;
    localStorage.setItem('iplane_active_class_id', activeClassId);
    loadDatabaseState();
    renderSidebar();
    renderSettingsDropdowns();
    renderWorkspaceDropdowns();
    updateProfileLabels();
    
    // Load class leader
    const activeCls = classes.find(c => c.id === activeClassId);
    document.getElementById('input-active-class-leader').value = activeCls ? (activeCls.classLeader || '') : '';
    
    selectLesson(0);
    
    // Automatically retrieve Sheets data if URL exists
    if (config.gasUrl) fetchLiveGoogleData();
  });

  // --- Preview Modal: Course selector ---
  document.getElementById('select-preview-course').addEventListener('change', (e) => {
    activeCourseId = e.target.value;
    localStorage.setItem('iplane_active_course_id', activeCourseId);
    
    // Auto-select first class under this course
    const courseClasses = classes.filter(cl => cl.courseId === activeCourseId);
    if (courseClasses.length > 0) {
      activeClassId = courseClasses[0].id;
      localStorage.setItem('iplane_active_class_id', activeClassId);
    }
    
    loadDatabaseState();
    renderSidebar();
    renderSettingsDropdowns();
    renderWorkspaceDropdowns();
    updateProfileLabels();
    selectLesson(0);
    
    // Refresh preview content immediately
    populatePrintTemplate();
    lucide.createIcons();
    
    if (config.gasUrl) fetchLiveGoogleData();
  });

  // --- Preview Modal: Class selector ---
  document.getElementById('select-preview-class').addEventListener('change', (e) => {
    activeClassId = e.target.value;
    localStorage.setItem('iplane_active_class_id', activeClassId);
    loadDatabaseState();
    renderSidebar();
    renderSettingsDropdowns();
    renderWorkspaceDropdowns();
    updateProfileLabels();
    
    // Load class leader
    const activeCls = classes.find(c => c.id === activeClassId);
    if (document.getElementById('input-active-class-leader')) {
      document.getElementById('input-active-class-leader').value = activeCls ? (activeCls.classLeader || '') : '';
    }
    
    selectLesson(0);
    
    // Refresh preview content immediately
    populatePrintTemplate();
    lucide.createIcons();
    
    if (config.gasUrl) fetchLiveGoogleData();
  });

  // Open Main Dashboard initially
  openDashboardView();
}

// Update text banners based on profiles
function updateProfileLabels() {
  const currentCourse = courses.find(c => c.id === activeCourseId);
  const currentClass = classes.find(c => c.id === activeClassId);

  // Update mobile reflection classroom banner
  const mobileReflectClassroom = document.getElementById('mobile-reflect-classroom-name');
  if (mobileReflectClassroom && currentCourse && currentClass) {
    mobileReflectClassroom.innerHTML = `<i data-lucide="graduation-cap" style="width: 16px; height: 16px;"></i> <span>${currentCourse.code} - ${currentClass.name}</span>`;
    lucide.createIcons();
  }

  if (currentCourse) {
    document.getElementById('active-course-label').innerText = `วิชา: ${currentCourse.name} (${currentCourse.code})`;
    
    // Decoupled Course Scope Settings Indicators
    const labelCourse = document.getElementById('label-edit-lesson-coursename');
    if (labelCourse) {
      labelCourse.innerText = `${currentCourse.name} (${currentCourse.code})`;
    }
    const labelCsvCourse = document.getElementById('label-csv-course-name');
    if (labelCsvCourse) {
      labelCsvCourse.innerText = `${currentCourse.name} (${currentCourse.code})`;
    }
  }
  
  if (currentClass) {
    document.getElementById('active-class-label').innerText = `ชั้นเรียน: ${currentClass.name}`;
    
    // Decoupled Classroom Scope Settings Indicators
    const labelClass = document.getElementById('label-auto-date-classname');
    if (labelClass) {
      labelClass.innerText = currentClass.name;
    }
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
  
  // Also render mobile week scroller
  renderMobileWeekScroller();
}

// Render Mobile Week Scroller
function renderMobileWeekScroller() {
  const scroller = document.getElementById('mobile-week-scroller');
  if (!scroller) return;
  
  scroller.innerHTML = '';
  
  lessonPlans.forEach((plan, index) => {
    const chip = document.createElement('div');
    chip.className = `mobile-week-chip ${index === selectedIndex ? 'active' : ''}`;
    chip.innerText = `ครั้งที่ ${plan.once}`;
    
    chip.addEventListener('click', () => {
      selectLesson(index);
    });
    
    scroller.appendChild(chip);
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

  // Populate new classroom course selector dropdown
  const selectNewClassCourse = document.getElementById('select-new-class-course');
  if (selectNewClassCourse) {
    selectNewClassCourse.innerHTML = '';
    courses.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c.id;
      opt.innerText = `${c.name} (${c.code})`;
      selectNewClassCourse.appendChild(opt);
    });
  }

  // --- Auto-fill inline edit inputs for course/class ---
  const activeCourse = courses.find(c => c.id === activeCourseId);
  const activeClass = classes.find(c => c.id === activeClassId);
  const editCourseNameInput = document.getElementById('input-edit-course-name');
  const editCourseCodeInput = document.getElementById('input-edit-course-code');
  const editClassNameInput = document.getElementById('input-edit-class-name');
  if (editCourseNameInput && activeCourse) editCourseNameInput.value = activeCourse.name;
  if (editCourseCodeInput && activeCourse) editCourseCodeInput.value = activeCourse.code;
  if (editClassNameInput && activeClass) editClassNameInput.value = activeClass.name;

  // --- Populate Auto-date class selector ---
  const autodateClassSelect = document.getElementById('select-autodate-class');
  if (autodateClassSelect) {
    autodateClassSelect.innerHTML = '';
    classes.forEach(cl => {
      const opt = document.createElement('option');
      opt.value = cl.id;
      opt.innerText = cl.name;
      opt.selected = cl.id === activeClassId;
      autodateClassSelect.appendChild(opt);
    });
  }

  // --- Populate Edit-lesson course selector ---
  const editLessonCourseSelect = document.getElementById('select-editlessson-course');
  if (editLessonCourseSelect) {
    editLessonCourseSelect.innerHTML = '';
    courses.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c.id;
      opt.innerText = `${c.name} (${c.code})`;
      opt.selected = c.id === activeCourseId;
      editLessonCourseSelect.appendChild(opt);
    });
  }

  // --- Populate CSV import course selector ---
  const csvCourseSelect = document.getElementById('select-csv-course');
  if (csvCourseSelect) {
    csvCourseSelect.innerHTML = '';
    courses.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c.id;
      opt.innerText = `${c.name} (${c.code})`;
      opt.selected = c.id === activeCourseId;
      csvCourseSelect.appendChild(opt);
    });
  }
}

function renderWorkspaceDropdowns() {
  const wsCourseSelect = document.getElementById('select-workspace-course');
  if (wsCourseSelect) {
    wsCourseSelect.innerHTML = '';
    courses.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c.id;
      opt.innerText = `${c.code} - ${c.name}`;
      opt.selected = c.id === activeCourseId;
      wsCourseSelect.appendChild(opt);
    });
  }

  const wsClassSelect = document.getElementById('select-workspace-class');
  if (wsClassSelect) {
    wsClassSelect.innerHTML = '';
    // Filter classes to only show those belonging to the active course
    const courseClasses = classes.filter(cl => cl.courseId === activeCourseId);
    courseClasses.forEach(cl => {
      const opt = document.createElement('option');
      opt.value = cl.id;
      opt.innerText = cl.name;
      opt.selected = cl.id === activeClassId;
      wsClassSelect.appendChild(opt);
    });
  }

  // --- Sync Preview Modal Selectors ---
  const previewCourseSelect = document.getElementById('select-preview-course');
  if (previewCourseSelect) {
    previewCourseSelect.innerHTML = '';
    courses.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c.id;
      opt.innerText = `${c.code} - ${c.name}`;
      opt.selected = c.id === activeCourseId;
      previewCourseSelect.appendChild(opt);
    });
  }

  const previewClassSelect = document.getElementById('select-preview-class');
  if (previewClassSelect) {
    previewClassSelect.innerHTML = '';
    const courseClasses = classes.filter(cl => cl.courseId === activeCourseId);
    courseClasses.forEach(cl => {
      const opt = document.createElement('option');
      opt.value = cl.id;
      opt.innerText = cl.name;
      opt.selected = cl.id === activeClassId;
      previewClassSelect.appendChild(opt);
    });
  }
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

  // Highlight in mobile week scroller
  const chips = document.querySelectorAll('.mobile-week-chip');
  chips.forEach((chip, idx) => {
    if (idx === index) {
      chip.classList.add('active');
      chip.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    } else {
      chip.classList.remove('active');
    }
  });

  const plan = lessonPlans[index];
  const displayDate = formatDisplayDate(plan.date);

  // Set Labels & Headers
  document.getElementById('selected-week-title').innerText = `สัปดาห์ที่ ${plan.week} - แผนการสอนครั้งที่ ${plan.once}`;
  document.getElementById('selected-week-subtitle').innerText = `เรื่อง: ${plan.topic} (วันที่สอน: ${displayDate})`;
  
  // Set Mobile Reflect context banner
  const reflectTitleEl = document.getElementById('mobile-reflect-lesson-title');
  const reflectDateEl = document.getElementById('mobile-reflect-date-badge');
  const reflectTopicEl = document.getElementById('mobile-reflect-topic');
  if (reflectTitleEl) reflectTitleEl.innerText = `สัปดาห์ที่ ${plan.week} - ครั้งที่ ${plan.once}`;
  if (reflectDateEl) reflectDateEl.innerText = displayDate || 'ยังไม่ได้ระบุวันที่';
  if (reflectTopicEl) reflectTopicEl.innerText = `เรื่อง: ${plan.topic}`;
  
  document.getElementById('lesson-date-badge').innerText = displayDate;
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

  // Load Reflection outcomes
  let outcomesMode = plan.outcomesMode;
  if (!outcomesMode) {
    outcomesMode = (plan.outcomes && plan.outcomes.startsWith('data:image/')) ? 'draw' : 'text';
    plan.outcomesMode = outcomesMode;
  }
  
  const outcomesText = document.getElementById('txt-outcomes');
  const outcomesDrawContainer = document.getElementById('draw-outcomes-container');
  const btnToggleTextOutcomes = document.getElementById('btn-toggle-text-outcomes');
  const btnToggleDrawOutcomes = document.getElementById('btn-toggle-draw-outcomes');

  if (outcomesMode === 'text') {
    btnToggleTextOutcomes.classList.add('active');
    btnToggleDrawOutcomes.classList.remove('active');
    outcomesText.style.display = 'block';
    outcomesDrawContainer.style.display = 'none';
    outcomesText.value = (plan.outcomes === '-') ? '' : (plan.outcomes || '');
    const fmtBarOut = document.getElementById('fmt-bar-outcomes');
    if (fmtBarOut) fmtBarOut.style.display = 'flex';
    applyReflectFormat('outcomes', plan);
  } else {
    btnToggleTextOutcomes.classList.remove('active');
    btnToggleDrawOutcomes.classList.add('active');
    outcomesText.style.display = 'none';
    const fmtBarOut = document.getElementById('fmt-bar-outcomes');
    if (fmtBarOut) fmtBarOut.style.display = 'none';
    outcomesDrawContainer.style.display = 'block';
    outcomesText.value = '';
    
    // Load and draw strokes or image
    setTimeout(() => {
      resizeReflectionCanvas('outcomes');
      const hasStrokes = plan.outcomesDrawStrokes && plan.outcomesDrawStrokes.length > 0;
      if (hasStrokes) {
        canvases.outcomes.strokes = JSON.parse(JSON.stringify(plan.outcomesDrawStrokes));
        redrawCanvas('outcomes');
      } else if (plan.outcomes && plan.outcomes.startsWith('data:image/')) {
        canvases.outcomes.strokes = [];
        const img = new Image();
        img.onload = () => {
          const cData = canvases.outcomes;
          if (cData.ctx && cData.canvas) {
            cData.ctx.clearRect(0, 0, cData.canvas.width, cData.canvas.height);
            cData.ctx.drawImage(img, 0, 0, cData.canvas.width, cData.canvas.height);
          }
        };
        img.src = plan.outcomes;
      } else {
        canvases.outcomes.strokes = [];
        redrawCanvas('outcomes');
      }
    }, 50);
  }

  // Load Reflection solutions
  let solutionsMode = plan.solutionsMode;
  if (!solutionsMode) {
    solutionsMode = (plan.solutions && plan.solutions.startsWith('data:image/')) ? 'draw' : 'text';
    plan.solutionsMode = solutionsMode;
  }

  const solutionsText = document.getElementById('txt-solutions');
  const solutionsDrawContainer = document.getElementById('draw-solutions-container');
  const btnToggleTextSolutions = document.getElementById('btn-toggle-text-solutions');
  const btnToggleDrawSolutions = document.getElementById('btn-toggle-draw-solutions');

  if (solutionsMode === 'text') {
    btnToggleTextSolutions.classList.add('active');
    btnToggleDrawSolutions.classList.remove('active');
    solutionsText.style.display = 'block';
    solutionsDrawContainer.style.display = 'none';
    solutionsText.value = (plan.solutions === '-') ? '' : (plan.solutions || '');
    const fmtBarSol = document.getElementById('fmt-bar-solutions');
    if (fmtBarSol) fmtBarSol.style.display = 'flex';
    applyReflectFormat('solutions', plan);
  } else {
    btnToggleTextSolutions.classList.remove('active');
    btnToggleDrawSolutions.classList.add('active');
    solutionsText.style.display = 'none';
    solutionsDrawContainer.style.display = 'block';
    const fmtBarSol = document.getElementById('fmt-bar-solutions');
    if (fmtBarSol) fmtBarSol.style.display = 'none';
    solutionsText.value = '';
    
    // Load and draw strokes or image
    setTimeout(() => {
      resizeReflectionCanvas('solutions');
      const hasStrokes = plan.solutionsDrawStrokes && plan.solutionsDrawStrokes.length > 0;
      if (hasStrokes) {
        canvases.solutions.strokes = JSON.parse(JSON.stringify(plan.solutionsDrawStrokes));
        redrawCanvas('solutions');
      } else if (plan.solutions && plan.solutions.startsWith('data:image/')) {
        canvases.solutions.strokes = [];
        const img = new Image();
        img.onload = () => {
          const cData = canvases.solutions;
          if (cData.ctx && cData.canvas) {
            cData.ctx.clearRect(0, 0, cData.canvas.width, cData.canvas.height);
            cData.ctx.drawImage(img, 0, 0, cData.canvas.width, cData.canvas.height);
          }
        };
        img.src = plan.solutions;
      } else {
        canvases.solutions.strokes = [];
        redrawCanvas('solutions');
      }
    }, 50);
  }

  // Load and draw global signature if exists, instead of erasing it!
  strokes = [];
  drawStrokes();
  strokesStudent = [];
  drawStrokesStudent();
  
  document.querySelector('.app-main').scrollTop = 0;
}

// Save reflections locally to LocalStorage
function saveLessonProgress(showNotification = false) {
  const plan = lessonPlans[selectedIndex];
  if (!plan) return false;

  let outcomeText = '';
  let solutionText = '';

  if (plan.outcomesMode === 'draw') {
    if (!plan.outcomes || plan.outcomes === '-') {
      if (showNotification) alert('กรุณาเขียนบันทึกผลการจัดการเรียนรู้');
      return false;
    }
  } else {
    outcomeText = document.getElementById('txt-outcomes').value.trim();
    if (!outcomeText) {
      if (showNotification) alert('กรุณากรอกข้อมูลบันทึกผลการจัดการเรียนรู้');
      return false;
    }
    plan.outcomes = outcomeText;
  }

  if (plan.solutionsMode === 'draw') {
    if (!plan.solutions || plan.solutions === '-') {
      if (showNotification) alert('กรุณาเขียนบันทึกแนวทางการแก้ปัญหา');
      return false;
    }
  } else {
    solutionText = document.getElementById('txt-solutions').value.trim();
    if (!solutionText) {
      if (showNotification) alert('กรุณากรอกข้อมูลบันทึกแนวทางการแก้ปัญหา');
      return false;
    }
    plan.solutions = solutionText;
  }

  // Save to classroom local state using decouple saver
  saveClassLessons(activeClassId, lessonPlans);

  // ดันคอมเมนต์ (ผลการเรียนรู้/แนวทางแก้ปัญหา) ขึ้น Cloud ทันทีแบบเบาๆ
  // โดยไม่ต้องรอสร้าง PDF/เซ็นชื่อ เพื่อให้เปิดจากเครื่องอื่นแล้วเห็นข้อมูลล่าสุดได้เลย
  pushReflectionToCloud(plan);

  renderSidebar();

  if (showNotification) {
    alert('บันทึกข้อมูลหลังการสอนเรียบร้อยแล้ว (ลงเครื่องนี้ และซิงก์ขึ้น Cloud ให้แล้ว)');
  }
  return true;
}

// ส่งเฉพาะข้อมูลแผนการสอน + คอมเมนต์ของครั้งที่กำลังแก้ ขึ้น Google Sheets แบบเงียบๆ เบื้องหลัง
// (ใช้ doPost branch เดิมที่อัปเดตคอลัมน์ "ผลการจัดการเรียนรู้"/"แนวทางแก้ปัญหา" ตาม "ครั้งที่" — ไม่แนบ PDF จึงไม่ต้องมีลายเซ็น)
function pushReflectionToCloud(plan) {
  if (!config.gasUrl || !plan) return;
  const currentCourse = courses.find(c => c.id === activeCourseId);
  const currentClass = classes.find(c => c.id === activeClassId);
  if (!currentCourse || !currentClass) return;

  const sheetTabName = getSafeSheetName(currentCourse.code, currentClass.name);
  const payload = {
    sheetName: sheetTabName,
    week: plan.week,
    once: plan.once,
    period: plan.period,
    date: plan.date,
    unit: plan.unit,
    topic: plan.topic,
    periodCount: plan.periodCount,
    standard: plan.standard,
    objectives: plan.objectives,
    activities: plan.activities,
    assessment: plan.assessment,
    materials: plan.materials,
    outcomes: plan.outcomes,
    solutions: plan.solutions
  };

  fetch(config.gasUrl, {
    method: 'POST',
    mode: 'cors',
    headers: { 'Content-Type': 'text/plain' },
    body: JSON.stringify(payload)
  }).catch(e => console.error('Error pushing reflection to cloud:', e));
}

// ใช้ Gemini ช่วยร่าง "ผลการจัดการเรียนรู้" และ "แนวทางแก้ไข" จากข้อมูลแผนการสอนปัจจุบัน
// (เรียก Gemini REST API ตรงจากเบราว์เซอร์ด้วย API Key ที่ครูกรอกไว้ในหน้าตั้งค่า — ไม่ผ่าน Apps Script)
async function draftReflectionWithAI() {
  const plan = lessonPlans[selectedIndex];
  if (!plan) return;

  if (!config.geminiApiKey) {
    alert('กรุณาใส่ Gemini API Key ในหน้า "ตั้งค่า" ก่อนใช้งานผู้ช่วย AI\n(ขอฟรีได้ที่ aistudio.google.com/apikey)');
    document.getElementById('settings-modal').classList.add('open');
    return;
  }

  const hasExistingText =
    (plan.outcomesMode !== 'draw' && document.getElementById('txt-outcomes').value.trim()) ||
    (plan.solutionsMode !== 'draw' && document.getElementById('txt-solutions').value.trim());
  if (hasExistingText && !confirm('มีข้อความที่เขียนไว้อยู่แล้ว หากให้ AI ร่างใหม่จะเขียนทับข้อความเดิมทั้งสองช่อง ต้องการดำเนินการต่อหรือไม่?')) {
    return;
  }

  const note = prompt('อยากให้ AI อ้างอิงบรรยากาศการสอนจริงเพิ่มเติมไหมครับ เช่น "เด็กตอบคำถามดี แต่ทำแบบฝึกหัดช้า" (ไม่กรอกก็ได้ AI จะร่างจากแผนการสอนล้วนๆ)', '');
  if (note === null) return; // ครูกดยกเลิก

  const currentCourse = courses.find(c => c.id === activeCourseId);
  const currentClass = classes.find(c => c.id === activeClassId);

  const btn = document.getElementById('btn-ai-draft-reflection');
  const btnSpan = btn.querySelector('span');
  const originalText = btnSpan.innerText;
  btn.disabled = true;
  btnSpan.innerText = 'AI กำลังร่าง...';

  try {
    const promptText = `คุณคือครูไทยกำลังเขียนบันทึกหลังการจัดการเรียนรู้ (ปพ.5) ของตนเอง
เขียนสั้น กระชับ น้ำเสียงครูจริง ไม่ใช้ภาษาทางการ แต่ละส่วนไม่เกิน 2-3 ประโยค

ข้อมูลแผนการสอน:
- วิชา: ${currentCourse ? `${currentCourse.name} (${currentCourse.code})` : '-'}
- ชั้นเรียน: ${currentClass ? currentClass.name : '-'}
- หน่วย/เรื่อง: ${plan.unit || '-'} / ${plan.topic || '-'}
- จุดประสงค์: ${plan.objectives || '-'}
- กิจกรรม: ${plan.activities || '-'}${note ? `\n- สิ่งที่ครูสังเกตจริง: ${note}` : ''}

ร่างข้อความ 2 ส่วนสั้นๆ:
1. "outcomes": ผลการจัดการเรียนรู้ — นักเรียนได้เรียนรู้อะไร บรรลุจุดประสงค์ข้อใดบ้าง และมีปัญหา/อุปสรรคที่พบในคาบนี้อะไรบ้าง (รวมทั้งผลและปัญหาไว้ในส่วนเดียวกัน)
2. "solutions": แนวทางแก้ไข — วิธีแก้ปัญหาหรือข้อที่พบใน "outcomes" เพื่อปรับปรุงการสอนครั้งถัดไป

ตอบกลับเป็น JSON เท่านั้น {"outcomes": "...", "solutions": "..."} ห้ามมีข้อความอื่น`;

    const modelName = config.geminiModel || DEFAULT_GEMINI_MODEL;
    const resp = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(modelName)}:generateContent?key=${encodeURIComponent(config.geminiApiKey)}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: promptText }] }],
        generationConfig: { responseMimeType: 'application/json' }
      })
    });

    if (!resp.ok) {
      const errBody = await resp.text().catch(() => '');
      let hint = '';
      if (resp.status === 429) {
        hint = '\n\nดูเหมือนรุ่นโมเดลนี้จะเกินโควตาฟรีสำหรับ Key ของคุณ ลองเปิดหน้า "ตั้งค่า" แล้วระบุชื่อรุ่นอื่น (เช่น gemini-flash-latest หรือ gemini-2.0-flash) ในช่อง "Gemini Model"';
      } else if (resp.status === 404) {
        hint = '\n\nไม่พบโมเดลชื่อนี้ ลองตรวจสอบหรือเปลี่ยนชื่อรุ่นในหน้า "ตั้งค่า" ช่อง "Gemini Model"';
      }
      throw new Error(`Gemini API ตอบกลับผิดพลาด (${resp.status}) ${errBody}`.trim() + hint);
    }

    const data = await resp.json();
    const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
    let draft;
    try {
      draft = JSON.parse(rawText);
    } catch (e) {
      throw new Error('AI ตอบกลับในรูปแบบที่ไม่คาดคิด กรุณาลองใหม่อีกครั้ง');
    }

    if (draft.outcomes) {
      setReflectionMode('outcomes', 'text');
      const txtOutcomes = document.getElementById('txt-outcomes');
      txtOutcomes.value = String(draft.outcomes).trim();
      plan.outcomes = txtOutcomes.value;
    }
    if (draft.solutions) {
      setReflectionMode('solutions', 'text');
      const txtSolutions = document.getElementById('txt-solutions');
      txtSolutions.value = String(draft.solutions).trim();
      plan.solutions = txtSolutions.value;
    }

    alert('AI ร่างบันทึกหลังสอนให้แล้วครับ ลองอ่านทบทวนและแก้ไขให้ตรงกับที่สอนจริงก่อนกด "บันทึกหลังสอน" นะครับ');
  } catch (err) {
    console.error('AI draft error:', err);
    alert('ขออภัยครับ ไม่สามารถร่างบันทึกด้วย AI ได้ในขณะนี้\n' + err.message);
  } finally {
    btn.disabled = false;
    btnSpan.innerText = originalText;
  }
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
  
  // Sync to cloud
  if (config.gasUrl) syncConfigToCloud();
  
  alert('เพิ่มรายวิชาเรียบร้อยแล้ว');
}

// Add New Classroom Room (Tab 2)
function addNewClassRoom() {
  const courseId = document.getElementById('select-new-class-course').value;
  const name = document.getElementById('input-new-class-name').value.trim();
  const leader = document.getElementById('input-new-class-leader').value.trim();

  if (!name) {
    alert('กรุณาระบุชื่อชั้นเรียน/ห้องเรียน');
    return;
  }

  const newId = 'cl_' + Date.now();
  classes.push({ id: newId, courseId: courseId, name: name, classLeader: leader });
  
  localStorage.setItem('iplane_classes', JSON.stringify(classes));
  
  document.getElementById('input-new-class-name').value = '';
  document.getElementById('input-new-class-leader').value = '';
  renderSettingsDropdowns();

  // Sync to cloud
  if (config.gasUrl) syncConfigToCloud();

  alert('เพิ่มชั้นเรียนเรียบร้อยแล้ว');
}

// Tab 3: Automatic Date Runner calculation
function runAutoDateRunner() {
  const startDateVal = document.getElementById('input-start-date').value;
  const weeks = parseInt(document.getElementById('input-teach-weeks').value) || 18;
  const periodsPerSession = parseInt(document.getElementById('input-session-periods').value) || 2;
  
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

  // --- แปลงวันที่ input เป็น Date object ที่ถูกต้อง ---
  // input[type="date"] ส่งค่า ISO YYYY-MM-DD (ค.ศ.) เสมอ
  // แต่กรณีที่ browser แสดง พ.ศ. หรือผู้ใช้พิมพ์ปี พ.ศ. ให้ตรวจจับและแปลงก่อน
  let parsedDate;
  if (startDateVal.includes('-')) {
    // ISO format: YYYY-MM-DD
    const parts = startDateVal.split('-');
    let year = parseInt(parts[0]);
    const month = parseInt(parts[1]) - 1;
    const day = parseInt(parts[2]);
    // ถ้าปี > 2400 แสดงว่าเป็น พ.ศ. → แปลงเป็น ค.ศ.
    if (year > 2400) year = year - 543;
    parsedDate = new Date(year, month, day);
  } else {
    // fallback: DD/MM/YYYY หรือรูปแบบอื่น
    const parts = startDateVal.split('/');
    let year = parseInt(parts[2]);
    const month = parseInt(parts[1]) - 1;
    const day = parseInt(parts[0]);
    if (year > 2400) year = year - 543;
    parsedDate = new Date(year, month, day);
  }

  if (isNaN(parsedDate.getTime())) {
    alert('รูปแบบวันที่ไม่ถูกต้อง กรุณาเลือกวันที่ผ่าน date picker');
    return;
  }

  const sessionsPerWeek = daysOfWeek.length;
  const totalSessions = weeks * sessionsPerWeek;

  // Sort daysOfWeek in Sunday-first order (0=Sun, 1=Mon, ... 6=Sat)
  daysOfWeek.sort((a, b) => a - b);

  // Calculate dates array
  const calculatedDates = [];
  let currentDate = new Date(parsedDate);
  
  for (let i = 0; i < totalSessions; i++) {
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

  // Rebuild the lessonPlans array dynamically to match the configured structure!
  const newPlans = [];
  for (let i = 0; i < totalSessions; i++) {
    const weekNum = Math.floor(i / sessionsPerWeek) + 1;
    const sessionNum = i + 1;
    
    // Attempt to map from existing or default plan templates
    let baseTemplate = DEFAULT_LESSON_PLANS[i % DEFAULT_LESSON_PLANS.length];
    
    // Default period range placeholder
    let periodRange = '1-2';
    if (periodsPerSession === 1) periodRange = '1';
    else if (periodsPerSession === 3) periodRange = '1-3';
    else if (periodsPerSession === 4) periodRange = '1-4';
    else if (periodsPerSession === 5) periodRange = '1-5';

    // Preserve outcomes/solutions if they were already recorded, else set to '-'
    let recordedPlan = lessonPlans.find(p => String(p.once) === String(sessionNum));
    let outcomes = (recordedPlan && recordedPlan.outcomes) ? recordedPlan.outcomes : '-';
    let solutions = (recordedPlan && recordedPlan.solutions) ? recordedPlan.solutions : '-';

    const plan = {
      week: String(weekNum),
      once: String(sessionNum),
      period: periodRange,
      date: calculatedDates[i],
      unit: baseTemplate ? baseTemplate.unit : '1',
      topic: baseTemplate ? baseTemplate.topic : `เรื่องการเรียนรู้ครั้งที่ ${sessionNum}`,
      periodCount: String(periodsPerSession),
      standard: baseTemplate ? baseTemplate.standard : 'มาตรฐานการเรียนรู้ ค1.1...',
      objectives: baseTemplate ? baseTemplate.objectives : '- เพื่อให้นักเรียนเข้าใจเนื้อหาบทเรียน',
      activities: baseTemplate ? baseTemplate.activities : 'ขั้นนำ:\n- ทักทาย\n\nขั้นสอน:\n- บรรยายกิจกรรมการเรียนรู้\n\nขั้นสรุป:\n- สรุปเนื้อหาร่วมกัน',
      assessment: baseTemplate ? baseTemplate.assessment : '- สังเกตพฤติกรรมในคาบเรียน',
      materials: baseTemplate ? baseTemplate.materials : '- หนังสือเรียน',
      outcomes: outcomes,
      solutions: solutions
    };
    newPlans.push(plan);
  }

  // Write new array to the global state
  lessonPlans = newPlans;

  // Save new progress dataset to LocalStorage using decoupled savers
  saveCourseLessons(activeCourseId, lessonPlans);
  saveClassLessons(activeClassId, lessonPlans);

  if (config.gasUrl) {
    syncAllLessonsToCloud();
  }

  // Render calculated list preview inside box
  const previewBox = document.getElementById('date-preview-list');
  previewBox.innerHTML = '';
  calculatedDates.forEach((d, idx) => {
    const item = document.createElement('div');
    item.className = 'date-preview-item';
    item.innerHTML = `<span>ครั้งที่ ${idx + 1} (สัปดาห์ ${Math.floor(idx / sessionsPerWeek) + 1}):</span> <span class="highlight">${d}</span>`;
    previewBox.appendChild(item);
  });

  // Re-initialize dynamic selects, sidebars, scrollers, and selections
  populateLessonEditorIndexSelect();
  renderSidebar();
  selectLesson(0);

  alert(`คำนวณและวางโครงสร้างการสอนทั้งหมด ${totalSessions} ครั้งสำเร็จเรียบร้อยแล้ว!`);
}

// Convert native Date objects into Thai date string (DD/MM/YYYY พ.ศ.)
// คำนวณ "สัปดาห์ที่" จากลำดับการสอน (ครั้งที่) เมื่อไม่มีค่า Week ที่บันทึกไว้จริง (ว่าง/หาย)
// ตามรูปแบบมาตรฐาน 2 คาบ/สัปดาห์ ของ DEFAULT_LESSON_PLANS: ครั้งที่ 1,2→สัปดาห์ 1 / 3,4→สัปดาห์ 2 / 5,6→สัปดาห์ 3 ...
// ใช้แทนการ fallback เป็น '1' คงที่ ซึ่งทำให้ลำดับสัปดาห์เพี้ยนเมื่อแถวข้อมูลบางแถวมีช่อง Week ว่าง
function deriveWeekFromOnce(once) {
  const onceNum = parseInt(once, 10) || 1;
  return String(Math.ceil(onceNum / 2));
}

function formatThaiDateString(date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  // date.getFullYear() always returns CE year (from ISO date input),
  // so we simply add 543 to convert to BE year.
  const ceYear = date.getFullYear();
  const BEYear = ceYear + 543;
  return `${day}/${month}/${BEYear}`;
}

// Convert ugly Date / ISO / raw strings to Thai formatted string (DD/MM/YYYY)
function formatDisplayDate(dateStr) {
  if (!dateStr) return '-';
  
  // If it's already in the DD/MM/YYYY format, return it as is
  if (/^\d{2}\/\d{2}\/\d{4}$/.test(dateStr)) {
    return dateStr;
  }
  
  try {
    const dateObj = new Date(dateStr);
    if (!isNaN(dateObj.getTime())) {
      let year = dateObj.getFullYear();
      if (year < 2400) {
        year += 543; // Convert CE to BE
      }
      const day = String(dateObj.getDate()).padStart(2, '0');
      const month = String(dateObj.getMonth() + 1).padStart(2, '0');
      return `${day}/${month}/${year}`;
    }
  } catch (e) {
    console.error('Error formatting date:', dateStr, e);
  }
  
  // Fallback split for ISO timezone
  if (String(dateStr).includes('T')) {
    const parts = String(dateStr).split('T')[0].split('-');
    if (parts.length === 3) {
      let year = parseInt(parts[0]);
      if (year < 2400) year += 543;
      return `${parts[2]}/${parts[1]}/${year}`;
    }
  }
  
  return dateStr;
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

  // Save full array to LocalStorage using decoupled savers
  saveCourseLessons(activeCourseId, lessonPlans);
  saveClassLessons(activeClassId, lessonPlans);
  
  if (config.gasUrl) {
    syncAllLessonsToCloud();
  }
  
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
  config.geminiApiKey = document.getElementById('input-gemini-api-key').value.trim();
  config.geminiModel = document.getElementById('input-gemini-model').value.trim();

  localStorage.setItem('iplane_gas_url', config.gasUrl);
  localStorage.setItem('iplane_folder_id', config.folderId);
  localStorage.setItem('iplane_gemini_api_key', config.geminiApiKey);
  localStorage.setItem('iplane_gemini_model', config.geminiModel);

  updateSyncStatusIndicator();
  updateProfileLabels();
  selectLesson(selectedIndex);
  
  // Sync config to cloud whenever settings are saved
  if (config.gasUrl) {
    syncConfigToCloud();
  }
  
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

// ==========================================
// Cross-Device Config Sync Functions
// ==========================================

/**
 * ดึงการตั้งค่า (courses, classes, profile) จาก Google Sheets __CONFIG__ sheet
 * เรียกอัตโนมัติเมื่อโหลดหน้าเว็บและมี GAS URL
 */
async function fetchConfigFromCloud() {
  if (!config.gasUrl) return;
  try {
    const url = `${config.gasUrl}?action=getConfig`;
    const response = await fetch(url);
    const result = await response.json();

    if (result.status !== 'success' || !result.config) return;
    const remoteConfig = result.config;

    let changed = false;

    // Merge courses: ถ้า remote มีข้อมูลให้ใช้ remote เป็นหลัก (override local)
    if (remoteConfig.courses && remoteConfig.courses.length > 0) {
      courses = remoteConfig.courses;
      localStorage.setItem('iplane_courses', JSON.stringify(courses));
      changed = true;
    }

    // Merge classes: เช่นเดียวกัน
    if (remoteConfig.classes && remoteConfig.classes.length > 0) {
      classes = remoteConfig.classes;
      // Ensure all classes have courseId
      classes.forEach(c => { if (!c.courseId) c.courseId = courses[0]?.id || 'c1'; });
      localStorage.setItem('iplane_classes', JSON.stringify(classes));
      changed = true;
    }

    // Merge profile (ถ้ามีข้อมูลใน cloud)
    if (remoteConfig.teacherName) {
      profile.teacherName = remoteConfig.teacherName;
      localStorage.setItem('iplane_teacher_name', profile.teacherName);
      changed = true;
    }
    if (remoteConfig.hodName) {
      profile.hodName = remoteConfig.hodName;
      localStorage.setItem('iplane_hod_name', profile.hodName);
      changed = true;
    }
    if (remoteConfig.schoolName) {
      profile.schoolName = remoteConfig.schoolName;
      localStorage.setItem('iplane_school_name', profile.schoolName);
      changed = true;
    }

    // Merge folderId and gasUrl from Cloud (if present)
    if (remoteConfig.folderId && remoteConfig.folderId !== config.folderId) {
      config.folderId = remoteConfig.folderId;
      localStorage.setItem('iplane_folder_id', config.folderId);
      const driveFolderInput = document.getElementById('input-drive-folder');
      if (driveFolderInput) driveFolderInput.value = config.folderId;
      changed = true;
    }
    if (remoteConfig.gasUrl && remoteConfig.gasUrl !== config.gasUrl) {
      config.gasUrl = remoteConfig.gasUrl;
      localStorage.setItem('iplane_gas_url', config.gasUrl);
      const gasUrlInput = document.getElementById('input-gas-url');
      if (gasUrlInput) gasUrlInput.value = config.gasUrl;
      changed = true;
    }
    if (remoteConfig.schoolLogo) {
      localStorage.setItem('iplane_school_logo', remoteConfig.schoolLogo);
      const settingsLogoPreview = document.getElementById('settings-logo-preview');
      const logoPreviewContainer = document.getElementById('logo-preview-container');
      if (settingsLogoPreview && logoPreviewContainer) {
        settingsLogoPreview.src = remoteConfig.schoolLogo;
        logoPreviewContainer.style.display = 'flex';
      }
      changed = true;
    }
    if (remoteConfig.teacherSignature) {
      localStorage.setItem('iplane_teacher_signature', remoteConfig.teacherSignature);
      setTimeout(() => {
        drawStrokes();
      }, 100);
      changed = true;
    }

    if (changed) {
      // Validate active IDs still exist after merge
      if (!courses.find(c => c.id === activeCourseId)) {
        activeCourseId = courses[0]?.id || activeCourseId;
        localStorage.setItem('iplane_active_course_id', activeCourseId);
      }
      if (!classes.find(c => c.id === activeClassId)) {
        const courseClasses = classes.filter(cl => cl.courseId === activeCourseId);
        activeClassId = courseClasses[0]?.id || classes[0]?.id || activeClassId;
        localStorage.setItem('iplane_active_class_id', activeClassId);
      }

      lessonPlans = loadCombinedLessons(activeCourseId, activeClassId);
      renderSidebar();
      renderSettingsDropdowns();
      renderWorkspaceDropdowns();
      updateProfileLabels();

      // Update settings form values if modal is open
      const teacherInput = document.getElementById('input-teacher-name');
      const hodInput = document.getElementById('input-hod-name');
      const schoolInput = document.getElementById('input-school-name');
      if (teacherInput) teacherInput.value = profile.teacherName;
      if (hodInput) hodInput.value = profile.hodName;
      if (schoolInput) schoolInput.value = profile.schoolName;

      showToast('โหลดข้อมูลจาก Cloud เรียบร้อยแล้ว ✓');
    }
    
    // อัปเดตส่วนแชร์และ QR Code หลังดึง config
    updateEasySetupShareSection();
    
  } catch (err) {
    console.error('fetchConfigFromCloud error:', err);
  }
}

/**
 * บันทึกการตั้งค่า (courses, classes, profile) ขึ้น Google Sheets __CONFIG__ sheet
 * เรียกอัตโนมัติเมื่อมีการเปลี่ยนแปลงข้อมูลสำคัญ
 */
async function syncConfigToCloud() {
  if (!config.gasUrl) return;
  try {
    const payload = {
      action: 'saveConfig',
      courses: courses,
      classes: classes,
      teacherName: profile.teacherName,
      hodName: profile.hodName,
      schoolName: profile.schoolName,
      folderId: config.folderId,
      schoolLogo: localStorage.getItem('iplane_school_logo') || '',
      teacherSignature: localStorage.getItem('iplane_teacher_signature') || ''
    };
    const response = await fetch(config.gasUrl, {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify(payload)
    });
    const result = await response.json();
    if (result.status === 'success') {
      showToast('ซิงค์การตั้งค่าขึ้น Cloud เรียบร้อยแล้ว ✓');
      // อัปเดตแผงแชร์เพราะข้อมูลอาจจะเปลี่ยน
      updateEasySetupShareSection();
    }
  } catch (err) {
    console.error('syncConfigToCloud error:', err);
  }
}

/**
 * บันทึกแผนการสอนทั้งหมดของคลาสปัจจุบันขึ้น Google Sheets
 */
async function syncAllLessonsToCloud() {
  if (!config.gasUrl) return;

  const currentCourse = courses.find(c => c.id === activeCourseId);
  const currentClass = classes.find(c => c.id === activeClassId);
  if (!currentCourse || !currentClass) return;

  const courseSheetName = getSafeSheetName(currentCourse.code, '');
  const classSheetName = getSafeSheetName(currentCourse.code, currentClass.name);

  try {
    // 1. Sync academic details to Course Sheet tab
    const coursePayload = {
      action: 'saveAllLessons',
      sheetName: courseSheetName,
      lessons: lessonPlans
    };
    const courseSync = fetch(config.gasUrl, {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify(coursePayload)
    });

    // 2. Sync classroom-specific details to Classroom Sheet tab
    const classPayload = {
      action: 'saveAllLessons',
      sheetName: classSheetName,
      lessons: lessonPlans
    };
    const classSync = fetch(config.gasUrl, {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify(classPayload)
    });

    const [res1, res2] = await Promise.all([courseSync, classSync]);
    const r1 = await res1.json();
    const r2 = await res2.json();

    if (r1.status === 'success' && r2.status === 'success') {
      showToast('ซิงค์หลักสูตรและข้อมูลห้องเรียนขึ้น Cloud สำเร็จ ✓');
    }
  } catch (err) {
    console.error('syncAllLessonsToCloud error:', err);
  }
}

/**
 * อัปเดต QR Code และลิงก์สำหรับนำเข้าการเชื่อมต่อ Google API ไปยังอุปกรณ์อื่น
 */
function updateEasySetupShareSection() {
  const container = document.getElementById('easy-setup-section');
  if (!container) return;

  if (config.gasUrl) {
    container.style.display = 'block';

    let baseUrl = window.location.href.split('?')[0];
    if (baseUrl.includes('localhost') || baseUrl.includes('127.0.0.1') || baseUrl.startsWith('file:')) {
      baseUrl = 'https://ghhambal.github.io/iplan/';
    }
    const setupUrl = baseUrl + 
      '?gasUrl=' + encodeURIComponent(config.gasUrl) + 
      '&folderId=' + encodeURIComponent(config.folderId || '');

    // ปุ่มคัดลอกลิงก์แชร์
    const copyBtn = document.getElementById('btn-copy-setup-link');
    if (copyBtn) {
      copyBtn.onclick = () => {
        navigator.clipboard.writeText(setupUrl).then(() => {
          showToast('คัดลอกลิงก์ตั้งค่าไปที่คลิปบอร์ดแล้ว! ✓');
        }).catch(err => {
          const textarea = document.createElement('textarea');
          textarea.value = setupUrl;
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand('copy');
          document.body.removeChild(textarea);
          showToast('คัดลอกลิงก์ตั้งค่าไปที่คลิปบอร์ดแล้ว! ✓');
        });
      };
    }

    // ปุ่มเปิด-ปิด QR Code
    const toggleQrBtn = document.getElementById('btn-toggle-qr');
    const qrContainer = document.getElementById('qr-container');
    const qrImage = document.getElementById('qr-image');

    if (toggleQrBtn) {
      toggleQrBtn.onclick = () => {
        if (qrContainer.style.display === 'none' || qrContainer.style.display === '') {
          qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(setupUrl)}`;
          qrContainer.style.display = 'flex';
          toggleQrBtn.innerHTML = '<i data-lucide="eye-off"></i> ซ่อน QR Code';
        } else {
          qrContainer.style.display = 'none';
          toggleQrBtn.innerHTML = '<i data-lucide="qr-code"></i> แสดง QR Code';
        }
        lucide.createIcons();
      };
    }
  } else {
    container.style.display = 'none';
  }
}

// Lightweight toast notification
function showToast(message, duration = 2500) {
  let toast = document.getElementById('iplane-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'iplane-toast';
    toast.style.cssText = `
      position: fixed; bottom: 32px; left: 50%; transform: translateX(-50%) translateY(20px);
      background: rgba(30,34,54,0.97); color: #fff;
      padding: 12px 24px; border-radius: 50px;
      font-size: 13.5px; font-weight: 600; font-family: 'Inter', sans-serif;
      box-shadow: 0 8px 32px rgba(0,0,0,0.5); border: 1px solid rgba(99,102,241,0.4);
      z-index: 99999; opacity: 0; transition: opacity 0.25s ease, transform 0.25s ease;
      display: flex; align-items: center; gap: 8px; pointer-events: none;
      white-space: nowrap;
    `;
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span style="color:#6ee7b7;">✓</span> ${message}`;
  toast.style.opacity = '1';
  toast.style.transform = 'translateX(-50%) translateY(0)';
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(20px)';
  }, duration);
}

// Convert native sheet parameters to valid Google Sheets tab name
function getSafeSheetName(courseCode, className) {
  if (!courseCode || !className) return 'Sheet1';
  // Combine code and class name
  let name = `${courseCode}_${className}`;
  // Remove Google Sheet invalid characters: \ / ? * [ ]
  name = name.replace(/[\\\/\?\*\[\]]/g, '-');
  // Limit length to 30 characters
  if (name.length > 30) {
    name = name.substring(0, 30);
  }
  return name.trim();
}

// Fetch live sheet data from Apps Script backend on startup
async function fetchLiveGoogleData() {
  if (!config.gasUrl || classes.length === 0) return;

  try {
    const fetchPromises = classes.map(async (cls) => {
      const course = courses.find(c => c.id === cls.courseId);
      if (!course) return;

      const classSheetName = getSafeSheetName(course.code, cls.name);
      const courseSheetName = getSafeSheetName(course.code, ''); // e.g. 'ค32101'
      
      const classUrl = `${config.gasUrl}?sheetName=${encodeURIComponent(classSheetName)}`;
      const courseUrl = `${config.gasUrl}?sheetName=${encodeURIComponent(courseSheetName)}`;

      try {
        // 1. ลองดึงข้อมูลทั้งหมดจากชีทห้องเรียนก่อน เผื่อครูเข้ามาพิมพ์แก้ไขฐานข้อมูลชีทโดยตรง
        const classResponse = await fetch(classUrl);
        const classResult = await classResponse.json();

        if (classResult.status === 'success' && classResult.data && classResult.data.length > 0) {
          // ในชีทห้องเรียนมีแถวข้อมูลสมบูรณ์ → โหลดข้อมูลทุกช่อง (รวมทั้งข้อมูลแผนหลักเชิงวิชาการด้วย)
          const remoteLessons = classResult.data.map(sheetItem => ({
            once: String(sheetItem['ครั้งที่'] || ''),
            week: String(sheetItem['Week'] || deriveWeekFromOnce(sheetItem['ครั้งที่'])),
            date: String(sheetItem['วว/ดด/ปป ที่สอน'] || ''),
            period: String(sheetItem['คาบที่สอน'] || '1-2'),
            periodCount: String(sheetItem['จำนวนคาบ'] || '2'),
            outcomes: String(sheetItem['ผลการจัดการเรียนรู้'] || '-'),
            solutions: String(sheetItem['แนวทางแก้ปัญหา'] || '-'),
            pdfUrl: String(sheetItem['ลิงก์ไฟล์ PDF'] || ''),
            
            // คอลัมน์ทางวิชาการ (ดึงตรงจากชีทห้องเรียน เผื่อกรณีครูแก้ไขผ่าน Google ชีทในแท็บห้อง)
            unit: String(sheetItem['หน่วยการเรียนรู้ที่'] || '1'),
            topic: String(sheetItem['เรื่อง'] || ''),
            standard: String(sheetItem['มาตรฐานการเรียนรู้/ตัวชี้วัด'] || ''),
            objectives: String(sheetItem['จุดประสงค์การเรียนรู้'] || ''),
            activities: String(sheetItem['กิจกรรมการเรียนรู้'] || ''),
            assessment: String(sheetItem['การวัดและประเมินผล'] || ''),
            materials: String(sheetItem['สื่อการเรียนรู้'] || '')
          }));

          const courseLessons = remoteLessons.map(p => ({
            once: p.once,
            week: p.week,
            unit: p.unit,
            topic: p.topic,
            periodCount: p.periodCount,
            standard: p.standard,
            objectives: p.objectives,
            activities: p.activities,
            assessment: p.assessment,
            materials: p.materials
          }));

          const classLessons = remoteLessons.map(p => ({
            once: p.once,
            week: p.week,
            date: p.date,
            period: p.period,
            periodCount: p.periodCount,
            outcomes: p.outcomes,
            solutions: p.solutions,
            pdfUrl: p.pdfUrl
          }));

          localStorage.setItem(`iplane_course_lessons_${cls.courseId}`, JSON.stringify(courseLessons));
          localStorage.setItem(`iplane_class_lessons_${cls.id}`, JSON.stringify(classLessons));
        } else {
          // 2. หากชีทห้องเรียนไม่มีข้อมูล (ว่างเปล่า) → ให้ลองไปโหลดแม่แบบแผนหลักจากชีทรายวิชากลาง
          const courseResponse = await fetch(courseUrl);
          const courseResult = await courseResponse.json();

          let courseLessons = [];
          if (courseResult.status === 'success' && courseResult.data && courseResult.data.length > 0) {
            courseLessons = courseResult.data.map(sheetItem => ({
              once: String(sheetItem['ครั้งที่'] || ''),
              week: String(sheetItem['Week'] || deriveWeekFromOnce(sheetItem['ครั้งที่'])),
              unit: String(sheetItem['หน่วยการเรียนรู้ที่'] || '1'),
              topic: String(sheetItem['เรื่อง'] || ''),
              periodCount: String(sheetItem['จำนวนคาบ'] || '2'),
              standard: String(sheetItem['มาตรฐานการเรียนรู้/ตัวชี้วัด'] || ''),
              objectives: String(sheetItem['จุดประสงค์การเรียนรู้'] || ''),
              activities: String(sheetItem['กิจกรรมการเรียนรู้'] || ''),
              assessment: String(sheetItem['การวัดและประเมินผล'] || ''),
              materials: String(sheetItem['สื่อการเรียนรู้'] || '')
            }));
            localStorage.setItem(`iplane_course_lessons_${cls.courseId}`, JSON.stringify(courseLessons));
          } else {
            // โหลดดึงจากค่า Local Fallback
            const savedLocal = localStorage.getItem(`iplane_course_lessons_${cls.courseId}`);
            if (savedLocal) {
              try { courseLessons = JSON.parse(savedLocal); } catch(e){}
            }
            if (!courseLessons || courseLessons.length === 0) {
              courseLessons = JSON.parse(JSON.stringify(DEFAULT_LESSON_PLANS));
            }
          }

          // สร้างรายละเอียดกำหนดการสำหรับห้องเรียนนี้
          const classLessons = courseLessons.map((p, idx) => ({
            once: p.once,
            week: p.week,
            date: '',
            period: '1-2',
            periodCount: p.periodCount,
            outcomes: '-',
            solutions: '-',
            pdfUrl: ''
          }));
          localStorage.setItem(`iplane_class_lessons_${cls.id}`, JSON.stringify(classLessons));

          // เขียนบันทึกตารางเรียนตั้งต้นขึ้น Google ชีทในแท็บห้องเรียนทันที
          const combined = courseLessons.map((p, idx) => ({
            ...p,
            ...classLessons[idx]
          }));

          const payload = {
            action: 'saveAllLessons',
            sheetName: classSheetName,
            lessons: combined
          };
          fetch(config.gasUrl, {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'text/plain' },
            body: JSON.stringify(payload)
          }).catch(e => console.error('Error auto-populating classroom sheet:', e));
        }
      } catch (err) {
        console.error('Error fetching data for classroom:', cls.name, err);
      }
    });

    await Promise.all(fetchPromises);

    // รีโหลดโครงสร้างข้อมูลรายวิชาและห้องเรียนหลักที่ใช้งานอยู่และแสดงผล
    lessonPlans = loadCombinedLessons(activeCourseId, activeClassId);

    renderDashboard();
    renderSidebar();
    if (document.body.classList.contains('workspace-active')) {
      selectLesson(selectedIndex);
    }
    showToast('ซิงก์ข้อมูลแผนของทุกห้องเรียนจาก Google Sheets สำเร็จ ✓');
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

  const isPreviewOpen = document.getElementById('preview-modal').classList.contains('open');
  const syncBtn = isPreviewOpen ? document.getElementById('btn-preview-sync-google') : document.getElementById('btn-sync-google');
  const syncBtnText = syncBtn.querySelector('span');
  
  syncBtnText.innerText = 'กำลังส่งข้อมูล...';
  syncBtn.disabled = true;

  try {
    const courseClasses = classes.filter(cl => cl.courseId === activeCourseId);
    const classCount = courseClasses.length;

    const currentCourse = courses.find(c => c.id === activeCourseId);
    const currentClass = classes.find(c => c.id === activeClassId);
    const courseCode = currentCourse ? currentCourse.code : '';
    const courseName = currentCourse ? currentCourse.name : '';
    const className = currentClass ? currentClass.name : '';
    const onceCount = lessonPlans[selectedIndex].once;
    const cleanCourseName = courseName.replace(/[\\\/\:\*\?\"\<\|\>]/g, '-');
    const descriptiveFileName = `แผนการสอน_${courseCode}_${cleanCourseName}_ครั้งที่_${onceCount}.pdf`;

    // สร้างไฟล์ PDF จริงด้วยฟังก์ชันกลางเดียวกับปุ่มดาวน์โหลด แล้วแปลงเป็น base64 ส่งให้ Apps Script
    // เก็บขึ้น Drive ตรงๆ (ไม่ผ่านการแปลง HTML→Google Docs→PDF ของ Google ที่ทำให้รูปแบบเพี้ยน)
    const pdfBlob = await generateLessonPlanPdfBlob();
    const pdfBase64 = await blobToBase64(pdfBlob);

    // Route active classroom specific sheet name
    const sheetTabName = (currentCourse && currentClass) ? getSafeSheetName(currentCourse.code, currentClass.name) : 'Sheet1';

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
      pdfBase64: pdfBase64,
      pdfFileName: descriptiveFileName.replace(/\.pdf$/i, ''),
      folderId: config.folderId,
      teacherName: profile.teacherName || 'ครูฮัมบาลีย์ วาจิ'
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
      const classInfo = classCount > 1 ? `\nPDF รวม ${classCount} ห้องเรียนในวิชาเดียวกัน` : '';
      alert(`อัปเดต Google Sheet และ อัปโหลด PDF ขึ้น Drive เรียบร้อยแล้ว!${classInfo}\n\nแผ่นงาน (Tab): ${sheetTabName}\nลิงก์ไฟล์: ${result.pdfUrl || 'ไม่พบลิงก์'}`);
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

// สร้างไฟล์ PDF จริงฝั่งเบราว์เซอร์ — ใช้ฟังก์ชันเดียวกันทั้งดาวน์โหลดและอัปโหลดขึ้น Drive
// เพื่อให้ผลลัพธ์ทั้งสองทางเหมือนกันเป๊ะ 100%
//
// วิธีการ: rasterize DOM ของแต่ละหน้า .single-page-pdf ด้วย html-to-image (เทคนิค SVG <foreignObject>)
// ซึ่งให้ "เบราว์เซอร์เอง" เป็นผู้ render ตัวอักษร (เอนจินเดียวกับที่แสดงผลบนจอและพิมพ์ออกมาถูกต้อง)
// จึงไม่เจอบั๊กสระ/วรรณยุกต์ไทยเรียงผิดตำแหน่งแบบ html2canvas (ซึ่ง re-implement text layout เอง)
// และไม่เจอบั๊ก text-shaping ของ jsPDF เวลาวาดข้อความตรงๆ (GitHub issue #2650 ของ jsPDF ที่ยังไม่ถูกแก้)
// จากนั้นนำภาพความละเอียดสูงที่ได้มาวางลงหน้ากระดาษ A4 ใน PDF ผ่าน jsPDF
async function generateLessonPlanPdfBlob() {
  populatePrintTemplate();
  const container = document.getElementById('print-template-container');
  const pages = container.querySelectorAll('.single-page-pdf');
  if (!pages.length) throw new Error('ไม่พบหน้าเอกสารสำหรับสร้าง PDF');

  try { await document.fonts.ready; } catch (_) {}

  const { jsPDF } = window.jspdf;
  let doc = null;

  for (let i = 0; i < pages.length; i++) {
    const pageEl = pages[i];
    const dataUrl = await window.htmlToImage.toPng(pageEl, {
      pixelRatio: 3,
      backgroundColor: '#ffffff',
      width: pageEl.offsetWidth,
      height: pageEl.offsetHeight
    });

    if (!doc) {
      doc = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait' });
    } else {
      doc.addPage('a4', 'portrait');
    }
    doc.addImage(dataUrl, 'PNG', 0, 0, 210, 297, undefined, 'FAST');
  }

  return doc.output('blob');
}

// แปลง Blob เป็น base64 string ล้วน (ตัด prefix "data:...;base64," ออก) สำหรับส่งให้ Apps Script
function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(String(reader.result).split(',')[1] || '');
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

// Export A4 PDF Document
async function exportPDFDocument() {
  const saved = saveLessonProgress(false);
  if (!saved) {
    alert('กรุณากรอกบันทึกหลังสอนก่อนดึงเอกสาร PDF');
    return;
  }

  if (!isSignatureDrawn) {
    alert('กรุณาเขียนลายเซ็นดิจิทัลในแอปเพื่อลงนามแนบท้ายเอกสาร');
    return;
  }

  const isPreviewOpen = document.getElementById('preview-modal').classList.contains('open');
  const exportBtn = isPreviewOpen ? document.getElementById('btn-preview-export-pdf') : document.getElementById('btn-export-pdf');
  const exportText = exportBtn.querySelector('span');
  exportText.innerText = 'กำลังสร้างไฟล์ PDF...';
  exportBtn.disabled = true;

  try {
    const currentCourse = courses.find(c => c.id === activeCourseId);
    const onceCount = lessonPlans[selectedIndex].once;
    const courseCode = currentCourse ? currentCourse.code : '';
    const courseName = currentCourse ? currentCourse.name : '';
    const cleanCourseName = courseName.replace(/[\\\/\:\*\?\"\<\|\>]/g, '-');
    const descriptiveFileName = `แผนการสอน_${courseCode}_${cleanCourseName}_ครั้งที่_${onceCount}`;

    // สร้างไฟล์ PDF จริงด้วยฟังก์ชันกลาง (เหมือนกับที่ใช้อัปโหลดขึ้น Drive เป๊ะ) แล้วดาวน์โหลดทันที
    const blob = await generateLessonPlanPdfBlob();
    const blobUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = `${descriptiveFileName}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(blobUrl);

    exportText.innerText = 'ดาวน์โหลด PDF (หน้าเดียว)';
    exportBtn.disabled = false;
  } catch (err) {
    console.error(err);
    alert('การสร้าง PDF ขัดข้อง');
    exportText.innerText = 'ดาวน์โหลด PDF (หน้าเดียว)';
    exportBtn.disabled = false;
  }
}

let a4TemplateHtml = '';

// Copy active values onto official single-page A4 PDF elements (Unified Course-wide classrooms compiler)
// Returns the number of classroom pages generated (used in sync success message)
function populatePrintTemplate() {
  const container = document.getElementById('print-template-container');
  if (!container) return 0;

  if (!a4TemplateHtml) {
    a4TemplateHtml = container.innerHTML;
  }
  container.innerHTML = ''; // Clear container to dynamically build A4 sheets

  const currentCourse = courses.find(c => c.id === activeCourseId);
  if (!currentCourse) return 0;

  // Filter classrooms belonging to this course
  const courseClasses = classes.filter(cl => cl.courseId === activeCourseId);
  if (courseClasses.length === 0) return 0;

  let pageCount = 0;

  courseClasses.forEach((cls, idx) => {
    // Load this classroom's specific lessons
    const classPlans = loadCombinedLessons(activeCourseId, cls.id);
    const plan = classPlans[selectedIndex];
    if (!plan) return;

    // Create unique DOM node from the saved HTML template
    const pageWrapper = document.createElement('div');
    pageWrapper.innerHTML = a4TemplateHtml;
    const pageEl = pageWrapper.firstElementChild;

    // Set page break formatting for PDF multi-page rendering
    if (idx < courseClasses.length - 1) {
      pageEl.style.pageBreakAfter = 'always';
      pageEl.style.breakAfter = 'page';
    } else {
      pageEl.style.pageBreakAfter = 'avoid';
      pageEl.style.breakAfter = 'avoid';
    }

    // Populate course details (shared across classrooms) and class details (unique)
    const printDept = pageEl.querySelector('#pdf-print-dept');
    if (printDept) printDept.innerText = `กลุ่มสาระการเรียนรู้${profile.schoolName || 'คณิตศาสตร์'}`;

    const printCourseName = pageEl.querySelector('#pdf-print-course-name');
    if (printCourseName) printCourseName.innerText = currentCourse.name || '-';

    const printCourseCode = pageEl.querySelector('#pdf-print-course-code');
    if (printCourseCode) printCourseCode.innerText = currentCourse.code || '-';

    const printClassName = pageEl.querySelector('#pdf-print-class-name');
    if (printClassName) printClassName.innerText = cls.name || '-';

    // Specific lesson info
    const printUnit = pageEl.querySelector('#pdf-print-unit');
    if (printUnit) printUnit.innerText = plan.unit || '1';

    const printTopic = pageEl.querySelector('#pdf-print-topic');
    if (printTopic) printTopic.innerText = plan.topic || '-';

    const printOnce = pageEl.querySelector('#pdf-print-once');
    if (printOnce) printOnce.innerText = `ครั้งที่ ${plan.once}`;

    const printPeriodCount = pageEl.querySelector('#pdf-print-period-count');
    if (printPeriodCount) printPeriodCount.innerText = `เวลา ${plan.periodCount} ชั่วโมง`;

    const printDate = pageEl.querySelector('#pdf-print-date');
    if (printDate) printDate.innerText = plan.date || '-';

    // Left column standard, objectives, activities, assessment
    const printStandard = pageEl.querySelector('#pdf-print-standard');
    if (printStandard) printStandard.innerText = plan.standard || '-';

    const printObjectives = pageEl.querySelector('#pdf-print-objectives');
    if (printObjectives) printObjectives.innerText = plan.objectives || '-';

    const printActivities = pageEl.querySelector('#pdf-print-activities');
    if (printActivities) printActivities.innerText = plan.activities || '-';

    const printAssessment = pageEl.querySelector('#pdf-print-assessment');
    if (printAssessment) printAssessment.innerText = plan.assessment || '-';

    // Right column materials
    const printMaterials = pageEl.querySelector('#pdf-print-materials');
    if (printMaterials) printMaterials.innerText = plan.materials || '-';

    // Render outcomes & solutions inside Section 6
    const outcomesContainer = pageEl.querySelector('#pdf-print-outcomes');
    if (outcomesContainer) {
      outcomesContainer.innerHTML = ''; // Clear fallback

      // Render Outcomes title
      const outcomesTitle = document.createElement('div');
      outcomesTitle.className = 'font-bold';
      outcomesTitle.style.fontSize = '11px';
      outcomesTitle.style.color = '#14532d';
      outcomesTitle.style.marginBottom = '2px';
      outcomesTitle.innerText = 'ผลการจัดการเรียนรู้:';
      outcomesContainer.appendChild(outcomesTitle);

      if (plan.outcomes && plan.outcomes.startsWith('data:image/')) {
        const outcomesImg = document.createElement('img');
        outcomesImg.src = plan.outcomes;
        outcomesImg.style.maxHeight = '24mm';
        outcomesImg.style.maxWidth = '100%';
        outcomesImg.style.display = 'block';
        outcomesImg.style.objectFit = 'contain';
        outcomesImg.style.margin = '2px 0 8px 0';
        outcomesContainer.appendChild(outcomesImg);
      } else {
        const outcomesText = document.createElement('div');
        outcomesText.style.whiteSpace = 'pre-line';
        outcomesText.style.fontSize = '10.5px';
        outcomesText.style.marginBottom = '8px';
        if (plan.outcomesColor) outcomesText.style.color = plan.outcomesColor;
        if (plan.outcomesFont) outcomesText.style.fontFamily = `'${plan.outcomesFont}', sans-serif`;
        outcomesText.innerText = (plan.outcomes === '-') ? '' : (plan.outcomes || '');
        outcomesContainer.appendChild(outcomesText);
      }

      // Render Solutions title
      const solutionsTitle = document.createElement('div');
      solutionsTitle.className = 'font-bold';
      solutionsTitle.style.fontSize = '11px';
      solutionsTitle.style.color = '#14532d';
      solutionsTitle.style.marginBottom = '2px';
      solutionsTitle.innerText = 'แนวทางการแก้ปัญหา:';
      outcomesContainer.appendChild(solutionsTitle);

      if (plan.solutions && plan.solutions.startsWith('data:image/')) {
        const solutionsImg = document.createElement('img');
        solutionsImg.src = plan.solutions;
        solutionsImg.style.maxHeight = '24mm';
        solutionsImg.style.maxWidth = '100%';
        solutionsImg.style.display = 'block';
        solutionsImg.style.objectFit = 'contain';
        solutionsImg.style.margin = '2px 0 2px 0';
        outcomesContainer.appendChild(solutionsImg);
      } else {
        const solutionsText = document.createElement('div');
        solutionsText.style.whiteSpace = 'pre-line';
        solutionsText.style.fontSize = '10.5px';
        if (plan.solutionsColor) solutionsText.style.color = plan.solutionsColor;
        if (plan.solutionsFont) solutionsText.style.fontFamily = `'${plan.solutionsFont}', sans-serif`;
        solutionsText.innerText = (plan.solutions === '-') ? '' : (plan.solutions || '');
        outcomesContainer.appendChild(solutionsText);
      }
    }

    // Section 7 suggestion blank lines
    const printSolutions = pageEl.querySelector('#pdf-print-solutions');
    if (printSolutions) printSolutions.innerText = '\n\n\n';

    // Apply custom school logo or default SVG crest
    const customLogo = localStorage.getItem('iplane_school_logo');
    const defaultLogoSvg = pageEl.querySelector('#pdf-default-logo-svg');
    const customLogoImg = pageEl.querySelector('#pdf-custom-logo-img');
    if (customLogo) {
      if (defaultLogoSvg) defaultLogoSvg.style.display = 'none';
      if (customLogoImg) {
        customLogoImg.src = customLogo;
        customLogoImg.style.display = 'block';
      }
    } else {
      if (defaultLogoSvg) defaultLogoSvg.style.display = 'block';
      if (customLogoImg) {
        customLogoImg.src = TRANSPARENT_PIXEL_DATA_URL;
        customLogoImg.style.display = 'none';
      }
    }

    // Teachers digital signature
    const sigImg = pageEl.querySelector('#pdf-print-sig-teacher');
    if (sigImg) sigImg.src = currentSignatureDataUrl || TRANSPARENT_PIXEL_DATA_URL;

    // Class room leader digital signature
    const sigRoomImg = pageEl.querySelector('#pdf-print-sig-room');
    if (sigRoomImg) {
      const studentSig = localStorage.getItem('iplane_student_signature_' + cls.id) || '';
      if (studentSig) {
        sigRoomImg.src = studentSig;
        sigRoomImg.style.display = 'block';
      } else {
        sigRoomImg.src = TRANSPARENT_PIXEL_DATA_URL;
        sigRoomImg.style.display = 'none';
      }
    }

    const printTeacherName = pageEl.querySelector('#pdf-print-teacher-name');
    if (printTeacherName) printTeacherName.innerText = profile.teacherName || '';

    const printHodName = pageEl.querySelector('#pdf-print-hod-name');
    if (printHodName) printHodName.innerText = profile.hodName || '';

    // Class Leader signature name
    const classLeaderNameSpan = pageEl.querySelector('#pdf-print-leader-name');
    if (classLeaderNameSpan) {
      classLeaderNameSpan.innerText = cls.classLeader || '.................................................';
    }

    // Dates underneath signature lines
    const printDateSigTeacher = pageEl.querySelector('#pdf-print-date-sig-teacher');
    if (printDateSigTeacher) printDateSigTeacher.innerText = plan.date || '-';

    const printDateSigRoom = pageEl.querySelector('#pdf-print-date-sig-room');
    if (printDateSigRoom) printDateSigRoom.innerText = plan.date || '-';

    const printDateSigHod = pageEl.querySelector('#pdf-print-date-sig-hod');
    if (printDateSigHod) printDateSigHod.innerText = '...................................';

    container.appendChild(pageEl);
    pageCount++;
  });

  return pageCount;
}

// ==========================================
// 8. Signature Canvas Drawing Logic
// ==========================================
function setupSignaturePad() {
  canvas = document.getElementById('signature-pad');
  ctx = canvas.getContext('2d');
  
  const placeholder = document.getElementById('sig-placeholder');

  resizeCanvas();
  drawStrokes();
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
    saveSignatureToStorage(currentSignatureDataUrl);
  });

  canvas.addEventListener('mouseleave', () => {
    if (drawing) {
      drawing = false;
      currentSignatureDataUrl = canvas.toDataURL('image/png');
      saveSignatureToStorage(currentSignatureDataUrl);
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
    saveSignatureToStorage(currentSignatureDataUrl);
  });

  // Initialize Student Signature Pad
  canvasStudent = document.getElementById('signature-pad-student');
  ctxStudent = canvasStudent.getContext('2d');
  
  const placeholderStudent = document.getElementById('sig-placeholder-student');

  resizeCanvasStudent();
  drawStrokesStudent();
  
  window.addEventListener('resize', () => {
    resizeCanvasStudent();
    drawStrokesStudent();
  });

  const colorDotsStudent = document.querySelectorAll('.color-dot-student');
  colorDotsStudent.forEach(dot => {
    dot.addEventListener('click', (e) => {
      colorDotsStudent.forEach(d => d.classList.remove('active'));
      e.target.classList.add('active');
      penColorStudent = e.target.dataset.color;
    });
  });

  document.getElementById('btn-sig-clear-student').addEventListener('click', clearStudentSignature);
  document.getElementById('btn-sig-undo-student').addEventListener('click', undoStudentSignatureStroke);

  // Mouse actions for Student
  canvasStudent.addEventListener('mousedown', (e) => {
    const rect = canvasStudent.getBoundingClientRect();
    if (canvasStudent.width === 0 || canvasStudent.height === 0 || canvasStudent.width !== Math.floor(rect.width) || canvasStudent.height !== Math.floor(rect.height)) {
      resizeCanvasStudent();
      drawStrokesStudent();
    }
    drawingStudent = true;
    placeholderStudent.style.display = 'none';
    const pos = getPosStudent(e);
    currentStrokeStudent = [{ x: pos.x, y: pos.y }];
    strokesStudent.push(currentStrokeStudent);
    
    ctxStudent.beginPath();
    ctxStudent.moveTo(pos.x, pos.y);
    ctxStudent.lineWidth = penWidthStudent;
    ctxStudent.lineCap = 'round';
    ctxStudent.lineJoin = 'round';
    ctxStudent.strokeStyle = penColorStudent;
  });

  canvasStudent.addEventListener('mousemove', (e) => {
    if (!drawingStudent) return;
    const pos = getPosStudent(e);
    currentStrokeStudent.push({ x: pos.x, y: pos.y });

    ctxStudent.lineTo(pos.x, pos.y);
    ctxStudent.stroke();
  });

  canvasStudent.addEventListener('mouseup', () => {
    if (!drawingStudent) return;
    drawingStudent = false;
    currentSignatureStudentDataUrl = canvasStudent.toDataURL('image/png');
    saveStudentSignatureToStorage(currentSignatureStudentDataUrl);
  });

  canvasStudent.addEventListener('mouseleave', () => {
    if (drawingStudent) {
      drawingStudent = false;
      currentSignatureStudentDataUrl = canvasStudent.toDataURL('image/png');
      saveStudentSignatureToStorage(currentSignatureStudentDataUrl);
    }
  });

  // Touch actions for Student
  canvasStudent.addEventListener('touchstart', (e) => {
    e.preventDefault(); 
    const rect = canvasStudent.getBoundingClientRect();
    if (canvasStudent.width === 0 || canvasStudent.height === 0 || canvasStudent.width !== Math.floor(rect.width) || canvasStudent.height !== Math.floor(rect.height)) {
      resizeCanvasStudent();
      drawStrokesStudent();
    }
    placeholderStudent.style.display = 'none';
    drawingStudent = true;
    const pos = getPosStudent(e.touches[0]);
    currentStrokeStudent = [{ x: pos.x, y: pos.y }];
    strokesStudent.push(currentStrokeStudent);
    
    ctxStudent.beginPath();
    ctxStudent.moveTo(pos.x, pos.y);
    ctxStudent.lineWidth = penWidthStudent;
    ctxStudent.lineCap = 'round';
    ctxStudent.lineJoin = 'round';
    ctxStudent.strokeStyle = penColorStudent;
  });

  canvasStudent.addEventListener('touchmove', (e) => {
    e.preventDefault();
    if (!drawingStudent) return;
    const pos = getPosStudent(e.touches[0]);
    currentStrokeStudent.push({ x: pos.x, y: pos.y });

    ctxStudent.lineTo(pos.x, pos.y);
    ctxStudent.stroke();
  });

  canvasStudent.addEventListener('touchend', () => {
    drawingStudent = false;
    currentSignatureStudentDataUrl = canvasStudent.toDataURL('image/png');
    saveStudentSignatureToStorage(currentSignatureStudentDataUrl);
  });
}

function getPosStudent(e) {
  const rect = canvasStudent.getBoundingClientRect();
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  };
}

function resizeCanvasStudent() {
  const rect = canvasStudent.getBoundingClientRect();
  canvasStudent.width = rect.width;
  canvasStudent.height = rect.height;
  
  ctxStudent.lineWidth = penWidthStudent;
  ctxStudent.lineCap = 'round';
  ctxStudent.lineJoin = 'round';
  ctxStudent.strokeStyle = penColorStudent;
}

function drawStrokesStudent() {
  ctxStudent.clearRect(0, 0, canvasStudent.width, canvasStudent.height);
  
  if (strokesStudent.length === 0) {
    const savedSig = localStorage.getItem('iplane_student_signature_' + activeClassId);
    if (savedSig) {
      const placeholder = document.getElementById('sig-placeholder-student');
      if (placeholder) placeholder.style.display = 'none';
      currentSignatureStudentDataUrl = savedSig;
      
      const img = new Image();
      img.onload = () => {
        if (ctxStudent && canvasStudent) {
          ctxStudent.clearRect(0, 0, canvasStudent.width, canvasStudent.height);
          ctxStudent.drawImage(img, 0, 0, canvasStudent.width, canvasStudent.height);
        }
      };
      img.src = savedSig;
    } else {
      const placeholder = document.getElementById('sig-placeholder-student');
      if (placeholder) placeholder.style.display = 'flex';
      currentSignatureStudentDataUrl = '';
    }
    return;
  }

  const placeholder = document.getElementById('sig-placeholder-student');
  if (placeholder) placeholder.style.display = 'none';

  strokesStudent.forEach(stroke => {
    if (stroke.length === 0) return;
    
    ctxStudent.beginPath();
    ctxStudent.moveTo(stroke[0].x, stroke[0].y);
    ctxStudent.lineWidth = penWidthStudent;
    ctxStudent.lineCap = 'round';
    ctxStudent.lineJoin = 'round';
    ctxStudent.strokeStyle = penColorStudent;

    for (let i = 1; i < stroke.length; i++) {
      ctxStudent.lineTo(stroke[i].x, stroke[i].y);
    }
    ctxStudent.stroke();
  });

  currentSignatureStudentDataUrl = canvasStudent.toDataURL('image/png');
}

function saveStudentSignatureToStorage(dataUrl) {
  if (dataUrl) {
    localStorage.setItem('iplane_student_signature_' + activeClassId, dataUrl);
  }
}

function clearStudentSignature() {
  strokesStudent = [];
  if (ctxStudent && canvasStudent) {
    ctxStudent.clearRect(0, 0, canvasStudent.width, canvasStudent.height);
  }
  const placeholder = document.getElementById('sig-placeholder-student');
  if (placeholder) {
    placeholder.style.display = 'flex';
  }
  currentSignatureStudentDataUrl = '';
  localStorage.removeItem('iplane_student_signature_' + activeClassId);
}

function undoStudentSignatureStroke() {
  strokesStudent.pop();
  drawStrokesStudent();
  
  if (strokesStudent.length === 0) {
    currentSignatureStudentDataUrl = '';
    localStorage.removeItem('iplane_student_signature_' + activeClassId);
  } else {
    currentSignatureStudentDataUrl = canvasStudent.toDataURL('image/png');
    localStorage.setItem('iplane_student_signature_' + activeClassId, currentSignatureStudentDataUrl);
  }
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
    const savedSig = localStorage.getItem('iplane_teacher_signature');
    if (savedSig) {
      const placeholder = document.getElementById('sig-placeholder');
      if (placeholder) placeholder.style.display = 'none';
      isSignatureDrawn = true;
      currentSignatureDataUrl = savedSig;
      
      const img = new Image();
      img.onload = () => {
        if (ctx && canvas) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        }
      };
      img.src = savedSig;
    } else {
      const placeholder = document.getElementById('sig-placeholder');
      if (placeholder) placeholder.style.display = 'flex';
      isSignatureDrawn = false;
      currentSignatureDataUrl = '';
    }
    return;
  }

  const placeholder = document.getElementById('sig-placeholder');
  if (placeholder) placeholder.style.display = 'none';
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

function saveSignatureToStorage(dataUrl) {
  if (dataUrl) {
    localStorage.setItem('iplane_teacher_signature', dataUrl);
    if (config.gasUrl) {
      syncConfigToCloud();
    }
  }
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
  localStorage.removeItem('iplane_teacher_signature');
  if (config.gasUrl) {
    syncConfigToCloud();
  }
}

function undoSignatureStroke() {
  strokes.pop();
  drawStrokes();
  
  if (strokes.length === 0) {
    isSignatureDrawn = false;
    currentSignatureDataUrl = '';
    localStorage.removeItem('iplane_teacher_signature');
  } else {
    isSignatureDrawn = true;
    currentSignatureDataUrl = canvas.toDataURL('image/png');
    localStorage.setItem('iplane_teacher_signature', currentSignatureDataUrl);
  }
  if (config.gasUrl) {
    syncConfigToCloud();
  }
}

// ==========================================
// 9. Dashboard Controller & Overview Renderer
// ==========================================
function openDashboardView() {
  // Add active style to sidebar dashboard button
  document.getElementById('btn-dashboard').classList.add('active-sidebar-action');
  
  // Remove workspace class from body
  document.body.classList.remove('workspace-active');
  
  // Remove active week list highlights in sidebar
  const items = document.querySelectorAll('.week-item');
  items.forEach(i => i.classList.remove('active'));
  
  // Render dashboard contents
  renderDashboard();
}

function openClassroomWorkspace(courseId, classId) {
  activeCourseId = courseId;
  activeClassId = classId;
  localStorage.setItem('iplane_active_course_id', courseId);
  localStorage.setItem('iplane_active_class_id', classId);
  
  // Load class leader
  const activeCls = classes.find(c => c.id === classId);
  document.getElementById('input-active-class-leader').value = activeCls ? (activeCls.classLeader || '') : '';
  
  // Add workspace active class
  document.body.classList.add('workspace-active');
  
  // Remove active sidebar action from dashboard button
  document.getElementById('btn-dashboard').classList.remove('active-sidebar-action');
  
  // Re-render settings modal selects to align
  renderSettingsDropdowns();
  renderWorkspaceDropdowns();
  
  // Reload state
  loadDatabaseState();
  
  // Update labels
  updateProfileLabels();
  
  // Render weeks sidebar list
  renderSidebar();
  
  // Select first lesson
  selectLesson(0);
  
  // Fetch live Google Sheet data for this classroom
  if (config.gasUrl) {
    fetchLiveGoogleData();
  }
}

function renderDashboard() {
  // 1. Calculate and update stats
  document.getElementById('stat-total-courses').innerText = courses.length;
  document.getElementById('stat-total-classes').innerText = classes.length;
  
  let totalLessonsCount = 0;
  let completedLessonsCount = 0;
  
  classes.forEach(cls => {
    const plans = loadCombinedLessons(cls.courseId, cls.id);
    totalLessonsCount += plans.length;
    plans.forEach(p => {
      if (p.outcomes && p.outcomes !== '-' && p.outcomes.trim() !== '') {
        completedLessonsCount++;
      }
    });
  });
  
  const progressPercent = totalLessonsCount > 0 ? Math.round((completedLessonsCount / totalLessonsCount) * 100) : 0;
  document.getElementById('stat-total-progress').innerText = `${progressPercent}%`;
  document.getElementById('stat-progress-sub').innerText = `บันทึกแล้ว ${completedLessonsCount}/${totalLessonsCount} คาบเรียน`;
  
  // Update Sync status in dashboard
  const dbSyncStatus = document.getElementById('db-sync-status');
  const dbSyncLabel = dbSyncStatus.querySelector('.status-label');
  if (config.gasUrl) {
    dbSyncStatus.className = 'status-indicator online';
    dbSyncLabel.innerText = 'เชื่อมต่อระบบ Google Sheets แล้ว';
  } else {
    dbSyncStatus.className = 'status-indicator offline';
    dbSyncLabel.innerText = 'ระบบออฟไลน์ (บันทึกเฉพาะที่เครื่อง)';
  }
  
  // 2. Render course and classroom cards
  const grid = document.getElementById('course-directory-grid');
  grid.innerHTML = '';
  
  if (courses.length === 0) {
    grid.innerHTML = `
      <div class="classroom-list-empty" style="grid-column: span 2;">
        <i data-lucide="info" style="width:24px; height:24px; margin-bottom:8px; display:inline-block; color:var(--text-muted);"></i>
        <div>ยังไม่มีรายวิชาในสารบบกรุณาคลิก "ตั้งค่าระบบ" เพื่อเพิ่มรายวิชาใหม่</div>
      </div>
    `;
    lucide.createIcons();
    return;
  }
  
  courses.forEach(course => {
    // Find classes linked to this course
    const courseClasses = classes.filter(cls => cls.courseId === course.id);
    
    const card = document.createElement('div');
    card.className = 'course-card';
    
    // Header HTML
    let bodyHtml = `
      <div class="course-card-header">
        <div class="course-card-title-group">
          <span class="course-card-title">${course.name}</span>
          <span class="course-card-code">${course.code}</span>
        </div>
        <i data-lucide="graduation-cap"></i>
      </div>
      <div class="course-card-body">
        <div class="classroom-list-title">ห้องเรียนที่เปิดใช้งาน (${courseClasses.length})</div>
    `;
    
    if (courseClasses.length === 0) {
      bodyHtml += `
        <div class="classroom-list-empty">
          <span>ยังไม่มีห้องเรียนในรายวิชานี้ กรุณาเพิ่มห้องเรียนในแท็บตั้งค่า</span>
        </div>
      `;
    } else {
      bodyHtml += `<div class="classroom-list">`;
      courseClasses.forEach(cls => {
        // Compute classroom specific progress using decoupled loader
        let classProgress = 0;
        const plans = loadCombinedLessons(course.id, cls.id);
        plans.forEach(p => {
          if (p.outcomes && p.outcomes !== '-' && p.outcomes.trim() !== '') {
            classProgress++;
          }
        });
        
        const totalClassSessions = plans.length || 17;
        const classPercent = totalClassSessions > 0 ? Math.round((classProgress / totalClassSessions) * 100) : 0;
        
        bodyHtml += `
          <div class="classroom-item">
            <div class="classroom-item-info">
              <span class="classroom-item-name">${cls.name}</span>
              <span class="classroom-item-leader">
                <i data-lucide="user"></i> หัวหน้าห้อง: ${cls.classLeader || 'ไม่ได้ระบุ'}
              </span>
              <div class="classroom-progress-wrapper">
                <div class="classroom-progress-bg">
                  <div class="classroom-progress-fill" style="width: ${classPercent}%;"></div>
                </div>
                <span class="classroom-progress-text">${classPercent}% (${classProgress}/${totalClassSessions})</span>
              </div>
            </div>
            <button class="btn btn-secondary btn-sm" onclick="openClassroomWorkspace('${course.id}', '${cls.id}')" style="padding: 8px 12px; font-size: 11.5px;">
              <span>เปิดห้องเรียน</span>
              <i data-lucide="arrow-right" style="width:12px; height:12px; margin-left:4px;"></i>
            </button>
          </div>
        `;
      });
      bodyHtml += `</div>`;
    }
    
    bodyHtml += `</div>`; // Close course-card-body
    card.innerHTML = bodyHtml;
    grid.appendChild(card);
  });
  
  // Re-initialize dynamic icons
  lucide.createIcons();
}

// ==========================================
// 10. CSV Semester Import & Template Download
// ==========================================
function downloadCSVTemplate() {
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
    'สื่อการเรียนรู้'
  ];
  
  const exampleRow = [
    '1',
    '1',
    '6-7',
    '12/05/2568',
    '1',
    'ความหมายเลขยกกำลัง',
    '2',
    'ค1.1 ม.5/1\nเข้าใจความหมายและใช้สมบัติเกี่ยวกับการบวก...',
    '- ทราบถึงรายละเอียดรายวิชา\n- รู้จักใช้เครื่องมือ ChatGPT...',
    'ขั้นนำ:\n- ครูทักทายนักเรียน แนะนำรายวิชา\n\nขั้นสอน:\n- ครูอธิบายเลขยกกำลัง...\n\nขั้นสรุป:\n- นักเรียนร่วมกันสรุปบทเรียน',
    '- สังเกตการตอบถามระหว่างเรียน',
    '- หนังสือเรียนคณิตศาสตร์ ม.5'
  ];
  
  const escapeCSV = val => {
    let str = String(val);
    if (str.includes(',') || str.includes('"') || str.includes('\n') || str.includes('\r')) {
      str = '"' + str.replace(/"/g, '""') + '"';
    }
    return str;
  };
  
  const csvContent = "\uFEFF" + [
    headers.map(escapeCSV).join(','),
    exampleRow.map(escapeCSV).join(',')
  ].join('\n');
  
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", "iplane_template.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function importCSVData() {
  const fileInput = document.getElementById('input-csv-import');
  if (!fileInput.files || fileInput.files.length === 0) {
    alert('กรุณาเลือกไฟล์ CSV ที่คุณได้กรอกข้อมูลแผนการสอนแล้ว');
    return;
  }
  
  const file = fileInput.files[0];
  const reader = new FileReader();
  
  reader.onload = function(e) {
    const text = e.target.result;
    try {
      const parsedLines = parseCSV(text);
      if (parsedLines.length <= 1) {
        alert('ไฟล์ CSV ไม่มีข้อมูลเพียงพอ (ต้องการหัวข้อคอลัมน์และข้อมูลแผนการสอน)');
        return;
      }
      
      const csvHeaders = parsedLines[0].map(h => h.trim().toLowerCase());
      const expectedHeaders = {
        week: ['week', 'สัปดาห์'],
        once: ['ครั้งที่', 'ครั้ง'],
        period: ['คาบที่สอน', 'คาบสอน'],
        date: ['วว/ดด/ปป ที่สอน', 'วันที่สอน', 'วันที่'],
        unit: ['หน่วยการเรียนรู้ที่', 'หน่วยที่'],
        topic: ['เรื่องที่สอน', 'เรื่อง'],
        periodCount: ['จำนวนคาบ', 'คาบ', 'ชั่วโมง'],
        standard: ['มาตรฐานการเรียนรู้/ตัวชี้วัด', 'มาตรฐาน', 'ตัวชี้วัด'],
        objectives: ['จุดประสงค์การเรียนรู้', 'จุดประสงค์'],
        activities: ['กิจกรรมการเรียนรู้', 'กิจกรรม'],
        assessment: ['การวัดและประเมินผล', 'การวัดผล'],
        materials: ['สื่อการเรียนรู้', 'สื่อ']
      };
      
      // Map columns
      const indices = {};
      Object.keys(expectedHeaders).forEach(field => {
        indices[field] = csvHeaders.findIndex(hdr => 
          expectedHeaders[field].some(alias => hdr.includes(alias.toLowerCase()))
        );
      });
      
      // Verify mandatory fields
      if (indices.once === -1 || indices.topic === -1) {
        alert('หัวตาราง CSV ไม่ตรงตามเทมเพลตที่กำหนด (ต้องการคอลัมน์ "ครั้งที่" และ "เรื่อง" อย่างน้อย)');
        return;
      }
      
      const newPlans = [];
      // Parse rows
      for (let i = 1; i < parsedLines.length; i++) {
        const row = parsedLines[i];
        if (row.length < 2 || !row[indices.once]) continue; // Skip empty rows
        
        const getValue = field => {
          const idx = indices[field];
          return (idx > -1 && row[idx]) ? row[idx].trim() : '';
        };
        
        const plan = {
          week: getValue('week') || '1',
          once: getValue('once'),
          period: getValue('period') || '1-2',
          date: getValue('date') || '',
          unit: getValue('unit') || '1',
          topic: getValue('topic'),
          periodCount: getValue('periodCount') || '2',
          standard: getValue('standard') || '',
          objectives: getValue('objectives') || '',
          activities: getValue('activities') || '',
          assessment: getValue('assessment') || '',
          materials: getValue('materials') || '',
          outcomes: '-',
          solutions: '-'
        };
        newPlans.push(plan);
      }
      
      if (newPlans.length === 0) {
        alert('ไม่พบแถวข้อมูลแผนการสอนที่สมบูรณ์ในไฟล์ CSV');
        return;
      }
      
      // Overwrite local dataset for the active course and classroom using decoupled savers
      lessonPlans = newPlans;
      saveCourseLessons(activeCourseId, lessonPlans);
      saveClassLessons(activeClassId, lessonPlans);
      
      if (config.gasUrl) {
        syncAllLessonsToCloud();
      }
      
      alert(`นำเข้าข้อมูลแผนการสอนสำเร็จจำนวน ${newPlans.length} คาบเรียนเรียบร้อยแล้ว!`);
      
      // Re-populate modal selectors and refresh UI
      populateLessonEditorIndexSelect();
      renderSidebar();
      
      // Close file input value
      fileInput.value = '';
    } catch(err) {
      console.error(err);
      alert('เกิดข้อผิดพลาดในการประมวลผลไฟล์ CSV ตรวจสอบรูปโครงสร้างแถว');
    }
  };
  
  reader.readAsText(file, 'UTF-8');
}

// Helper robust CSV parser
function parseCSV(text) {
  const lines = [];
  let row = [""];
  let inQuotes = false;
  
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const nextChar = text[i+1];
    
    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        row[row.length - 1] += '"';
        i++; // skip next quote
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      row.push('');
    } else if ((char === '\r' || char === '\n') && !inQuotes) {
      if (char === '\r' && nextChar === '\n') {
        i++; // skip \n
      }
      lines.push(row);
      row = [''];
    } else {
      row[row.length - 1] += char;
    }
  }
  if (row.length > 1 || row[0] !== '') {
    lines.push(row);
  }
  return lines;
}

// ==========================================
// 11. Immersive A4 Print Preview Modal Control
// ==========================================
function adjustPreviewScale() {
  const host = document.getElementById('preview-page-host');
  if (!host) return;
  const parent = host.parentElement; // .modal-body
  if (!parent) return;

  const parentWidth = parent.clientWidth - 48; // Subtract typical modal paddings
  const a4Width = 794; // Exact A4 width in px at 96 dpi

  let scale = 1;
  if (parentWidth < a4Width) {
    scale = Math.max(0.1, parentWidth / a4Width); // Guarantee positive scale factor
  }

  host.style.transform = `scale(${scale})`;
  
  // Offsets negative height gap dynamically based on page count to prevent scroll bounds clipping
  const pageCount = host.querySelectorAll('.single-page-pdf').length || 1;
  const heightDifference = (1123 * pageCount) * (1 - scale);
  host.style.marginBottom = `-${heightDifference}px`;
}

function openA4PreviewModal() {
  populatePrintTemplate();

  const printEl = document.getElementById('print-template-container');
  const hostEl = document.getElementById('preview-page-host');

  if (!printEl || !hostEl) return;

  // Clean host container and append print elements
  hostEl.innerHTML = '';

  // Apply inline styles to force visibility and bypass aggressive CSS caching
  printEl.style.position = 'relative';
  printEl.style.left = 'auto';
  printEl.style.top = 'auto';
  printEl.style.display = 'block';
  printEl.style.background = '#fff';

  hostEl.appendChild(printEl);

  // Toggle open
  document.getElementById('preview-modal').classList.add('open');
  lucide.createIcons();
  
  // Recalculate dynamic responsive scale immediately
  setTimeout(adjustPreviewScale, 100);
}

function closeA4PreviewModal() {
  document.getElementById('preview-modal').classList.remove('open');
  const printEl = document.getElementById('print-template-container');
  if (printEl) {
    // Restore off-screen layout settings for PDF generator
    printEl.style.position = 'absolute';
    printEl.style.left = '-9999mm';
    printEl.style.top = '-9999mm';
    printEl.style.display = 'none';
    printEl.style.background = 'transparent';
    document.body.appendChild(printEl);
  }
}

// ==========================================
// 12. Classroom Schedule Table Modal Logic
// ==========================================
function openScheduleTableModal() {
  const modal = document.getElementById('schedule-table-modal');
  const tbody = document.getElementById('schedule-table-body');
  if (!modal || !tbody) return;

  tbody.innerHTML = '';
  
  lessonPlans.forEach((plan, idx) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td style="padding: 8px; text-align: center; font-weight: 700; color: var(--text-main);">${plan.once}</td>
      <td style="padding: 8px; text-align: center; font-weight: 600;">
        <input type="text" class="sched-week" data-index="${idx}" value="${plan.week || ''}" style="padding: 4px 8px; text-align: center; width: 45px;">
      </td>
      <td style="padding: 8px;">
        <input type="text" class="sched-period" data-index="${idx}" value="${plan.period || ''}" placeholder="เช่น 6-7" style="padding: 4px 8px; width: 85px;">
      </td>
      <td style="padding: 8px;">
        <input type="text" class="sched-date" data-index="${idx}" value="${plan.date || ''}" placeholder="เช่น 12/05/2568" style="padding: 4px 8px; width: 105px;">
      </td>
      <td style="padding: 8px;">
        <input type="text" class="sched-unit" data-index="${idx}" value="${plan.unit || ''}" style="padding: 4px 8px; text-align: center; width: 60px;">
      </td>
      <td style="padding: 8px;">
        <input type="text" class="sched-topic" data-index="${idx}" value="${plan.topic || ''}" placeholder="ระบุเรื่อง" style="padding: 4px 8px; min-width: 150px;">
      </td>
      <td style="padding: 8px; text-align: center;">
        <input type="text" class="sched-period-count" data-index="${idx}" value="${plan.periodCount || '2'}" style="padding: 4px 8px; text-align: center; width: 45px;">
      </td>
      <td style="padding: 8px;">
        <textarea class="sched-standard" data-index="${idx}" rows="2" style="min-width: 200px; resize: vertical;">${plan.standard || ''}</textarea>
      </td>
      <td style="padding: 8px;">
        <textarea class="sched-objectives" data-index="${idx}" rows="2" style="min-width: 200px; resize: vertical;">${plan.objectives || ''}</textarea>
      </td>
      <td style="padding: 8px;">
        <textarea class="sched-activities" data-index="${idx}" rows="2" style="min-width: 230px; resize: vertical;">${plan.activities || ''}</textarea>
      </td>
      <td style="padding: 8px;">
        <textarea class="sched-assessment" data-index="${idx}" rows="2" style="min-width: 160px; resize: vertical;">${plan.assessment || ''}</textarea>
      </td>
      <td style="padding: 8px;">
        <textarea class="sched-materials" data-index="${idx}" rows="2" style="min-width: 160px; resize: vertical;">${plan.materials || ''}</textarea>
      </td>
    `;
    tbody.appendChild(tr);
  });

  modal.classList.add('open');
  lucide.createIcons();
}

function closeScheduleTableModal() {
  const modal = document.getElementById('schedule-table-modal');
  if (modal) modal.classList.remove('open');
}

async function saveScheduleTable() {
  const tbody = document.getElementById('schedule-table-body');
  if (!tbody) return;

  const weekInputs = tbody.querySelectorAll('.sched-week');
  const periodInputs = tbody.querySelectorAll('.sched-period');
  const dateInputs = tbody.querySelectorAll('.sched-date');
  const unitInputs = tbody.querySelectorAll('.sched-unit');
  const topicInputs = tbody.querySelectorAll('.sched-topic');
  const periodCountInputs = tbody.querySelectorAll('.sched-period-count');
  
  const standardTextareas = tbody.querySelectorAll('.sched-standard');
  const objectivesTextareas = tbody.querySelectorAll('.sched-objectives');
  const activitiesTextareas = tbody.querySelectorAll('.sched-activities');
  const assessmentTextareas = tbody.querySelectorAll('.sched-assessment');
  const materialsTextareas = tbody.querySelectorAll('.sched-materials');

  let hasChanges = false;
  
  const updateField = (inputs, key) => {
    inputs.forEach(input => {
      const idx = parseInt(input.dataset.index);
      const val = input.value.trim();
      if (lessonPlans[idx][key] !== val) {
        lessonPlans[idx][key] = val;
        hasChanges = true;
      }
    });
  };

  updateField(weekInputs, 'week');
  updateField(periodInputs, 'period');
  updateField(dateInputs, 'date');
  updateField(unitInputs, 'unit');
  updateField(topicInputs, 'topic');
  updateField(periodCountInputs, 'periodCount');
  
  updateField(standardTextareas, 'standard');
  updateField(objectivesTextareas, 'objectives');
  updateField(activitiesTextareas, 'activities');
  updateField(assessmentTextareas, 'assessment');
  updateField(materialsTextareas, 'materials');

  if (hasChanges) {
    // เซฟลงฐานข้อมูล LocalStorage
    saveClassLessons(activeClassId, lessonPlans);
    saveCourseLessons(activeCourseId, lessonPlans);
    
    // อัปเดตรีเฟรชหน้าจอ UI ฝั่งซ้ายและขวาตรงจุดทำงานหลักทันที
    selectLesson(selectedIndex);

    // ซิงก์ขึ้น Google Sheets
    if (config.gasUrl) {
      showToast('กำลังบันทึกข้อมูลตารางและแผนการสอนขึ้น Cloud...');
      await syncAllLessonsToCloud();
    } else {
      showToast('บันทึกแผนและตารางเรียนลงเครื่องสำเร็จ ✓');
    }
  }

  closeScheduleTableModal();
}

// =========================================================================
// ipad / Stylus reflection drawing hand-written modes
// =========================================================================
let canvases = {
  outcomes: {
    canvas: null,
    ctx: null,
    drawing: false,
    strokes: [],
    currentStroke: [],
    color: '#0000FF',
    width: 2.5
  },
  solutions: {
    canvas: null,
    ctx: null,
    drawing: false,
    strokes: [],
    currentStroke: [],
    color: '#0000FF',
    width: 2.5
  }
};

function setupReflectionCanvases() {
  ['outcomes', 'solutions'].forEach(type => {
    const canvas = document.getElementById(`canvas-${type}`);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvases[type].canvas = canvas;
    canvases[type].ctx = ctx;

    // Resize canvas on layout changes
    resizeReflectionCanvas(type);
    
    // Add draw events
    canvas.addEventListener('mousedown', (e) => startReflectionDraw(type, getReflectionPos(canvas, e)));
    canvas.addEventListener('mousemove', (e) => drawReflection(type, getReflectionPos(canvas, e)));
    canvas.addEventListener('mouseup', () => endReflectionDraw(type));
    canvas.addEventListener('mouseleave', () => endReflectionDraw(type));

    // Touch support for iPad
    canvas.addEventListener('touchstart', (e) => {
      e.preventDefault();
      startReflectionDraw(type, getReflectionPos(canvas, e.touches[0]));
    });
    canvas.addEventListener('touchmove', (e) => {
      e.preventDefault();
      drawReflection(type, getReflectionPos(canvas, e.touches[0]));
    });
    canvas.addEventListener('touchend', () => endReflectionDraw(type));
  });
}

function getReflectionPos(canvas, e) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  };
}

function resizeReflectionCanvas(type) {
  const cData = canvases[type];
  if (!cData.canvas) return;
  const rect = cData.canvas.getBoundingClientRect();
  cData.canvas.width = rect.width || 400;
  cData.canvas.height = rect.height || 200;
  cData.ctx.lineWidth = cData.width;
  cData.ctx.lineCap = 'round';
  cData.ctx.lineJoin = 'round';
  cData.ctx.strokeStyle = cData.color;
}

function startReflectionDraw(type, pos) {
  const cData = canvases[type];
  cData.drawing = true;
  cData.currentStroke = [{ x: pos.x, y: pos.y }];
  cData.strokes.push(cData.currentStroke);

  cData.ctx.beginPath();
  cData.ctx.moveTo(pos.x, pos.y);
  cData.ctx.lineWidth = cData.width;
  cData.ctx.lineCap = 'round';
  cData.ctx.lineJoin = 'round';
  cData.ctx.strokeStyle = cData.color;
}

function drawReflection(type, pos) {
  const cData = canvases[type];
  if (!cData.drawing) return;
  cData.currentStroke.push({ x: pos.x, y: pos.y });
  cData.ctx.lineTo(pos.x, pos.y);
  cData.ctx.stroke();
}

function endReflectionDraw(type) {
  const cData = canvases[type];
  if (!cData.drawing) return;
  cData.drawing = false;
  
  // Save vectors and image to current plan
  saveCanvasToPlan(type);
}

function saveCanvasToPlan(type) {
  const cData = canvases[type];
  const plan = lessonPlans[selectedIndex];
  if (!plan) return;

  if (cData.strokes.length === 0) {
    plan[type] = '-';
    plan[type + 'DrawStrokes'] = [];
  } else {
    plan[type] = cData.canvas.toDataURL('image/png');
    plan[type + 'DrawStrokes'] = cData.strokes;
  }
  saveClassLessons(activeClassId, lessonPlans);
  renderSidebar();
}

function redrawCanvas(type) {
  const cData = canvases[type];
  if (!cData.ctx || !cData.canvas) return;
  
  cData.ctx.clearRect(0, 0, cData.canvas.width, cData.canvas.height);
  
  if (cData.strokes.length === 0) return;
  
  cData.strokes.forEach(stroke => {
    if (stroke.length === 0) return;
    cData.ctx.beginPath();
    cData.ctx.moveTo(stroke[0].x, stroke[0].y);
    cData.ctx.lineWidth = cData.width;
    cData.ctx.lineCap = 'round';
    cData.ctx.lineJoin = 'round';
    cData.ctx.strokeStyle = cData.color;
    
    for (let i = 1; i < stroke.length; i++) {
      cData.ctx.lineTo(stroke[i].x, stroke[i].y);
    }
    cData.ctx.stroke();
  });
}

// ---- Reflection Text Formatting ----
function setReflectColor(field, color, btn) {
  const plan = lessonPlans[selectedIndex];
  if (!plan) return;
  plan[field + 'Color'] = color;
  const textarea = document.getElementById(`txt-${field}`);
  if (textarea) textarea.style.color = color;
  // update active dot
  const bar = document.getElementById(`fmt-bar-${field}`);
  if (bar) bar.querySelectorAll('.fmt-color-dot').forEach(d => d.classList.toggle('active', d === btn));
}

function setReflectFont(field, fontFamily) {
  const plan = lessonPlans[selectedIndex];
  if (!plan) return;
  plan[field + 'Font'] = fontFamily;
  const textarea = document.getElementById(`txt-${field}`);
  if (textarea) textarea.style.fontFamily = `'${fontFamily}', sans-serif`;
  // preview font in the select itself
  const sel = document.getElementById(`fmt-font-${field}`);
  if (sel) sel.style.fontFamily = `'${fontFamily}', sans-serif`;
}

function applyReflectFormat(field, plan) {
  const textarea = document.getElementById(`txt-${field}`);
  const bar = document.getElementById(`fmt-bar-${field}`);
  if (!textarea || !bar) return;
  const color = plan[field + 'Color'] || '#1a1a1a';
  const font = plan[field + 'Font'] || 'Sarabun';
  textarea.style.color = color;
  textarea.style.fontFamily = `'${font}', sans-serif`;
  // sync color dot active state
  bar.querySelectorAll('.fmt-color-dot').forEach(d => {
    d.classList.toggle('active', d.dataset.color === color);
  });
  // sync font select + preview
  const sel = document.getElementById(`fmt-font-${field}`);
  if (sel) {
    sel.value = font;
    sel.style.fontFamily = `'${font}', sans-serif`;
  }
}
// ---- End Reflection Text Formatting ----

function setReflectionMode(type, mode) {
  const plan = lessonPlans[selectedIndex];
  if (!plan) return;

  plan[type + 'Mode'] = mode;

  // Toggle button styles
  const btnText = document.getElementById(`btn-toggle-text-${type}`);
  const btnDraw = document.getElementById(`btn-toggle-draw-${type}`);
  const textInput = document.getElementById(`txt-${type}`);
  const drawContainer = document.getElementById(`draw-${type}-container`);
  const formatBar = document.getElementById(`fmt-bar-${type}`);

  if (mode === 'text') {
    btnText.classList.add('active');
    btnDraw.classList.remove('active');
    textInput.style.display = 'block';
    drawContainer.style.display = 'none';
    if (formatBar) formatBar.style.display = 'flex';

    plan[type] = '-';
    textInput.value = '';
  } else {
    btnText.classList.remove('active');
    btnDraw.classList.add('active');
    textInput.style.display = 'none';
    drawContainer.style.display = 'block';
    if (formatBar) formatBar.style.display = 'none';
    
    plan[type] = '-';
    
    // Setup and resize canvas
    setTimeout(() => {
      resizeReflectionCanvas(type);
      
      // Load previous strokes if exist
      const savedStrokes = plan[type + 'DrawStrokes'];
      if (savedStrokes) {
        canvases[type].strokes = JSON.parse(JSON.stringify(savedStrokes));
      } else {
        canvases[type].strokes = [];
      }
      redrawCanvas(type);
    }, 50);
  }
  
  saveClassLessons(activeClassId, lessonPlans);
  renderSidebar();
}

function setCanvasColor(type, color, btn) {
  canvases[type].color = color;
  const dots = btn.parentNode.querySelectorAll('.color-dot');
  dots.forEach(d => d.classList.remove('active'));
  btn.classList.add('active');
}

function undoCanvasStroke(type) {
  const cData = canvases[type];
  cData.strokes.pop();
  redrawCanvas(type);
  saveCanvasToPlan(type);
}

function clearCanvas(type) {
  const cData = canvases[type];
  cData.strokes = [];
  redrawCanvas(type);
  saveCanvasToPlan(type);
}

// ==========================================
// 9. Auto-reload when new version is deployed
// ==========================================
(function startVersionWatcher() {
  const CURRENT_VERSION = '3.19';
  const CHECK_INTERVAL_MS = 60000; // ตรวจทุก 60 วินาที
  let updateBannerShown = false;

  // Changelog — เพิ่มรายการใหม่ด้านบนเสมอ
  const CHANGELOG = [
    { v: '3.18', note: 'แก้ข้อความใน textarea มองไม่เห็นในธีมสว่าง + เพิ่ม changelog popup (ปุ่มเวอร์ชัน)' },
    { v: '3.17', note: 'เพิ่ม cache-busting ให้ CSS/JS ป้องกันเบราว์เซอร์ใช้ไฟล์เก่า + ปรับ version badge' },
    { v: '3.16', note: 'เปลี่ยน light mode ทั้งหมดเป็นโทนขาว/เทา/ดำ สะอาด สบายตา' },
    { v: '3.15', note: 'ปรับ light mode ให้ครอบคลุมขึ้น + AI prompt สั้นกระชับ รวมปัญหาไว้ใน outcomes' },
    { v: '3.14', note: 'ให้ครูระบุชื่อรุ่น Gemini model เองได้ในหน้าตั้งค่า' },
    { v: '3.13', note: 'เพิ่มผู้ช่วย AI ร่างบันทึกหลังสอน + รองรับ light/dark mode ตามระบบ' },
  ];

  function showChangelog() {
    const existing = document.getElementById('changelog-modal-overlay');
    if (existing) { existing.remove(); return; }
    const rows = CHANGELOG.map(c => `
      <tr>
        <td style="padding:6px 12px 6px 0; white-space:nowrap; font-weight:600; color:var(--primary); font-size:12px;">v${c.v}</td>
        <td style="padding:6px 0; font-size:13px; color:var(--text-main); line-height:1.5;">${c.note}</td>
      </tr>`).join('');
    const overlay = document.createElement('div');
    overlay.id = 'changelog-modal-overlay';
    overlay.style.cssText = 'position:fixed;inset:0;z-index:99998;display:flex;align-items:flex-start;justify-content:flex-start;padding:70px 0 0 16px;pointer-events:none;';
    overlay.innerHTML = `
      <div style="pointer-events:auto;background:var(--card-bg);border:1px solid var(--card-border);border-radius:14px;
        box-shadow:0 8px 32px rgba(0,0,0,0.25);padding:20px 24px;min-width:340px;max-width:420px;">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;">
          <span style="font-weight:700;font-size:14px;color:var(--text-main);">ประวัติการอัปเดต iPlane</span>
          <button id="changelog-close-btn" style="background:transparent;border:none;cursor:pointer;color:var(--text-muted);font-size:18px;line-height:1;padding:0 2px;">×</button>
        </div>
        <table style="border-collapse:collapse;width:100%;"><tbody>${rows}</tbody></table>
      </div>`;
    document.body.appendChild(overlay);
    document.getElementById('changelog-close-btn').addEventListener('click', () => overlay.remove());
    document.addEventListener('click', function handler(e) {
      if (!overlay.querySelector('div').contains(e.target) && e.target.id !== 'app-version-tag') {
        overlay.remove();
        document.removeEventListener('click', handler);
      }
    }, { capture: true });
  }

  document.addEventListener('DOMContentLoaded', () => {
    const badge = document.getElementById('app-version-tag');
    if (badge) {
      badge.style.cursor = 'pointer';
      badge.title = 'คลิกเพื่อดูประวัติการอัปเดต';
      badge.addEventListener('click', showChangelog);
    }
  });

  async function checkVersion() {
    try {
      const res = await fetch('version.json?t=' + Date.now());
      if (!res.ok) return;
      const data = await res.json();
      const latestVersion = String(data.version || '');
      if (latestVersion && latestVersion !== CURRENT_VERSION && !updateBannerShown) {
        updateBannerShown = true;
        showUpdateBanner(latestVersion);
      }
    } catch (_) {}
  }

  function showUpdateBanner(newVer) {
    const banner = document.createElement('div');
    banner.style.cssText = [
      'position:fixed', 'bottom:20px', 'left:50%', 'transform:translateX(-50%)',
      'background:#6366f1', 'color:#fff', 'padding:12px 20px',
      'border-radius:12px', 'font-size:13px', 'font-weight:600',
      'box-shadow:0 4px 20px rgba(99,102,241,0.5)',
      'display:flex', 'align-items:center', 'gap:12px',
      'z-index:99999', 'white-space:nowrap'
    ].join(';');
    banner.innerHTML = `
      <span>มีเวอร์ชันใหม่ v${newVer} พร้อมใช้งาน</span>
      <button onclick="location.reload()" style="
        background:#fff; color:#6366f1; border:none; border-radius:8px;
        padding:5px 14px; font-size:12px; font-weight:700; cursor:pointer;">
        โหลดใหม่
      </button>
      <button onclick="this.parentNode.remove()" style="
        background:transparent; color:rgba(255,255,255,0.7); border:none;
        font-size:18px; cursor:pointer; line-height:1; padding:0 4px;">
        ×
      </button>
    `;
    document.body.appendChild(banner);
  }

  setInterval(checkVersion, CHECK_INTERVAL_MS);
  setTimeout(checkVersion, 5000); // ตรวจครั้งแรกหลังจาก 5 วินาที
})();
