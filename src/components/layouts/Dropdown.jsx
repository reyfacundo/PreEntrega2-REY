import React from 'react';

const Dropdown = () => {
    return (
        <>
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Productos</a>
            <div className="dropdown-menu">
            <a className="dropdown-item" href="#">1</a>
            <a className="dropdown-item" href="#">2</a>
            <a className="dropdown-item" href="#">3</a>
            </div>
            </li>
        </>
    );
}

export default Dropdown;
