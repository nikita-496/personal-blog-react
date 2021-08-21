import { ADD, GET, TEXT_UPDATE } from "./case";

export const updateText = payload => ({type: TEXT_UPDATE, payload})
export const add = () => ({type: ADD})
export const get = payload => ({type: GET, payload})
