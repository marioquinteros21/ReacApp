import React, { useState } from 'react';

import './App.css';

import Landing from './components/Landing/Landing';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
/*import ItemCount from './components/ItemCount/ItemCount';*/

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [counter, setCounter] = useState(0);
  const handleCounterUp = () => {
		setCounter(counter + 1);
  };
  const handleCounterDown = () => {
    setCounter(counter - 1);
    };


  return (
    <div className='App'>
      <NavBar />
      <Landing />
      <ItemListContainer greeting
      title= 'Bienvenidos a Georgias Wines' 
      color ='white'
      />
    

    <div className='CounterSection'>
    <h3>Contador: {counter}</h3>
    <div className='btn-section'>
      <button onClick={handleCounterUp}>Incrementar</button>
      <button onClick={handleCounterDown}>Decrementar</button>
    </div>
  </div>
  </div>
  );
}

export default App;
