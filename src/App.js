import React from 'react';
import './App.css';
import './Colours.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Services from './pages/Services';
import Coffee from './pages/Coffee';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Menu' element={<Menu />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Coffee' element={<Coffee />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App;
