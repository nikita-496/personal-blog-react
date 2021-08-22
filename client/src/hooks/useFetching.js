import { useState } from "react"

const 
useFetching = callback => { //аргумент функции callback - некий запрос перед/после которого отображается preloader
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("") //обработка ошибок при запросе

  const fetching = async (...args) => {
    try {
      setIsLoading(true)
      await callback(...args)
    }catch(e) {
      setError(e.message)
    }finally {
      setIsLoading(false)
    }
  }
  return [fetching, isLoading, error]
}

export default useFetching 