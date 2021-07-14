import React from "react";
import Button from "../../common/Button/Button";
import styles from "../../scss-blocks/SandBox/SandBox.module.scss";

function SandBox (props) {
  
  const onArticleBody = (e) => {
    props.handleArticleBody(e.target.value)
  }

  const onPublickCLick = () => {
    props.articlePublication()
  }

  return (
      <div className={styles.wrapper}>
        <div className={styles.addPost} >
          <textarea placeholder="Начать писать публикацию" value={props.newArticleBody} onChange={onArticleBody}/>
        </div>
       <Button text="готово к публикации" onClick={onPublickCLick}/>
    </div>
  )
}

export default SandBox