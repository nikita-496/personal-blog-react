import React, { useEffect, useRef } from "react" 
import useControlled from "../../hooks/useControlled"

const CustomTextArea = ({stylingTitle, stylingСontent, ...props}) => {
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
        className={(stylingTitle) ? stylingTitle : stylingСontent}
        placeholder={props.placeholder ? props.placeholder : null}
        value={text}
        onChange={handle} />
    </div>
  )
}

export default CustomTextArea


