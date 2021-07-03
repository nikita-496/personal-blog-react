import React from "react"
import Description from "../../Description/Description"
import Logo from "../../Logo/Logo"
import styles from "../../scss-blocks/Card/CardPosts.module.scss"
import Card from "../Card"
import Tags from "../Tags/Tags"

export default function CardPost (props) {

  return(
    <div className={styles.wrapper}>
     <Card>
       { (props.src) ?  <>
       <Logo src={props.src}/>
       <div className={styles.content}>
       <Description className={styles.text} 
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat."
          titleArticle="Как я сходил на FrontEnd Conf 2021"
          />
          <Tags tagsName="создание сайтов">
              <a href="/" className={styles.link}>{props.nameLink}</a>
          </Tags>
        </div>
       </>
       : <div className={styles.content}>
       <Description className={styles.text} 
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat."
          titleArticle="Как я сходил на FrontEnd Conf 2021"
          />
          <Tags tagsName="создание сайтов">
              <a href="/" className={styles.link}>{props.nameLink}</a>
          </Tags>
       </div>
      }
      </Card>
    </div>
  )
}