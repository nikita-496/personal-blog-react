import React from "react";
import Button from "../../common/Button/Button";
import Modal from "../../common/Modal/Modal";
import Preloader from "../../common/Preoloader/Preloader";
import SelectTag from "../../common/SelectTag/SelectTag";
import useContentBody from "../../hooks/useStatusView";
import styles from "../../scss-blocks/SandBox/SandBox.module.scss";
import ArticleBody from "./ArticleBody/ArticleBody";

const SandBox = props => {
  const editMode = useContentBody(false)
  const modalWindow = useContentBody(false)

  const toPublication = () => {
    let creationWindow =  <>
      <ArticleBody newTitle={props.newTitle} newText={props.newText} 
        newDescription={props.newDescription} updateTitle={props.updateTitle} 
        updateDescription={props.updateDescription} updateText={props.updateText} />
      <Button onClick={modalWindow.handleStatusChange}>
        готово к публикации
      </Button>

      <Modal editMode={editMode} modalWindow={modalWindow}>
      <SelectTag data={
        {
      create: props.createArticle,
      editMode: editMode.handleStatusChange, modalWindow: modalWindow.handleStatusChange,
      category: props.updateCategory
        }
      }/>
      </Modal>  
  </>
  return creationWindow
  }
  
  return (
    <>
    {props.isFetching ? <Preloader/> : null}
    <div className={styles.wrapper}>

    {!editMode.status ?
       <div className={styles.addPost} >
        <textarea placeholder="Начать писать публикацию" onClick={editMode.handleStatusChange}/>
      </div>

      : <>{toPublication()}</>
    }

    </div>
  </>
  )
}

export default SandBox