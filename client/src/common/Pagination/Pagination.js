import React from "react"
import styles from "../scss-blocks/Pagination/Pagination.module.scss"

const Pagination = (props) => {
  return (
    <ul className={styles.pageNav}>
      <li className={styles.pageItem}>
        <span className={styles.pageLink} onClick={() => props.handlePage(props.currentPage++)}>
          {"<"}
        </span>
      </li>
        
      { props.pages.map(p => 
      <li key={p} className={styles.pageItem}>
        <span className={(props.currentPage === p) ? styles.activePage : styles.pageLink} 
        onClick={() => props.handlePage(p)}>
          {p}
        </span>
      </li>
      )}

       <li className={styles.pageItem}>
        <span className={styles.pageLink} onClick={() => props.handlePage(props.currentPage--)}>
          {">"}
        </span>
      </li>
    </ul>
    
  )
}

export default Pagination
