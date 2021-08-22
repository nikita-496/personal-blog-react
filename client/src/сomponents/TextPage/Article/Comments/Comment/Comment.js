import Button from "../../../../../common/Button/Button"
import Logo from "../../../../../common/Logo/Logo"
import src from "../../../../../img/text-page/avatarAuthor.png"
import styles from "../../../../../scss-blocks/TextPage/Comments/Comments.module.scss"
import SubComment from "./SubComment/SubComment"

export default function CommentView (props) {
  let data = props.commentData
  return (
    <ul className={styles.comments}>
        <li>
          <div className={styles.header}>
            <Logo src={src}/>
            <div className={styles.author}>
              <div className={styles.name}>Никита Шевкунов</div>
              <time className={styles.date} dateTime="2021-12-21 19:21">1 неделя назад</time>
              </div>
          </div>

          <div className={styles.text}>
            {(data ? data.text : "")}
          </div>
          
          {/*<Button text="Ответить"/>*/}
          {/*<SubComment />*/}
        </li>
      </ul>
  )
}