import React from "react" 
import useTextArea from "../../hooks/useTextArea"

const CustomTextArea = props => {

  const [text, handle] = useTextArea(props.value, props.callback)

  return (
    <div>
      <textarea
        className={props.styles}
        placeholder={props.placeholder ? props.placeholder : null}
        value={text}
        onChange={handle}
      />
    </div>
  )
}

export default CustomTextArea

