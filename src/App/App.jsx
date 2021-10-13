import React from "react";
import { useState } from "react";
import GetId from './../Services/Service.jsx'

function App() {

  const [items, setItems] = useState([]);


  return (
    <div>
      {items.map(it => {
        return (
          <div key={it.id}>
            <h1>{it.name}</h1>
          </div>)
      })}


      {/* Не задействуется в отображении */}
      < GetId setItems={setItems} />
    </div>
  );
}

export default App;
