import { useState } from "react"

const useSelectedCategoty = (defaultCategory) => {
  const [category, setCategory] = useState(defaultCategory)  

  const handleCategory = (e) =>  setCategory(e.target.innerText)

  return [category, handleCategory]
}

export default useSelectedCategoty