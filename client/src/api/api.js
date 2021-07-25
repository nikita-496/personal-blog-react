import * as axios from "axios"


export const articlesAPI = {
   createArticles (articleData) {
      console.log(articleData.articles.article)
      return axios.post("/articles", articleData.articles.article).then(response => response.data)
   } 
}
