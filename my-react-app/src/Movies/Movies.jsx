import styles from './Movies.module.css'
import Movie from './Movie.jsx'
function Movies(props) {
    const {movies} = props
    return (
        <div className={styles.movies}>
            {movies.map((movie) => (
                <Movie key={movie.imdbID} {...movie} />
            ))}
        </div>
    );
}

export default Movies