import React from 'react'
import FAQAccordion, { IFAQ } from 'src/components/FAQAccordion'
import { Flex, Heading } from '@radix-ui/themes'
import styles from './faq.module.scss'
import { Link } from 'react-router-dom'

const faqContents: IFAQ[] = [
  {
    question: 'ค่ายเปิดรับสมัครถึงวันไหน',
    answer: 'ค่ายเปิดรับสมัครตั้งแต่วันที่ 1 - 10 มีนาคม 2567 ค่ะ',
  },
  {
    question: 'ถ้าเรียนเตรียมวิศวะอยู่ สมัครค่ายนี้ได้ไหมครับ',
    answer: 'สมัครได้ค่ะ ',
  },
  {
    question: 'กรณีเป็นเด็กต่างจังหวัด พอจะมีคำแนะนำในการเดินทางมาค่ายไหมครับ',
    answer: `หากน้อง ๆ เดินทางมาจากต่างจังหวัด สามารถเดินทางมาตามจุดนัดพบที่ระบุไว้ในใบสมัครได้เลยค่ะ และในวันเข้าร่วมโครงการ จะมีพี่ ๆ ไปดูแลและอำนวยความสะดวกในการเดินทางค่ะ`,
  },
  {
    question: 'รูปแบบการจัดค่ายเป็นแบบ Onsite หรือเปล่าคะ ',
    answer: `รูปแบบค่ายจัดแบบ Onsite ที่ภาควิชาวิศวกรรมคอมพิวเตอร์ อาคารวิศววัฒนะ (ตึกแดง) ชั้น 10 - 11 มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรีค่ะ`,
  },
]

const Faq: React.FC = () => {
  return (
    <Flex direction="column" justify="center" align="center" className={styles.faq}>
      <Heading size={{ initial: '8', md: '9' }} className="title" align="center">
        FAQ
      </Heading>
      <div className={styles.content}>
        <FAQAccordion items={faqContents} />
      </div>
      <Link to="faq" className={styles.but}>
        <div>{'คำถามเพิ่มเติม  💬'}</div>
      </Link>
    </Flex>
  )
}

export default Faq
