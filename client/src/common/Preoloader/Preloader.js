import React from "react" 
import styles from "../scss-blocks/Preloader/Preloader.module.scss"

const Preloader = () => {
    const joinClasses=(...classes) => {
        return classes.join(" ")
    }
    return (
        <div>
        <div className={styles.preloader}>
            <div className={styles.lines}>
                <span className={joinClasses(styles.line, styles.lineOne)} />
                <span className={joinClasses(styles.line, styles.lineTwo)} />
                <span className={joinClasses(styles.line, styles.lineThree)} />
            </div>
            <div className={styles.loadingText}>LOADING</div>
        </div>
        </div>
    )
}
export default Preloader