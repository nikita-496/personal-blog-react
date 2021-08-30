import React from "react"
import Button from "../Button/Button"
import Category from "./Category"

const SelectCategory = ({callback}) => <Category 
    render={name => (<Button name={name} onClick={callback}/>
  )}>
  </Category>                       

export default SelectCategory