import React from "react";
import { Link } from "react-router-dom"
// import styles from './../Styles/NavBarST/NavBar.module.css'

function NoAuth() {
    return (
        <div>
            <span>Упс, необходимо войти</span>
            <Link to="logIn">Вход</Link>
        </div>
    )
}

export default NoAuth;

