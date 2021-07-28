import React from "react"
import withTextUpdate from "../../../hoc/withTextUpdate"
import styles from "../../../scss-blocks/SandBox/SandBox.module.scss"

const TitleBody = (props) => {
  return (
    <>
    <textarea 
      className={styles.editeTitleTextare} 
      value={props.newTitle} 
      onChange={props.handleChange}
      placeholder="Загаловок"
      />
    </>
  )
}

 const TitleBodyWithTextUpdate = withTextUpdate(
   TitleBody,
   (props) => props.updateArticleTitle
  )
 export default TitleBodyWithTextUpdate