import { useEffect } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { getArticleById } from "../../redux/features/article/thunk"
import { updateText } from "../../redux/features/comments/actions"
import { createComment } from "../../redux/features/comments/thunk"
import TextPage from "./TextPage"

const TextPageContainer = (props) => {
  useEffect(()=>{
      let articleId = props.match.params.articleId
      props.getArticleById(articleId)
  }, [])

  return <>
    <TextPage {...props}  articles={props.articles} />
  </>
}
let mapStateToProps = state => {
  return {
    articles: state.articles,
    comments: state.comments,
  }
} 

let WithUrlData = withRouter(TextPageContainer)
export default  connect(mapStateToProps,{
 getArticleById, updateText, createComment
})(WithUrlData)


