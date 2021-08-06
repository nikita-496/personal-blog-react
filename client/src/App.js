import React from "react";
import { Route } from 'react-router';
import { BrowserRouter } from "react-router-dom";
import Header from "../src/common/Header/Header";
import SideBar from "../src/common/SideBar/SideBar";
import Home from "../src/сomponents/Home/Home";
import Profile from "../src/сomponents/Profile/Profile";
import SearchResult from "../src/сomponents/SearchResult/SearchResult";
import styles from "./App.module.scss";
import Auth from "./сomponents/Auth/Auth";
import NotesContainer from "./сomponents/Notes/NotesContainer";
import Reset from "./сomponents/Reset/Reset";
import SandBoxContainer from "./сomponents/SandBox/SandBoxContainer";
import SignUp from "./сomponents/SignUp/SignUp";
import TextPageContainer from "./сomponents/TextPage/TextPageContainer";
import Works from "./сomponents/Works/Works";

function App() {

  return (
    <BrowserRouter>
      <div className={styles.wrapper}>
        <SideBar className={styles.sidebar}/>
        <Header className={styles.header}/>
        <main className={styles.content}>
            <div className={styles.container}>
            <Route path="/all" render={() => <Home />}/>
            <Route path="/article/:articleId" render={() => <TextPageContainer />}/>
            <Route path="/note" render={() => <NotesContainer />}/>
            <Route path="/sandbox" render={() => <SandBoxContainer />} />
            <Route path="/profile" render={() => <Profile />}/>
            <Route path="/search" render={() => <SearchResult />}/>
            <Route path="/works" render={() => <Works />}/>
            <Route path="/auth" render={() => <Auth />}/>
            <Route path="/signup" render={() => <SignUp />}/>
            <Route path="/reset" render={() => <Reset />}/>
            </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;

