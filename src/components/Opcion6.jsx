// En Opcion6.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Body from './Body';
import miLogo from '../imgs/dog.png';
import miLine from '../imgs/linee.png';
import '../styles/Opcion6.css'; 

// Componente Spinner
const Spinner = () => (
  <div className="spinner-container">
    <div className="spinner"></div>
  </div>
);

const Opcion6 = () => {
    const navigate = useNavigate();
    const [mostrarContenido2, setMostrarContenido2] = useState(false);

    const handleIniciarPrueba = () => {
        // Al hacer clic en el botón, activa la lógica para mostrar el contenido2
        setMostrarContenido2(true);

        // También puedes agregar aquí la lógica para redirigir después de 5 segundos si es necesario
        const timer = setTimeout(() => {
        navigate('/test'); // Utiliza navigate en lugar de history.push
        }, 5000);

        // Limpia el temporizador al desmontar el componente
        return () => clearTimeout(timer);
    };
    
    // Contenido que deseas agregar al Body
    const contenido = (
        <>
            <h3>✔ Prueba Psicologica</h3>
            <br /><br />
            <p className='pp1'>Esta prueba nos permitirá conocer como más de ti y como accionarias en diferentes ecenarios. Dentro del test tendrás que seleccionar que acción tomarias y como concideras las acciones de indivudios ficticos ante estas situaciones.</p>
            <br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br />
            <p className='pp1'>⚠️ El formulario solo podrá ser completado una vez, por lo tanto te recomendamos que te tomes el tiempo de analizar detalladamente cada pregunta.</p>
            
            <button className="boton-prueba-psicologica" onClick={handleIniciarPrueba}>Iniciar Prueba Psicológica</button>
            
        </>
    );

    const contenido2 = (
        <>
            <img src={miLogo} alt="Mi Logo"/>
            <h2>🐾🐾PetAssistant🐾🐾</h2>
            <br /><br /><br />
            <center><h1>PRUEBA PSICOLOGICA</h1></center>
            <br />
            <center><img src={miLine} alt="Mi Line"/></center>
            <center><p>Esta prueba nos permitirá conocer como más de ti y como accionarias en diferentes ecenarios.</p>
            <p>Dentro del test tendrás que seleccionar que acción tomarias y como concideras las acciones de indivudios ficticos ante estas situaciones.</p></center>
            <center><img src={miLine} alt="Mi Line"/></center>
            <center>
                <Spinner /> {/* Agrega el Spinner debajo del contenido entre las etiquetas <center> */}
            </center>

        </>
    );

    return(
        <div className="container">
            {!mostrarContenido2 && <Header />}
            {!mostrarContenido2 && <Body contenido={contenido} />}
            {mostrarContenido2 && contenido2}
        </div>
    );
}

export default Opcion6;