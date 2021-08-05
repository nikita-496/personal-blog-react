import React from "react"
import styles from "../scss-blocks/Modal/Modal.module.scss"

const Modal = (props) => {
  return (
    <div className={props.modal.status ? styles.modalActive : styles.modal} onClick={props.modal.handleStatusChange}>
      <div className={props.modal.status ? styles.modalContentActive : styles.modalContent} onClick={e => e.stopPropagation()}>
        {props.children}
      </div>
    </div>
  )
  
}
export default Modal