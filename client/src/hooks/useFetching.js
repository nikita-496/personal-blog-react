import { useState } from "react"

const useFetching = callback => { //аргумент функции callback - некий запрос перед/после которого отображается preloader
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("") //обработка ошибок при запросе

  const fetching = async () => {
    try {
      setIsLoading(true)
      await callback()
    }catch(e) {
      setError(e.message)
    }finally {
      setIsLoading(false)
    }
  }
  return [fetching, isLoading, error]
}

export default useFetching 