import {ArticleService} from "../../../api/api" 
import settingDate from "../../../modules/Date"
import update from "../../../modules/Update"
const SET_NEW_ARTICLE_TITLE = "articles/setNewArticleTitle"
const NEW_ARTICLE_TEXT_UPDATED = "articles/newArticleTextUpdated"
const NEW_ARTICLE_CATEGORY = "articles/newArticleCategory"
const ARTICLE_ADDED = "articles/articleAdded"
const GET_ARTICLE = "articles/getArticle"
const ARTICLE_FILTER = "article/articleFilter"

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
    ]
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
            //Елси постов по данной категории не существует
            if (stateCopy.article.length === 0) {
                stateCopy.article = [{title: "Ничего не найдено!"}]
            }
            return stateCopy
        }
        case GET_ARTICLE: {
            let stateCopy =  {...state, article: action.payload}
            return stateCopy
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

export const createArticleThunk = () => {
    return (dispatch, getState) => {
        dispatch(articleAdded())
        ArticleService.createArticles(getState()).then(data => {
            console.log("Статья успешно опубликована!")
        })
    }
}

export const getArticlesThunk = (value, page, limit) => {
    return (dispatch) => {
        ArticleService.getArticlesPost(page, limit).then(data => {
            (value === "все") ? dispatch(getArticlePage(data.posts)) : dispatch(getFiltredArticle([data.posts, value]))
        })
    }
}

export const getArticleByIdThunk = (aticleId) => {
    return (dispatch) => {
        ArticleService.getArticle(aticleId).then(response => {
            dispatch(getArticlePage(response.data))
        })
    }
}

export default articleCreationReducer


