import React from "react"
import useControlled from "../../../hooks/useControlled"
import styles from "../../scss-blocks/Header/Search.module.scss"

export default function Search ({flag, placeholder, getArticles}) {
  const [searchQuery, setSearchQuery] = useControlled("",  getArticles)
  return (
    <>
     <input className={ flag ? styles.postsSearch :  styles.globalSearch} 
     placeholder={placeholder ? placeholder : "Поиск по блогу"}
     value={searchQuery}
     onChange={setSearchQuery}/>
    </>
  )
}
