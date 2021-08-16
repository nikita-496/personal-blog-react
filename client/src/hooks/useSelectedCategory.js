import { useState } from "react"

const useSelectedCategoty = (defaultCategory) => {
  const [category, setCategory] = useState(defaultCategory)  

  const handleCategory = (e) => {
    return setCategory(e.target.value)
  }

  return [category, handleCategory]
}

export default useSelectedCategoty