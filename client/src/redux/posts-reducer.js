const CSS = "CSS"
const JS = "JS"
const React = "React"
const Other = "Other"
const SET_POSTS = "SET_POSTS"

let initialState = {
  categoryData: [
    {id: 1, category: "css", countArticle: 4},
    {id: 2, category: "javascript", countArticle: 8},
    {id: 3, category: "react", countArticle: 10},
    {id: 4, category: "другое", countArticle: 6},
  ],
  posts : [
    {
    "_id": "60f10c430a513e1a5072dd5e",
    "title": "Как писать код быстро и безболезненно?",
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.",
    "publicDate": "1.07.2021",
    "category": "другое",
    "link": "читать",
    },
    {
    "_id": "60f112643611f9195ce4356b",
    "title": "Как я сходил на FrontEnd Conf 2021",
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.",
    "publicDate": "1.07.2021",
    "category": "другое",
    "link": "читать",
    "displayed" : true
    },
    {
    "_id": "60f112903611f9195ce4356c",
    "title": "Flux-архитекутра",
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.",
    "publicDate": "1.07.2021",
    "category": "react",
    "link": "читать"
    },
    {
    "_id": "60f112af3611f9195ce4356d",
    "title": "Замыкание",
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.",
    "publicDate": "1.07.2021",
    "category": "javascript",
    "link": "читать"
    },
    {
    "_id": "60f112d03611f9195ce4356e",
    "title": "Адаптивная верстка",
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.",
    "publicDate": "1.07.2021",
    "category": "css",
    "link": "читать"
    }
    ]
}

const postReducer = (state = initialState, action ) => {
  switch(action.type) {
    /*case CSS : 
        let stateCopy = {...state, 
       posts: state.posts.filter(p=>{
         if (p.category === action.postCategory) return {...p}
        })
       }
       return stateCopy*/
    case JS : 
    return {
      ...state,
      posts: state.posts.map(p => {
        if(p.category === action.postCategory) {
          return {...p, displayed: true}
        }
        return {...p, displayed: false}
      })
    }
    case React : 
    return {
      ...state,
      posts: state.posts.map(p => {
        if(p.category === action.postCategory) {
          return {...p, displayed: true}
        }
        return {...p, displayed: false}
      })
    }
    case Other : 
    return {
      ...state,
      posts: state.posts.map(p => {
        if(p.category === action.postCategory) {
          return {...p, displayed: true}
        }
        return {...p, displayed: false}
      })
    }

    case SET_POSTS : {
      return {...state, posts: [...state.posts, ...action.posts]}
    } 
    default: 
      return state
  }
}

export const cssCategoryAC = (postCategory) => ({type: CSS, postCategory})
export const jsCategoryAC = (postCategory) => ({type: JS, postCategory})
export const reactCategoryAC = (postCategory) => ({type: React, postCategory})
export const otherCategoryAC = (postCategory) => ({type: Other, postCategory})
export const setPostsAC = (posts) => ({type: SET_POSTS, posts})

export default postReducer