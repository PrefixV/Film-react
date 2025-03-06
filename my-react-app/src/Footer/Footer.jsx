import styles from './Footer.module.css'
function Footer() {
    return (
       <footer>
           <p className={styles.copyright}>Copyright &copy; {new Date().getFullYear()}</p>
       </footer>
    );
}

export default Footer