import React from "react";
import { Route } from 'react-router';
import { BrowserRouter } from "react-router-dom";
import Header from "../src/common/Header/Header";
import SideBar from "../src/common/SideBar/SideBar";
import Home from "../src/сomponents/Home/Home";
import Profile from "../src/сomponents/Profile/Profile";
import SearchResult from "../src/сomponents/SearchResult/SearchResult";
import TextPage from "../src/сomponents/TextPage/TextPage";
import styles from "./App.module.scss";
import Auth from "./сomponents/Auth/Auth";
import Notes from "./сomponents/Notes/Notes";
import Reset from "./сomponents/Reset/Reset";
import SignUp from "./сomponents/SignUp/SignUp";
import Works from "./сomponents/Works/Works";




function App() {
  return (
    <BrowserRouter>
      <div className={styles.wrapper}>
        <SideBar className={styles.sidebar}/>
        <Header className={styles.header}/>
        <main className={styles.content}>
            <div className={styles.container}>
            <Route path="/Home" component={Home}/>
            <Route path="/TextPage" component={TextPage}/>
            <Route path="/Notes" component={Notes}/>
            <Route path="/Profile" component={Profile}/>
            <Route path="/SearchResult" component={SearchResult}/>
            <Route path="/Works" component={Works}/>
            <Route path="/Auth" component={Auth}/>
            <Route path="/SignUp" component={SignUp}/>
            <Route path="/Reset" component={Reset}/>
            </div>
        </main>
      </div>
    </BrowserRouter>
  );
}
export default App;

