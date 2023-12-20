// En Opcion2.jsx
import React, { useState } from 'react';
import Header from './Header';
import Body from './Body'; 
import '../styles/Opcion2.css'; 
import pf1 from '../imgs/pf1.png';
import pf2 from '../imgs/pf2.png';

const Opcion2 = () => { 
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
            <h3>✔ Agrega una foto para tu perfil</h3>
            <p className='p1'>Este paso permitirá que los demas usuarios te reconzcan y tu perfil genere mayor confiaza en los demás. Una vez cargada la foto, no podrás cambiarla.</p>
            <br />
            <p className='p2'>1. Porcura tomar la foto en un espacio con buena iluminación.</p>
            <p className='p3'>2. Es necesario que el rostro se observe de manera clara, procura que la foto sea solo del rostro.</p>
            <p className='p4'>3. Debes cargar el archivo de una foto sin filtros ni modificaciones, ten en cuenta que no se permite subir fotos de una foto.</p>
            <img src={pf1} alt="Mi Imagen" className='pf1'/>
            <img src={pf2} alt="Mi Imagen2" className='pf2'/>
            {/* Botón para importar imagen */}
            <label className="custom-file-upload">
                <input
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }} 
                    onChange={handleFileChange}
                />
                <div className="button-style">
                    <div className="icon">+</div>
                    <span>Importar Imagen</span>
                </div>
            </label>
        </>
    );

    const contenido2 = (
        <>
            {selectedFile && (
                <div>
                    <h3>✔ Agrega una foto para tu perfil</h3>
                    <p className='p1'>Este paso permitirá que los demas usuarios te reconzcan y tu perfil genere mayor confiaza en los demás. Una vez cargada la foto, no podrás cambiarla.</p>
                    <br />
                    <h3 className='archivo'>📂{selectedFile.name}</h3>
                    {/* Botón para enviar la imagen */}
                    <button className="enviar-boton" onClick={handleEnviarImagen}>
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
                        <div className="actualizar"> 
                            <span>Cambiar de Imagen</span>
                        </div>
                    </label>
                    
                    <p className='p5'>⚠️ Asegurate de que la imagen cargada es la adecuada, recuerda que no podrás cambiarla posteriormente</p>

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

export default Opcion2;