import React, {useEffect, useRef } from "react" 
import useControlled from "../../hooks/useControlled"
import Button from "../Button/Button"
import styles from "../scss-blocks/Field.module.scss"


const CustomTextArea = (props) => {
  const textAreaRef  = useRef(null)
  const [text, handle] = useControlled(props.value, props.callback)
  //textarea autosize - dynamic height textarea
    useEffect(()=> {
      textAreaRef.current.style.height = "0px"
      const scrollHeight = textAreaRef.current.scrollHeight
      textAreaRef.current.style.height = scrollHeight + "px"
    }, [text])

  return (
    <>
      <div className={styles.formGroup}>
        <textarea ref={textAreaRef} className={props.className}
        placeholder={props.placeholder} value={text}
        onChange={handle} />
        {props.isFormControll}
      </div>
      {props.isToSend ? 
        <Button createComment={props.create} text={text} 
         change={props.changeState} id={props.id} flag={props.flag}>
            {props.isToSend}
          </Button> : <></>
      }
  </>
  )
}

export default CustomTextArea


