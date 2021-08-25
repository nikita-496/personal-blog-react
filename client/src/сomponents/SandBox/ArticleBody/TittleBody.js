import React  from "react"
import Area from "../../../common/CustomTags/Area"

const TitleBody = ({title, update, stylingTitle}) => {
  return (
      <Area 
      placeholder={"Заголовок"} stylingTitle={stylingTitle}
      value={title} callback={update}
      />
  )
}
export default TitleBody
