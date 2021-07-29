import { connect } from "react-redux";
import {createArticleThunk, toggleIsFetching, updateArticleCategory, updateArticleText, updateArticleTitle } from "../../redux/features/article-creation/articles-slice";
import SandBox from "./SandBox";

let mapStateToProps = (state) => {
  return {
    newTitle: state.articles.newTitle,
    newText : state.articles.newText,
    isFetching: state.articles.isFetching
  }
}

const SandBoxContainer = connect(mapStateToProps, {
  updateArticleTitle, updateArticleText, updateArticleCategory,createArticleThunk, toggleIsFetching
})(SandBox)
export default SandBoxContainer
