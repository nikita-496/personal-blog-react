import React, { useEffect, useState } from "react";
import { BrowserRouter} from "react-router-dom";
import Header from "./common/Header/Header";
import SideBar from "./common/SideBar/SideBar";
import styles from "./App.module.scss";
import AppRouter from "./common/AppRouter";
import { AuthContext } from "./common/_functionality/Context/context";

function App() {
  const [isAuth, setIsAuth] = useState(false) 
  //блокировка работы маршрутизации на момента проверки на авторизацию(т.к. этот процесс связан с запросом на сервер)
  const [isLoading, setIsLoading] = useState(true)
  
  //хранилище статуса авторизации пользователя 
  //проверка на авторизованность 
  useEffect(()=> {
    //при первом запуске приложения по ключу auth првереям авторизован пользователь или нет
    //в зависимости от результата предоставляем доступ к определенным маршрутам
    if (localStorage.getItem("auth")) {
      setIsAuth(true)
    }
    setIsLoading(false)
  },[])

  return (
    <AuthContext.Provider value={
      {isAuth, setIsAuth, isLoading}
    }>
      <BrowserRouter>
        <div className={styles.wrapper}>
          <SideBar className={styles.sidebar}/>
          <Header className={styles.header}/>
          <main className={styles.content}>
            <div className={styles.container}>
            <AppRouter/> 
            </div>
          </main>
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;

