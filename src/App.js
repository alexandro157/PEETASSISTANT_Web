// En App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Inicio from './components/Inicio';  
import Login from './components/Login';    
import Register from './components/Register';  

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <Link to="/"></Link>
            <Link to="/login"></Link>
            <Link to="/register"></Link>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
