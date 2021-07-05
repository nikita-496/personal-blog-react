import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import state, { addNotes, subscribe, updateNotesText } from './redux/state';
import reportWebVitals from './reportWebVitals';


//rerenderEntireTree = setState
function rerenderEntireTree () {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addNotes={addNotes} updateNotesText={updateNotesText}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree(state)

subscribe(rerenderEntireTree)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
