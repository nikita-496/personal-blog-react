import React from "react";
import css from "../../../img/categories-article/css(2).png";
import js from "../../../img/categories-article/JS.png";
import react from "../../../img/categories-article/react.png";
import style from "../../../scss-blocks/Home/CategoriesArticle/CategoriesArticle.module.scss";
import CssArticles from "./CssArticles/CssArticles";
import JavaScriptArticles from "./JavaScriptArticles/JavaScriptArticles";
import ReactArticles from "./ReactArticles/ReactArticles";


export default function CategoriesArticles () {
  return (
    <div className={style.wrapper}>
    <CssArticles src={css}/>
    <JavaScriptArticles src={js}/>
    <ReactArticles src={react}/>
  </div>
  )
}

