import React from 'react';
import { Contact } from '../../models/contact.class';
import BComponent from '../pure-component/b.component';


const AComponent = () => {

    const randomContact = new Contact('Micaela', 'Medina', 'mica@apx.school', false)

    return (
        <div>
            <h1>Contacto</h1>
            <BComponent contact={ randomContact }></BComponent>
        </div>
    );
};


export default AComponent;
