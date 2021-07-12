const UPDATE_ARTICLE_BODY = "UPDATE-ARTICLE-BODY"
const CREATE_ARTICLE = "CREATE-ARTICLE"

let initialState = {
    articles: [],
    newArticleBody: ""
  }

const sandboxReducer = (state = initialState, action) => {
    switch (action.type) {

      case UPDATE_ARTICLE_BODY: {
        let stateCopy = {...state}
        stateCopy.newArticleBody = action.newTextArticle
        return stateCopy
      }

      case CREATE_ARTICLE: {
        let body = {
          id: Date.now(),
          text: state.newArticleBody
        }
        let stateCopy = {...state}
        stateCopy.articles = [...state.articles]
        stateCopy.articles.push(body)
        stateCopy.newArticleBody = ""
        return stateCopy
      }

      default: 
        return state
    }
}

export const updateArticleBodyActionCreator = (text) => ({
  type: UPDATE_ARTICLE_BODY, 
  newTextArticle: text
})

export const createArticleActionCreator = () => ({type: CREATE_ARTICLE})

export default sandboxReducer