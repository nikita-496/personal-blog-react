import React from "react"
import { useContext } from "react"
import { Redirect, Route, Switch } from "react-router"
import { privateRoutes, publicRoutes } from "../router/routes"
import { AuthContext } from "./Context/context"
import Preloader from "./Preoloader/Preloader"

const AppRouter = () => {
  const {isAuth, isLoading} = useContext(AuthContext)

  if (isLoading) {
    return <Preloader/>
  }

  return (
    <>
    {isAuth ? 
      <Switch> 
        {privateRoutes.map(route => 
          <Route path={route.path} render={() => route.component} exact={route.exact} key={Date.now()}/>
          )}
          <Redirect to="/all"/>
      </Switch>
    : <Switch> 
        {publicRoutes.map(route => 
          <Route path={route.path} render={() => route.component} exact={route.exact} key={Date.now()}/> 
          )}
          <Redirect to="/auth"/>
      </Switch>
    }
    </>
  )
}

export default AppRouter