// En App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Inicio from './components/Inicio';  
import Login from './components/Login';    
import Register from './components/Register';  
import Opcion1 from './components/Opcion1';
import Opcion2 from './components/Opcion2';
import Opcion3 from './components/Opcion3';
import Opcion4 from './components/Opcion4';
import Opcion5 from './components/Opcion5';
import Opcion6 from './components/Opcion6';
import Test from './components/Test';
import Perfil1 from './components/Perfil1';
import Perfil2 from './components/Perfil2';
import Perfil3 from './components/Perfil3';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <Link to="/"></Link>
            <Link to="/login"></Link>
            <Link to="/register"></Link>
            <Link to="/opcion1"></Link>
            <Link to="/opcion2"></Link>
            <Link to="/opcion3"></Link>
            <Link to="/opcion4"></Link>
            <Link to="/opcion5"></Link>
            <Link to="/opcion6"></Link>
            <Link to="/test"></Link>
            <Link to="/perfil1"></Link>
            <Link to="/perfil2"></Link>
            <Link to="/perfil3"></Link>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/opcion1" element={<Opcion1 />} />
          <Route path="/opcion2" element={<Opcion2 />} />
          <Route path="/opcion3" element={<Opcion3 />} />
          <Route path="/opcion4" element={<Opcion4 />} />
          <Route path="/opcion5" element={<Opcion5 />} />
          <Route path="/opcion6" element={<Opcion6 />} />
          <Route path="/test" element={<Test />} />
          <Route path="/perfil1" element={<Perfil1 />} />
          <Route path="/perfil2" element={<Perfil2 />} />
          <Route path="/perfil3" element={<Perfil3 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
