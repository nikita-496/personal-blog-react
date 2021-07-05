import React from "react";
import styles from "../../../../scss-blocks/Home/CategoriesArticle/CardArticle.module.scss";

export default function JavaScriptArticles (props) {
  return(
    <>
     <img className={styles} src={props.src} alt="JavaScriptArticles"></img>
    <p style={{color:"gold"}}>JavaScriptArticles</p>
  </>
  )
} 