import React, { useState} from "react";
import "./ItemCount.css";

const Contador = () => {
  const [stockDispo, newStock] = useState("En stock");
  const [counter, setCounter] = useState(0);
  const sinStock = () => {
    newStock("Sin Stock");
  };
  
  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  if (counter === 5) 
  alert("Sin Stock")
  


  return (
    <div className="App">
      <p>{stockDispo}</p>
      <button onClick={sinStock}>Disponibilidad</button>
      <h2>{counter}</h2>
      <button onClick={handleIncrement}>Incrementar</button>
      <button onClick={handleDecrement}>Decrementar</button>
    </div>
  );
};

export default Contador;