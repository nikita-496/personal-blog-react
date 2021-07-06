const UPDATE_ARTICLE_BODY = "UPDATE-ARTICLE-BODY"
const CREATE_ARTICLE = "CREATE-ARTICLE"

let initialState = {
    article: [],
    newArticleBody: ""
  }

const sandboxReducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_ARTICLE_BODY:
        state.newArticleBody = action.newTextArticle
        return state
      case CREATE_ARTICLE: 
        let body = {
          id: Date.now(),
          text: state.newArticleBody
        }
        state.article.push(body)
        state.newArticleBody = ""
        return state
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