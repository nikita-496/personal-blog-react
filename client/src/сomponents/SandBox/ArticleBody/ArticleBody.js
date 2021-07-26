import React from "react"
import styles from "../../../scss-blocks/SandBox/SandBox.module.scss";
import TextOptions from "./TextOptions"
import FormatOptions from "./FormatOptions"
import InputArea from "../../../common/InputArea/InputArea";


//ОСТАНОВИЛСЯ СДЕСЬ
const ArticleBody = ({newTitle, newText, options, selectOption, updateArticleTitle, updateArticleText}) => {
  const handle = (callback, e) => {
    callback(e.target.value)
  }
  return (
    <div className={styles.addPost}>
    <textarea className={styles.editeTitleTextare} value={newTitle} onChange={(e) => handle(updateArticleTitle, e)} placeholder="Заголовок" />
    {atr => (
        <>
          <InputArea atr={atr}/>
        </>
      )
    }
    <div className={styles.content}>
      <TextOptions selectOption={selectOption} options={options}/>
      <textarea className={styles.editeContentTextare}  value={newText} onChange={(e) => handle(updateArticleText, e)}/>
      <FormatOptions />
    </div>

  </div>
  )
}


/*
    <InputArea>
      {atribute => 
      <textarea className={styles.editeTitleTextare} atribute={atribute}/>}
    </InputArea>
*/

export default ArticleBody