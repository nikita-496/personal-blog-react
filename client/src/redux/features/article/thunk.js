import { ArticleService } from "../../../api/api"
import {add,filter,get} from "./actions"

export const createArticle= () => {
  return (dispatch, getState) => {
      dispatch(add())
      ArticleService.createArticles(getState())
  }
}

export const getArticles = (value, page, limit) => {
  return (dispatch) => {
      debugger
      ArticleService.getArticlesPost(page, limit).then(data => {
          (value === "все") ? dispatch(get(data.posts)) 
          : dispatch(filter([data.posts, value])) 
      })
  }
}

export const getArticleById = (aticleId) => {
  return (dispatch) => {
      ArticleService.getArticle(aticleId).then(response => {
          dispatch(get(response.data))
      })
  }
}