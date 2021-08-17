import { connect } from "react-redux"
import { getArticles } from "../../../redux/features/article/thunk"
import Posts from "./Posts"

let mapStateToProps = (state) => {
  return {
    article: state.articles.article,
  }
}
const PostsContainer = connect(mapStateToProps, {
  getArticles
})(Posts)

export default PostsContainer