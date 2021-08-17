import { useEffect } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { get } from "../../redux/features/article/actions"
import { getArticleById } from "../../redux/features/article/thunk"
import TextPage from "./TextPage"

const TextPageContainer = (props) => {
  useEffect(()=>{
      let articleId = props.match.params.articleId
      props.getArticleById(articleId)
  })

  return <>
    <TextPage {...props}  article={props.article}/>
  </>
}
let mapStateToProps = state => {
  return {
    article: state.articles.article
  }
} 

let WithUrlData = withRouter(TextPageContainer)
export default  connect(mapStateToProps,{
  get, getArticleById
})(WithUrlData)


