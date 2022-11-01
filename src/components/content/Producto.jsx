import React, {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import DetalleProducto from './DetalleProducto';
import { getProducto } from '../utils/firebase';

const Producto = () => {
    const [producto, setProducto] = useState([]);
    const {id} = useParams()
    useEffect(() => {
        getProducto(id).then(prod => {
            setProducto(prod)
        })
    }, []);

    if (producto.length != 0) {
        return (
            <div className="card mb-3" style={{maxWidth: '540 px'}}>
                <DetalleProducto producto={producto}/>
            </div>
    )
}};

export default Producto;