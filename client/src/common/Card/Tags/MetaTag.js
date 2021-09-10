import React  from "react"
import tagStyles from "../../scss-blocks/Card/Tags.module.scss"
import { IoMdTime } from "react-icons/io"

const MetaTag = (props) => {
  return (
    <div className={tagStyles.tags}>
      <div className={tagStyles.iconTimeWrap}>
        <IoMdTime className={tagStyles.iconTime}/>
      </div>
      <time className={tagStyles.date}>{props.date}</time>
      <span className={tagStyles.category}>{props.category}</span>
    </div>
  )
}

export default MetaTag