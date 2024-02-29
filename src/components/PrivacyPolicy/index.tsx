import { Text } from '@radix-ui/themes'
import styles from './index.module.scss'

const PrivacyPolicy: React.FC = (): JSX.Element => {
  return (
    <Text className={styles.text}>
      <ol style={{ listStyleType: 'none' }}>
        <li>
          <h3>นโยบายความเป็นส่วนตัว</h3>
          <div style={{ textIndent: '25px', marginTop: '10px' }}>
            โครงการฝึกอบรมเชิงปฏิบัติการคอมพิวเตอร์เบื้องต้น ครั้งที่ 35
            ให้ความสําคัญกับการคุ้มครองข้อมูลส่วนบุคคลของคุณ
            โดยนโยบายความเป็นส่วนตัวฉบับนี้ได้อธิบายแนวปฏิบัติเกี่ยวกับการเก็บรวบรวม ใช้ หรือ
            เปิดเผยข้อมูลส่วนบุคคลรวมถึงสิทธิต่าง ๆ ของเจ้าของข้อมูลส่วนบุคคล ตามกฎหมายคุ้มครองข้อมูลส่วนบุคคล
          </div>
        </li>
        <li style={{ marginTop: '20px' }}>
          <h3>การเก็บรวบรวมข้อมูลส่วนบุคคล</h3>
          <div style={{ marginTop: '10px' }}>เราจะเก็บข้อมูลส่วนบุคคลที่ได้รับโดยตรงจากคุณผ่านช่องทาง ดังต่อไปนี้</div>
          <ul style={{ marginLeft: '30px', marginTop: '10px' }}>
            <li>การรับสมัครเข้าร่วมโครงการ</li>
          </ul>
        </li>
        <li style={{ marginTop: '20px' }}>
          <h3 style={{ marginBottom: '10px' }}>ประเภทข้อมูลส่วนบุคคลที่เก็บรวบรวม</h3>
          <ul style={{ listStyleType: 'none' }}>
            <li>
              <strong>ข้อมูลส่วนบุคคล</strong> เช่น ชื่อ นามสกุล อายุ วันเดือนปีเกิด สัญชาติ เลขประจำตัวประชาชน เป็นต้น
            </li>
            <li style={{ marginTop: '5px' }}>
              <strong>ข้อมูลการติดต่อ</strong> เช่น ที่อยู่ หมายเลขโทรศัพท์ อีเมล เป็นต้น
            </li>
            <li style={{ marginTop: '5px' }}>
              <strong>ข้อมูลบัญชี</strong> เช่น บัญชีผู้ใช้งาน ประวัติการใช้งาน เป็นต้น
            </li>
            <li style={{ marginTop: '5px' }}>
              <strong>หลักฐานแสดงตัวตน</strong> เช่น สำเนาบัตรประจำตัวประชาชน เอกสารรับรองการเป็นนักเรียน เป็นต้น
            </li>
            <li style={{ marginTop: '5px' }}>
              <strong>ข้อมูลอื่น ๆ</strong> เช่น เช่น
              รูปภาพและข้อมูลอื่นใดที่ถือว่าเป็นข้อมูลส่วนบุคคลตามกฎหมายคุ้มครองข้อมูลส่วนบุคคล เราจะเก็บรวบรวม ใช้
              หรือเปิดเผยข้อมูลส่วนบุคคลอ่อนไหว ดังต่อไปนี้ เมื่อเราได้รับความยินยอมโดยชัดแจ้งจากคุณ
              เว้นแต่กฎหมายกำหนดให้ทำได้
            </li>
          </ul>
          <ul style={{ marginLeft: '30px', marginTop: '10px' }}>
            <li>ข้อมูลสุขภาพ</li>
          </ul>
        </li>
        <li style={{ marginTop: '20px' }}>
          <h3 style={{ marginBottom: '10px' }}>ผู้เยาว์</h3>
          <ul style={{ textIndent: '25px' }}>
            หากคุณมีอายุต่ำกว่า 20 ปีหรือมีข้อจํากัดความสามารถตามกฎหมาย เราอาจเก็บรวบรวม ใช้
            หรือเปิดเผยข้อมูลส่วนบุคคลของคุณ
            เราอาจจําเป็นต้องให้พ่อแม่หรือผู้ปกครองของคุณให้ความยินยอมหรือที่กฎหมายอนุญาตให้ทําได้
            หากเราทราบว่ามีการเก็บรวบรวมข้อมูลส่วนบุคคลจากผู้เยาว์โดยไม่ได้รับความยินยอมจากพ่อแม่หรือผู้ปกครอง
            เราจะดําเนินการลบข้อมูลนั้นออกจากฐานข้อมูลของเรา
          </ul>
        </li>
        <li style={{ marginTop: '20px' }}>
          <h3 style={{ marginBottom: '10px' }}>วิธีการเก็บรักษาข้อมูลส่วนบุคคล</h3>
          <ul>เราจะเก็บรักษาข้อมูลส่วนบุคคลของคุณในรูปแบบเอกสารและรูปแบบอิเล็กทรอนิกส์</ul>
        </li>
        <li style={{ marginTop: '20px' }}>
          <h3 style={{ marginBottom: '10px' }}>การประมวลผลข้อมูลส่วนบุคคล</h3>
          <ul>เราจะเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคลของคุณเพื่อวัตถุประสงค์ดังต่อไปนี้</ul>
          <ul style={{ marginLeft: '30px', marginTop: '10px' }}>
            <li>เพื่อยืนยันว่าผู้สมัครมีตัวตนจริง</li>
            <li>เพื่อใช้ประกอบการพิจารณาคุณสมบัติของผู้สมัครตามที่โครงการกำหนด</li>
            <li>เพื่อปฏิบัติตามกฎหมายและกฎระเบียบของหน่วยงานราชการ</li>
          </ul>
        </li>
        <li style={{ marginTop: '20px' }}>
          <h3 style={{ marginBottom: '10px' }}>การเปิดเผยข้อมูลส่วนบุคคล</h3>
          <ul style={{ textIndent: '25px' }}>
            เราอาจเปิดเผยข้อมูลส่วนบุคคลของคุณเท่าที่จำเป็นให้เจ้าหน้าที่ภายในโครงการภายใต้ความยินยอมของคุณหรือที่กฎหมายอนุญาตให้เปิดเผยได้
            เพื่อการบริหารจัดการโครงการอย่างมีประสิทธิภาพ
          </ul>
        </li>
        <li style={{ marginTop: '20px' }}>
          <h3 style={{ marginBottom: '10px' }}>ระยะเวลาจัดเก็บข้อมูลส่วนบุคคล</h3>
          <ul style={{ textIndent: '25px' }}>
            เราจะเก็บรักษาข้อมูลส่วนบุคคลของคุณไว้ตามระยะเวลาที่จําเป็นเพื่อให้บรรลุวัตถุประสงค์ที่เกี่ยวข้องกับนโยบายฉบับนี้
            ซึ่งอาจจําเป็นต้องเก็บรักษาไว้ต่อไปภายหลังจากนั้น หากมีกฎหมายกําหนดไว้เราจะลบ ทําลาย
            หรือทําให้เป็นข้อมูลที่ไม่สามารถระบุตัวตนของคุณได้ เมื่อหมดความจําเป็นหรือสิ้นสุดระยะเวลาดังกล่าว
          </ul>
        </li>
        <li style={{ marginTop: '20px' }}>
          <h3 style={{ marginBottom: '10px' }}>สิทธิของเจ้าของข้อมูลส่วนบุคคล</h3>
          <ul style={{ marginBottom: '10px' }}>
            ภายใต้กฎหมายคุ้มครองข้อมูลส่วนบุคคล คุณมีสิทธิในการดำเนินการดังต่อไปนี้
          </ul>
          <ul style={{ listStyleType: 'none', marginBottom: '5px', textIndent: '25px' }}>
            <li>
              <strong>สิทธิขอถอนความยินยอม (right to withdraw consent)</strong> หากคุณได้ให้ความยินยอม เราจะเก็บรวบรวม
              ใช้ หรือเปิดเผยข้อมูลส่วนบุคคลของคุณ
              ไม่ว่าจะเป็นความยินยอมที่คุณให้ไว้ก่อนวันที่กฎหมายคุ้มครองข้อมูลส่วนบุคคลใช้บังคับหรือหลังจากนั้น
              คุณมีสิทธิที่จะถอนความยินยอมเมื่อใดก็ได้ตลอดเวลา เป็นต้น
            </li>
          </ul>
          <ul style={{ listStyleType: 'none', marginBottom: '5px', textIndent: '25px' }}>
            <li>
              <strong>สิทธิขอเข้าถึงข้อมูล (right to access)</strong>{' '}
              คุณมีสิทธิขอเข้าถึงข้อมูลส่วนบุคคลของคุณที่อยู่ในความรับผิดชอบของเราและขอให้เราทำสําเนาข้อมูลดังกล่าวให้แก่คุณ
              รวมถึงขอให้เราเปิดเผยว่าเราได้ข้อมูลส่วนบุคคลของคุณมาได้อย่างไร
            </li>
          </ul>
          <ul style={{ listStyleType: 'none', marginBottom: '5px', textIndent: '25px' }}>
            <li>
              <strong>สิทธิขอถ่ายโอนข้อมูล (right to data portability)</strong>{' '}
              คุณมีสิทธิขอรับข้อมูลส่วนบุคคลของคุณในกรณที่เราได้จัดทําข้อมูลส่วนบุคคลนั้นอยู่ในรูปแบบให้สามารถอ่านหรือใช้งานได้ด้วยเครื่องมือหรืออุปกรณ์ที่ทํางานได้โดยอัตโนมัติและสามารถใช้หรือเปิดเผยข้อมูลส่วนบุคคลได้ด้วยวิธีการอัตโนมัติ
              รวมทั้งมีสิทธิขอให้เราส่งหรือโอนข้อมูลส่วนบุคคลในรูปแบบดังกล่าวไปยังผู้ควบคุมข้อมูลส่วนบุคคลอื่นเมื่อสามารถทําได้ด้วยวิธีการอัตโนมัติ
              และมีสิทธิขอรับข้อมูลส่วนบุคคลที่เราส่งหรือ
              โอนข้อมูลส่วนบุคคลในรูปแบบดังกล่าวไปยังผู้ควบคุมข้อมูลส่วนบุคคลอื่นโดยตรง
              เว้นแต่ไม่สามารถดําเนินการได้เพราะเหตทุางเทคนิค
            </li>
          </ul>
          <ul style={{ listStyleType: 'none', marginBottom: '5px', textIndent: '25px' }}>
            <li>
              <strong>สิทธิขอคัดค้าน (right to object)</strong> คุณมีสิทธิขอคัดค้านการเก็บรวบรวม ใช้
              หรือเปิดเผยข้อมูลส่วนบุคคลของคุณในเวลาใดก็ได้ หากการเก็บรวบรวม ใช้
              หรือเปิดเผยข้อมูลส่วนบุคคลของคุณที่ทําขึ้นเพื่อการดําเนินงานที่จําเป็นภายใต้ประโยชน์โดยชอบด้วยกฎหมายของเราหรือของบุคคลหรือนิติบุคคลอื่น
              โดยไม่เกินขอบเขตที่คุณสามารถคาดหมายได้อย่างสมเหตุสมผลหรือเพื่อดําเนินการตามภารกิจเพื่อสาธารณประโยชน์
            </li>
          </ul>
          <ul style={{ listStyleType: 'none', marginBottom: '5px', textIndent: '25px' }}>
            <li>
              <strong>สิทธิขอให้ลบหรือทําลายข้อมูล (right to erasure/destruction)</strong>{' '}
              คุณมีสิทธิขอลบหรือทําลายข้อมูลส่วนบุคคลของคุณหรือทําให้ข้อมูลส่วนบุคคลเป็นข้อมูลที่ไม่สามารถระบุตัวคุณได้
              หากคุณเชื่อว่าข้อมูลส่วนบุคคลของคุณถูกเก็บรวบรวม ใช้
              หรือเปิดเผยโดยไม่ชอบด้วยกฎหมายที่เกี่ยวข้องหรือเห็นว่าเราหมดความจําเป็นในการเก็บรักษาไว้ตามวัตถุประสงค์ที่เกี่ยวข้องในนโยบายฉบับนี้หรือเมื่อคุณได้ใช้สิทธิขอถอนความยินยอมหรือใช้สิทธิขอคัดค้านตามที่แจ้งไว้ข้างต้นแล้ว
            </li>
          </ul>
          <ul style={{ listStyleType: 'none', marginBottom: '5px', textIndent: '25px' }}>
            <li>
              <strong>สิทธิขอให้ระงับการใช้ข้อมูล (right to restriction of processing)</strong>{' '}
              คุณมีสิทธิขอให้ระงับการใช้ข้อมูลส่วนบุคคลชั่วคราวในกรณีที่เราอยู่ระหว่างตรวจสอบตามคําร้องขอใช้สิทธิขอแก้ไขข้อมูลส่วนบุคคลหรือขอคัดค้านของคุณหรือกรณีอื่นใดที่เราหมดความจําเป็นและต้องลบหรือทำลายข้อมูลส่วนบุคคลของคุณตามกฎหมายที่เกี่ยวข้องแต่คุณขอให้เราระงับการใช้แทนxxx
            </li>
          </ul>
          <ul style={{ listStyleType: 'none', marginBottom: '5px', textIndent: '25px' }}>
            <li>
              <strong>สิทธิขอให้แก้ไขข้อมูล (right to rectification)</strong>{' '}
              คุณมีสิทธิขอแก้ไขข้อมูลส่วนบุคคลของคุณให้ถูกต้อง เป็นปัจจุบัน สมบูรณ์และ ไม่ก่อให้เกิดความเข้าใจผิด
            </li>
          </ul>
          <ul style={{ listStyleType: 'none', marginBottom: '5px', textIndent: '25px' }}>
            <li>
              <strong>สิทธิร้องเรียน (right to lodge a complaint)</strong>{' '}
              คุณมีสิทธิร้องเรียนต่อผู้มีอำนาจตามกฎหมายที่เกี่ยวข้อง หากคุณเชื่อว่าการเก็บรวบรวม ใช้
              หรือเปิดเผยข้อมูลส่วนบุคคลของคุณเป็นการกระทำในลักษณะที่ฝ่าฝืนหรือไม่ปฏิบัติตามกฎหมายที่เกี่ยวข้อง
            </li>
          </ul>
          <ul style={{ listStyleType: 'none', marginBottom: '5px', textIndent: '25px' }}>
            คุณสามารถใช้สิทธิของคุณในฐานะเจ้าของข้อมูลส่วนบุคคลข้างต้นได้
            โดยติดต่อมาที่เจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคลของเราตามรายละเอียดท้ายนโยบายนี้
            เราจะแจ้งผลการดำเนินการภายในระยะเวลา 30 วัน นับแต่วันที่เราได้รับคำขอใช้สิทธิจากคุณ
            ตามแบบฟอร์มหรือวิธีการที่เรากำหนด ทั้งนี้
            หากเราปฏิเสธคำขอเราจะแจ้งเหตุผลของการปฏิเสธให้คุณทราบผ่านช่องทางต่าง ๆ เช่น อีเมล โทรศัพท์ เป็นต้น
          </ul>
        </li>
        <li style={{ marginTop: '20px' }}>
          <h3 style={{ marginBottom: '5px' }}>คุกกี้ที่เราใช้งาน</h3>
          <ul style={{ listStyleType: 'none', marginBottom: '5px', textIndent: '25px' }}>
            <li>
              <strong>คุกกี้ที่มีความจำเป็นอย่างยิ่ง (Necessary Cookies)</strong>{' '}
              คุกกี้ที่มีความจำเป็นอย่างยิ่งช่วยให้เราสามารถนำเสนอประสบการณ์ที่ดีที่สุดเมื่อท่านเข้าถึงและสำรวจเว็บไซต์ของเราและใช้งานคุณสมบัติต่าง
              ๆ ตัวอย่างเช่น
              คุกกี้เหล่านี้แจ้งให้เราทราบว่าท่านได้ทำการสร้างบัญชีและได้ลงชื่อเข้าใช้บัญชีนั้นเพื่อเข้าถึงเนื้อหา
            </li>
          </ul>
        </li>
        <li style={{ marginTop: '20px' }}>
          <h3 style={{ marginBottom: '5px' }}>การรักษาความมั่นคงและความปลอดภัยของข้อมูลส่วนบุคคล</h3>
          <ul style={{ textIndent: '25px' }}>
            เราจะรักษาความมั่นคงปลอดภัยของข้อมูลส่วนบุคคลของคุณไว้ตามหลักการ การรักษาความลับ(confidentiality)
            ความถูกต้องครบถ้วน (integrity) และสภาพพร้อมใช้งาน (availability) ทั้งนี้ เพื่อป้องกันการสูญหาย เข้าถึง ใช้
            เปลี่ยนแปลง แก้ไข หรือเปิดเผย นอกจากนี้เราจะจัดให้มีมาตรการรักษาความมั่นคงปลอดภัยของข้อมูลส่วนบุคคล
            ซึ่งครอบคลุมถึงมาตรการป้องกันด้านการบริหารจัดการ (administrative safeguard) มาตรการป้องกันด้านเทคนิค
            (technical safeguard) และมาตรการป้องกันทางกายภาพ (physical safeguard)
            ในเรื่องการเข้าถึงหรือควบคุมการใช้งานข้อมูลส่วนบุคคล (access control)
          </ul>
        </li>
        <li style={{ marginTop: '20px' }}>
          <h3 style={{ marginBottom: '5px' }}>การแจ้งเหตุละเมิดข้อมูลส่วนบุคคล</h3>
          <ul style={{ textIndent: '25px' }}>
            ในกรณีที่มีเหตุละเมิดข้อมูลส่วนบุคคลของคุณเกิดขึ้น
            เราจะแจ้งให้สำนักงานคณะกรรมการคุ้มครองข้อมูลส่วนบุคคลทราบโดยไม่ชักช้าภายใน 72 ชั่วโมง
            นับแต่ทราบเหตุเท่าที่สามารถกระทำได้ ในกรณีที่การละเมิดมีความเสี่ยงสูงที่จะมีผลกระทบต่อสิทธิและเสรีภาพของคุณ
            เราจะแจ้งการละเมิดให้คุณทราบพร้อมกับแนวทางการเยียวยาโดยไม่ชักช้าผ่านช่องทางต่าง ๆ เช่น เว็บไซต์ อีเมล
            โทรศัพท์ เป็นต้น
          </ul>
        </li>
        <li style={{ marginTop: '20px' }}>
          <h3 style={{ marginBottom: '5px' }}>รายละเอียดการติดต่อ</h3>
          <ul style={{ textIndent: '25px', marginBottom: '7px' }}>
            หากคุณต้องการสอบถามข้อมูลเกี่ยวกับนโยบายความเป็นส่วนตัวฉบับนี้ รวมถึงการขอใช้สิทธิต่าง ๆ
            คุณสามารถติดต่อเจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคลของเราได้ ดังนี้
          </ul>
          <strong>เจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคล</strong>
          <ul style={{ marginTop: '5px' }}>นางสาวพรธีรา ปุณยกมลปรีดา</ul>
          <ul style={{ marginTop: '5px' }}>อีเมล : phonteera.puny@kmutt.ac.th</ul>
          <ul style={{ marginTop: '5px' }}>หมายเลขโทรศัพท์ 0644093043</ul>
        </li>
      </ol>
    </Text>
  )
}

export default PrivacyPolicy
