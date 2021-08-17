import React from "react"
import Search from "../Header/Search/Search"
import styles from "../scss-blocks/FiltrationElements/Filtration.module.scss"

const FiltrationElements = ({handle, getArticles, items=["css", "javasript", "react", "другое", "все"]}) => {
  return (
  <div className={styles.flex}>
    {items.map(i => {
    return (
    <button key={i} value={i} onClick={handle}>{i}</button>
    )
  })}
    <Search flag={true} placeholder={"Поиск статей"} getArticles={getArticles}/>
  </div>
  )
}

export default FiltrationElements