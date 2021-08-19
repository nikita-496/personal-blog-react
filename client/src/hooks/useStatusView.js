import { useState } from "react"

const useStatusView = initialStatus => {
  const [status, switchStatus] = useState(initialStatus)
  const handleStatusChange = () => {
    switchStatus(!status)
  }
  return {
    status, handleStatusChange
  }

}

export default useStatusView