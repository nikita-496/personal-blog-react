import React from "react";
import Button from "../../common/Button/Button";
import styles from "../../scss-blocks/SandBox/SandBox.module.scss";

function SandBox (props) {
  const handleArticleBody = (e) => {
    props.onArticleBody(e.target.value)
  }

  const articlePublication = () => {
    props.onPublickCLick()
  }

  return (
      <div className={styles.wrapper}>
        <div className={styles.addPost} >
          <textarea placeholder="Начать писать публикацию" value={props.newArticleBody} onChange={handleArticleBody}/>
        </div>
       <Button text="готово к публикации" onClick={articlePublication}/>
    </div>
  )
}

export default SandBox