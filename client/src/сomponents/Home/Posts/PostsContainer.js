import { connect } from "mongodb"
import Posts from "./Posts"

let mapStateToProps = (state) => {
  return {
    posts: state.postsComponent.posts
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    CSS: (postCategory) => {
      dispatch(cssCategoryAC(postCategory))
    },
    JS: (postCategory) => {
      dispatch(jsCategoryAC(postCategory))
    },
    React: (postCategory) => {
      dispatch(reactCategoryAC(postCategory))
    },
    Others: (postCategory) => {
      dispatch(otherCategoryAC(postCategory))
    },
    SetPosts: (postCategory) => {
      dispatch(setPostsAC(postCategory))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)