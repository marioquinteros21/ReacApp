import React from 'react';

import './App.css';

import Landing from './components/Landing/Landing';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Landing />
      <ItemListContainer greeting
      title= 'Bienvenidos a Georgias Wines' 
      color ='white'
      />
    </div>
  );
}

render();{
  return (
    <div className="App">
      <p>{this.state.counter}</p>
      <button onClick={this.handleIncrement}>Incrementar</button>
      <button onClick={this.handleDecrement}>decrementar</button>
    </div>
  );
}

export default App;
