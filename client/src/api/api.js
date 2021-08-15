import * as axios from "axios"
/*export class ArticleService {
   static async createArticles (articleData) {
      const response = await axios.post("/articles", articleData.articles.article)
      return response.data 
   }
   static async getArticlesPost (page, limit ) {
    const response = await axios.get("/select", {
      params: {
         page: page,
         limit: limit,
      }
   })
      return response.data
   }
   static async getArticles() {
         const response = await axios.get("/articles")
         return response
   }
   static async getArticle (articleId) {
      const response = await axios.get(`/articles/${articleId}`)
      return response
   }
}

export class NotesService {
   static async createNotes (notesData) {
      const response = await axios.post("/notes", notesData.notes.noteItems)
      return response
   }
   static async getNotes () {
      const response = await axios.get("/notes")
      return response
   }
}*/

  /*export const createArticles = async (articleData) => {
   return await axios.post("/articles", articleData.articles.article).then(response => response.data)
   //return response
}*/

export const articlesAPI = {
   createArticles (articleData) {
      return axios.post("/articles", articleData.articles.article).then(response => response.data)
   },
   getArticlesPost (page, limit ) {
      return axios.get("/select", {
         params: {
            page: page,
            limit: limit,
         }
      }).then(response => response)
   },
   getArticles() {
      return axios.get("/articles")
   },
   getArticle (articleId) {
      return axios.get(`/articles/${articleId}`)
   }
}
export const notesAPI = {
   createNotes (notesData) {
      return axios.post("/notes", notesData.notes.noteItems).then(response => response.data)
   },
   getNotes () {
      debugger
      return axios.get("/notes")
   }
}