import React from "react"
import useControlled from "../../../hooks/useControlled"
import headerStyles from "../Header.module.scss"

export default function Search ({getArticles}) {
  const [searchQuery, setSearchQuery] = useControlled("",  getArticles)
  return (
    <form method="post">
     <input className={headerStyles.globalSearch} type="search" 
     placeholder="Поиск по блогу"
     value={searchQuery}
     onChange={setSearchQuery}/>
    </form>
  )
}
