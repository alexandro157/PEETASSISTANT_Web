// En Register.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import '../styles/Register.css';
import registerImagen from '../imgs/register.png';
import miImagen from '../imgs/dog.png';
import miDocs from '../imgs/docs.png';

const Register = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [telefono, setTelefono] = useState('');
  const [confirmarContrasena, setConfirmarContrasena] = useState('');

const handleRegistrar = () => {
    // Aquí puedes agregar la lógica para registrar al usuario
    // utilizando los datos almacenados en los estados
    console.log('Registrando usuario:', { nombre, apellido, correo, contrasena, telefono });
};

const handleCancelar = () => {
  // Restablecer todos los campos a sus valores iniciales
  setNombre('');
  setApellido('');
  setCorreo('');
  setContrasena('');
  setTelefono('');
  setConfirmarContrasena('');
};

  return (
    <div className="register-container">
      <div className="left-section">
        <div className='dog'>
          <img src={miImagen} alt="Mi Imagen"/>

          <input type="text" className="custom-input" placeholder="Nombre" value={nombre} 
            onChange={(e) => setNombre(e.target.value)}/>
          <img className='docs' src={miDocs} alt="Mi Docs"/>

          <input type="text" className="custom-input2" placeholder="Apellido" value={apellido} 
            onChange={(e) => setApellido(e.target.value)} />
          <img className='docs2' src={miDocs} alt="Mi Docs"/>

          <input type="tel" className="custom-input3" placeholder="Número de teléfono" value={telefono} 
            onChange={(e) => setTelefono(e.target.value)} />
          <img className='docs3' src={miDocs} alt="Mi Docs"/>

          <input type="email" className="custom-input4" placeholder="Correo electrónico" value={correo} 
            onChange={(e) => setCorreo(e.target.value)}/>
          <img className='docs4' src={miDocs} alt="Mi Docs"/>

          <input type="password" className="custom-input5" placeholder="Contraseña" value={contrasena} 
            onChange={(e) => setContrasena(e.target.value)} />
          <img className='docs5' src={miDocs} alt="Mi Docs"/>

          <input type="password" className="custom-input6" placeholder="Confirmar Contraseña" value={confirmarContrasena} 
            onChange={(e) => setConfirmarContrasena(e.target.value)} />
          <img className='docs6' src={miDocs} alt="Mi Docs"/>

          <div className="line-divider"></div>
          <div className="line-divider2"></div>

          <p className='p'>O</p>

          <button className="google-btn">
            <FontAwesomeIcon icon={faGoogle} className="google-icon" />
            Continuar con Google
          </button>

          <div className="botones">
            <button className="registrar-btn" onClick={handleRegistrar}>
              Registrar
            </button>
            <button className="cancelar-btn" onClick={handleCancelar}>
              Cancelar
            </button>
          </div>

        </div>
      </div>
      <div className="right-section">
        <img src={registerImagen} alt="Register" />
        {/* Otra opción si deseas agregar la imagen como fondo:
        <div className="register-image" style={{ backgroundImage: `url(${registerImage})` }}></div>
        */}
      </div>
    </div>
  );
}

export default Register;
