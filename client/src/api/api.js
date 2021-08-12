import * as axios from "axios"

/*export const articlesAPI = {
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
      return axios.get("/notes")
   }
}*/

export class ArticleService {
   static async createArticles (articleData) {
      try {
         const response = axios.post("/articles", articleData.articles.article)
         return response.data
      }catch (e) {
         console.log(e)
      }
   }
   static async getArticlesPost (page, limit ) {
      try {
         const response = axios.get("/select", {
            params: {
               page: page,
               limit: limit,
            }
         })
         return response
      }catch (e) {
         console.log(e)
      }
   }
   static async getArticles() {
      try {
         const response = axios.get("/articles")
         return response
      }catch (e) {
         console.log(e)
      }
   }
   static async getArticle (articleId) {
      try {
         const response = axios.get(`/articles/${articleId}`)
         return response
      }catch (e) {
         console.log(e)
      }
   }
}

export class NotesService {
   static async createNotes (notesData) {
      try {
         const response = axios.post("/notes", notesData.notes.noteItems)
         return response
      }catch (e) {
         console.log(e)
      }
   }
   static async getNotes () {
      try {
         const response = axios.get("/notes")
         return response
      }catch (e) {
         console.log(e)
      }
   }
}
