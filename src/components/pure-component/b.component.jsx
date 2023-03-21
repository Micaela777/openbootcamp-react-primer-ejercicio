import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const BComponent = ({ contact }) => {

    const [state, setstate] = useState(false)

    const newState = () => {
        setstate(state === false)
    }

    return (
        <div>
            <h2>Nombre: { contact.name }</h2>
            <h2>Apellido: { contact.surname }</h2>
            <h2>Email: { contact.email }</h2>
            <h2>Estado: { state ? 'Contacto en línea':'Contacto no disponible' }</h2>
            <button onClick={ newState }>Cambiar Estado</button>
        </div>
    );
};


BComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default BComponent;
