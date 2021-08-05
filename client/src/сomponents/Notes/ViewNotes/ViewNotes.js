import React from "react"
import Card from "../../../common/Card/Card"
import Subtitle from "../../../common/Description/SubTitle"
import styles from "../../../scss-blocks/Notes/ViewNotes.module.scss"


export default function ViewNotes () {
  return(
    <div className={styles.wrapper}>
      <Card>
        <div className={styles.content}>
          <Subtitle className={styles.text} notes="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat."/>
          <span></span>
        </div>
      </Card>
    </div>
  )
}
