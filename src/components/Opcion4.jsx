// En Opcion4.jsx
import React, { useState } from 'react';
import Header from './Header';
import Body from './Body';
import '../styles/Opcion4.css';
import cert from '../imgs/cert.png'; 
import imgcompleta from '../imgs/imgcompleta.png';

const Opcion4 = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [fileContent, setFileContent] = useState(null);
    const [fullImageUrl, setFullImageUrl] = useState(null);
    const [showFullImage, setShowFullImage] = useState(false);


    const handleImageClick = () => {
        // Establecer la ruta de la imagen completa (cambia 'otra-imagen.png' por la ruta correcta)
        setFullImageUrl(imgcompleta);
        // Cambiar el estado para mostrar la imagen completa
        setShowFullImage(true);
    };

    const FullImageView = () => {
        return (
            <div className="full-image-view">
                <img src={fullImageUrl} alt="Imagen completa" />
                <button className="cerrar-btn" onClick={() => setShowFullImage(false)}>Cerrar</button>
            </div>
        );
    };
    

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
            <h3>✔ Certificado de antecedentes penales</h3>
            <p className='pp1'>Considera lo siguiente: Captura una fotografía en la cual el documento completo se encuentre visible, incluyendo las cuatro esquinas. Asegúrate de que la imagen sea nítida y que toda la información sea legible. En caso de que alguna parte de la información aparezca borrosa o muy brillante debido al flash de la cámara, el documento será rechazado. Se aceptan documentos que tengan una antigüedad de hasta 90 días y que contengan información sobre antecedentes penales, como el Certificado Electrónico de Antecedentes Penales o el Certificado Único Laboral (Certijoven o Certiadulto). Asegúrate de que tu nombre, identificación oficial, fecha de emisión y número de registro sean claramente visibles en la imagen.</p>
            <br />
            
            <img src={cert} alt="Certificado de antecedentes penales-1" className='cert' onClick={handleImageClick}/>
            
            {/* Botón para importar imagen */}
            <label className="custom-file-upload3">
                <input
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }} 
                    onChange={handleFileChange}
                />
                <div className="button-style3">
                    <div className="icon3">+</div>
                    <span>Importar Imagen</span>
                </div>
            </label>
        </>
    );

    const contenido2 = (
        <>
            {selectedFile && (
                <div>
                    <h3>✔ Certificado de antecedentes penales</h3>
                    
                    <br />
                    <h3 className='archivo3'>📂{selectedFile.name}</h3>
                    {/* Botón para enviar la imagen */}
                    <button className="enviar-boton3" onClick={handleEnviarImagen}>
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
                        <div className="actualizar3"> 
                            <span>Cambiar de Imagen</span>
                        </div>
                    </label>
                    
                    

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
            {showFullImage && <FullImageView />}
        </div>
    );
}

export default Opcion4;