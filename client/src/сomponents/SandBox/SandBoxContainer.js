import { connect } from "react-redux";
import {  updateCategory, updateText, updateTitle } from "../../redux/features/article/actions";
import { createArticle } from "../../redux/features/article/thunk";
import SandBox from "./SandBox";

let mapStateToProps = (state) => {
  return {
    newTitle: state.articles.newTitle,
    newText : state.articles.newText,
  }
}

const SandBoxContainer = connect(mapStateToProps, {
  updateTitle, updateText, updateCategory, createArticle, 
})(SandBox)

export default SandBoxContainer
