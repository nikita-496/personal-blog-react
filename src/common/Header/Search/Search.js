import React from "react"
import styles from "../../scss-blocks/Header/Search.module.scss"

export default function Search () {
  return (
    <>
     <input className={styles.search}placeholder="Поиск по блогу"/>
    </>
  )
}