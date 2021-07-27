import React from "react"

export const InputArea = ({children, handle}) => {
  const handleArcticleTitle = (callback, e) => {
    callback(e.target.value)
  }
  
  return (
    <>
      {children(e => handleArcticleTitle(handle, e))}
    </>
  )
}


