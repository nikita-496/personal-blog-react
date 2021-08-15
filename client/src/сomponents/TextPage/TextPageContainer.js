import { useEffect } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { getArticleByIdThunk, getArticlePage } from "../../redux/features/article/articles-slice"
import TextPage from "./TextPage"

const TextPageContainer = (props) => {
  useEffect(()=>{
      let articleId = props.match.params.articleId
      props.getArticleByIdThunk(articleId)
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
  getArticlePage, getArticleByIdThunk
})(WithUrlData)


