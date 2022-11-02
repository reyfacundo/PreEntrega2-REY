import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../layouts/Dropdown.jsx';
import Secciones from '../layouts/Secciones.jsx';
import { CarritoContext } from '../../context/CarritoContext';


const Navbar = () => {
    const {count} = useContext(CarritoContext)
    console.log(count)

    const categorias = ["Keyboards", "Cases", "Mouse Pads"]
    return (
        <>
            <nav className="navbar-color navbar navbar-expand-lg">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto">
                            <Secciones/>
                            <Dropdown categoria={categorias}/>
                        </ul>
                    </div>
                    <ul>
                    <Link className="nav-link" to={"/Carrito"}><i className="cartIcon fa-solid fa-cart-flatbed fa-xl"></i><span className='contador'><p>{count}</p></span></Link>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;