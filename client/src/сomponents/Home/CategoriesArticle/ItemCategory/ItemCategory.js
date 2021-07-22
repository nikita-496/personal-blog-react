import React from "react";
import styles from "../../../../scss-blocks/Home/CategoriesArticle/CardArticle.module.scss";


export default function ItemCategory (props) {
  return (
    <>
    <button className={styles.btn}>{props.category}

    </button>
  </>
  )
}