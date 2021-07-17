import React from "react";
import style from "../../../scss-blocks/Home/CategoriesArticle/CategoriesArticle.module.scss";
import ItemCategory from "./ItemCategory/ItemCategory";


export default function CategoriesArticles (props) {
  let categoryList = props.state.categoryData.map(c=>
    <ItemCategory key={c.id} category={c.category}/>)
  return (
    <div className={style.wrapper}>
    {categoryList}
  </div>
  )
}

