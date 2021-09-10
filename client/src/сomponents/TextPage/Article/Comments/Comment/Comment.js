import Logo from "../../../../../common/Logo/Logo"
import src from "../../../../../img/text-page/avatarAuthor.png"
import commentStyles from "../../../../../scss-blocks/TextPage/Comments/Comments.module.scss"
import { FcLikePlaceholder } from "react-icons/fc"
import { RiDislikeLine } from "react-icons/ri"
 
export default function CommentView ({commentData}) {
  return (
    <ul className={commentStyles.comments}>
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
      </ul>
  )
}