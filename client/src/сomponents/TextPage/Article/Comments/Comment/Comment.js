import Logo from "../../../../../common/Logo/Logo"
import src from "../../../../../img/text-page/avatarAuthor.png"
import commentStyles from "../../../../../scss-blocks/TextPage/Comments/Comments.module.scss"
import { FcLikePlaceholder } from "react-icons/fc"
import { RiDislikeLine } from "react-icons/ri"
import SubComment from "./SubComment/SubComment"
 
export default function CommentView ({comment}) {
  console.log(comment)
  return (
    <article className={commentStyles.comment}>
      <div className={commentStyles.commentAvatar}>
       <img src={comment.avatar} alt="s"/>
      </div>
      <div className={commentStyles.commentRightPart}>
        <div className={commentStyles.commentContent}>
          <p className={commentStyles.commentAuthor}>{comment.author}</p>
          <p className={commentStyles.commentDate}>{comment.publicDate}</p>
        </div>
        <p className={commentStyles.commentText}>{comment.text}</p>
      </div>
    
    {/*<ul className={commentStyles.comments}>
        <li>
          <div className={commentStyles.header}>

            <Logo comment={true} src={src}/>
            <div className={commentStyles.left}>
            <div className={commentStyles.author}>
              <div className={commentStyles.name}>Никита Шевкунов</div>
              <time className={commentStyles.date} dateTime="2021-12-21 19:21">1 неделя назад</time>
            </div>
            <div className={commentStyles.text}>
              {commentData ? commentData.text : ""}
            </div>
            <div className={commentStyles.likes}>
              <RiDislikeLine className={commentStyles.icon}/>
              <spna className={commentStyles.count}>0</spna>
              <FcLikePlaceholder className={commentStyles.icon}/>
            </div>
            </div>

          </div>
        </li>
  </ul>*/}
  </article>
  )
}