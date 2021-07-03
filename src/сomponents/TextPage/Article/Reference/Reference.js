import React from "react"
import Tags from "../../../../common/Card/Tags/Tags"
import styles from "../../../../scss-blocks/TextPage/Reference/Reference.module.scss"
export default function Reference () {
  return (
    <div className={styles.wrapperReference}>
      <h4 className={styles.title}>Рекомендации</h4>
      <ul className={styles.list}>
        <div className={styles.left}>
          <li className={styles.listItem}>
            <h4>
              <a>Как я сходил на FrontEnd Conf 2021</a>
            </h4>
          <Tags />
          </li>

          <li className={styles.listItem}>
            <h4> 
              <a>Купил новый ноутбук за 150 000 руб</a>
            </h4>
          <Tags />
          </li>
        </div>

        <div className={styles.right}>
          <li className={styles.listItem}>
            <h4>
              <a>Как писать код быстро и безболезненно? Как писать код быстро и безболезненно?</a>
          </h4>
        <Tags />
        </li>

        <li className={styles.listItem}>
          <h4>
            <a>Купил новый ноутбук за 150 000 руб</a>
          </h4>
        <Tags />
        </li>
      </div>

      </ul>
    </div>
  )
}