import React from 'react';

import './App.css';

import Landing from './components/Landing/Landing';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

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

export default App;
