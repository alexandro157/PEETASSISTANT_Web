// Header.jsx
import React from 'react';
import '../styles/Header.css'; 
import petAssistantLogo from '../imgs/dog.png';

const Header = () => {
  return (
    <div className="containerheader">
      <header> 
        <div className="header-content">
          <div className="logo-container">
            <img src={petAssistantLogo} alt="PetAssistant Logo" className="logo" />
          </div>
          <div className="text-container">
            <h1 className='pett'>PetAssistant</h1>
            <a className='btnencabezado' href='https://www.youtube.com/'><center>¿Tienes dudas?</center></a>
          </div>
        </div>

      </header>

      

    </div>
  );
}

export default Header;


