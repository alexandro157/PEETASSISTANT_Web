// En Inicio.jsx
import React from 'react';
import '../styles/Inicio.css';  // Importar el archivo CSS
import miImagen from '../imgs/dog.png';
import miImagen1 from '../imgs/img_1.png';
import miImagen2 from '../imgs/img_2.png';
import miImagen3 from '../imgs/img_3.png';
import miImagen4 from '../imgs/img_4.png';

 
const Inicio = () => {
  return ( 
    <div className="containerInicio">
      <div className="mitad-superior">
        <div className="izquierda">
            <div className="circulo">
                <img src={miImagen} alt="Mi Imagen"/>
            </div>
            <div className="texto">
                <h1>PetAssistant</h1>
            </div>
            <div className="subtexto">
                <p>Se parte de nosotros, <span className="registro-color">Regístrate como Cuidador</span></p>
            </div>
        </div>
        <div className="derecha">
            <a className="registro-btn" href='/register'>Regístrate ahora</a>
            <a className="registro-btn2" href="/login">Inicia Sesion</a>
            
            <div className="subtextoderecha">
                <p>Te enviamos más información</p>
            </div>
        </div>
      </div>
      <div className="mitad-inferior">
        <div className="circulo2">
            <p className="circulo-text">37K</p>
            <p className="cuidadores-text">Cuidadores</p>
        </div>

        <div className="circulo3">
            <p className="circulo-text">1M</p>
            <p className="cuidadores-text">Dueños Registrados</p>
        </div>
        <div className="circulo4">
            <p className="circulo-text">3</p>
            <p className="cuidadores-text">Ciudades</p>
        </div>

        <div className="imagen1">
            <img src={miImagen1} alt="Mi Imagen1"/>
        </div>

        <div className="imagen2">
            <img src={miImagen2} alt="Mi Imagen2"/>
        </div>

        <div className="imagen3">
            <img src={miImagen3} alt="Mi Imagen3"/>
        </div>

        <div className="imagen4">
            <img src={miImagen4} alt="Mi Imagen4"/>
        </div>

        <div className='subtextoinferior'>
            <p>PetAssistent</p>
        </div>

        <div className="linea"></div>

        <div className="enlaces">
          <a href="https://www.google.com/">¿Quiénes somos?</a><br />
          <a href="https://www.google.com/">¿Cómo ser un Cuidador?</a><br />
          <a href="https://www.google.com/">Noticias</a><br />
          <a href="https://www.google.com/">Blog</a>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
