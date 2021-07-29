import styles from "../../../scss-blocks/SandBox/SandBox.module.scss";
import TextOptions from "./Options/TextOptions";
import FormatOptions from "./Options/FormatOptions";
import ContentBody from "./ContentBody";
import TitleBody from "./TittleBody";
import { useContext } from "react";
import { DataContext } from "../SandBox";

const ArticleBody = () => {
  const data = useContext(DataContext)
  return (
    <>
      <TitleBody updateArticleTitle={data.updateArticleTitle}/>
      <div className={styles.content}>
        <TextOptions />
        <ContentBody  updateArticleText={data.updateArticleText}/>
        <FormatOptions />
      </div>
    </>
  )
}

export default ArticleBody
