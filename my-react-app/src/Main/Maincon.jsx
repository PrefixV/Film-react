import styles from './Maincon.module.css';
import React, { Component } from 'react';
import Movies from '../Movies/Movies';
import Preloader from '../Preloader/Preloader';
import Search from '../Search/Search';
import Header from '../Header/Header';

class Main extends Component {
    state = {
        movies: [],
        error: null,
        loading: false,
        type: 'all', // Добавляем состояние для типа
    };

    searchMovie = (query, type = this.state.type) => {
        this.setState({ loading: true, error: null });

        const apiKey = 'a85039d6';
        fetch(`http://www.omdbapi.com/?s=${query}&apikey=${apiKey}${type !== 'all' ? `&type=${type}` : ''}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`Ошибка: ${res.status} ${res.statusText}`);
                }
                return res.json();
            })
            .then((data) => {
                if (data.Response === 'False') {
                    throw new Error(data.Error || 'Данные не найдены');
                }
                this.setState({ movies: data.Search, loading: false });
            })
            .catch((error) => {
                console.error('Ошибка при загрузке данных:', error);
                this.setState({ error: error.message, loading: false });
            });
    };

    handleFilter = (e) => {
        const type = e.target.dataset.type;
        this.setState({ type }, () => {
            this.searchMovie(this.state.search, type);
        });
    };

    componentDidMount() {
        this.searchMovie('Matrix');
    }

    render() {
        const { movies, error, loading, type } = this.state;
        return (
            <>
                <Header
                    searchMovie={this.searchMovie}
                    handleFilter={this.handleFilter}
                    type={type}
                />
                <main className={styles.content}>
                    {loading ? (
                        <Preloader />
                    ) : error ? (
                        <p>{error}</p>
                    ) : movies.length ? (
                        <Movies movies={movies} />
                    ) : (
                        <p>Ничего не найдено</p>
                    )}
                </main>
            </>
        );
    }
}

export default Main;