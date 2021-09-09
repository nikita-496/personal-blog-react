import React from "react"
import Button from "../Button/Button"

const SelectCategory = ({callback, ...props}) =>  {
  const categories = ["css", "javascript", "react", "other"]
  return (
  <Button name={categories} callback={callback} filter={props.filter}/>
  )
}                    


export default SelectCategory