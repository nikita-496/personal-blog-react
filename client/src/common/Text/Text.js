import React from "react"
import styles from "../scss-blocks/Text.module.scss"

const Text = props => <p className={styles.text}>{props.text}</p>
   
export default Text