import React from "react"
import Button from "../../../common/Button/Button"
import Card from "../../../common/Card/Card"
import Category from "../Category"
import styles from "../../../scss-blocks/SandBox/SandBox.module.scss";

const SelectTag = ({updateArticleCategory, onPublickCLick}) => {
  const handleCategory = (callback, e) => {
    callback(e.target.innerText)
  }
  const send = () => {
    onPublickCLick()
  }
  return (
    <Card active={true}>
        <p>Перед отправкой выберите категории статьи</p>

        <div className={styles.flexBtn}>
        <Category>
          {name => <Button category={name} onClick={(e) => handleCategory(updateArticleCategory, e)}/>}
        </Category>                       
        </div>

      <Button onClick={send} >
        отправить
      </Button>
    </Card>
  )
    
}

export default SelectTag