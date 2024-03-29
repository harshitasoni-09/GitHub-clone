import React from 'react';
import './App.scss';
import Navbar from './components/navbar';
import Main from './components/Main';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
