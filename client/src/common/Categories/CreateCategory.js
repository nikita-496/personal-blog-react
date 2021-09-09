import React from "react"
import Button from "../Button/Button"
import Card from "../Card/Card"
import styles from "../../scss-blocks/SandBox/SandBox.module.scss"
import SelectCategory from "./SelectCategory"

const CreateCategory = ({data}) => {
  const category = data.category
  const create = data.create
  const changeMode = [data.editMode,data.modalWindow]

  const postCategory = (create,initial) => {
    create()
    for (let element of initial) {
        if (element !== undefined) {
          element()
        }
    }
  }
  const handleCategory = (e) => {
    category(e.target.innerText)
  }
  return (
    <Card active={true}>
      <p>Перед публикацией выберите категории</p>

      <div className={styles.flexBtn}>
      <SelectCategory callback={handleCategory}/>                 
      </div>
      <Button callback={() => postCategory(create,changeMode)}>
        опубликовать
      </Button>
    </Card>
  )
}
export default CreateCategory