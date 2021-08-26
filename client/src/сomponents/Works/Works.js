import React from "react"
import Button from "../../common/Button/Button"
import Card from "../../common/Card/Card"
import Tags from "../../common/Card/Tags/Tags"
import Logo from "../../common/Logo/Logo"
import Work1 from "../../img/Works/Work1.jpg"
import Work2 from "../../img/Works/Work2.jpg"
import styles from "../../scss-blocks/Works/Works.module.scss"
import stylesTag from "../../common/scss-blocks/Card/Tags.module.scss"
import SubTitle from "../../common/Text/SubTitle"
import Title from "../../common/Text/Title"

export default function Works () {

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
            <Title titleArticle="altermono.com"/>
            <SubTitle text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat."/>
            {/*<Description titleArticle="altermono.com" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat."/>*/}
            <Tags>
              <div className={stylesTag.wrapper}>
                <ul className={stylesTag.workTags}>
                  <li>дизайн</li>
                  <li>создание сайтов</li>
                  <li>SMM</li>
                </ul>
              <div className={stylesTag.footer}>
              <Button>перейти на сайт</Button>
              </div>
              </div>
            </Tags>
          </div>
        </div>
      </Card>

      <Card>
        <div  className={styles.work}>
          <div className={styles.workPrewiew}>
            <Logo src={Work2}/>
          </div>

          <div className={styles.content}>
          <Title titleArticle="altermono.com"/>
            <SubTitle text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat."/>
            <Tags>
              <div className={stylesTag.wrapper}>
                <ul className={stylesTag.workTags}>
                  <li>дизайн</li>
                  <li>создание сайтов</li>
                  <li>SMM</li>
                </ul>
              <div className={stylesTag.footer}>
              <Button>перейти на сайт</Button>
              </div>
              </div>
            </Tags>

          </div>
        </div>
      </Card>
      </article>
    </div>
  )
}
