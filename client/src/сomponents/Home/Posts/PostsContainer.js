import { connect } from "react-redux"
import { getPostsThunk, viewAllPosts, viewSelectedPosts } from "../../../redux/features/posts/posts-slice"
import Posts from "./Posts"

let mapStateToProps = (state) => {
  return {
    posts: state.posts.items
  }
}

const PostsContainer = connect(mapStateToProps, {
  viewSelectedPosts, viewAllPosts, getPostsThunk
})(Posts)


export default PostsContainer