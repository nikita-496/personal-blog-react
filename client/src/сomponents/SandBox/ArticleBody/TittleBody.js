import React, { useContext } from "react"
import withTextUpdate from "../../../hoc/withTextUpdate"
import styles from "../../../scss-blocks/SandBox/SandBox.module.scss"
import { DataContext } from "../SandBox"

const TitleBody = (props) => {
  const data = useContext(DataContext)
  return (
    <>
    <textarea 
      className={styles.editeTitleTextare} 
      value={data.newTitle} 
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