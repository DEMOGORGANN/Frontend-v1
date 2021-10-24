import React from "react";
import { useState } from "react/cjs/react.development";

import styles from './../Styles/AddItemST/AddItem.module.css'

function AddItems({ items }) {

    const [themeMes, setTheme] = useState();
    const [Message, setMes] = useState();

    async function setItem(e) {
        e.preventDefault();
        if (themeMes !== null && themeMes !== "" && themeMes !== undefined && Message !== null && Message !== "" && Message !== undefined) {
            const newArr = { id: Math.random() * 100, Theme: themeMes, Message: Message }
            try {
                const response = await fetch("http://localhost:3000/items", {
                    method: "POST",
                    body: JSON.stringify(newArr),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const json = await response.json();
                console.log('Успех:', JSON.stringify(json));

            }
            catch (error) {
                console.error('Ошибка:', error);
            }
            finally {
                document.getElementById('them').value = "";
                document.getElementById('mes').value = "";
                setTheme('');
                setMes('');
            }
        }
    }

    return (
        <div >
            <form className={styles.formLog}>
                <label >Тема:</label>
                <input type="text" name="themeMessage" placeholder="Тема заметки..." id="them" onChange={(e) => setTheme(e.target.value)} />
                <label >Заметка:</label>
                <input type="text" name="Message" placeholder="Заметка..." id="mes" onChange={(e) => setMes(e.target.value)} />
                <input type="submit" value="Добавить" onClick={setItem} />
            </form>
        </div>
    )
}

export default AddItems;

