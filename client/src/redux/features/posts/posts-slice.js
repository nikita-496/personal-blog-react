import { postsAPI } from "../../../api/api"

const POSTS_FILTER = "posts/postsFilter"
const POSTS_VIEW_ALL = "posts/postsViewAll"
const POSTS_ADDED = "posts/postsAdded"
const TOGGLE_IS_FETCHING = "posts/toggleIsFetching"

const initialState =  []
const postsReducer = (state = initialState, action) =>{
    switch(action.type) {
        //отображение постов по фильтру
        case POSTS_FILTER : {
            let stateCopy = [...state]
            stateCopy = action.payload[0].filter(s => s.category === action.payload[1])
            console.log(stateCopy)
            //Елси постов по данной категории не существует
            if (stateCopy.length === 0) {
                stateCopy[0] = {title: "Ничего не найдено!"}
            }
            return stateCopy
        }
        //первичное отображение постов
        case POSTS_VIEW_ALL : {
           let stateCopy = [...state]
            stateCopy = action.payload.map(s => {
            return Object.assign(s)
        })
        
           return stateCopy
        }
        case POSTS_ADDED : {
            let stateCopy = [...state]
            stateCopy = Object.assign({...action.payload}, {link: "читать"})
           return stateCopy
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.payload}
        } 
        default: 
            return state
        }
    }

export const viewSelectedPosts = (payload) => ({type: POSTS_FILTER, payload})
export const viewAllPosts = (payload) => ({type: POSTS_VIEW_ALL, payload})
export const postsAdded = (payload) => ({type: POSTS_ADDED, payload})
export const toggleIsFetching = (payload) => ({type: TOGGLE_IS_FETCHING, payload}) 

export const createPostsThunk = (value) => {
    return (dispatch,getState) => {
        dispatch(postsAdded(value))
        postsAPI.createPosts(getState()).then(data => {
            console.log("Пост успешно добавлен!")
        })  
    }
}

export const getPostsThunk = (value) => {
    return (dispatch) => {
       postsAPI.getPosts().then(response => {
         (value === "все") ? dispatch(viewAllPosts(response.data)) : dispatch(viewSelectedPosts([response.data, value]))
       })
    }
}

export default postsReducer