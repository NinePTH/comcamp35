import React from 'react'
import FAQAccordion, { IFAQ } from 'src/components/FAQAccordion'
import { Flex, Heading } from '@radix-ui/themes'
import styles from './index.module.scss'
import { Link } from 'react-router-dom'

const faqContents: IFAQ[] = [
  {
    question: 'ถ้าไม่มีพื้นฐานทางด้านคอมพิวเตอร์ สามารถสมัครได้ไหมครับ',
    answer: 'เพียงแค่มีความสนใจทางด้านคอมพิวเตอร์ ไม่จำเป็นต้องมีพื้นฐานมาก่อนก็สามารถเข้าได้ค่ะ ',
  },
  {
    question: 'ต้องขอเอกสารจากทางโรงเรียนไหมคะ ',
    answer: 'เอกสารที่ต้องขอกับทางโรงเรียน ได้แก่ ปพ.1 (ใบแสดงผลการเรียน) และ ปพ.7 (เอกสารรับรองการเป็นนักเรียน) ค่ะ ',
  },
  {
    question: 'ในการกรอกเกรดเพื่อทำการสมัครค่าย จะต้องกรอกเกรดเทอมล่าสุด (GPA) หรือเกรดเฉลี่ยสะสม (GPAX) คะ ',
    answer: `กรอกเป็นเกรดเฉลี่ยสะสม (GPAX) ค่ะ `,
  },
  {
    question: 'ค่ายนี้รับจำนวนกี่คน และสมัครก่อนมีสิทธิ์ก่อนหรือเปล่าคะ ',
    answer: `80 คนค่ะ โดยจะมีการคัดเลือกจากข้อมูลและการตอบคำถามที่ให้น้อง ๆ ได้ทำการตอบเข้ามา ดังนั้นสมัครก่อนหรือหลังจึงไม่มีผลต่อการพิจารณาค่ะ `,
  },
  {
    question: 'ค่ายนี้มีเรียนอะไรบ้างครับ ',
    answer: `ค่าย Comcamp 35 จะมีการสอนทั้งหมด 4 วิชา ได้แก่ C programming, Web development, Introduction and Data Visualization in Python, UI Design อีกทั้งยังมีการทำ Mini project เพื่อให้น้อง ๆ ได้นำสิ่งที่น้อง ๆ ได้เรียนรู้มาใช้แก้ไขปัญหาร่วมกันภายในค่ายค่ะ `,
  },
  {
    question: 'ค่ายนี้ต้องค้างคืนไหมคะ แล้วพักที่ไหนคะ ',
    answer: `ค่ายนี้จะมีการค้างคืนทั้งหมด 4 คืน โดยจะพักที่หอพักนักศึกษาชายและหญิง (บ้านธรรมรักษา 1 และ 2) ของมหาวิทยาลัย ซึ่งจะมีพี่ ๆ CPE ดูแลตลอด 24 ชั่วโมงค่ะ `,
  },
  {
    question: `ในการเข้าค่ายนี้ จะได้รับเกียรติบัตรไหมครับ `,
    answer: `น้อง ๆ ที่เข้าร่วมค่ายนี้จะได้รับเกียรติบัตรจากค่ายค่ะ `,
  },
  {
    question: 'ค่ายนี้มีเกณฑ์ในการรับคนอย่างไรบ้างคะ ',
    answer: `เกณฑ์ในการคัดเลือกจะพิจารณาจากข้อมูลและความถูกต้องในใบสมัคร ประกอบกับพิจารณาจากการตอบคำถามของน้อง ๆ ที่ส่งเข้ามาด้วยค่ะ`,
  },
]

const Faqviewmore: React.FC = () => {
  return (
    <Flex direction="column" justify="center" align="center" className={styles.faq}>
      <Heading size={{ initial: '8', md: '9' }} className="title" align="center">
        FAQ
      </Heading>
      <div className={styles.content}>
        <FAQAccordion items={faqContents} />
      </div>
      <Link to="/" className={styles.but}>
        <div>{'ย้อนกลับ 💻'}</div>
      </Link>
    </Flex>
  )
}

export default Faqviewmore
