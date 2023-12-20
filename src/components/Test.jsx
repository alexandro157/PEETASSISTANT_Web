// En Test.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Test.css';
import Dog from '../imgs/dog.png';
import Linee from '../imgs/linee.png';

const Test = () => {
    return(
        <div className="containertest">
            <div className="logotest">
                <img src={Dog} alt="Mi Imagen"/>
            </div>
            <h2 className='pet'>PetAssistant</h2>
            <br />
            <h1 className='texxt'><center><b>PRUEBA PSICOLOGICA</b></center></h1>
            <center><img src={Linee} alt="Mi Line" style={{position: 'absolute', top: '23%', left: '84%', transform: 'translate(-100%, -100%)'}}/></center>
            <br />
            <div className='parrafo'>
                <p>Situación número 01:</p>
                <p>Rufus es un perro que sufre de ataques de ansiedad que le generan cuadros epilepticos y durante la tarde escuchó un ruido que le generó conmosión. Rufus se encuetrá en tu patio con un cuadro epileptico. Califica las siguientes acciónes:</p>
            </div>
            
            <div class="cuadrado" style={{position: 'absolute', top: '23%', left: '84%', transform: 'translate(-145%, 25%)'}}>
                <div class="elemeto"></div>
                <div class="elemeto">Acción apropiada</div>
                <div class="elemeto"><center>Acción inapropiada</center></div>
                <div class="elemeto"><center>Acción muy inapropiada</center></div>
                
                {/* Primer grupo 3 */}
                <div class="elemeto">Llevo a Rufus a la clinica veterinaria más cercana.</div>
                <div class="elemeto"><input type="radio" name="opcion1" value="valor1" /></div>
                <div class="elemeto"><input type="radio" name="opcion1" value="valor2" /></div>
                <div class="elemeto"><input type="radio" name="opcion1" value="valor3" /></div>

                {/* Segundo grupo 3 */}
                <div class="elemeto">Espero a que se recupere solo, porque siempre le pasa.</div>
                <div class="elemeto"><input type="radio" name="opcion2" value="valor1" /></div>
                <div class="elemeto"><input type="radio" name="opcion2" value="valor2" /></div>
                <div class="elemeto"><input type="radio" name="opcion2" value="valor3" /></div>

                {/* Tercer grupo 3 */}
                <div class="elemeto">Busco algún tutorial o video para darle primeros auxilios.</div>
                <div class="elemeto"><input type="radio" name="opcion3" value="valor1" /></div>
                <div class="elemeto"><input type="radio" name="opcion3" value="valor2" /></div>
                <div class="elemeto"><input type="radio" name="opcion3" value="valor3" /></div>
            </div>

            {/* Botón para redireccionar a otra vista */}
            <div style={{ textAlign: 'center', marginTop: '20px', position: 'absolute', top: '90%', left: '86%', transform: 'translate(-145%, 25%)'}}>
                <Link to="/perfil1">
                    <button className="boton-redireccion">Continuar</button>
                </Link>
            </div>
            
        </div>
    );
}

export default Test;