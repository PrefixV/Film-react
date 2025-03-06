import styles from './Preloader.module.css';

function Preloader() {
    return (
        <div className={styles.preloader}>
        <div className={styles.preloader__bar}></div>
</div>
    )
}

export default Preloader