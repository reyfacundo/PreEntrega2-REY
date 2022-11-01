import React from 'react';
import { useState, useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';

const ItemCount = ({producto}) => {
    const [cantidad, setCantidad] = useState(1);
    const {cart, agregarProducto, removerProducto} = useContext(CarritoContext)

    const cantProducto = (op) => {
        if (op == "+"){
            if(cantidad < producto[1].stock){
                setCantidad(cantidad + 1)
            } 
        }else {
            if (cantidad > 1){
                setCantidad(cantidad - 1)
            }
        }
    }
    return (
        <>
            <button className="btn-details btnBuy btn btn-primary addCart " onClick={()=> agregarProducto(producto, cantidad)}>Add to Cart</button>
            <button className="btn-details btn btn-primary quant minus" onClick={()=> cantProducto("-")}>-</button>
            <p className="card-text quant">{cantidad}</p>
            <button className="btn-details btn btn-primary quant plus" onClick={()=> cantProducto("+")}>+</button>
        </>
    );
}

export default ItemCount;