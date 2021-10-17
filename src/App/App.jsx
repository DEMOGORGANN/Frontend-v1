import React from "react";
import { useState } from "react";
import GetId from './../Services/Service.jsx'
import NavBar from "./NavBar.jsx";


import styles from './../Styles/AppST/App.module.css'

function App() {


  const [items, setItems] = useState([]);
  const [auth] = useState(localStorage.getItem('auth') || 'false')


  const SeeInfo = () => {
    return (
      <div>
        {items.map(it => {
          return (
            <div key={it.id}>
              <h1>{it.name}</h1>
            </div>)
        })}
      </div>
    )
  }

  function click() {
    if (localStorage.getItem('auth') === 'true') {
      localStorage.setItem('auth', 'false')
    } else {
      localStorage.setItem('auth', 'true')
    }
  }

  return (
    <div className={styles.wrapAppPrj}>
      <NavBar />
      <button onClick={click}>test</button>

      {auth === 'true' ? <SeeInfo /> : null}





      {/* Не задействуется в отображении */}
      < GetId setItems={setItems} />
    </div>
  );
}

export default App;

