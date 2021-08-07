import { connect } from "react-redux"
import { getArticlesThunk } from "../../../redux/features/article/articles-slice"
import Posts from "./Posts"

let mapStateToProps = (state) => {
  return {
    article: state.articles.article,
    pageSize: state.articles.pageSize,
    totalCount: state.articles.totalCount,
    currentPage: state.articles.currentPage,
  }
}
const PostsContainer = connect(mapStateToProps, {
  getArticlesThunk
})(Posts)

export default PostsContainer