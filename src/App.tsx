import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import {Footer, Header} from './components';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
