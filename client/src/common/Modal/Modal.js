import React from "react"
import styles from "../scss-blocks/Modal/Modal.module.scss"

const Modal = (props) => {
  return(
    <div className={props.modal.status ? styles.active : styles.modal} onClick={props.modal.handleStatusChange}>
       {props.children}
      </div>
  )
  
}
export default Modal