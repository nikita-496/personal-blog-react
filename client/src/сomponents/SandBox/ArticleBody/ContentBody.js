import React from "react"
import CustomTextArea from "../../../common/CustomTags/CustomTextArea"

const ContentBody = ({text, update, stylingСontent}) => {
  return (
    <div>
    <CustomTextArea placeholder={"Введите текст или выбирите опции"} 
    stylingСontent={stylingСontent} value={text} callback={update} />
  </div>
  )
}

 export default ContentBody