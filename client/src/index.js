import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/redux-store';
import reportWebVitals from './reportWebVitals';

/*
  ReactDOM.render(
    <React.StrictMode>
      <App store={store} dispatch={store.dispatch.bind(store)}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
*/

console.log("Initial state", store.getState())

const unsubscribe = store.subscribe(() =>
    console.log("State after dispatch: ", store.getState() )
)

store.dispatch({type: "posts/postsFilter", payload: "javascript"})
store.dispatch({type: "posts/postsFilter", payload: "react"})
store.dispatch({type: "posts/postsFilter", payload: "css"})

store.dispatch({type: "posts/postsSelected", payload: 1})
store.dispatch({type: "posts/postsSelected", payload: 1})

unsubscribe()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
