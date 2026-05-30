/**
 * iPlane - Application Core Logic
 */

// 1. Initial Dataset (จากตารางข้อมูลที่ได้รับจากผู้ใช้งาน)
const INITIAL_LESSON_PLANS = [
  {
    week: "1",
    once: "1",
    period: "6-7",
    date: "12/05/2025",
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
    date: "15/05/2567",
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
    date: "19/05/2567",
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
    date: "22/05/2567",
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
    date: "26/05/2567",
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
    date: "29/05/2567",
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
    date: "02/06/2567",
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
    date: "05/06/2567",
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
    date: "09/06/2567",
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
    date: "12/06/2567",
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
    date: "16/06/2567",
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
    date: "19/06/2567",
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
    date: "23/06/2567",
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
    date: "26/06/2567",
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
    date: "30/06/2567",
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
    date: "03/07/2567",
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

// 2. Application State Variables
let lessonPlans = [];
let selectedIndex = 0;
let currentSignatureDataUrl = '';
let isSignatureDrawn = false;

// 3. Settings Config (Google Apps Script Integration)
let config = {
  gasUrl: localStorage.getItem('iplane_gas_url') || '',
  folderId: localStorage.getItem('iplane_folder_id') || ''
};

// 4. Drawing Canvas (Signature Pad) variables
let canvas, ctx;
let drawing = false;
let strokes = []; // Array of strokes containing points
let currentStroke = [];
let penColor = '#0000FF'; // Default to blue signature pen
const penWidth = 2.5;

// 5. App Initialization
document.addEventListener('DOMContentLoaded', () => {
  // Check local storage for lesson plan data, otherwise load initial dataset
  const savedData = localStorage.getItem('iplane_lessons_data');
  if (savedData) {
    try {
      lessonPlans = JSON.parse(savedData);
    } catch (e) {
      lessonPlans = [...INITIAL_LESSON_PLANS];
    }
  } else {
    lessonPlans = [...INITIAL_LESSON_PLANS];
    localStorage.setItem('iplane_lessons_data', JSON.stringify(lessonPlans));
  }

  // Bind UI elements & events
  setupSignaturePad();
  initializeUI();
  
  // Try loading live data from Google Sheets if configured
  if (config.gasUrl) {
    fetchLiveGoogleData();
  }
});

// Initialize UI layout, menus, and values
function initializeUI() {
  lucide.createIcons();
  
  // Render sidebar weeks
  renderSidebar();

  // Load configuration into form inputs
  document.getElementById('input-gas-url').value = config.gasUrl;
  document.getElementById('input-drive-folder').value = config.folderId;
  updateSyncStatusIndicator();

  // Settings Modal controls
  const settingsModal = document.getElementById('settings-modal');
  document.getElementById('btn-settings').addEventListener('click', () => {
    settingsModal.classList.add('open');
  });
  document.getElementById('btn-close-settings').addEventListener('click', () => {
    settingsModal.classList.remove('open');
  });
  document.getElementById('btn-save-settings').addEventListener('click', saveSettings);

  // Forms actions
  document.getElementById('btn-save-offline').addEventListener('click', () => saveLessonProgress(true));
  document.getElementById('btn-sync-google').addEventListener('click', syncToGoogleSheets);
  document.getElementById('btn-export-pdf').addEventListener('click', exportPDFDocument);

  // Load first item
  selectLesson(0);
}

// Render Sidebar Weeks list
function renderSidebar() {
  const weekList = document.getElementById('week-list');
  weekList.innerHTML = '';

  lessonPlans.forEach((plan, index) => {
    const item = document.createElement('div');
    item.className = `week-item ${index === selectedIndex ? 'active' : ''}`;
    
    // Status Badge calculation
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

// Select a lesson and display its content in form & labels
function selectLesson(index) {
  selectedIndex = index;
  
  // Highlight in sidebar
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
  
  // Format long texts cleanly
  document.getElementById('lbl-standard').innerText = plan.standard || '-';
  document.getElementById('lbl-objectives').innerText = plan.objectives || '-';
  document.getElementById('lbl-activities').innerText = plan.activities || '-';
  document.getElementById('lbl-assessment').innerText = plan.assessment || '-';
  document.getElementById('lbl-materials').innerText = plan.materials || '-';

  // Populating text inputs for reflections
  document.getElementById('txt-outcomes').value = (plan.outcomes === '-') ? '' : (plan.outcomes || '');
  document.getElementById('txt-solutions').value = (plan.solutions === '-') ? '' : (plan.solutions || '');

  // Clear signature for the new selection
  clearSignature();
  
  // Scroll main view to top smoothly
  document.querySelector('.app-main').scrollTop = 0;
}

// Save reflection changes locally to browser's LocalStorage
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

  // Save full array to LocalStorage
  localStorage.setItem('iplane_lessons_data', JSON.stringify(lessonPlans));
  
  // Re-render sidebar to update status badge
  renderSidebar();

  if (showNotification) {
    alert('บันทึกข้อมูลหลังการสอนลงในเครื่องเรียบร้อยแล้ว');
  }
  return true;
}

// Update settings of Google API integration
function saveSettings() {
  const url = document.getElementById('input-gas-url').value.trim();
  const folder = document.getElementById('input-drive-folder').value.trim();

  config.gasUrl = url;
  config.folderId = folder;

  localStorage.setItem('iplane_gas_url', url);
  localStorage.setItem('iplane_folder_id', folder);

  updateSyncStatusIndicator();
  document.getElementById('settings-modal').classList.remove('open');
  
  alert('บันทึกการตั้งค่าแล้ว');

  if (url) {
    fetchLiveGoogleData();
  }
}

// Update Sync indicator dot
function updateSyncStatusIndicator() {
  const syncStatus = document.getElementById('sync-status');
  const dot = syncStatus.querySelector('.status-dot');
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

  try {
    const response = await fetch(config.gasUrl);
    const result = await response.json();

    if (result.status === 'success' && result.data && result.data.length > 0) {
      // Merge sheets values into our local array matching 'ครั้งที่'
      result.data.forEach(sheetItem => {
        const onceVal = String(sheetItem['ครั้งที่']).trim();
        const localIndex = lessonPlans.findIndex(p => String(p.once).trim() === onceVal);

        if (localIndex > -1) {
          // If sheets has newer reflection entries, overwrite local fallbacks
          if (sheetItem['ผลการจัดการเรียนรู้']) {
            lessonPlans[localIndex].outcomes = sheetItem['ผลการจัดการเรียนรู้'];
          }
          if (sheetItem['แนวทางแก้ปัญหา']) {
            lessonPlans[localIndex].solutions = sheetItem['แนวทางแก้ปัญหา'];
          }
        }
      });

      // Save to localStorage & refresh
      localStorage.setItem('iplane_lessons_data', JSON.stringify(lessonPlans));
      renderSidebar();
      
      // Reload current visible content
      selectLesson(selectedIndex);
    }
  } catch (error) {
    console.error('ไม่สามารถดึงข้อมูลจาก Google Sheets ได้:', error);
  }
}

// Send reflection record + generated A4 PDF to Google Sheets & Drive
async function syncToGoogleSheets() {
  // First, save current inputs locally
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
    alert('กรุณาคลิกปุ่ม "ตั้งค่า Google Sheets" เพื่อใส่ Google Apps Script URL ก่อนซิงก์');
    document.getElementById('settings-modal').classList.add('open');
    return;
  }

  // Display loading status
  const syncBtn = document.getElementById('btn-sync-google');
  const syncBtnText = syncBtn.querySelector('span');
  const syncBtnIcon = syncBtn.querySelector('i');
  
  syncBtnText.innerText = 'กำลังส่งข้อมูล...';
  syncBtn.disabled = true;

  try {
    // 1. Prepare and populate print elements for PDF rendering
    populatePrintTemplate();
    
    // 2. Generate PDF Base64 string directly from HTML template element
    const printEl = document.getElementById('print-template-container');
    printEl.style.display = 'block'; // Make visible momentarily to let html2pdf parse CSS fully

    const opt = {
      margin:       10,
      filename:     `แผนการสอน_ครั้งที่_${lessonPlans[selectedIndex].once}.pdf`,
      image:        { type: 'jpeg', quality: 0.95 },
      html2canvas:  { scale: 2, useCORS: true },
      jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // Generate PDF inside html2pdf and output base64 data uri
    const pdfDataUri = await html2pdf().set(opt).from(printEl).output('datauristring');
    printEl.style.display = 'none'; // Hide print layout again

    // 3. Construct API payload
    const payload = {
      once: lessonPlans[selectedIndex].once,
      outcomes: lessonPlans[selectedIndex].outcomes,
      solutions: lessonPlans[selectedIndex].solutions,
      pdfBase64: pdfDataUri,
      pdfFileName: `LessonPlan_Once_${lessonPlans[selectedIndex].once}.pdf`,
      folderId: config.folderId
    };

    // 4. Send request to Apps Script Web App
    const response = await fetch(config.gasUrl, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'text/plain' // Avoid preflight CORS OPTIONS requests which GAS blocks
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json();

    if (result.status === 'success') {
      alert(`อัปเดต Google Sheet และ อัปโหลด PDF ขึ้น Drive เรียบร้อยแล้ว!\n\nลิงก์ไฟล์: ${result.pdfUrl || 'ไม่พบลิงก์'}`);
    } else {
      alert(`การบันทึกล้มเหลว: ${result.message}`);
    }
  } catch (error) {
    console.error(error);
    alert('เกิดข้อผิดพลาดในการเชื่อมต่อเครือข่าย หรือ โดนบล็อกสิทธิ์ CORS\n\nคำแนะนำในการแก้ไข:\n1. ตรวจสอบว่าใน Apps Script ตอน Deploy ได้เลือก Who has access เป็น "Anyone" (ทุกคน) แล้วหรือยัง\n2. ตรวจสอบว่าคัดลอก URL ของ Web App มาวางถูกต้อง (ลิงก์ต้องลงท้ายด้วย /exec เท่านั้น)\n3. มั่นใจว่าได้กดให้สิทธิ์การใช้งานบัญชีกับสคริปต์ (Authorize Access) ตอน Deploy แล้ว');
  } finally {
    syncBtnText.innerText = 'ส่งข้อมูล & อัปโหลด Drive';
    syncBtn.disabled = false;
  }
}

// Export Lesson Plan into high-fidelity downloadable PDF on clientside
function exportPDFDocument() {
  // Verify inputs and signatures first
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
      margin:       10,
      filename:     `แผนการสอน_ครั้งที่_${lessonPlans[selectedIndex].once}_${lessonPlans[selectedIndex].topic}.pdf`,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true },
      jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(printEl).save().then(() => {
      printEl.style.display = 'none';
      exportText.innerText = 'ดาวน์โหลด PDF';
      exportBtn.disabled = false;
    });
  } catch (err) {
    console.error(err);
    alert('การสร้าง PDF ขัดข้อง');
    exportText.innerText = 'ดาวน์โหลด PDF';
    exportBtn.disabled = false;
  }
}

// Copy values from working SPA views to the structured print layouts container
function populatePrintTemplate() {
  const plan = lessonPlans[selectedIndex];

  document.getElementById('print-week').innerText = plan.week;
  document.getElementById('print-once').innerText = plan.once;
  document.getElementById('print-once-header').innerText = plan.once;
  document.getElementById('print-date').innerText = plan.date;
  document.getElementById('print-period').innerText = plan.period;
  document.getElementById('print-period-count').innerText = `${plan.periodCount} คาบ`;

  document.getElementById('print-unit').innerText = plan.unit;
  document.getElementById('print-topic').innerText = plan.topic;
  document.getElementById('print-topic-header').innerText = plan.topic;
  
  document.getElementById('print-standard').innerText = plan.standard;
  document.getElementById('print-objectives').innerText = plan.objectives;
  document.getElementById('print-activities').innerText = plan.activities;
  document.getElementById('print-assessment').innerText = plan.assessment;
  document.getElementById('print-materials').innerText = plan.materials;

  // Outcomes formatting
  document.getElementById('print-outcomes').innerText = plan.outcomes || '-';
  document.getElementById('print-solutions').innerText = plan.solutions || '-';

  // Apply canvas signature data URL directly inside target img source
  const sigImg = document.getElementById('print-signature-img');
  sigImg.src = currentSignatureDataUrl;

  // Current Signature Date in Thai format
  const today = new Date();
  const thMonths = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];
  const thaiYear = today.getFullYear() + 543;
  document.getElementById('print-signature-date').innerText = `${today.getDate()} ${thMonths[today.getMonth()]} ${thaiYear}`;
}


// ==========================================
// 6. Signature Canvas Logic
// ==========================================
function setupSignaturePad() {
  canvas = document.getElementById('signature-pad');
  ctx = canvas.getContext('2d');
  
  const placeholder = document.getElementById('sig-placeholder');

  // Multi-resolution scaling to support retina and high PPI tablet screens
  resizeCanvas();
  window.addEventListener('resize', () => {
    // When resizing the window, keep existing signature line scale intact by redrawing strokes
    resizeCanvas();
    drawStrokes();
  });

  // Color Dot Listeners
  const colorDots = document.querySelectorAll('.color-dot');
  colorDots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      colorDots.forEach(d => d.classList.remove('active'));
      e.target.classList.add('active');
      penColor = e.target.dataset.color;
    });
  });

  // Action Buttons
  document.getElementById('btn-sig-clear').addEventListener('click', clearSignature);
  document.getElementById('btn-sig-undo').addEventListener('click', undoSignatureStroke);

  // Canvas Drawing Events
  
  // Mouse Draw
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

  // Touch Screen Draw (iPad/iPhone/Android)
  canvas.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Prevents page from scrolling down while drawing
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

// Convert absolute coordinate to relative canvas container offsets
function getPos(e) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  };
}

// Resize canvas pixel density based on bounding dimensions
function resizeCanvas() {
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width;
  canvas.height = rect.height;
  
  // Re-apply basic rendering setups after resize resets context values
  ctx.lineWidth = penWidth;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.strokeStyle = penColor;
}

// Redraw all strokes (useful for resizing, colors, or undoes)
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

// Clear all canvas drawings
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

// Remove last drawn stroke line
function undoSignatureStroke() {
  strokes.pop();
  drawStrokes();
}
