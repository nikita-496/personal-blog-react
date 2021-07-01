import React from "react"
import inst from "../../../img/side-bar/instagram.svg"
import pint from "../../../img/side-bar/pinterest.svg"
import vk from "../../../img/side-bar/vk.svg"
import styles from "../../scss-blocks/SideBar/Social.module.scss"

export default function Social () {
  return (
    <div className={styles.socialWrapper}>

      <div className={styles.socialLink}>
      <a href="/">
       <img src={inst} alt={inst}/>
    </a>
      </div>
     
      <div className={styles.socialLink}>
      <a href="/">
       <img src={vk} alt={vk}/>
    </a>
      </div>
      
    <a className={styles.socialLink} href="/">
       <img src={pint} alt={pint}/>
    </a>
     
    </div>
  )
}