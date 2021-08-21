import * as axios from "axios"

export class ArticleService {
   static  createArticles (articleData) {
      const response =  axios.post("/articles", articleData.articles.article)
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
   //Создание комменатрия
   static async updateArticle (articleId, updatedData) {
      const response = await axios.put(`/articles/${articleId}`, {
         commentText: updatedData
      })
      console.log(response)
      debugger
      return response
      /*await axios.put(`/articles/${articleId}`, {
         commentText: updatedData
      }, {
         validateStatus: function (status) {
            return status 
          }
      }).then(res => console.log(res.data))
      .catch(err => console.log(err.res.data, err.res.status))
   }*/
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
}
