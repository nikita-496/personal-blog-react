import React from "react"

const getButtons = (fuc, items =["css", "javasript", "react", "другое", "все"]) => {
  return (
  <div>
    {items.map(i => {
    return (
    <button key={i} value={i} onClick={fuc}>{i}</button>
    )
  })}
  </div>
  )
}

export default getButtons