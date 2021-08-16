import React from "react"
import CustomTextArea from "../../../common/TextArea/CustomTextArea"
import styles from "../../../scss-blocks/SandBox/SandBox.module.scss"

const ContentBody = ({text, update}) => {
  return (
    <div>
    <CustomTextArea styles={"w"}
    value={text} callback={update} />
  </div>
  )
}

 export default ContentBody