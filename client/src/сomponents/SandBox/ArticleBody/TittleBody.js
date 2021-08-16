import React, { useContext } from "react"
import CustomTextArea from "../../../common/TextArea/CustomTextArea"
import styles from "../../../scss-blocks/SandBox/SandBox.module.scss"

const TitleBody = ({title, update}) => {
  return (
    <div>
      <CustomTextArea placeholder={"Заголовок"} styles={"1"}
      value={title} callback={update} />
    </div>
  )
}
export default TitleBody
