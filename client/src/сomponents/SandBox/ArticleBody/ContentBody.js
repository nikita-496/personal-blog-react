import React, { useContext } from "react"
import withTextUpdate from "../../../hoc/withTextUpdate"
import styles from "../../../scss-blocks/SandBox/SandBox.module.scss"
import { DataContext } from "../SandBox"

const ContentBody = (props) => {
  const data = useContext(DataContext)
  return (
    <>
    <textarea 
      className={styles.editeTitleTextare} 
      value={data.newText} 
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