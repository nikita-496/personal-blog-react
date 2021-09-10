import React  from "react"
import tagStyles from "../../scss-blocks/Card/Tags.module.scss"


export default function Tags (props) {
  return (
    <>
        {
            (props.header) ? <div className={tagStyles.tagsHeader}> {props.children} </div> 
          : (props.link || props.articleData) ? <div className={tagStyles.tagsFooter}> {props.children} </div>
          : <div className={tagStyles.works}> {props.children} </div>
        } 
   </>
  )
}