// En Login.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import '../styles/Login.css';
import miLogin from '../imgs/login_2.png';
import miLogo from '../imgs/dog.png';

const Login = () => {
  return (
    <div className="login-container">
      <div className="left-half"> 
        <img src={miLogin} alt="Mi Login"/>
      </div>

      <div className="right-half">
        <div className='logo-container'>
          <img src={miLogo} alt="Mi Logo" className='logo'/>
        </div>
        
          {/* Inputs para el correo electrónico */}
        <div className="input-container">
          <input type="email" placeholder="Correo electrónico" className="email-input" />
            <FontAwesomeIcon icon={faEnvelope} className="correo" />
        </div>

          {/* Input para la contraseña */}
        <div className="input-container">
          <input type="password" placeholder="Contraseña" className="password-input" />
          <FontAwesomeIcon icon={faLock} className="contra" />
        </div>

        <div className="line1"></div> 
        <div className="line2"></div>
        
        <p style={{ position: 'absolute', top: '50%', left: '76.7%', transform: 'translate(-50%, -40%)' }}>O</p>

        <button className="google-btn" style={{position: 'absolute', top: '50%', left: '76.7%', transform: 'translate(-50%, 200%)'}}>
          <FontAwesomeIcon icon={faGoogle} className="google-icon" />
            Continuar con Google
        </button>

        <div className="checkbox-container" style={{ position: 'absolute', top: '50%', left: '68.4%', transform: 'translate(-50%, 630%)' }}>
          <input type="checkbox" id="rememberMe" className="remember-checkbox" />
          <label htmlFor="rememberMe" className="remember-label">Acuérdate de mí</label>
        </div>

        <a href="https://www.youtube.com/" className="forgot-password-link" style={{ position: 'absolute', top: '50%', left: '82.7%', transform: 'translate(-50%, 730%)' }}>¿Has olvidado tu contraseña?</a>

        <a href='/register' className="register-btn" style={{ position: 'absolute', top: '50%', left: '12.7%', transform: 'translate(-50%, 750%)' }}>Registrar</a>
        <button className="login-btn" style={{ position: 'absolute', top: '50%', left: '77.7%', transform: 'translate(-50%, 580%)' }}>Iniciar Sesión</button>

      </div>
    </div>
  );
}

export default Login;
