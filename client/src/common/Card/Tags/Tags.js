import React  from "react"

export default function Tags ({children}) {
  return (
    <div>
       {children}
   </div>
  )
}

/*
{
      (props.headerTags) ?  <div className={styles.tagsWrapperArticle}>
     
      </div>

      : (props.tagsName)  ?  <div className={styles.tagsWrapperPosts}>
        <div className={styles.tags}>
            <time className={styles.date} dateTime="2021-07-01">{props.date}</time>
            <span className={styles.caregoty}>{props.tagsName}</span>
        </div>
        <NavLink to ={"/article/" + get(id)}>
          <span className={styles.link} >{props.nameLink}</span>
        </NavLink>
        </div>
      : (props.workTags) ? <div className={styles.wrapper}>
            <ul className={styles.workTags}>
              <li>дизайн</li>
              <li>создание сайтов</li>
              <li>SMM</li>
            </ul>
            <div className={styles.footer}>
              <Button text="перейти на сайт"/>
            </div>
            </div>
      :  <div className={styles.tagsWrapper}> 
        <time className={styles.datePublic} dateTime="2021-07-01">{props.date}</time>
      </div>
      }




*/