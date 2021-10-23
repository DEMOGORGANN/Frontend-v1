import React, { useState } from "react";


import styles from './../Styles/LogInST/LogIn.module.css'

function LogIn({ clSBM, UserDB }) {

    const [valueLogin, setLogin] = useState("");
    const [valuePassw, setPassw] = useState("");





    function LogIns(e) {
        e.preventDefault()
        UserDB.forEach(i => {
            if (valueLogin === i.login && valuePassw === i.password) {
                clSBM()
            }
        })
    }

    return (
        <div className={styles.formLog}>
            <form>
                <label >Логин</label>
                <input type="text" id="Login" placeholder="Your login.." onChange={(e) => setLogin(e.target.value)} />
                <label >Пароль</label>
                <input type="text" id="Passw" placeholder="Your password.." onChange={(e) => setPassw(e.target.value)} />
                <input type="submit" value="Войти" onClick={LogIns} />
            </form>
        </div>
    )
}

export default LogIn;

