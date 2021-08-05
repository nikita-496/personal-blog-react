import React from "react";
import Button from "../../common/Button/Button";
import Modal from "../../common/Modal/Modal";
import Preloader from "../../common/Preoloader/Preloader";
import useContentBody from "../../hooks/useContentBody";
import styles from "../../scss-blocks/SandBox/SandBox.module.scss";
import ArticleBody from "./ArticleBody/ArticleBody";
import SelectTag from "./SelectTag/SelectTag";

export const DataContext = React.createContext() 

const SandBox = props => {
  const editMode = useContentBody(false)
  const modal = useContentBody(false)

  const onPublickCLick = () => {   
    props.createArticleThunk()
    editMode.handleStatusChange()
    modal.handleStatusChange()
  }
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
        <SelectTag updateArticleCategory={props.updateArticleCategory} onPublickCLick={onPublickCLick}/>
       </Modal>
      
      </>
      }
  </div>
  </>
  )
}

export default SandBox