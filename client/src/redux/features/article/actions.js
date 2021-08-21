import { ARTICLE_ADD, ARTICLE_CATEGORY_UPDATE, ARTICLE_DESCRIPTION_UPDATE, ARTICLE_FILTER, ARTICLE_TEXT_UPDATE, ARTICLE_TITLE_UPDATE, GET_ARTICLE } from "./case"

export const updateTitle = (payload) => ({type: ARTICLE_TITLE_UPDATE, payload})
export const updateDescription = (payload) => ({type: ARTICLE_DESCRIPTION_UPDATE, payload})
export const updateText = (payload) => ({type: ARTICLE_TEXT_UPDATE, payload})
export const updateCategory = (payload) => ({type: ARTICLE_CATEGORY_UPDATE, payload})
export const add = () => ({type: ARTICLE_ADD})
export const get = (payload) => ({type: GET_ARTICLE, payload})
export const filter = (payload) => ({type: ARTICLE_FILTER, payload}) 
