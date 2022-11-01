import React, {useState, useEffect, useContext} from 'react';
import { getProductos } from '../utils/firebase';
import { Link } from 'react-router-dom';
// import { DarkModeContext } from '../../context/DarkModeProvider';

const ItemListContainer = () => {
    const [stock, setStock] = useState([]);

    // const {darkMode, toggleDarkMode} = useContext(DarkModeContext);
    useEffect(() => {
        getProductos().then(stock => {
            const cards = stock.map(producto=>
                <div className="card cardHover cardProducto " key={producto[0]}>
                    <div className="card-body d-flex flex-column ">
                        <div className="mt-auto">
                        <Link className='nav-link' to={"/producto/" + producto[0]}><img className="card-img-top" src={producto[1].img} alt={producto[1].nombre} /></Link>
                        <h5 className="card-title ">{producto[1].nombre}</h5>
                        <p className="card-text price"><b>${producto[1].precio}</b></p>
                        <p className="card-text">Stock disponible: {producto[1].stock}</p>
                        </div>
                        <div className='btncard mt-auto'>
                            <button className="btn-details btn btn-primary homeDetails"><Link className='nav-link' to={"/producto/" + producto[0]}>Ver Detalles</Link></button>
                        </div>
                    </div>
                </div>)
            setStock(cards)
        })
    }, []);

    return (
        <div className='row'>
            {stock}
        </div>
    );
}

export default ItemListContainer;