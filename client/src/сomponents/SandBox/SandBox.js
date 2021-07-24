import React from "react";
import Button from "../../common/Button/Button";
import Card from "../../common/Card/Card";
import styles from "../../scss-blocks/SandBox/SandBox.module.scss";
import FormatOptions from "./FormatOptions";
import TextOptions from "./TextOptions";
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

  
  onArticleTitle = (e) => {
    this.props.handleArticleTitle(e.target.value)
  }

   onArticleBody = (e) => {
    this.props.handleArticleBody(e.target.value)
  }
  onArticleCategory = (e) => {
    this.props.handleArticleCategory(e.target.innerText)
  }
   onPublickCLick = () => {   
     debugger
    this.props.articlePublication() 
    this.setState({
      editeMode: false,
      modalActive: false
    })
  }

  render () {
    const {options, modalActive} = this.state
    return (
      <div className={styles.wrapper}>
        {!this.state.editeMode ?
         <div className={styles.addPost} >
          <textarea placeholder="Начать писать публикацию" onClick={this.activateEditeMode}/>
        </div>
      : <>
      <div className={styles.addPost}>
          <textarea className={styles.editeTitleTextare} value={this.props.articles.newTitle} onChange={this.onArticleTitle} placeholder="Заголовок" />

         <div className={styles.content}>
          <TextOptions selectOption={this.selectOption} options={options}/>
          <textarea className={styles.editeContentTextare}  value={this.props.articles.newText} onChange={this.onArticleBody}/>
         <FormatOptions />
        </div>

        </div>
        <Button text="готово к публикации" onClick={this.setModalActive}/>
        <div className={modalActive ? styles.active : styles.modal} onClick={this.setModalActive}>
            <Card active={true}>
              <p>Перед отправкой выберите категории статьи</p>
              <div className={styles.flexBtn}>
                <Button category={true} css ={true} text="css" onClick={this.onArticleCategory}></Button>
                <Button category={true} js={true} text="javascript" onClick={this.onArticleCategory}></Button>
                <Button category={true} react={true} text="react" onClick={this.onArticleCategory}></Button>
                <Button category={true} other={true} text="другое" onClick={this.onArticleCategory}></Button>
              </div>
              <Button text="отправить" onClick={this.onPublickCLick} />
            </Card>
        </div>  
      </>
        }
       
    </div>
  )
  }
}
  
export default SandBox