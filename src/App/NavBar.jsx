import React from "react";
import {
    Link
} from "react-router-dom";

import styles from './../Styles/NavBarST/NavBar.module.css'

function NavBar({ auth, clSBM }) {


    return (
        <div className={styles.wrapNavBar}>
            <div className={styles.wrapA}>
                <Link to="/">Главная</Link>
                <Link to="/blog">Записи</Link>
                {auth ? <Link to="logIn" onClick={clSBM}>Выход</Link> : <Link to="/logIn">Вход</Link>}
            </div>
        </div>
    );
}

export default NavBar;

