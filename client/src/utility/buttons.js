import React from "react"

const getButtons = (fuc, items =["css", "javasript", "react", "другое", "все"]) => {
  /*let itemsElement =  items.map(i => {
    return (
    <button value={i} onClick={fuc}>{i}</button>
    )
  })*/
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