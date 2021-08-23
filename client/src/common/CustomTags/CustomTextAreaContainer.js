import React from "react" 
import CustomTextArea from "./CustomTextArea"
import styles from "../scss-blocks/Field.module.scss"

const CustomTextAreaContainer = ({stylingTitle, stylingСontent, formControl, ...props}) => {
  const className = (stylingTitle) ? stylingTitle : (stylingСontent) ? stylingСontent : formControl
  const placeholder = (props.placeholder) ? props.placeholder : null
  const isToSend = (props.flag === "comment") ? "Отправить комментарий" 
  : (props.flag === "profile") ? "Сохранить" : null
  const isFormControll =  (formControl) ? <> 
   <span className={styles.formLine}></span>
  </> : <> </>   
  return (
    <div>
      <CustomTextArea value={props.value} callback={props.callback} className={className} placeholder={placeholder} 
      isToSend={isToSend} isFormControll={isFormControll} create={props.create} changeState={props.changeState} 
       id={props.id} flag={props.flag}/>
    </div>
  )
}

export default CustomTextAreaContainer