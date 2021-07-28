import React from "react"
import styles from "../../../scss-blocks/SandBox/SandBox.module.scss";
import TextOptions from "./Options/TextOptions";
import FormatOptions from "./Options/FormatOptions";
import ContentBody from "./ContentBody";
import TitleBody from "./TittleBody";

const ArticleBody = ({newTitle, newText, options, selectOption, updateArticleText, updateArticleTitle}) => {
  return (
    <>
      <TitleBody newTitle={newTitle} updateArticleTitle={updateArticleTitle}/>
      <div className={styles.content}>
        <TextOptions selectOption={selectOption} options={options}/>
        <ContentBody newText={newText} updateArticleText={updateArticleText}/>
        <FormatOptions />
      </div>
    </>
  )
}

export default ArticleBody
