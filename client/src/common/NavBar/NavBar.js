import React from "react"
import Link from "./Link/Link"
import navBarStyles from "./NavBar.module.scss"

const NavBar = (props) => {  

  let itemsData = props.data.map(({page, url, style}) =>{
   return <Link key={page} page={page} url={url}
      urlStyle={navBarStyles.navItem} 
      activeStyle={navBarStyles.active}
      iconStyle={navBarStyles[style] + " " + navBarStyles.icons}
      active={props.active} setActive={props.callback}>
    </Link>
  })

  return (
    <nav className={navBarStyles.menu}>
      <ul className={navBarStyles.siteNav}>
        {itemsData}
      </ul>
    </nav>
  )
}

export default NavBar
