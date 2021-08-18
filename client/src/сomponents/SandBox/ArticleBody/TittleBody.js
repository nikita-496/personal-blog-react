import React  from "react"
import CustomTextArea from "../../../common/CustomTags/CustomTextArea"

const TitleBody = ({title, update, stylingTitle}) => {
  return (
    <div>
      <CustomTextArea placeholder={"Заголовок"} stylingTitle={stylingTitle}
      value={title} callback={update}/>
    </div>
  )
}
export default TitleBody
