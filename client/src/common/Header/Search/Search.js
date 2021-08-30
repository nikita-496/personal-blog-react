import React from "react"
import useControlled from "../../../hooks/useControlled"
import styles from "../../scss-blocks/Header/Search.module.scss"

export default function Search ({getArticles}) {
  const [searchQuery, setSearchQuery] = useControlled("",  getArticles)
  return (
    <>
     <input className={styles.globalSearch} 
     placeholder="Поиск по блогу"
     value={searchQuery}
     onChange={setSearchQuery}/>
    </>
  )
}
