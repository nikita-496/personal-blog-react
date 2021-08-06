import React from "react";
import Card from "../../../common/Card/Card";
import SubTitle from "../../../common/Description/SubTitle";
import styles from "../../../scss-blocks/Notes/Note.module.scss"

const Note = (props) => {
  return (
    <Card>
      <div className={styles.wrapper}>
        <div className={styles.content}>  
          <SubTitle className={styles.text} notes={props.text}/>
          <span></span>
        </div>
      </div>
      </Card>
  )
}

export default Note