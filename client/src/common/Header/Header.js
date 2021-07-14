import React from "react"
import styles from "../scss-blocks/Header/Header.module.scss"
import NavBar from "./NavBar/NavBar"
import Search from "./Search/Search"


export default function Header () {
  return (
    <div className={styles.header}>
     <NavBar />
     <Search />
    </div>
  )
}

