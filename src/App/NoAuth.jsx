import React from "react";
import { Link } from "react-router-dom"


import styles from './../Styles/NoAuthST/NoAuth.module.css'

function NoAuth() {
    return (
        <div className={styles.wrapNoAuth}>
            <span>Упс, необходимо войти</span>
            <Link to="logIn">Вход</Link>
        </div>
    )
}

export default NoAuth;

