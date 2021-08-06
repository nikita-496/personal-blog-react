import React, { useContext } from "react"
import withTextUpdate from "../../../hoc/withTextUpdate"
import styles from "../../../scss-blocks/SandBox/SandBox.module.scss"
import { DataContext } from "../SandBox"

const ContentBody = (props) => {
  const DATA = useContext(DataContext)
  return (
    <>
    <textarea 
      className={styles.editeTitleTextare} 
      value={DATA.newText} 
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