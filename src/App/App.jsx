import React from "react";
import { useState } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import GetId from './../Services/Service.jsx'
import NavBar from "./NavBar.jsx";
import LogIn from "./LogIn.jsx";
import BlogPage from "./BlogPage.jsx";
import NoAuth from "./NoAuth.jsx";


import styles from './../Styles/AppST/App.module.css'





function App() {

  const valueLS = (localStorage.getItem('auth') === "true")
  const [items, setItems] = useState([]);
  const [auth, setState] = useState(valueLS || false)


  function clSBM(e) {
    e.preventDefault();
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
              <LogIn clSBM={clSBM} />
            </Route> : null}

          <Redirect to="/" />
        </Switch>
      </div>


      {/* Не задействуется в отображении */}
      < GetId setItems={setItems} />

    </BrowserRouter >
  );
}

export default App;

