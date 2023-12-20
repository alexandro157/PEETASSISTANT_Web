// En Opcion5.jsx
import React from 'react';
import Header from './Header';
import Body from './Body';
import '../styles/Opcion5.css'; 

const Opcion5 = () => {

    // Contenido que deseas agregar al Body
    const contenido = (
        <>
            <h3>✔ Acuerdos legales</h3>
            <p className='pp1'>⚠️ Lee con detenimiento los acuerdos y terminos legales antes de aceptar la codiciones</p>
            <br />
            {/* Rectángulo con barra de desplazamiento */}
            <div className="scrollable-rectangle">
                <center>
                <p><b>Términos de Servicio</b></p>
                <p>Define claramente los términos y condiciones de uso de la aplicación.
                Establece las responsabilidades tanto de los dueños de mascotas como de los cuidadores al utilizar la plataforma.
                Incluye información sobre pagos, cancelaciones, calificaciones y reseñas.</p>

                <p><b>Política de Privacidad</b></p>
                <p>Describe cómo se recopilan, almacenan y utilizan los datos personales de los usuarios.
                Explica qué información se comparte con terceros y con qué propósito.
                Incluye detalles sobre cookies y tecnologías de seguimiento si son utilizadas.</p>

                <p><b>Acuerdo de Cuidador</b></p>
                <p>Establece los términos específicos para los cuidadores que ofrecen sus servicios a través de la plataforma.
                Incluye detalles sobre la verificación de antecedentes y los requisitos para registrarse como cuidador.
                Especifica las responsabilidades y expectativas durante el cuidado de mascotas.</p>

                <p><b>Acuerdo de Pago</b></p>
                <p>Detalla cómo se manejarán los pagos entre los dueños de mascotas y los cuidadores.
                Especifica las tarifas, el proceso de facturación y cualquier política de reembolso.
                Aclara cualquier tarifa adicional, como comisiones de la plataforma.</p>

                <p><b>Límites de Responsabilidad</b></p>
                <p>Establece los límites de responsabilidad de la plataforma en caso de disputas entre usuarios o problemas durante los servicios de cuidado de mascotas.
                Aclara la responsabilidad en caso de pérdida, daño o lesiones relacionadas con los servicios prestados.</p>

                <p><b>Política de Cancelación</b></p>
                <p>Detalla los procedimientos y penalizaciones en caso de cancelación por parte de los dueños de mascotas o los cuidadores.
                Especifica los plazos y condiciones bajo los cuales se pueden realizar cancelaciones sin penalización.</p>

                <p><b>Propiedad Intelectual</b></p>
                <p>Protege los derechos de propiedad intelectual de la plataforma, incluidos nombres, logotipos y cualquier contenido único.
                Aclara las licencias para el contenido generado por los usuarios.</p>

                <p><b>Arbitraje y Resolución de Disputas</b></p>
                <p>Especifica cómo se resolverán las disputas entre los usuarios y la plataforma.
                Puede incluir un acuerdo de arbitraje y las condiciones para llevar a cabo el proceso.</p>

                <p><b>Actualizaciones de Términos</b></p>
                <p>Reserva el derecho de actualizar los términos y notifica a los usuarios sobre cualquier cambio.
                Establece cómo se aplicarán los cambios a los usuarios existentes.</p>

                <p><b>Leyes Aplicables y Jurisdicción</b></p>
                <p>Indica las leyes que rigen el acuerdo y la jurisdicción donde se resolverán las disputas legales.</p>

                </center>
            </div>

            <div className="checkbox-container2" style={{ position: 'absolute', top: '40%', left: '38.4%', transform: 'translate(-50%, 630%)' }}>
                <input type="checkbox" id="rememberMe" className="remember-checkbox2" />
                <label htmlFor="rememberMe" className="remember-label2">He leido con detenimiento los acuerdos legales</label>
            </div>

            <div className="checkbox-container3" style={{ position: 'absolute', top: '40%', left: '38.44%', transform: 'translate(-49%, 760%)' }}>
                <input type="checkbox" id="rememberMe" className="remember-checkbox3" />
                <label htmlFor="rememberMe" className="remember-label3">Estoy de acuerdo con los terminos y condiciones</label>
            </div>
            <button className="buttoncc">Continuar</button>
        </>
    );

    return(
        <div className="container">
            {/* Encabezado con color rgba(217, 217, 217, 1) */}
            <Header />
            {/* Contenido del Body con el contenido dinámico */}
            <Body contenido={contenido}/>
        </div>
    );
}

export default Opcion5;