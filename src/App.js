import React from "react";
import { Route } from 'react-router';
import { BrowserRouter } from "react-router-dom";
import Header from "../src/common/Header/Header";
import SideBar from "../src/common/SideBar/SideBar";
import Home from "../src/сomponents/Home/Home";
import Profile from "../src/сomponents/Profile/Profile";
import SearchResult from "../src/сomponents/SearchResult/SearchResult";
import TextPage from "../src/сomponents/TextPage/TextPage";
import Works from "../src/сomponents/Works/Works";
import styles from "./App.module.scss";


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
            <Route path="/Works" component={Works}/>
            <Route path="/Profile" component={Profile}/>
            <Route path="/SearchResult" component={SearchResult}/>
            </div>
        </main>
      </div>
    </BrowserRouter>
  );
}
export default App;

