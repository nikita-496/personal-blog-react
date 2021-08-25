import { useEffect, useRef } from "react"
import useControlled from "../../hooks/useControlled"

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
       <textarea ref={textAreaRef} className={props.className}
        placeholder={props.placeholder} type={props.type}
        value={text} onChange={handle} /> 
    </>
  )
}

export default CustomTextArea