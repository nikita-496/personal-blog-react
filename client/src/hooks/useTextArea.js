import { useState } from "react"

const useTextArea = (state, callback) => {
  const [text, setText] = useState(state)

  const handleText = (e) => {
    callback(e.target.value)
    setText(e.target.value)
  }
  return [text, handleText] 
}

export default useTextArea