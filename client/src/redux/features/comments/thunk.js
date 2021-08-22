import {ArticleService, CommentService } from "../../../api/api"
import { add } from "./actions"

export const createComment = (articleId) => {
  return (dispatch, getState) => {
    dispatch(add())
    CommentService.createComments(getState()).then(response => 
      ArticleService.withArticleComments(articleId, response.data.comment))
  }
}