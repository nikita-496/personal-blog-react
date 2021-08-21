import React, { useEffect, useRef } from "react" 
import useControlled from "../../hooks/useControlled"
import Button from "../Button/Button"

const CustomTextArea = ({stylingTitle, stylingСontent, formControl, ...props}) => {
  const textAreaRef  = useRef(null)
  const [text, handle] = useControlled(props.value, props.callback)
  //textarea autosize - dynamic height textarea
    useEffect(()=> {
      textAreaRef.current.style.height = "0px"
      const scrollHeight = textAreaRef.current.scrollHeight
      textAreaRef.current.style.height = scrollHeight + "px"
    }, [text])
  return (
    <div>
      <textarea
        ref={textAreaRef}
        className={(stylingTitle) ? stylingTitle : (stylingСontent) ? stylingСontent
        : formControl}
        placeholder={props.placeholder ? props.placeholder : null}
        value={text}
        onChange={handle} />
      { (formControl) ? <>{props.children}
      <Button createComment={props.createComment} text={text} id={props.id}>Отправить комментарий</Button>
      </> : <></>}
    </div>
  )
}

export default CustomTextArea


