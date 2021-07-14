import React from "react"
import Card from "../../../../common/Card/Card"
import Tags from "../../../../common/Card/Tags/Tags"
import SubTitle from "../../../../common/Description/SubTitle"
import Title from "../../../../common/Description/Title"
import Logo from "../../../../common/Logo/Logo"
import styles from "../../../../scss-blocks/TextPage/TextPage.module.scss"
import Comments from "./Comments/Comments"
import Reference from "./Reference/Reference"


export default function Article (props) {
  return(
    <Card>
       <div className={styles.content}>
         <Tags headerTags={true}/>
         <Title titleArticle={props.titleArticle}/>
         <Tags date={props.date} tagsName={props.tagsName}/>
         <SubTitle text={props.text}/>
         <Logo src={props.src} />
       </div>
       <Reference />
      <Comments />
    </Card>
    
  )
}