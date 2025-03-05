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
                <p>{year}</p>
                <p>{type}</p>
             </div>
        </div>    
    )
}

export default Movie