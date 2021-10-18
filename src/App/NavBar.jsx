import React from "react";
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";


import styles from './../Styles/NavBarST/NavBar.module.css'

function NavBar() {


    return (
        <Router>
            <div className={styles.wrapNavBar}>
                <div className={styles.wrapA}>
                    <Link to="/">#</Link>
                    <Link to="/blog">Записи</Link>
                    <Link to="/logIn">Вход</Link>
                </div>
            </div>
        </Router>
    );
}

export default NavBar;

