import React from "react"
import styles from "../scss-blocks/Button.module.scss"

const Button = props => {
  const onCreate = (id, cb, comment) => {
    props.createComment(id)
    cb(comment)
  }
  
  const selectCategories = categories => categories.map(category => <button key={category} 
      className={category !== "all" ? styles[category] : styles[defineClassStyle()]} 
      text={category} onClick={props.callback}> {defineComponentRendering(category)}
      </button>)
  
  const defineComponentRendering = (category) => category === "other" ? "другое" : category === "all" ? "все" : category
  const defineClassStyle = () =>  props.filter ? "all" : "allNotVisible"    
 
  return (
    <div className={styles.btnWrapper}>
      {
        props.name ? selectCategories(props.name) 
        : (props.id) ? <button className={styles.request} 
        onClick={() => onCreate(props.id, props.changeState, props.value)}>{props.children}</button>
        : <button className={props.create ? styles.modal : styles.request} onClick={props.callback}>{props.children}</button>
      }
    </div>
  )
}

export default Button