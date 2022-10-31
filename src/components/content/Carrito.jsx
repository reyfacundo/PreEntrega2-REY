import React,{useContext, useEffect, useState} from 'react';
import { CarritoContext } from '../../context/CarritoContext';

const Carrito = () => {
    const {cart, agregarProducto, removerProducto} = useContext(CarritoContext)
    const [localCart, setlocalCart] = useState([]);
    useEffect(() => {
        const prodMostrar = cart.map(stock =>
            <div className="card cardProducto" key={stock.id}>
            <img className="card-img-top" src={stock.img} alt={stock.nombre} />
            <div className="card-body">
                <h5 className="card-title">{stock.nombre}</h5>
                <p className="card-text">Precio: <b>${stock.precio} USD</b></p>
                <p className="card-text">Precio Total: <b>${stock.precio * stock.stock} USD</b></p>
                <p className="card-text">Cantidad: <b>{stock.stock} </b></p>
                <div className='btncard'>
                    <button className="btn-details btn btn-primary" onClick={()=> removerProducto(stock)}>Eliminar</button>
                </div>
            </div>
        </div>)
        setlocalCart(prodMostrar)
    }, [cart]);

    const app = (cart.length != 0) ? <div className='row'>
    {localCart}</div> : <><h1>No existen elementos en el carrito</h1>
    <button className='btn-details btn btn-primary'>VOLVER HOME</button></>;
    return app
}

export default Carrito;
