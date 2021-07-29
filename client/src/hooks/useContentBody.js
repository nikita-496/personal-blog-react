import { useState } from "react"

const useContentBody = initialStatus => {
  const [status, switchStatus] = useState(initialStatus)

  const handleStatusChange = () => {
    switchStatus(!status)
  }
  return {
    status, handleStatusChange
  }

}

export default useContentBody