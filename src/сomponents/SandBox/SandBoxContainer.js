import { connect } from "react-redux";
import { createArticleActionCreator, updateArticleBodyActionCreator } from "../../redux/sandbox-reducer";
import SandBox from "./SandBox";

let mapStateToProps = (state) => {
  return {
    newArticleBody: state.sandBox.newArticleBody,
    articles: state.sandBox.articles
  }
}

let mapDipsatchToProps = (dispatch) => {
  return {
    handleArticleBody: (text) => {
      dispatch(updateArticleBodyActionCreator(text))
  },
    articlePublication: () => {
      dispatch(createArticleActionCreator())
    }
  }
}

const SandBoxContainer = connect(mapStateToProps, mapDipsatchToProps)(SandBox)
export default SandBoxContainer