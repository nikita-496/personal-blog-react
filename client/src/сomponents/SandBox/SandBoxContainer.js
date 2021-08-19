import { connect } from "react-redux";
import {  updateCategory, updateDescription, updateText, updateTitle } from "../../redux/features/article/actions";
import { createArticle } from "../../redux/features/article/thunk";
import SandBox from "./SandBox";

let mapStateToProps = (state) => {
  return {
    newTitle: state.articles.newTitle,
    newDescription: state.articles.newDescription,
    newText : state.articles.newText,
  }
}

const SandBoxContainer = connect(mapStateToProps, {
  updateTitle, updateDescription, updateText, updateCategory, createArticle, 
})(SandBox)

export default SandBoxContainer
