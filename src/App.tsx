import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu/Menu';
import ForgotPass from './pages/Login/ForgotPass';
import Login from './pages/Login/Login';
import ResetPass from './pages/Login/ResetPass';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/forgot' element={<ForgotPass />} />
          <Route path='/reset' element={<ResetPass />} />
          <Route path='/menu' element={<Menu />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
