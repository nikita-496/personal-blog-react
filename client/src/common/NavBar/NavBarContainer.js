import React, { useState } from "react"
import NavBar from "./NavBar"
import { localData} from "./NavBarLocalData"

const NavBarContainer = () => {
  const [activeElement, setActiveElement] = useState("Главная")
  return (
    <NavBar data={localData} callback={setActiveElement} active={activeElement}>
    </NavBar>
  )
}

export default NavBarContainer