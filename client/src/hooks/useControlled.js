import { useState } from "react"

const useControlled = (state, callback) => {
  console.log(callback)
  const [text, setText] = useState(state)

  const handleText = (e) => {
    if (callback !== undefined) {
      callback(e.target.value)
    }
    setText(e.target.value)

  }
  return [text, handleText] 
}

export default useControlled