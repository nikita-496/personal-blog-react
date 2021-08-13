import React from "react";
import Two from "./Two"

const One = () => {
  const name = "Nikita"
  let data = [1,2,3]
  return (
    <>
      <Two items={data} value={name}/>
    </>
  )
}

export default One

