import settingDate from "../../../utility/date"
import update from "../../../utility/update"
import { ARTICLE_ADD, ARTICLE_CATEGORY_UPDATE, ARTICLE_DESCRIPTION_UPDATE, ARTICLE_FILTER, ARTICLE_TEXT_UPDATE, ARTICLE_TITLE_UPDATE, GET_ARTICLE,} from "./case"

const initialState = {
    newTitle: "",
    newDescription: "",
    newText: "",
    newCategory: "",
    article: [
        {
          _id: "",    
          title: "",
          description: "",
          text: "",
          publicDate: null,
          category: "",
          comment: [],
        }  
    ] 
}       

const articleCreationReducer = (state = initialState, action) => {
    switch(action.type) {
        case ARTICLE_TITLE_UPDATE : {
            return update(state, action, "newTitle", "state.newTitle") 
        }
        case ARTICLE_DESCRIPTION_UPDATE: {
            return update(state, action, "newDescription", "state.newDescription")
        }
        case ARTICLE_TEXT_UPDATE: {
            return update(state, action, "newText", "state.newText")
        }
        case ARTICLE_CATEGORY_UPDATE: {
            return update(state, action, "newCategory", "state.newCategory")
        }
        case ARTICLE_ADD: {
            let stateCopy = {...state}
            let newArticle = {
                title: state.newTitle,
                description: state.newDescription,
                text: state.newText,
                publicDate: settingDate(),
                category: state.newCategory,
            }
            stateCopy.article = newArticle
            stateCopy.newTitle = ""
            stateCopy.newDescription = ""
            stateCopy.newText = ""
            stateCopy.newCategory = ""
            return stateCopy
        }
        case ARTICLE_FILTER : {
            let stateCopy = {...state, article: (action.payload[1] === "css" || action.payload[1] ==="javascript" 
            || action.payload[1] ==="react" || action.payload[1] === "другое") 
                ? action.payload[0].filter(s => s.category === action.payload[1])
                //подумать как улучшить данную логику. Возможно стоит на этапе создания статьей отсеивать статьи без заголовков
                : action.payload[0].filter(s => (s.title !== undefined) 
                    ? s.title.toLowerCase() === action.payload[1].toLowerCase() : s.title=== action.payload[1])
            }
            
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

export default articleCreationReducer


