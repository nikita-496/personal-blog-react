import React from "react"
import iconStyles from "../../scss-blocks/SideBar/Social.module.scss"
import { FaTelegram, FaInstagram, FaGithub, FaLinkedin} from "react-icons/fa"

export default function Social () {
  return (
    <div className={iconStyles.socialWrapper}>
      <span className={iconStyles.socialIcon}>
        <FaTelegram  className={iconStyles.telegram}/>
      </span>
      <span className={iconStyles.socialIcon}>
        <FaInstagram className={iconStyles.instagram}/>
      </span>
      <span className={iconStyles.socialIcon}>
        <FaGithub className={iconStyles.github}/>
      </span>
      <span className={iconStyles.socialIcon}>
        <FaLinkedin className={iconStyles.linkedin}/>
      </span>
    </div>
  )
}