import React, {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import DetalleProducto from './DetalleProducto';

const Producto = () => {
    const [producto, setProducto] = useState([]);
    const {id} = useParams()
    useEffect(() => {
        fetch('../json/stock.json')
        .then(response => response.json())
        .then(stock =>{
            const producto1 = stock.find(productoArray => productoArray.id == id)
            setProducto(producto1)
        })
    }, []);
    return (
        <div className="card mb-3" style={{maxWidth: '540 px'}}>
            <DetalleProducto producto={producto}/>
        </div>
    );
}

export default Producto;
