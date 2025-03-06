import React from 'react';
import styles from './Search.module.css';
import 'boxicons';

class Search extends React.Component {
    state = {
        search: '',
    };

    handleKey = (e) => {
        if (e.key === 'Enter') {
            this.props.searchMovie(this.state.search, this.props.type);
        }
    };

    handleSearch = () => {
        const { search } = this.state;
        if (search.trim()) {
            this.props.searchMovie(search, this.props.type);
        } else {
            alert('Пожалуйста, введите запрос');
        }
    };

    render() {
        const { search } = this.state;
        return (
            <div className={styles.searchContainer}>
                <input
                    type="text"
                    placeholder="Search"
                    className={styles.search}
                    value={search}
                    onChange={(e) => this.setState({ search: e.target.value })}
                    onKeyDown={this.handleKey}
                />
                <button className={styles.searchButton} onClick={this.handleSearch}>
                    <box-icon name='right-arrow-alt' color='#ffffff'></box-icon>
                </button>
            </div>
        );
    }
}

export default Search;