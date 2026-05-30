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
  initializeUI();
  
  if (config.gasUrl) {
    fetchConfigFromCloud().then(() => {
      fetchLiveGoogleData();
    });
  }

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
        week: p.week || '1',
        date: p.date || '',
        period: p.period || '1-2',
        outcomes: p.outcomes || '-',
        solutions: p.solutions || '-',
        pdfUrl: p.pdfUrl || ''
      }));
    } else {
      classPlans = coursePlans.map((p, idx) => ({
        once: String(p.once),
        week: String(Math.floor(idx / 2) + 1),
        date: '',
        period: '1-2',
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
      week: String(Math.floor(i / 2) + 1),
      date: '',
      period: '1-2',
      outcomes: '-',
      solutions: '-',
      pdfUrl: ''
    };

    combined.push({
      ...coursePlan,
      ...classPlan
    });
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
    week: String(p.week || '1'),
    date: p.date || '',
    period: p.period || '1-2',
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
        
        // Compress as JPEG to keep it extremely small (<10KB)
        const compressedBase64 = canvasEl.toDataURL('image/jpeg', 0.75);
        
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
  
  const btnWorkspaceSettings = document.getElementById('btn-workspace-settings');
  if (btnWorkspaceSettings) {
    btnWorkspaceSettings.addEventListener('click', openSettings);
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

  // Save to classroom local state using decouple saver
  saveClassLessons(activeClassId, lessonPlans);
  
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

  localStorage.setItem('iplane_gas_url', config.gasUrl);
  localStorage.setItem('iplane_folder_id', config.folderId);

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

  const sheetTabName = getSafeSheetName(currentCourse.code, currentClass.name);

  try {
    const payload = {
      action: 'saveAllLessons',
      sheetName: sheetTabName,
      lessons: lessonPlans
    };
    const response = await fetch(config.gasUrl, {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify(payload)
    });
    const result = await response.json();
    if (result.status === 'success') {
      showToast('ซิงค์แผนการสอนทั้งหมดขึ้น Cloud เรียบร้อยแล้ว ✓');
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
  if (!config.gasUrl) return;

  const currentCourse = courses.find(c => c.id === activeCourseId);
  const currentClass = classes.find(c => c.id === activeClassId);
  if (!currentCourse || !currentClass) return;

  const sheetTabName = getSafeSheetName(currentCourse.code, currentClass.name);

  try {
    const url = `${config.gasUrl}?sheetName=${encodeURIComponent(sheetTabName)}`;
    const response = await fetch(url);
    const result = await response.json();

    if (result.status === 'success' && result.data && result.data.length > 0) {
      // Map remote columns to full lesson plan properties
      const remoteLessons = result.data.map(sheetItem => {
        return {
          once: String(sheetItem['ครั้งที่'] || ''),
          week: String(sheetItem['Week'] || '1'),
          period: String(sheetItem['คาบที่สอน'] || '1-2'),
          date: String(sheetItem['วว/ดด/ปป ที่สอน'] || ''),
          unit: String(sheetItem['หน่วยการเรียนรู้ที่'] || '1'),
          topic: String(sheetItem['เรื่อง'] || ''),
          periodCount: String(sheetItem['จำนวนคาบ'] || '2'),
          standard: String(sheetItem['มาตรฐานการเรียนรู้/ตัวชี้วัด'] || ''),
          objectives: String(sheetItem['จุดประสงค์การเรียนรู้'] || ''),
          activities: String(sheetItem['กิจกรรมการเรียนรู้'] || ''),
          assessment: String(sheetItem['การวัดและประเมินผล'] || ''),
          materials: String(sheetItem['สื่อการเรียนรู้'] || ''),
          outcomes: String(sheetItem['ผลการจัดการเรียนรู้'] || '-'),
          solutions: String(sheetItem['แนวทางแก้ปัญหา'] || '-'),
          pdfUrl: String(sheetItem['ลิงก์ไฟล์ PDF'] || '')
        };
      });

      // Split into courseLessons and classLessons
      const courseLessons = remoteLessons.map(p => ({
        once: p.once,
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
        outcomes: p.outcomes,
        solutions: p.solutions,
        pdfUrl: p.pdfUrl
      }));

      localStorage.setItem(`iplane_course_lessons_${activeCourseId}`, JSON.stringify(courseLessons));
      localStorage.setItem(`iplane_class_lessons_${activeClassId}`, JSON.stringify(classLessons));

      // Reload into active state and render
      lessonPlans = loadCombinedLessons(activeCourseId, activeClassId);

      renderSidebar();
      if (document.body.classList.contains('workspace-active')) {
        selectLesson(selectedIndex);
      }
      showToast('ซิงก์ข้อมูลแผนจาก Google Sheets ลงในเครื่องเรียบร้อยแล้ว ✓');
    } else if (result.status === 'success' && (!result.data || result.data.length === 0)) {
      // If the sheet in the cloud is empty/newly created, push our current local data to it
      console.log('Cloud sheet is empty, pushing local database state to cloud...');
      await syncAllLessonsToCloud();
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

  const isPreviewOpen = document.getElementById('preview-modal').classList.contains('open');
  const syncBtn = isPreviewOpen ? document.getElementById('btn-preview-sync-google') : document.getElementById('btn-sync-google');
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
    if (!isPreviewOpen) {
      printEl.style.display = 'none';
    }

    // Route active classroom specific sheet name
    const currentCourse = courses.find(c => c.id === activeCourseId);
    const currentClass = classes.find(c => c.id === activeClassId);
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

  const isPreviewOpen = document.getElementById('preview-modal').classList.contains('open');
  const exportBtn = isPreviewOpen ? document.getElementById('btn-preview-export-pdf') : document.getElementById('btn-export-pdf');
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
      if (!isPreviewOpen) {
        printEl.style.display = 'none';
      }
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

  // Combine Outcomes (ผลการจัดการเรียนรู้) and Solutions (แนวทางการแก้ปัญหา) under Section 6 "บันทึกหลังการสอน"
  const combinedOutcomes = `ผลการจัดการเรียนรู้:\n${plan.outcomes || '-'}\n\nแนวทางการแก้ปัญหา:\n${plan.solutions || '-'}`;
  document.getElementById('pdf-print-outcomes').innerText = combinedOutcomes;
  
  // Section 7 "ข้อเสนอแนะ" is for HOD to write on later, leave it empty (with blank lines to render dashed underlines beautifully)
  document.getElementById('pdf-print-solutions').innerText = '\n\n\n\n';

  // Apply custom school logo or SVG default
  const customLogo = localStorage.getItem('iplane_school_logo');
  const defaultLogoSvg = document.getElementById('pdf-default-logo-svg');
  const customLogoImg = document.getElementById('pdf-custom-logo-img');

  if (customLogo) {
    if (defaultLogoSvg) defaultLogoSvg.style.display = 'none';
    if (customLogoImg) {
      customLogoImg.src = customLogo;
      customLogoImg.style.display = 'block';
    }
  } else {
    if (defaultLogoSvg) defaultLogoSvg.style.display = 'block';
    if (customLogoImg) customLogoImg.style.display = 'none';
  }

  // Apply signatures and dynamic thai formatted dates
  const sigImg = document.getElementById('pdf-print-sig-teacher');
  if (sigImg) sigImg.src = currentSignatureDataUrl;

  document.getElementById('pdf-print-teacher-name').innerText = profile.teacherName;
  document.getElementById('pdf-print-hod-name').innerText = profile.hodName;

  // Set Class Leader signature name
  const classLeaderNameSpan = document.getElementById('pdf-print-leader-name');
  if (classLeaderNameSpan) {
    classLeaderNameSpan.innerText = (currentClass && currentClass.classLeader) ? currentClass.classLeader : '.................................................';
  }

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
  
  let totalLessonsCount = classes.length * 17;
  let completedLessonsCount = 0;
  
  classes.forEach(cls => {
    const plans = loadCombinedLessons(cls.courseId, cls.id);
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
        const classPercent = Math.round((classProgress / 17) * 100);
        
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
                <span class="classroom-progress-text">${classPercent}% (${classProgress}/17)</span>
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
function openA4PreviewModal() {
  populatePrintTemplate();

  const printEl = document.getElementById('print-template-container');
  const hostEl = document.getElementById('preview-page-host');

  if (!printEl || !hostEl) return;

  // Clean host container and append print elements
  hostEl.innerHTML = '';
  hostEl.appendChild(printEl);
  printEl.style.display = 'block';

  // Toggle open
  document.getElementById('preview-modal').classList.add('open');
  lucide.createIcons();
}

function closeA4PreviewModal() {
  document.getElementById('preview-modal').classList.remove('open');
  const printEl = document.getElementById('print-template-container');
  if (printEl) {
    printEl.style.display = 'none';
    document.body.appendChild(printEl);
  }
}

