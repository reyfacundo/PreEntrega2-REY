import React from 'react';
import { Link } from 'react-router-dom';
import Form from '../layouts/Form.jsx';
import Dropdown from '../layouts/Dropdown.jsx';
import Secciones from '../layouts/Secciones.jsx';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto">
                            <Secciones/>
                            <Dropdown/>
                        </ul>
                    </div>
                    <ul>
                    <Link className="nav-link" to={"/Carrito"}><i className="cartIcon fa-solid fa-cart-flatbed fa-xl"></i></Link>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
