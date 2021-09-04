import React from "react"
import Text from "../../Text/Text"
import styles from "../../scss-blocks/SideBar/AboutMe.module.scss"


export default function AboutMe () {
  return (
    <div className={styles.wrapper}>
      <span className={styles.topLine}></span>
      <Text text="Front-end разработчик. Практик верстки сайтов.
    Созданием сайтов занимаюсь с 2012 года. Работал в нескольких ИТ компаниях и наработал более 10 000 часов в создании сайтов различной сложности."/>
      <span className={styles.bottomLine}></span>
    </div>
  )
}