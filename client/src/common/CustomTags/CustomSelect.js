import React from "react"
import styles from "../../scss-blocks/SandBox/TextOptions.module.scss"

const CustomSelect = ({options}) => {
  return (
    <div className={styles.contentOption}>
      {options.map(option => 
        <button className={styles.btnOption}>{option}</button>
        )}
    </div>
  )
}

export default CustomSelect