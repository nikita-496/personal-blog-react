
let initialState = {
  arcticle: [
    {id: "60ec4d5cb0370a234c1bd09c", 
    title:"Как я сходил на FrontEnd Conf 2021", 
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.',
    publicDate: "2017-01-26", 
    category: 'создание сайтов'}, 
    { id: "60ec4e2bb0370a234c1bd09d",
    title: 'Как писать код быстрей ',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.', 
    publicDate: "2017-01-26", 
    category: 'кодинг' },
    { id: "60ec4e2bb0370a234c1bd09e",
    title: 'FLUX-архитектура',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.',
    publicDate: "2017-01-26",
    category: 'react' },
    { id:"60ec4e2bb0370a234c1bd09f",
    title: 'Как я сходил на FrontEnd Conf 2021',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.',
    publicDate: "2017-01-26",
    category: 'создание сайтов' },
  ]
}

const arcticleReducer = (state = initialState, action ) => {

  return state
}

export default arcticleReducer