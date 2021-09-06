import React, {useEffect, useState} from "react"
import Text from "../../Text/Text"
import styles from "../../scss-blocks/SideBar/AboutMe.module.scss"
import Button from "../../Button/Button"
import FiledwitHover from "../../Field/FieldWithHover"


export default function AboutMe () {
  const [editMode, setEditMode] = useState(false)
  const [statusText, setStatusText] = useState("")

  useEffect(()=> {
    const data = window.localStorage.getItem("statusText")
    setStatusText(JSON.parse(data)) 
  }, [])

  const handleStatusText = (text) => {
    window.localStorage.setItem("statusText", JSON.stringify(text))
  }

  const onButton = () => setEditMode(!editMode)

  return (
    <div className={styles.wrapper}>
      <span className={styles.editIcon} onClick={() => setEditMode(!editMode)}/>
    {editMode ? <>
      <form className={styles.form}>
      <FiledwitHover value={statusText} callback={handleStatusText} 
      type="text" placeholder="Расскажите о себе ..."/>
      </form>
      <Button callback={onButton}>сохранить</Button>
      </>
      : <>
      <span className={styles.topLine}/>
      <Text text={statusText}/>
      <span className={styles.bottomLine}></span>
      </>
    }
  
 </div>
  )
}

