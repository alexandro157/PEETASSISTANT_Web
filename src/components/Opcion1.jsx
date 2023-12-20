// En Pregunta1.jsx
import React, { useState }  from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import Header from './Header'; // Ajusta la ruta según la ubicación real del archivo Header
import '../styles/Opcion1.css'; 

const Opcion1 = () => {
    
    // Estado para llevar un seguimiento del botón seleccionado
    const [selectedButton, setSelectedButton] = useState(1);
 
    // Función para manejar los clics en los botones
    const handleButtonClick = (buttonNumber) => {
        setSelectedButton(buttonNumber);
        // Se pueden agregar lógica o acciones adicionales basadas en el botón seleccionado aquí
    };

    return(
        <div className="container">
            {/* Encabezado con color rgba(217, 217, 217, 1) */}
            <Header />
            
            {/* Resto del contenido de tu componente */}
            <br />
            <br />
            <center><h2 >Bienvenido a PettAissitant</h2></center>
            <br />
            <center><h2>Completa los siguentes pasos para poder configurar tu cuenta y emepieza a ser un cuidador</h2></center>
            <br />
            <h2 className='sub'>Pasos requeridos</h2>

            {/* Botones con comportamiento de "radio button" */}
            <div className="button-groups-container">
                {/* Primer grupo de botones */}
                <div className="button-group">
                    <Link to="/paso1">
                        <button className={selectedButton === 1 ? 'selected' : ''} onClick={() => handleButtonClick(1)}>
                        Foto de perfil
                        </button>
                    </Link>
                    <Link to="/paso2">
                        <button className={selectedButton === 2 ? 'selected' : ''} onClick={() => handleButtonClick(2)}>
                        Acuerdos legales
                        </button>
                    </Link>
                    {/* ... Agrega los demás botones del primer grupo */}
                </div>
                
                {/* Segundo grupo de botones */}
                <div className="button-group">
                    <Link to="/paso3">
                        <button className={selectedButton === 3 ? 'selected' : ''} onClick={() => handleButtonClick(3)}>
                        Documento de Identidad
                        </button>
                    </Link>
                    <Link to="/paso4">
                        <button className={selectedButton === 4 ? 'selected' : ''} onClick={() => handleButtonClick(4)}>
                        Certificado de Antecendetes penales
                        </button>
                    </Link>
                    
                    {/* ... Agrega los demás botones del segundo grupo */}
                </div>

                {/* Tercer grupo de botones */}
                <div className="button-group">
                    <Link to="/paso5">
                        <button className={selectedButton === 5 ? 'selected' : ''} onClick={() => handleButtonClick(5)}>
                        Prueba Psicologica
                        </button>
                    </Link>
                </div>

            </div>

        </div>
    );
}

export default Opcion1;