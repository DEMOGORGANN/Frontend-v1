import React from "react";
import { useState, useEffect } from "react";


function App() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);



  useEffect(() => {
    fetch("http://localhost:3000/items")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  return (
    <div>
      {items.map(it => {
        return (
          <div>
            <h1>{it.name}</h1>
          </div>
        )
      })}

    </div>
  );
}

export default App;
