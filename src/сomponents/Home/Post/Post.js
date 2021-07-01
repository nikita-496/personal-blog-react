import React from "react"
import Card from "../../../common/Card/Card"
import Description from "../../../common/Description/Description"
import Logo from "../../../common/Logo/Logo"
import src from "../../../img/post/Conference.jpg"
import styles from "../../../scss-blocks/Home/Post/Post.module.scss"


export default function Post () {
  let date = "1.07.2021"
  return(
    <div className={styles.wrapper}>
     <Card>
        <Logo src={src}/>
        <div className={styles.content}>
          <Description className={styles.text} 
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat."
          titleArticle="Как я сходил на FrontEnd Conf 2021"
          />
          <div className={styles.footerPost}>
            <div className={styles.tags}>
              <time className={styles.date} dateTime="2021-07-01">{date}</time>
              <span className={styles.caregoty}>создание сайтов</span>
            </div>
            <a href="/" className={styles.link}>читать</a>
          </div>
        </div>
      </Card>
    </div>
  )
}
/*
<SubTitle className={styles.text} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat."/>
*/

