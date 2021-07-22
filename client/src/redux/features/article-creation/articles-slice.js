const NEW_ARTICLE_TEXT_UPDATED = "articles/newArticleTextUpdated"
const ARTICLE_ADDED = "articles/articleAdded"

const initialState = {
    newArticleText: "",
    articleBody: []
}       

const articleCreationReducer = (state = initialState, action) => {
    switch(action.type) {
        case NEW_ARTICLE_TEXT_UPDATED: {
            let stateCopy = {...state}
            stateCopy.newArticleText = {...state.newArticleText}
            stateCopy.newArticleText = action.payload
            return stateCopy
        }
        case ARTICLE_ADDED:
            let stateCopy = {...state}
            let newArticle = {
                text: state.newArticleText
            }
            stateCopy.articleBody = [...state.articleBody]
            stateCopy.articleBody.push(newArticle)
            stateCopy.newArticleText = ""
            return stateCopy
        default: 
            return state
    }
}

export const updateArticleTextAC = (payload) => ({type: NEW_ARTICLE_TEXT_UPDATED, payload})
export const articleAddedAC = () => ({type: ARTICLE_ADDED})

export default articleCreationReducer