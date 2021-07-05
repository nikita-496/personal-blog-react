import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { addNotes, updateNotesText } from './redux/state';


//rerenderEntireTree = setState
export function rerenderEntireTree (state) {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addNotes={addNotes} updateNotesText={updateNotesText}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

