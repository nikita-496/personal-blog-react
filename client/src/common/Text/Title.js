import React from "react"
import titlestyles from "../scss-blocks/Text.module.scss"

 const Title = props => <h2 className={props.title ? titlestyles.heading : titlestyles.titleArticle}>{props.children}</h2> 

export default Title