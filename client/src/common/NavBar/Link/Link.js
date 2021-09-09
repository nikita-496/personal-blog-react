import React from "react";
import { NavLink } from "react-router-dom";

const Link = (props) => {
  return (
    <li>
      <NavLink 
        className={(props.active === props.page ? props.urlStyle + " " + props.activeStyle : props.urlStyle)} 
        to={props.url}
        onClick={() => props.setActive(props.page)}
        > 
          <span className={props.iconStyle}></span>
        {props.page}
      </NavLink>
    </li>
  )
}

export default Link

