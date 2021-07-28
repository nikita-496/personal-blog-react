import React from "react"
import withTextUpdate from "../../../hoc/withTextUpdate"
import styles from "../../../scss-blocks/SandBox/SandBox.module.scss"

const ContentBody = (props) => {
  return (
    <>
    <textarea 
      className={styles.editeTitleTextare} 
      value={props.newText} 
      onChange={props.handleChange}
      />
    </>
  )
}

const ContentBodyWithTextUpdate = withTextUpdate(
  ContentBody,
  (props) => props.updateArticleText
  )
 export default ContentBodyWithTextUpdate