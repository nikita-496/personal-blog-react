import React from "react";
import styles from "../../../../scss-blocks/Home/CategoriesArticle/CardArticle.module.scss";


export default function CssArticles (props) {
  return (
    <>
    <img className={styles.cssCard} src={props.src} alt="CssArticles"></img>
    <p style={{color:"blue"}} >CssArticles</p>
  </>
  )
}