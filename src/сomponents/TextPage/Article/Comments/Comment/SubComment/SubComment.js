import React from "react"
import Button from "../../../../../../common/Button/Button"
import Logo from "../../../../../../common/Logo/Logo"
import src from "../../../../../../img/text-page/AvatarReply.png"
import styles from "../../../../../../scss-blocks/TextPage/Comments/Comments.module.scss"

export default function SubComment () {
  return (
    <ul className={styles.comments}>
        <li>
          <div className={styles.header}>
            <Logo src={src}/>
            <div className={styles.author}>
              <div className={styles.name}>Василий Иванов</div>
              <time className={styles.date} dateTime="2021-12-21 19:21">1 неделя назад</time>
              </div>
          </div>

          <div className={styles.text}>Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.
          </div>
          
          <Button text="Ответить"/>
        </li>
      </ul>
  )
}