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
import SandBox from "./сomponents/SandBox/SandBox";
import SignUp from "./сomponents/SignUp/SignUp";
import Works from "./сomponents/Works/Works";

function App(props) {
  console.log(props.store.getState())
  return (
    <BrowserRouter>
      <div className={styles.wrapper}>
        <SideBar className={styles.sidebar}/>
        <Header className={styles.header}/>
        <main className={styles.content}>
            <div className={styles.container}>
            <Route path="/Home" render={() => <Home state={props.state} dispatch={props.dispatch}/>}/>
            <Route path="/TextPage" render={() => <TextPage article={props.state.textPage}/>}/>
            <Route path="/Notes" render={() => <Notes state={props.state} dispatch={props.dispatch}/>}/>
            <Route path="/SandBox" render={() => <SandBox sandBox={props.state.sandBox} dispatch={props.dispatch}/>}/>
            <Route path="/Profile" render={() => <Profile />}/>
            <Route path="/SearchResult" render={() => <SearchResult />}/>
            <Route path="/Works" render={() => <Works />}/>
            <Route path="/Auth" render={() => <Auth />}/>
            <Route path="/SignUp" render={() => <SignUp />}/>
            <Route path="/Reset" render={() => <Reset />}/>
            </div>
        </main>
      </div>
    </BrowserRouter>
  );
}
export default App;

