import React from "react";
import styles from "../../../../scss-blocks/Home/CategoriesArticle/CardArticle.module.scss";

export default function ReactArticles (props) {
  return(
    <>
     <img className={styles} src={props.src} alt="ReactArticles"></img>
    <p style={{color:"pink"}}>React</p>
  </>
  )  
}