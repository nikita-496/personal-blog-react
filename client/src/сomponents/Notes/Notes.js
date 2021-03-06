import React from "react"
import Button from "../../common/Button/Button"
import Modal from "../../common/Modal/Modal"
import CreateCategory from "../../common/Categories/CreateCategory"
import useStatusView from "../../hooks/useStatusView"
import styles from "../../scss-blocks/Notes/Notes.module.scss"
import ViewNotes from "../Notes/ViewNotes/ViewNotes"
import EnteringNotes from "./EnteringNotes/EnteringNotes"

const  Notes = (props) => {
  const modalWindow = useStatusView(false)
  return(
    <div className={styles.wrapper}>

      <ViewNotes get={props.getNotesThunk}/>

      <div className={styles.btn} >
      <Button create={true} callback={modalWindow.handleStatusChange}>
        <svg display="none">
          <symbol id={"createNotes"} viewBox="0 0 512 512">
          <path d="m408.101562 103.898438c-13.226562-13.222657-30.808593-20.507813-49.511718-20.507813s-36.285156 7.285156-49.511719 20.507813l-191.0625 191.066406c-1.828125 1.828125-3.152344 4.09375-3.84375 6.585937l-30.015625 107.816407c-1.453125 5.226562.027344 10.832031 3.875 14.65625 2.851562 2.835937 6.667969 4.367187 10.578125 4.367187 1.367187 0 2.746094-.1875 4.097656-.570313l107.820313-30.625c5.109375-1.453124 9.074218-5.503906 10.414062-10.644531 1.339844-5.144531-.140625-10.613281-3.890625-14.375l-66.808593-67.011719 156.042968-156.046874 56.5625 56.566406-120.074218 119.742187c-5.863282 5.851563-5.878907 15.347657-.027344 21.214844 5.851562 5.867187 15.347656 5.878906 21.214844.027344l144.140624-143.746094c13.226563-13.226563 20.507813-30.808594 20.507813-49.511719s-7.285156-36.285156-20.507813-49.511718zm-230.296874 271.402343-57.574219 16.355469 16.125-57.933594zm209.097656-193.609375-2.8125 2.804688-56.59375-56.589844 2.796875-2.792969c7.558593-7.558593 17.605469-11.722656 28.296875-11.722656s20.738281 4.164063 28.296875 11.722656c7.558593 7.558594 11.722656 17.605469 11.722656 28.296875 0 10.6875-4.164063 20.738282-11.707031 28.28125zm0 0" fill="#222"/>
          </symbol>
         </svg> 
        <svg className={styles.icon}>
          <use xlinkHref="#createNotes"></use>
        </svg>
      </Button>
      </div>

      <Modal modalWindow={modalWindow}>
        <EnteringNotes notesText={props.notesText} updateNotesText={props.updateNotesText}/> 
        <CreateCategory data={
              {
                create: props.createNotesThunk, category: props.setCategory, 
              modalWindow: modalWindow.handleStatusChange
            }
        }/>
      </Modal>  
    </div>
  )
}
export default  Notes
