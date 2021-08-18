import React from "react"
import CustomTextArea from "../../../common/CustomTags/CustomTextArea"

const ContentBody = ({text, update, stylingСontent}) => {
  debugger
  return (
    <div>
    <CustomTextArea placeholder={"Введите текст"} stylingСontent={stylingСontent} value={text} callback={update} />
  </div>
  )
}

 export default ContentBody