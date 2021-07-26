import React from "react"
import Button from "../../../common/Button/Button"
import Card from "../../../common/Card/Card"
import Category from "../Category"
import styles from "../../../scss-blocks/SandBox/SandBox.module.scss";

const SelectTag = ({modalActive, updateArticleCategory, onPublickCLick}) => {
  const handle = (callback, e) => {
    callback(e.target.value)
  }
  const call = () => {
    onPublickCLick()
  }
    <Card active={true}>
        <p>Перед отправкой выберите категории статьи</p>

        <div className={styles.flexBtn}>
        <Category>
          {name => <Button category={name} onClick={(e) => handle(updateArticleCategory, e)}/>}
        </Category>
                                  
        </div>

      <Button text="отправить" onClick={call} />
    </Card>
}

export default SelectTag