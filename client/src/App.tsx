import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import Layout from './Components/Route/Layout';
import Card from './Pages/Card';
import Hero from './Pages/Hero';
import Index from './Pages/Index';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Index/>}/>
        <Route path='/hero' element={<Hero/>}/>
        <Route path='/card' element={<Card/>}/>
      </Route>
    </Routes>
  );
}

export default App;
