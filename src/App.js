import React, { useState, createContext } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Shipment from './Components/Shipment/Shipment';
import Home from './Components/Home/Home';

export const categoryContext = createContext(); 

function App() {

  const [ count, setCount ] = useState(0);

  return (
    <categoryContext.Provider value={count}>
      <h3>Count: {count} (In app.js)</h3>
      <Header count={count} setCount={setCount}></Header>
      <Home count={count} setCount={setCount}></Home>
      <Shipment></Shipment>
    </categoryContext.Provider>
  );
}

export default App;
