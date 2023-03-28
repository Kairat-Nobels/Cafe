import styles from './Spinner.module.css'

function Spinner() {
  return (
    <div className={styles.spinner}>
        <h1>Еда готовиться..</h1>
        <div className={styles.cooking}>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
            <div className={styles.area}>
                <div className={styles.sides}>
                    <div className={styles.pan}></div>
                    <div className={styles.handle}></div>
                </div>
                <div className={styles.pancake}>
                    <div className={styles.pastry}></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Spinner