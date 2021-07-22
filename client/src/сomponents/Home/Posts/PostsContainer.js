import { connect } from "react-redux"
import {viewAllPostsAC, viewSelectedPostsAC } from "../../../redux/features/posts/posts-slice"
import Posts from "./Posts"

let mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    viewSelectedPosts: (payload) => {
      dispatch(viewSelectedPostsAC(payload))
    },
    viewAllPosts : () => {
      dispatch(viewAllPostsAC())
    }
  }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)
export default PostsContainer