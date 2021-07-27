import React from "react"
import styles from "../../../scss-blocks/SandBox/SandBox.module.scss";
import {InputArea} from "../../../common/InputArea/InputArea"
import TextOptions from "../Options/TextOptions";
import FormatOptions from "../Options/FormatOptions";

const ArticleBody = ({newTitle, newText, options, selectOption, updateArticleTitle, updateArticleText}) => {
  return (
    <>
    <InputArea handle={updateArticleTitle}>
      {(onChange) => <textarea 
      className={styles.editeTitleTextare} 
      value={newTitle} 
      onChange={onChange}
      placeholder="Загаловок"
      />}
    </InputArea>

    <div className={styles.content}>
      <TextOptions selectOption={selectOption} options={options}/>
      <InputArea handle={updateArticleText}>
      {(onChange) => <textarea 
      className={styles.editeTitleTextare} 
      value={newText} 
      onChange={onChange}
      />}
    </InputArea>
    <FormatOptions />
    </div>
    </>
  )
}

export default ArticleBody