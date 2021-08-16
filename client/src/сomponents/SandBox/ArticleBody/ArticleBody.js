import styles from "../../../scss-blocks/SandBox/SandBox.module.scss";
import TextOptions from "./Options/TextOptions";
import FormatOptions from "./Options/FormatOptions";
import ContentBody from "./ContentBody";
import TitleBody from "./TittleBody";
import { useContext } from "react";
import { DataContext } from "../SandBox";



const ArticleBody = () => {
  const DATA = useContext(DataContext)
  return (
    <>
      <TitleBody title={DATA.newTitle} update={DATA.updateArticleTitle}/>
      <div className={styles.content}>
        <TextOptions />
        <ContentBody text={DATA.newText} update={DATA.updateArticleText}/>
        <FormatOptions />
      </div>
    </>
  )
}

export default ArticleBody
