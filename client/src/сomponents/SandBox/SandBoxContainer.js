import { connect } from "react-redux";
import { createArticleThunk, updateArticleCategory, updateArticleText, updateArticleTitle } from "../../redux/features/article/articles-slice";
import SandBox from "./SandBox";

let mapStateToProps = (state) => {
  return {
    newTitle: state.articles.newTitle,
    newText : state.articles.newText,
  }
}

const SandBoxContainer = connect(mapStateToProps, {
  updateArticleTitle, updateArticleText, updateArticleCategory, createArticleThunk, 
})(SandBox)

export default SandBoxContainer
