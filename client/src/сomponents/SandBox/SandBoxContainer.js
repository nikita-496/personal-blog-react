import { connect } from "react-redux";
import { articleAddedAC, updateArticleTextAC } from "../../redux/features/article-creation/articles-slice";
import SandBox from "./SandBox";

let mapStateToProps = (state) => {
  return {
    createArticles : state.createArticles
  }
}

let mapDipsatchToProps = (dispatch) => {
  return {
    handleArticleBody: (text) => {
      dispatch(updateArticleTextAC(text))
  },
    articlePublication: () => {
      dispatch(articleAddedAC())
    }
  }
}

const SandBoxContainer = connect(mapStateToProps, mapDipsatchToProps)(SandBox)
export default SandBoxContainer