import React, { useState } from 'react';
import styles from './Header.module.css';
import Search from '../Search/Search';

function Header(props) {
    const { searchMovie, handleFilter, type } = props;

    return (
        <nav>
            <a href="index.html"><h1 className={styles.logo}>Film Searcher</h1></a>
            <ul>
                <li>
                    <label className={styles.radioContainer}>
                        <input
                            name='type'
                            type='radio'
                            className={styles.radio}
                            data-type="all"
                            onChange={handleFilter}
                            checked={type === 'all'}
                        />
                        <span className={styles.radioCustom}></span>
                        All
                    </label>
                </li>
                <li>
                    <label className={styles.radioContainer}>
                        <input
                            name='type'
                            type='radio'
                            className={styles.radio}
                            data-type='series'
                            onChange={handleFilter}
                            checked={type === 'series'}
                        />
                        <span className={styles.radioCustom}></span>
                        Series
                    </label>
                </li>
                <li>
                    <label className={styles.radioContainer}>
                        <input
                            name='type'
                            type='radio'
                            className={styles.radio}
                            data-type='movie'
                            onChange={handleFilter}
                            checked={type === 'movie'}
                        />
                        <span className={styles.radioCustom}></span>
                        Movies
                    </label>
                </li>
                <li><Search searchMovie={searchMovie} /></li>
            </ul>
        </nav>
    );
}

export default Header;