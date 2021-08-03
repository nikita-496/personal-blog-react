import React, { useContext } from "react"
import { NavLink } from "react-router-dom"
import Card from "../../../../common/Card/Card"
import Tags from "../../../../common/Card/Tags/Tags"
import Description from "../../../../common/Description/Description"
import Logo from "../../../../common/Logo/Logo"
import styles from "../../../../scss-blocks/Home/Post/Post.module.scss"
import tagStyle from "../../../../common/scss-blocks/Card/Tags.module.scss"
import { getContext } from "../Posts"

export default function Post (props) {
  const id = useContext(getContext)
  
  const get = (id) => {
    id.getArticleThunk()
    if(id.article[0].title === "") return id.getArticleThunk()
    let items = id.article
    let link = items.filter(item => props.titleArticle === item.title)
    return link[0]._id
  }
  
  return(
    <div className={styles.wrapper}>
      <Card>
          <div className={styles.content}>
            <Logo src={props.src}/>
            <Description text={props.text} titleArticle={props.titleArticle}/>
            {
            (props.titleArticle === "Ничего не найдено!") ? <></>
            :  <Tags>
            <div className={tagStyle.tagsWrapperPosts}>
              <div className={tagStyle.tags}>
                 <time className={tagStyle.date} dateTime="2021-07-01">{props.date}</time>
                  <span className={tagStyle.caregoty}>{props.tagsName}</span>
              </div>
              <NavLink to ={"/article/" + get(id)}>
                <span className={tagStyle.link} >{props.nameLink}</span>
              </NavLink>
            </div>
          </Tags>
          } 
          </div>  
      </Card>
    </div>
  )
}

