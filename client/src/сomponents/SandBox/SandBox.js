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
  activateEditeMode = () => {
    this.setState({
      editeMode: true
    })
  }
  selectOption = () => {
    this.setState({
      options: !this.state.options
    })
  }
  setModalActive = () => {
    this.setState({
      modalActive: !this.state.modalActive
    })
  }

  handle = (callback, e) => {
    callback(e.target.innerText)
  }
  onPublickCLick = () => {   
    this.props.createArticleThunk() 
    this.setState({
      editeMode: false,
      modalActive: false
    })
  }

  render () {
    const {options, modalActive} = this.state
    const {updateArticleTitle, updateArticleText, updateArticleCategory, newTitle, newText} = this.props
    return (
      <>
      {this.props.isFetching ? <Preloader/> : null}
      <div className={styles.wrapper}>
        {!this.state.editeMode ?
         <div className={styles.addPost} >
          <textarea placeholder="Начать писать публикацию" onClick={this.activateEditeMode}/>
        </div>
        : <>
          <ArticleBody newTitle={newTitle} newText={newText} options={options}  selectOption={this.selectOption}
          updateArticleTitle={updateArticleTitle} updateArticleText={updateArticleText}/>

          <Button text="готово к публикации" onClick={this.setModalActive}/>

          <div className={modalActive ? styles.active : styles.modal} onClick={this.setModalActive}>
            <SelectTag modalActive={modalActive} updateArticleCategory={updateArticleCategory} onPublickCLick={this.onPublickCLick}/>
          </div>
          
          </>
        }
       
    </div>
    </>
  )
  }
}

export default SandBox