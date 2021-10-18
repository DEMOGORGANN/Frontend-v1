import React from "react";



import styles from './../Styles/LogInST/LogIn.module.css'

function LogIn({ auth }) {

    function clSBM() {
        if (localStorage.getItem('auth') === 'true') {
            localStorage.setItem('auth', 'false')
        } else {
            localStorage.setItem('auth', 'true')
        }
    }

    return (
        <div className={styles.formLog}>
            <form>
                <label for="fname">Логин</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.." />

                <label for="lname">Пароль</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.." />


                <input type="submit" value="Войти" onClick={clSBM} />
            </form>
        </div>
    );
}

export default LogIn;

