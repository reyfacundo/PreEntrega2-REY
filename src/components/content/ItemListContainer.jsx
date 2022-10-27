import React, {useState, useEffect} from 'react';
import { BDD } from '../utils/functions';
import { Link } from 'react-router-dom';

const ItemListContainer = () => {
    const [stock, setStock] = useState([]);
    useEffect(() => {
        BDD().then(stock => {
            const cards = stock.map(stock=>
                <div className="card cardProducto" key={stock.id}>
                    <img className="card-img-top" src={"./img/" + stock.img} alt={stock.nombre} />
                    <div className="card-body">
                        <h5 className="card-title">{stock.nombre}</h5>
                        <p className="card-text">Precio: <b>${stock.precio} USD</b></p>
                        <p className="card-text">Stock disponible: {stock.cantidad}</p>
                        <div className='btncard'>
                            <button className="btn btn-primary"><Link className='nav-link' to={"/producto/" + stock.id}>Ver Detalles</Link></button>
                        </div>
                    </div>
                </div>)

            setStock(cards)
        })
    }, []);


    return (
        <div className="row">
            {stock}
        </div>
    );
}

export default ItemListContainer;
