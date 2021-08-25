import styles from "../../../scss-blocks/SandBox/SandBox.module.scss";
import TextOptions from "./Options/TextOptions";
import FormatOptions from "./Options/FormatOptions";
import Area from "../../../common/CustomTags/CustomTextArea";

const ArticleBody = (props) => {
  return (
    <>
     <Area className={styles.editeTitleTextarea} placeholder={"Заголовок"}
     value={props.newTitle} callback={props.updateTitle} />

      <Area placeholder={"Описание"} 
      value={props.newDescription} callback={props.updateDescription} />

      <div className={styles.content}>
        <TextOptions/>
        <Area styles={styles.editeContentTextarea} 
        value={props.newText} callback={props.updateText} 
        placeholder={"Введите текст или выбирите опции"} />
        <FormatOptions />
      </div>
    </>
  )
}

export default ArticleBody
