import React from "react";
import Button from "../../common/Button/Button";
import { createArticleActionCreator, updateArticleBodyActionCreator } from "../../redux/sandbox-reducer";
import styles from "../../scss-blocks/SandBox/SandBox.module.scss";
function SandBox (props) {
  function handleArticleBody (e) {
    props.dispatch(updateArticleBodyActionCreator(e.target.value))
  }

  let onPublickCLick = () => {
    props.dispatch(createArticleActionCreator())
  }
  
  return (
      <div className={styles.wrapper}>
        <div className={styles.addPost} >
          <textarea placeholder="Начать писать публикацию" value={props.sandBox.newArticleBody} onChange={handleArticleBody}/>
        </div>
       <Button text="готово к публикации" onClick={onPublickCLick}/>
    </div>
  )
}

export default SandBox