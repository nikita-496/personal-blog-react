const initialState = [
        {id: 1, category: "все", countArticle: 4, selected: true},
        {id: 2, category: "css", countArticle: 4, selected: false},
        {id: 3, category: "javascript", countArticle: 8, selected: false},
        {id: 4, category: "react", countArticle: 10, selected: false},
        {id: 5, category: "другое", countArticle: 6, selected: false},
    ]

const filtersReducer = (state = initialState, action) =>{
    switch(action.type) {
        case "posts/postsSelected" : {
            return state.map(s => {
                    if (s.id === action.payload) {
                        return s.selected === true
                    }else {return s.selected === false}
                })
            }
        default: 
            return state
    }
}
    
    export default filtersReducer