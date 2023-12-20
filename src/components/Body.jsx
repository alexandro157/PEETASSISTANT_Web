// Header.jsx
import React from 'react';
import '../styles/Body.css'; 

const Body = ({ contenido }) => {
    return (
        <div className='Body'>
            {contenido}
        </div>
        
    );
}

export default Body;