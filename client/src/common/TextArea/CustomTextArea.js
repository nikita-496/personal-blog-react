import React from "react" 
import useControlled from "../../hooks/useControlled"

const CustomTextArea = props => {
  const [text, handle] = useControlled(props.value, props.callback)
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

