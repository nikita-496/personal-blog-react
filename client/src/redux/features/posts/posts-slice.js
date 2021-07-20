const initialState =  [
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

const postsReducer = (state = initialState, action) =>{
    switch(action.type) {
        case "posts/postsFilter" : {
            return state.map(s => {
                    if (s.category === action.payload) {
                        return s
                    }
                    return null
                })
            
        }
        default: 
            return state
    }
}

export default postsReducer