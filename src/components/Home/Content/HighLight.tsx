import React from 'react'
import styles from './highlight.module.scss'
import { Flex, Grid, Heading } from '@radix-ui/themes'

const highLightContents: string[] = [
  'มีการเรียนการสอนที่เกี่ยวกับความรู้พื้นฐานด้านคอมพิวเตอร์ อีกทั้งยังมีกิจกรรมต่าง ๆ รวมถึงการทำมินิโปรเจคที่มาจากปัญหาในชีวิตจริง เพื่อให้น้อง ๆ ได้เรียนรู้และพัฒนาทักษะทางวิชาการ',
  'มีการเรียนการสอนที่เกี่ยวกับความรู้พื้นฐานด้านคอมพิวเตอร์ อีกทั้งยังมีกิจกรรมต่าง ๆ รวมถึงการทำมินิโปรเจคที่มาจากปัญหาในชีวิตจริง เพื่อให้น้อง ๆ ได้เรียนรู้และพัฒนาทักษะทางวิชาการ',
  'มีการเรียนการสอนที่เกี่ยวกับความรู้พื้นฐานด้านคอมพิวเตอร์ อีกทั้งยังมีกิจกรรมต่าง ๆ รวมถึงการทำมินิโปรเจคที่มาจากปัญหาในชีวิตจริง เพื่อให้น้อง ๆ ได้เรียนรู้และพัฒนาทักษะทางวิชาการ',
  'มีการเรียนการสอนที่เกี่ยวกับความรู้พื้นฐานด้านคอมพิวเตอร์ อีกทั้งยังมีกิจกรรมต่าง ๆ รวมถึงการทำมินิโปรเจคที่มาจากปัญหาในชีวิตจริง เพื่อให้น้อง ๆ ได้เรียนรู้และพัฒนาทักษะทางวิชาการ',
  'มีการเรียนการสอนที่เกี่ยวกับความรู้พื้นฐานด้านคอมพิวเตอร์ อีกทั้งยังมีกิจกรรมต่าง ๆ รวมถึงการทำมินิโปรเจคที่มาจากปัญหาในชีวิตจริง เพื่อให้น้อง ๆ ได้เรียนรู้และพัฒนาทักษะทางวิชาการ',
  'มีการเรียนการสอนที่เกี่ยวกับความรู้พื้นฐานด้านคอมพิวเตอร์ อีกทั้งยังมีกิจกรรมต่าง ๆ รวมถึงการทำมินิโปรเจคที่มาจากปัญหาในชีวิตจริง เพื่อให้น้อง ๆ ได้เรียนรู้และพัฒนาทักษะทางวิชาการ',
]

const CampHighlight: React.FC = () => {
  const renderHighlightContents = highLightContents.map((item: string, i: number) => (
    <div key={i} className={styles.content}>
      {item}
    </div>
  ))

  return (
    <Flex direction="column" justify="center" align="center" className={styles.highlight}>
      <Heading size={{ initial: '8', md: '9' }} className="title" align="center">
        Highlight
      </Heading>
      <Grid columns={{ initial: '1', sm: '2', md: '3' }} width="auto" className={styles.contents}>
        {renderHighlightContents}
      </Grid>
    </Flex>
  )
}

export default CampHighlight
