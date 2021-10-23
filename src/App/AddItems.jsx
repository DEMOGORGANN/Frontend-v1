import React from "react";

import styles from './../Styles/AddItemST/AddItem.module.css'

function AddItems() {


    return (
        <div >
            <form className={styles.formLog}>
                <label >Тема:</label>
                <input type="text" name="themeMessage" placeholder="Тема заметки..." />
                <label >Заметка:</label>
                <input type="text" name="Message" placeholder="Заметка..." />
                <input type="submit" value="Добавить" />
            </form>
        </div>
    )
}

export default AddItems;

