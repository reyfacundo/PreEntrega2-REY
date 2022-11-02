import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './itemCount';

const DetalleProducto = ({producto}) => {
    return (
        <>
        <div className='cardDetail'>
            <div className="cardChild card mb-3 detailBody" style={{maxWidth: '900px'}}>
                <Link to={"/"}><button className="return"><i className="return-icon fa-solid fa-chevron-left"></i></button></Link>
                <div className="row g-0">
                    <div className="cardImg col-md-4">
                        <img src={producto[1].img} className="detailImg img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                        <h5 className="card-title detailTitle">{producto[1].nombre}</h5>
                        <p className="card-text detailPrice"><h2 className='precioh2'>${producto[1].precio}</h2></p>
                        <p className="card-text">Stock:{producto[1].stock}</p>
                        <div className="buyButton">
                        <ItemCount producto={producto}/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default DetalleProducto;

