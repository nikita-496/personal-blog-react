import React from "react";
import Button from "../../common/Button/Button";
import Modal from "../../common/Modal/Modal";
import Preloader from "../../common/Preoloader/Preloader";
import SelectTag from "../../common/SelectTag/SelectTag";
import useContentBody from "../../hooks/useContentBody";
import styles from "../../scss-blocks/SandBox/SandBox.module.scss";
import ArticleBody from "./ArticleBody/ArticleBody";


export const DataContext  = React.createContext() 

const SandBox = props => {
  const editMode = useContentBody(false)
  const modal = useContentBody(false)

  return (
    <>
    {props.isFetching ? <Preloader/> : null}
    <div className={styles.wrapper}>
    {!editMode.status ?
       <div className={styles.addPost} >
        <textarea placeholder="Начать писать публикацию" onClick={editMode.handleStatusChange}/>
      </div>
      : <>
      <DataContext.Provider value={
        {newTitle: props.newTitle, newText: props.newText, 
          updateArticleTitle: props.updateArticleTitle, updateArticleText: props.updateArticleText}
        }>
        <ArticleBody />
      </DataContext.Provider>

      <Button onClick={modal.handleStatusChange}>
       готово к публикации
      </Button>
      
      <Modal editMode={editMode} modal={modal}>
        <SelectTag data={
          {create: props.createArticleThunk,
            editMode: editMode.handleStatusChange, modal: modal.handleStatusChange,
            category: props.updateArticleCategory}
        }/>
      </Modal>
      </>
    }
    </div>
  </>
  )
}

export default SandBox