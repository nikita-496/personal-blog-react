import React, {useEffect, useState} from "react"
import Text from "../../Text/Text"
import aboutStyles from "../../scss-blocks/SideBar/AboutMe.module.scss"
import Button from "../../Button/Button"
import FieldwitHover from "../../Field/FieldWithHover"
import { FiEdit } from"react-icons/fi"
import { FaRegWindowClose } from "react-icons/fa"

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
    <div className={aboutStyles.wrapper}>
     {editMode ? <>
        <form className={aboutStyles.form}>
        <FaRegWindowClose className={aboutStyles.editIcon}  onClick={() => setEditMode(!editMode)}/>
        <FieldwitHover value={statusText} callback={handleStatusText} 
        type="text" placeholder="Расскажите о себе"/>
        </form>
        <Button callback={onButton}>сохранить</Button>
      </>
      : <>
        <span className={aboutStyles.topLine}/>
        <FiEdit className={aboutStyles.editIcon} onClick={() => setEditMode(!editMode)}/>
        <Text text={statusText}/>
        <span className={aboutStyles.bottomLine}></span>
      </>
    }
  
 </div>
  )
}

