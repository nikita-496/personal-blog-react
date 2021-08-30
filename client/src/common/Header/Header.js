import React from "react"
import styles from "../scss-blocks/Header/Header.module.scss"
import NavBar from "./NavBar/NavBar"
import SearchContainer from "./Search/SearchContainer"


export default function Header () {
  return (
    <div className={styles.header}>
     <NavBar />
     <SearchContainer />
    </div>
  )
}

