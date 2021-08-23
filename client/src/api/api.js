import * as axios from "axios"

export class ArticleService {
   static  createArticles (articleData) {
      const response =  axios.post("/articles", articleData.articles.article)
      return response.data
   }
   static async getArticlesPost (page, limit ) {
    const response = await axios.get("/selectArticles", {
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
   static async withArticleComments (articleId, updatedData) {
      const response = await axios.put(`/articles/${articleId}`, {
         comment: updatedData
      })
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
   static async getNotesByQuery (page, limit ) {
      const response = await axios.get("/selectNotes", {
        params: {
           page: page,
           limit: limit,
        }
     })
     return response.data
   }
}

export class CommentService {
   static async createComments (commentData) {
      const response = await axios.post("/comments", commentData.comments.comment)
      return response 
   }
   static async getCommentsByPostId (id) {
      
   } 
}