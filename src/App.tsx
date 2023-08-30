import React, { useState } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import './App.css';
import {Footer, Header} from './components';
import { AboutUs, Home, Projects } from './Pages';

const App: React.FC = () => {
  const [category, setCategory] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleChooseCategory = (newCategory: string) => {
    navigate('/projects');
    setCategory(newCategory);
    window.scroll(0,0)
  }

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home handleChooseCategory={handleChooseCategory}/>}/>
        <Route path='/projects' element={<Projects category={category} handleChooseCategory={handleChooseCategory}/>}/>
        <Route path='/about' element={<AboutUs/>}/>
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
