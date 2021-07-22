import React from "react";
import Button from "../../common/Button/Button";
import styles from "../../scss-blocks/SandBox/SandBox.module.scss";
import FormatOptions from "./FormatOptions";
import TextOptions from "./TextOptions";
class SandBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editeMode: false,
      options: false
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

   onArticleBody = (e) => {
    this.props.handleArticleBody(e.target.value)
  }

   onPublickCLick = () => {
    this.props.articlePublication()
    this.setState({
      editeMode: false
    })
  }
  render () {
    return (
      <div className={styles.wrapper}>
        {!this.state.editeMode ?
        <>
         <div className={styles.addPost} >
          <textarea placeholder="Начать писать публикацию" value={this.props.createArticles.newArticleText} onClick={this.activateEditeMode}/>
        </div>
      </>
      : <>
      <div className={styles.addPost}>
          <textarea className={styles.editeTitleTextare} placeholder="Заголовок" />

         <div className={styles.content}>
          <TextOptions selectOption={this.selectOption} options={this.state.options}/>
          <textarea className={styles.editeContentTextare}  value={this.props.createArticles.newArticleText} onChange={this.onArticleBody}/>
         <FormatOptions />
        </div>

        </div>
        <Button text="готово к публикации" onClick={this.onPublickCLick} />
      </>
        }
    </div>
  )
  }
  
}

export default SandBox