import React from "react";
import { createArticleActionCreator, updateArticleBodyActionCreator } from "../../redux/sandbox-reducer";
import SandBox from "./SandBox";

function SandBoxContainer (props) {
  let state = props.store.getState()

  function handleArticleBody (text) {
    props.store.dispatch(updateArticleBodyActionCreator(text))
  }

  let articlePublication = () => {
    props.store.dispatch(createArticleActionCreator())
  }
  
  return (<SandBox newArticleBody={state.sandBox.newArticleBody} onArticleBody={handleArticleBody} onPublickCLick={articlePublication}/>)
}

export default SandBoxContainer