import React from "react"
import { NavLink } from "react-router-dom"


const ErrorPage = () => {
  return (
    <div>
      <h1>404 Page Not Found</h1>
      <p>Ой, эта страница не существует. Вы можете перейти на <NavLink style={{color: "#107EFF"}} to="/all"> главную </NavLink> страницу</p>
    </div>
  )
}

export default ErrorPage