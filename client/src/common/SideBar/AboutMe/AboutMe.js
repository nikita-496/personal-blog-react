import React, {useEffect, useState} from "react"
import Text from "../../Text/Text"
import styles from "../../scss-blocks/SideBar/AboutMe.module.scss"
import useControlled from "../../../hooks/useControlled"


export default function AboutMe () {
  const [editMode, setEditMode] = useState(false)
  const [textStatus, setTextSatus] = useState("")
  const [text, handleText] = useControlled("")
  

  useEffect(()=> {
    const data = window.localStorage.getItem("statusText")
    setTextSatus(JSON.parse(data)) 
  }, [])

  const handleStatusText = () => {
    window.localStorage.setItem("statusText", JSON.stringify(text))
    setEditMode(!editMode)
  }

  return (
    <div className={styles.wrapper}>
      <span className={styles.topLine}></span>
      <span className={styles.editIcon} onClick={() => setEditMode(!editMode)}></span>
    {editMode ? <form className={styles.form}>
      <input className={styles.fieldStatus} type="text" value={text} onChange={handleText}/>
      <button type="button" onClick={handleStatusText} >сохранить</button>
      </form>
      :
      <Text text={textStatus}>
      </Text>
    }
     <span className={styles.bottomLine}></span>
 </div>
  )
}

