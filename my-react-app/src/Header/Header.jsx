import styles from './Header.module.css';
function Header() {
    return (
        <nav>
            <a href="index.html"><h1>Film Searcher</h1></a>
            <ul>
                <li /><a href="#" className={styles.link}>Home</a>
                <li /><a href="#" className={styles.link}>Films</a>
                <li /><a href="#" className={styles.link}>Serials</a>
                <li /><input type="text" placeholder="Search" className={styles.search} />
            </ul>
        </nav>
    );
}


export default Header