import { connect } from "react-redux";
import {createArticleThunk, updateArticleCategoryAC, updateArticleTextAC, updateArticleTitleAC } from "../../redux/features/article-creation/articles-slice";
import SandBox from "./SandBox";

let mapStateToProps = (state) => {
  return {
    articles : state.articles
  }
}

let mapDipsatchToProps = (dispatch) => {
  return {

    handleArticleTitle: (title) => {
      dispatch(updateArticleTitleAC(title))
    },
    handleArticleBody: (text) => {
      dispatch(updateArticleTextAC(text))
    },
    handleArticleCategory: (category) => {
    dispatch(updateArticleCategoryAC(category))
    },
    articlePublication: () => {
      dispatch(createArticleThunk())
    },
    
  }
}

const SandBoxContainer = connect(mapStateToProps, mapDipsatchToProps)(SandBox)
export default SandBoxContainer
