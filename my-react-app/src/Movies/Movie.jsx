import styles from './Movies.module.css'
function Movie(props) {
    const { Title:title, 
        Year:year, 
        imdbID:id, 
        Type:type, 
        Poster:poster 
    } = props;
    
    return (
        <div id={id} className={styles.movieCard}>
             <div className={styles.imgCon}>
                <img src={poster}></img>
             </div>
             <div className={styles.infoCon}>
                <h3>{title}</h3>
                <div className={styles.yearType}>
                    <p className={styles.year}>{year}</p>
                    <p className={styles.type}>{type}</p>
                </div>
             </div>
        </div>    
    )
}

export default Movie