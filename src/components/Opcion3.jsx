// En Opcion3.jsx
import React, { useState } from 'react';
import Header from './Header';
import Body from './Body';
import '../styles/Opcion3.css';
import dni1 from '../imgs/dni1.png';
import dni2 from '../imgs/dni2.png';

const Opcion3 = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [fileContent, setFileContent] = useState(null);

    const handleFileImport = (file) => {
        setSelectedFile(file);

        // Actualiza el nombre del archivo
        const fileName = file.name;
        setFileContent(fileName);

        // Puedes leer el contenido del archivo aquí y almacenarlo en el estado fileContent
        const reader = new FileReader();
        reader.onload = (e) => {
            setFileContent(e.target.result);
        };
        reader.readAsText(file); // Cambia a readAsDataURL si estás trabajando con imágenes
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        handleFileImport(file);
    };

    const handleEnviarImagen = () => {
        // Aquí puedes realizar la lógica para enviar la imagen
        // por ejemplo, enviarla a un servidor, etc.
        console.log('Imagen enviada:', selectedFile);
    };

    // Contenido que deseas agregar al Body
    const contenido = (
        <>
            <h3>✔ Agregue una foto de su documento de identidad</h3>
            <p className='pp1'>Este paso permitirá que los demas usuarios te reconzcan y tu perfil genere mayor confiaza en los demás. Una vez cargada la foto, no podrás cambiarla.</p>
            <br />
            <p className='pp2'>1. Debes ser mayor de 18 años.</p>
            <p className='pp3'>2. Procura que la imagen este cuadrada correctamente.</p>
            <p className='pp4'>3. De preferencia escanea la foto de tu documento.</p>
            <img src={dni1} alt="DNI 1" className='dni1'/>
            <img src={dni2} alt="DNI 2" className='dni2'/>
            {/* Botón para importar imagen */}
            <label className="custom-file-upload2">
                <input
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }} 
                    onChange={handleFileChange}
                />
                <div className="button-style2">
                    <div className="icon2">+</div>
                    <span>Importar Imagen</span>
                </div>
            </label>
        </>
    );
    
    const contenido2 = (
        <>
            {selectedFile && (
                <div>
                    <h3>✔ Agregue una foto de su documento de identidad</h3>
                    <p className='pp1'>Este paso permitirá que los demas usuarios te reconzcan y tu perfil genere mayor confiaza en los demás. Una vez cargada la foto, no podrás cambiarla.</p>
                    <br />
                    <h3 className='archivo2'>📂{selectedFile.name}</h3>
                    {/* Botón para enviar la imagen */}
                    <button className="enviar-boton2" onClick={handleEnviarImagen}>
                    Enviar Imagen
                    </button>

                    {/* Botón para cambiar el archivo */}
                    <label className="actualizarr">
                        <input
                            type="file"
                            accept="image/*"
                            style={{ display: 'none' }} 
                            onChange={handleFileChange}
                        />
                        <div className="actualizar2"> 
                            <span>Cambiar de Imagen</span>
                        </div>
                    </label>
                    
                    <p className='pp5'>⚠️ Asegurate de que la imagen cargada es la adecuada, recuerda que no podrás cambiarla posteriormente</p>

                </div>
            )}
        </>
    );

    return(
        <div className="container">
            {/* Encabezado con color rgba(217, 217, 217, 1) */}
            <Header />
            {/* Contenido del Body con el contenido dinámico */}
            <Body contenido={fileContent ? contenido2 : contenido}/> 
        </div>
    );
}

export default Opcion3;