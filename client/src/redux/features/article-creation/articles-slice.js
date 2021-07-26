import {articlesAPI} from "../../../api/api" 
const SET_NEW_ARTICLE_TITLE = "articles/setNewArticleTitle"
const NEW_ARTICLE_TEXT_UPDATED = "articles/newArticleTextUpdated"
const NEW_ARTICLE_CATEGORY = "articles/newArticleCategory"
const ARTICLE_ADDED = "articles/articleAdded"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING "

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
    isFetching: false
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
            return stateCopy
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.payload}
        } 
            default: 
            return state
    }
}
export const updateArticleTitle = (payload) => ({type: SET_NEW_ARTICLE_TITLE, payload})
export const updateArticleText = (payload) => ({type: NEW_ARTICLE_TEXT_UPDATED, payload})
export const updateArticleCategory = (payload) => ({type: NEW_ARTICLE_CATEGORY, payload})
export const articleAdded = () => ({type: ARTICLE_ADDED})
export const toggleIsFetching = (payload) => ({type: TOGGLE_IS_FETCHING, payload}) 

export const createArticleThunk = () => {
    return (dispatch, getState) => {
        dispatch(articleAdded())
        dispatch(toggleIsFetching(true))
        articlesAPI.createArticles(getState()).then(data => {
            dispatch(toggleIsFetching(false))
            console.log("Статья успешно опубликована!")
        })
    }
}

export default articleCreationReducer


