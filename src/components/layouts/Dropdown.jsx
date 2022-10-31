import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Dropdown = ({categoria}) => {
    const [dropdown, setdropdown] = useState([]);
    useEffect(() => {
        const dropdownCategorias = categoria.map((categoria, indice) =>
        <Link key={indice} className='dropdown-item' to={`/categoria/${indice + 1}`} >{categoria}</Link>
        )
        setdropdown(dropdownCategorias)
    }, []);
    return (
        <>
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Productos</a>
            <div className="dropdown-menu">
                {dropdown}
            </div>
            </li>
        </>
    );
}

export default Dropdown;
