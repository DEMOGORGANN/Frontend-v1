import React from "react";



import styles from './../Styles/LogInST/LogIn.module.css'

function LogIn({ clSBM }) {


    return (
        <div className={styles.formLog}>
            <form>
                <label >Логин</label>
                <input type="text" id="fname" name="firstname" placeholder="Your login.." />
                <label >Пароль</label>
                <input type="text" id="lname" name="lastname" placeholder="Your password.." />
                <input type="submit" value="Войти" onClick={clSBM} />
            </form>
        </div>
    )
}

export default LogIn;

