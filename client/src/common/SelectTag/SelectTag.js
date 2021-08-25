import React from "react"
import styles from "../../scss-blocks/SandBox/SandBox.module.scss"
import Button from "../Button/Button";
import Card from "../Card/Card";
import Category from "./Category";

const SelectTag = ({data}) => {
  const category = data.category
  const create = data.create
  const changeMode = [data.editMode,data.modal]

  const post = (create,initial) => {
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
        <Category>
          {name => <Button category={name} onClick={handleCategory}/>}
        </Category>                       
        </div>

      <Button onClick={() => post(create,changeMode)} >
        опубликовать
      </Button>
    </Card>
  )
    
}

export default SelectTag