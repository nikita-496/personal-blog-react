import React from "react"
import Button from "../Button/Button"
import Category from "./Category"

const SelectCategory = ({callback, ...props}) => <Category 
    render={gategoryName => (<Button name={gategoryName} callback={callback} filter={props.filter}/>
  )}>
  </Category>                       


export default SelectCategory