import React from "react";
import { useState, useEffect } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import NavBar from "./NavBar.jsx";
import LogIn from "./LogIn.jsx";
import BlogPage from "./BlogPage.jsx";
import NoAuth from "./NoAuth.jsx";


import styles from './../Styles/AppST/App.module.css'





function App() {

  const valueLS = (localStorage.getItem('auth') === "true")
  const [items, setItems] = useState([]);
  const [UserDB, setUser] = useState([]);
  const [auth, setState] = useState(valueLS || false)


  useEffect(() => {
    if (auth) {
      fetch("http://localhost:3000/items")
        .then(res => res.json())
        .then(
          (result) => {
            setItems(result);
          }
        )
    } else {
      fetch("http://localhost:3000/Users")
        .then(res => res.json())
        .then(
          (result) => {
            setUser(result);
          }
        )
    }

  })


  function clSBM(e) {
    if (auth === false) {
      setState(true)
      localStorage.setItem('auth', true)
    } else {
      setState(false)
      localStorage.setItem('auth', false)
    }
  }



  return (
    <BrowserRouter>


      <div className={styles.wrapAppPrj}>
        <NavBar auth={auth} clSBM={clSBM} />
        <Switch>

          <Route exact path="/">
            <div>
              home
            </div>
          </Route>

          <Route exact path="/blog">

            {auth ? <BlogPage items={items} /> : <NoAuth />}

          </Route>


          {!auth ?
            <Route exact path="/logIn">
              <LogIn clSBM={clSBM} UserDB={UserDB} />
            </Route> : null}

          <Redirect to="/" />
        </Switch>
      </div>

    </BrowserRouter >
  );
}

export default App;
