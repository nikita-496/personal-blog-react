import articleCreationReducer from "./articles-slice"

const state = {
    newArticleText: "",
    articleBody: []
}       
const NEW_ARTICLE_TEXT_UPDATED = "articles/newArticleTextUpdated"

test ("input and output states must be different", () => {
    let action  = {type: NEW_ARTICLE_TEXT_UPDATED, payload: "h"}

    let result = articleCreationReducer(state, action).newArticleText
    const regPattern = new RegExp(`${state.newArticleText}`, "g")
    const found = result.match(regPattern).toString()

    expect(state.newArticleText === found).toBe(false)
})