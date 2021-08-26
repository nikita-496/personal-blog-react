import React from "react"
import styles from "../scss-blocks/SideBar/Description.module.scss"

 const Title = props => <h3 className={props.title ? styles.heading : styles.headingArticle}>{props.children} </h3> 

export default Title