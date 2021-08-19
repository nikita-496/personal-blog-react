import styles from "../../../scss-blocks/SandBox/SandBox.module.scss";
import TextOptions from "./Options/TextOptions";
import FormatOptions from "./Options/FormatOptions";
import ContentBody from "./ContentBody";
import TitleBody from "./TittleBody";
import { useContext } from "react";
import { DataContext } from "../SandBox";
import CustomTextArea from "../../../common/CustomTags/CustomTextArea";

const ArticleBody = () => {
  const data = useContext(DataContext)
  return (
    <>
      <TitleBody stylingTitle={styles.editeTitleTextarea} title={data.newTitle} update={data.updateTitle}/>
      <CustomTextArea placeholder={"Описание"} value={data.newDescription} callback={data.updateDescription}/>
      <div className={styles.content}>
        <TextOptions/>
        <ContentBody stylingСontent={styles.editeContentTextarea} text={data.newText} update={data.updateText}/>
        <FormatOptions />
      </div>
    </>
  )
}

export default ArticleBody
