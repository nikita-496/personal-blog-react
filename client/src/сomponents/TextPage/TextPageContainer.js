import { connect } from "react-redux"
import { getArticlePage, getArticleThunk, toggleIsFetching } from "../../redux/features/article-creation/articles-slice"
import TextPage from "./TextPage"

let mapStateToProps = state => {
  return {
    article: state.articles.article
  }
} 

const TextPageContainer = connect(mapStateToProps,{
  getArticlePage , toggleIsFetching, getArticleThunk
})(TextPage)

export default TextPageContainer
