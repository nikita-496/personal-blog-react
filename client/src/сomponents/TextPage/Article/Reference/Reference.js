import React from "react"
import Tags from "../../../../common/Card/Tags/Tags"
import refStyles from "../../../../scss-blocks/TextPage/Reference/Reference.module.scss"

export default function Reference () {
  return (
    <section className={refStyles.wrapperReference}>
      <h3 className={refStyles.title}>Рекомендации</h3>
      <ul className={refStyles.list}>
        <div className={refStyles.left}>
          <li className={refStyles.listItem}>
            <h4>
              <a href="/">Как я сходил на FrontEnd Conf 2021</a>
            </h4>
          <Tags />
          </li>

          <li className={refStyles.listItem}>
            <h4> 
              <a  href="/">Купил новый ноутбук за 150 000 руб</a>
            </h4>
          <Tags />
          </li>
        </div>

        <div className={refStyles.right}>
          <li className={refStyles.listItem}>
            <h4>
              <a  href="/">Как писать код быстро и безболезненно? Как писать код быстро и безболезненно?</a>
          </h4>
        <Tags />
        </li>

        <li className={refStyles.listItem}>
          <h4>
            <a  href="/">Купил новый ноутбук за 150 000 руб</a>
          </h4>
        <Tags />
        </li>
      </div>

      </ul>
    </section>
  )
}