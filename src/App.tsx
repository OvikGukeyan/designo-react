import React, { useState } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import './App.css';
import { Footer, Header } from './components';
import { AboutUs, Contact, Home, Locations, Projects } from './Pages';

const App: React.FC = () => {
  const navigate = useNavigate();


  const handleChooseCategory = (newCategory: string) => {
    navigate('/projects');

    const json = JSON.stringify(newCategory);
    localStorage.setItem('category', json);

    window.scroll(0, 0);
  }

  return (
    <div className="App">
      <Header />
      <div className='wrapper'>
        <Routes>
          <Route path='/' element={<Home handleChooseCategory={handleChooseCategory} />} />
          <Route path='/projects' element={<Projects handleChooseCategory={handleChooseCategory} />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/locations' element={<Locations />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>


      <Footer />
    </div>
  );
}

export default App;
