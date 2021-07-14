import React from "react"
import Card from "../../common/Card/Card"
import Tags from "../../common/Card/Tags/Tags"
import Description from "../../common/Description/Description"
import Logo from "../../common/Logo/Logo"
import Work1 from "../../img/Works/Work1.jpg"
import Work2 from "../../img/Works/Work2.jpg"
import styles from "../../scss-blocks/Works/Works.module.scss"

export default function Works () {
  //const tags=["дизайн", "создание сайтов", "SMM"]
  return(
    <div>
      <p className={styles.title}>Мои работы</p>
      <article>
      <Card>
        <div  className={styles.work}>
          <div className={styles.workPrewiew}>
            <Logo src={Work1}/>
          </div>

          <div className={styles.content}>
            <Description titleArticle="altermono.com" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat."/>
            <Tags workTags="true"/>
          </div>
        </div>
      </Card>

      <Card>
        <div  className={styles.work}>
          <div className={styles.workPrewiew}>
            <Logo src={Work2}/>
          </div>

          <div className={styles.content}>
            <Description titleArticle="codedoco.com" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat."/>
            <Tags workTags="true"/>
          </div>
        </div>
      </Card>
      </article>
    </div>
  )
}
