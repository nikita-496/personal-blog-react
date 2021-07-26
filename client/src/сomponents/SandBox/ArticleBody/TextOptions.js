import React from "react";
import styles from "../../../scss-blocks/SandBox/TextOptions.module.scss"

const TextOptions = (props) => {

   const handleSelectOption = () => {
    props.selectOption()
    }
    return (
        <>
        <button className={styles.svgBtn} onClick={handleSelectOption}>
            <svg display={"none"}>
                <symbol id={"moreOptions"} viewBox="0 0 448 448">
                <path d="m272 184c-4.417969 0-8-3.582031-8-8v-176h-80v176c0 4.417969-3.582031 8-8 8h-176v80h176c4.417969 0 8 3.582031 8 8v176h80v-176c0-4.417969 3.582031-8 8-8h176v-80zm0 0"/>
                </symbol>
              </svg>
              <svg className={styles.iconMore}>
                <use xlinkHref={"#moreOptions"}></use>
              </svg>
          </button>
          {props.options ?
            <select className={styles.select}> 
              <option value="Заголовок">Заголовок</option>
              <option value="Цитата">Цитата</option>
              <option value="Список">Список</option>
              <option value="Нумерованный список">Нумерованный список</option>
              <option value="Медиа">Медиа</option>
              <option value="Изображение">Изображение</option>
              <option value="Разделитель">Разделитель</option>
              <option value="Якорь">Якорь</option>
            </select>  
            : <>
            </>
        }
    </>
    )
} 

export default TextOptions