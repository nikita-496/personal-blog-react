import React from "react"
import titlestyles from "../scss-blocks/Text.module.scss"

 const Title = props => <p className={props.title ? titlestyles.heading : titlestyles.titleArticle}><b>{props.children}</b> </p> 

export default Title