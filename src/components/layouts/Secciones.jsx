import React from 'react';
import { Link } from 'react-router-dom';
import {memo} from 'react';

const Secciones = () => {
    return (
        <>
        <li className="nav-item">
            <Link className="nav-link active" to={"/"}>Tienda Rey</Link>
            <span className="visually-hidden">(current)</span>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to={"/About"}>Nosotros</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to={"/Contacto"}>Contacto</Link>
        </li>
        </>
    );
}

export default memo(Secciones);
