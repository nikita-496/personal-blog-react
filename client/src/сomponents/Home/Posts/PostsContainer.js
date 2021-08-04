import { connect } from "react-redux"
import { getArticlesThunk, getArticleThunk } from "../../../redux/features/article-creation/articles-slice"
import { getPostsThunk, viewAllPosts, viewSelectedPosts } from "../../../redux/features/posts/posts-slice"
import Posts from "./Posts"

let mapStateToProps = (state) => {
  return {
    //posts: state.posts,
    article: state.articles.article,
  }
}
const PostsContainer = connect(mapStateToProps, {
  getArticlesThunk
})(Posts)

export default PostsContainer