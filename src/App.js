import React, { useState } from 'react';

import './App.css';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

import 'bootstrap/dist/css/bootstrap.min.css';
import Contador from './components/ItemCount/ItemCount';
import ItemList from './components/ItemList/ItemList';

const App = () => {
  return (
    <div className='App'>
      <NavBar />
      <ItemList />
      <ItemListContainer/>
      <Contador/>
  </div>
  );
}

export default App;
