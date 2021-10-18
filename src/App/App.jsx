import React from "react";
import { useState } from "react";
import GetId from './../Services/Service.jsx'
import NavBar from "./NavBar.jsx";
import LogIn from "./LogIn.jsx";


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


  return (
    <div className={styles.wrapAppPrj}>
      <NavBar />

      {auth === 'true' ? <SeeInfo /> : <LogIn auth={auth} />}


      {/* Не задействуется в отображении */}
      < GetId setItems={setItems} />
    </div>
  );
}

export default App;

