import {articlesAPI} from "../../../api/api" 
const SET_NEW_ARTICLE_TITLE = "articles/setNewArticleTitle"
const NEW_ARTICLE_TEXT_UPDATED = "articles/newArticleTextUpdated"
const NEW_ARTICLE_CATEGORY = "articles/newArticleCategory"
const ARTICLE_ADDED = "articles/articleAdded"

const initialState = {
    newTitle: "",
    newText: "",
    newCategory: "",
    article: {
        title: "",
        paragraph: "",
        publicDate: null,
        category: ""
    },
}       

const update = (state, action, propertyFieldCopy, propertyFieldOrigin) => {
    return {
        ...state,
        [propertyFieldCopy]: [propertyFieldOrigin] = action.payload
    }
}

const settignDate = () => {
    let date = new Date()
    let datestring  = date.getDate()  + "-" + (date.getMonth()+1) + "-" + date.getFullYear() + " " +
    date.getHours() + ":" + date.getMinutes();
    return datestring
}

const articleCreationReducer = (state = initialState, action) => {
    switch(action.type) {
        
        case SET_NEW_ARTICLE_TITLE : {
            return update(state, action, "newTitle", "state.newTitle")
            
        }
        case NEW_ARTICLE_TEXT_UPDATED: {
            return update(state, action, "newText", "state.newText")
        }
        case NEW_ARTICLE_CATEGORY: {
            return update(state, action, "newCategory", "state.newCategory")
        }
        case ARTICLE_ADDED:
            debugger
            let stateCopy = {...state}
            let newArticle = {
                title: state.newTitle,
                paragraph: state.newText,
                publicDate: settignDate(),
                category: state.newCategory
            }
            stateCopy.article = newArticle
            stateCopy.newTitle = ""
            stateCopy.newText = ""
            stateCopy.newCategory = ""
            debugger
            return stateCopy
        default: 
            return state
    }
}
export const updateArticleTitleAC = (payload) => ({type: SET_NEW_ARTICLE_TITLE, payload})
export const updateArticleTextAC = (payload) => ({type: NEW_ARTICLE_TEXT_UPDATED, payload})
export const updateArticleCategoryAC = (payload) => ({type: NEW_ARTICLE_CATEGORY, payload})
export const articleAddedAC = () => ({type: ARTICLE_ADDED})
//createArticleThunkCreator

export const createArticleThunk = () => {
    return (dispatch, getState) => {
        dispatch(articleAddedAC())
        debugger
        articlesAPI.createArticles(getState()).then(data => {
            console.log("Статья успешно опубликована!")
            console.log(data)
        })
    }
}

export default articleCreationReducer


