import React from "react"
import { NavLink } from "react-router-dom"
import Card from "../../../../common/Card/Card"
import Tags from "../../../../common/Card/Tags/Tags"
import Logo from "../../../../common/Logo/Logo"
import styles from "../../../../scss-blocks/Home/Post/Post.module.scss"
import stylesTag from "../../../../common/scss-blocks/Card/Tags.module.scss"
import Title from "../../../../common/Text/Title"
import SubTitle from "../../../../common/Text/SubTitle"

export default function Post (props) {
  return(
    <div className={styles.wrapper}>
      <Card>
          <div className={styles.content}>
            <Logo src={props.src}/>
            <Title titleArticle={true}>{props.titleArticle}</Title>
            <SubTitle description={props.description}/>
            { props.titleArticle === "Ничего не найдено!" ? <></>
            :  <Tags link={"читать"} >
                <div className={stylesTag.tags}>
                  <time className={stylesTag.date}>{props.date}</time>
                  <span className={stylesTag.category}>{props.category}</span>
                </div>
                <NavLink to ={"/article/" + props.id} className={stylesTag.nav}>
                    <span className={stylesTag.link}>читать</span>
                </NavLink>
              </Tags>
            } 
          </div>  
      </Card>
    </div>
  )
}

