import {articlesAPI} from "../../../api/api" 
import settingDate from "../../../modules/Date"
import update from "../../../modules/Update"
import { createPostsThunk } from "../posts/posts-slice"
const SET_NEW_ARTICLE_TITLE = "articles/setNewArticleTitle"
const NEW_ARTICLE_TEXT_UPDATED = "articles/newArticleTextUpdated"
const NEW_ARTICLE_CATEGORY = "articles/newArticleCategory"
const ARTICLE_ADDED = "articles/articleAdded"
const GET_ARTICLE = "articles/getArticle"
const ARTICLE_FILTER = "article/articleFilter"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"

const initialState = {
    newTitle: "",
    newText: "",
    newCategory: "",
    article: [
        {
        _id: "",    
        title: "",
        paragraph: "",
        publicDate: null,
        category: ""
        }   
    ],
    isFetching: false
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
        case ARTICLE_ADDED: {
            let stateCopy = {...state}
            let newArticle = {
                title: state.newTitle,
                paragraph: state.newText,
                publicDate: settingDate(),
                category: state.newCategory
            }
            stateCopy.article = newArticle
            stateCopy.newTitle = ""
            stateCopy.newText = ""
            stateCopy.newCategory = ""
            return stateCopy
        }
        case ARTICLE_FILTER : {
            let stateCopy = {...state, article: action.payload[0].filter(s => s.category === action.payload[1])}
            debugger
            console.log(stateCopy)
            //Елси постов по данной категории не существует
            if (stateCopy.article.length === 0) {
                stateCopy.article = [{title: "Ничего не найдено!"}]
            }
            return stateCopy
        }
        case GET_ARTICLE: {
            debugger
            let stateCopy =  {...state, article: action.payload}
            return stateCopy
        }
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
export const getArticlePage = (payload) => ({type: GET_ARTICLE, payload})
export const getFiltredArticle = (payload) => ({type: ARTICLE_FILTER, payload}) 
export const toggleIsFetching = (payload) => ({type: TOGGLE_IS_FETCHING, payload}) 

export const createArticleThunk = () => {
    return (dispatch, getState) => {
        dispatch(articleAdded())
        dispatch(toggleIsFetching(true))
        articlesAPI.createArticles(getState()).then(data => {
            dispatch(createPostsThunk(data))
            dispatch(toggleIsFetching(false))
            console.log("Статья успешно опубликована!")
        })
    }
}

export const getArticlesThunk = (value) => {
    debugger
    return (dispatch) => {
        debugger
        dispatch(toggleIsFetching(true))
        articlesAPI.getArticles().then(response => {
            (value === "все") ? dispatch(getArticlePage(response.data)) : dispatch(getFiltredArticle([response.data, value]))
        })
        dispatch(toggleIsFetching(false))
    }
}

export const getArticleByIdThunk = (aticleId) => {
    debugger
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        articlesAPI.getArticle(aticleId).then(response => {
            dispatch(getArticlePage(response.data))
        })
        dispatch(toggleIsFetching(false))
    }
}

export default articleCreationReducer


