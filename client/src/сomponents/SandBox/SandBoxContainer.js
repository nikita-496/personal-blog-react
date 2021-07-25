import { connect } from "react-redux";
import {createArticleThunk, toggleIsFetchingAC, updateArticleCategoryAC, updateArticleTextAC, updateArticleTitleAC } from "../../redux/features/article-creation/articles-slice";
import SandBox from "./SandBox";

let mapStateToProps = (state) => {
  return {
    newTitle: state.articles.newTitle,
    newText : state.articles.newText,
    isFetching: state.articles.isFetching
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
    toggleisFetching: (isFetching) => {
      dispatch(toggleIsFetchingAC(isFetching))
    }
    
  }
}

const SandBoxContainer = connect(mapStateToProps, mapDipsatchToProps)(SandBox)
export default SandBoxContainer
