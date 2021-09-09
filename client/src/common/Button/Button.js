import React from "react"
import buttonStyles from "./Button.module.scss"

const Button = props => {
  const onCreate = (id, cb, comment) => {
    props.createComment(id)
    cb(comment)
  }
  
  const selectCategories = (categories) => categories.map(category => 
    <button key={category} className={buttonStyles[category]}
      text={category} onClick={props.callback}> {defineComponentRendering(category)}
      </button>)
  
  const defineComponentRendering = (category) => category === "other" ? "другое" : category

 
  return (
    <div className={buttonStyles.btnWrapper}>
      {
        (props.name) ? selectCategories(props.name) 
        : (props.id) ? <button className={buttonStyles.request} 
          onClick={() => onCreate(props.id, props.changeState, props.value)}>{props.children}</button>
        : <button className={props.create ? buttonStyles.modal : buttonStyles.request} onClick={props.callback}>{props.children}</button>
      }
    </div>
  )
}

export default Button