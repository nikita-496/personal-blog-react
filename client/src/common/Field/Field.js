import React from "react"
import CustomTextAreaContainer from "../CustomTags/CustomTextAreaContainer"
import styles from "../scss-blocks/Field.module.scss"

export default function Filed (props) {
  return ( 
    <div className={styles.form}>
        <CustomTextAreaContainer value={props.value} callback={props.callback} 
        formControl={styles.formControl} placeholder={props.placeholder}
          create={props.create} changeState={props.changeState} 
          flag={props.flag} id={props.id}/>
    </div>
  )
}