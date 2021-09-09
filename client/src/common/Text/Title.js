import React from "react"
import styles from "../scss-blocks/Text.module.scss"

 const Title = props => <h3 className={props.title ? styles.heading : styles.titleArticle}>{props.children} </h3> 

export default Title