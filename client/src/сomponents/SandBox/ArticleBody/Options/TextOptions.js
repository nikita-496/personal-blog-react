import React from "react";
import CustomSelect from "../../../../common/CustomTags/CustomSelect";
import useStatusView from "../../../../hooks/useStatusView";
import styles from "../../../../scss-blocks/SandBox/TextOptions.module.scss"

const options = ["Заголовок", "Цитата", "Список", "Нумерованный список", 
"Медиа", "Изображение", "Разделитель", "Якорь"]

const TextOptions = () => { 
    const optionStatus = useStatusView(false)
    return (
        <div className={styles.parrent}>
        <button className={styles.svgBtn} onClick={optionStatus.handleStatusChange}>
            <svg display={"none"}>
                <symbol id={"moreOptions"} viewBox="0 0 448 448">
                <path d="m272 184c-4.417969 0-8-3.582031-8-8v-176h-80v176c0 4.417969-3.582031 8-8 8h-176v80h176c4.417969 0 8 3.582031 8 8v176h80v-176c0-4.417969 3.582031-8 8-8h176v-80zm0 0"/>
                </symbol>
              </svg>
              <svg className={styles.iconMore}>
                <use xlinkHref={"#moreOptions"}></use>
              </svg>
          </button>
          {optionStatus.status ? <CustomSelect options={options}/> : <> </>
        }
    </div>
    )
} 

export default TextOptions