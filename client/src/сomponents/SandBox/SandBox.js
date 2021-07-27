import React from "react";
import Button from "../../common/Button/Button";
import Preloader from "../../common/Preoloader/Preloader";
import styles from "../../scss-blocks/SandBox/SandBox.module.scss";
import ArticleBody from "./ArticleBody/ArticleBody";
import SelectTag from "./SelectTag/SelectTag";
class SandBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editeMode: false,
      options: false,
      modalActive: false
    }
  }
  handleState = (statePart) => {
    debugger
    this.setState({
      [statePart]:!this.state[statePart]
    })
  }
  onPublickCLick = () => {   
    this.props.createArticleThunk() 
    this.setState({
      editeMode: false,
      modalActive: false
    })
  }

  render () {
    const {options, modalActive, editeMode} = this.state
    const {updateArticleTitle, updateArticleText, updateArticleCategory, newTitle, newText} = this.props
    return (
      <>
      {this.props.isFetching ? <Preloader/> : null}
      <div className={styles.wrapper}>
        {!editeMode ?
         <div className={styles.addPost} >
          <textarea placeholder="Начать писать публикацию" onClick={() =>this.handleState("editeMode")}/>
        </div>
        : <>
          <div className={styles.addPost}>
            <ArticleBody newTitle={newTitle} newText={newText} options={options}  selectOption={() =>this.handleState("options")}
            updateArticleTitle={updateArticleTitle} updateArticleText={updateArticleText}/>

            <Button text="готово к публикации" onClick={() => this.handleState("modalActive")}/>

            <div className={modalActive ? styles.active : styles.modal} onClick={() => this.handleState("modalActive")}>
              <SelectTag updateArticleCategory={updateArticleCategory} onPublickCLick={this.onPublickCLick}/>
            </div>
          </div>
          
          </>
        }
       
    </div>
    </>
  )
  }
}

export default SandBox