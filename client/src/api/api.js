import * as axios from "axios"

export const articlesAPI = {
   createArticles (articleData) {
      return axios.post("/articles", articleData.articles.article).then(response => response.data)
   },
   getArticles () {
      return axios.get(`/articles/`)
   },
   getArticle (articleId) {
      return axios.get(`/articles/${articleId}`)
   }
}

export const postsAPI = {
   createPosts (postsData) {
      
      return axios.post("/posts", postsData.posts).then(response => response.data)
   },
   getPosts () {
      return axios.get("/posts")
   }
}
