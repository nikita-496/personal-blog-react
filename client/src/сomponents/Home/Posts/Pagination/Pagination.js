import React from "react"
import styles from "../../../../scss-blocks/Home/Post/Pagination.module.scss"

const Pagination = (props) => {
  return (
    <ul className={styles.pageNav}>
      <li className={styles.pageItem}>
        <a href={"/#"} className={styles.pageLink}>
          {"<"}
        </a>
      </li>
        
      { props.pages.map(p => 
      <li className={styles.pageItem}>
        <a href={"/#"} className={(props.currentPage === p) ? styles.activePage : styles.pageLink}>
          {p}
        </a>
      </li>
      )}

       <li className={styles.pageItem}>
        <a href={"/#"} className={styles.pageLink}>
          {">"}
        </a>
      </li>
    </ul>
    
  )
}

export default Pagination
