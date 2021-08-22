import { ArticleService } from "../../../api/api"
import {add,filter,get} from "./actions"

export const createArticle = () => {
  return (dispatch, getState) => {
      dispatch(add())
      ArticleService.createArticles(getState())
  }
}

export const getArticles = (value, page, limit) => {
  return (dispatch) => {
      ArticleService.getArticlesPost(page, limit).then(data => {
          (value === "все") ? dispatch(get(data.posts)) 
          : dispatch(filter([data.posts, value])) 
      })
  }
}

export const getArticleById = (...args) => {
  if (args.length === 1) {
    return (dispatch) => {
      ArticleService.getArticle(args[0]).then(response => {
       dispatch(get(response.data))
      })
    }
  }else {
    return (dispatch) => {
      ArticleService.updateArticle(args[0],args[1]).then(response => {
       dispatch(get(response.data))
      })
    }
  }
}

