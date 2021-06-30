import React from "react";
import style from "../../../scss-blocks/Home/CategoriesArticle/CategoriesArticle.module.scss";
import CssArticles from "./CssArticles/CssArticles";
import JavaScriptArticles from "./JavaScriptArticles/JavaScriptArticles";
import ReactArticles from "./ReactArticles/ReactArticles";

export default function CategoriesArticles () {
  return (
    <div className={style.wrapper}>
    <CssArticles />
    <JavaScriptArticles />
    <ReactArticles />
  </div>
  )
}

