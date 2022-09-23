import React from 'react';
import Form from '../layouts/Form.jsx';
import Dropdown from '../layouts/Dropdown.jsx';
import Secciones from '../layouts/Secciones.jsx';
import CartWidget from '../layouts/CartWidget.jsx';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto">
                            <Secciones/>
                            <Dropdown/>
                            <CartWidget/>
                        </ul>
                        <Form/>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
