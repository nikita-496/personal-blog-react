import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import src from "./img/post/Conference.jpg";
import './index.scss';
import reportWebVitals from './reportWebVitals';

let posts = [
  {id: 1, title: "Как я сходил на FrontEnd Conf 2021", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.", img: src, publicDate: "1.07.2021", category: "создание сайтов", link: "читать"}
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
