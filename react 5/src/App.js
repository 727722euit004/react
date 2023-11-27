import React from 'react';
import './App.css';
import Home from './Homepage/home.js';
import Brid from './component/grid.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './registration/registration.js';

function App() {
  return (
    <div className="App" style={{ width: "100%", height: "100vh" }}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Brid />} />
          <Route path='/reg' element={<Registration/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
