import React from 'react';

const DetalleProducto = ({producto}) => {
    return (
        <>
        <div className='cardDetail'>
            <div className="cardChild card mb-3" style={{maxWidth: '900px'}}>
                <div className="row g-0">
                    <div className="cardImg col-md-4">
                        <img src={`../img/${producto.img}`} className="detailImg img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                        <h5 className="card-title">{producto.nombre}</h5>
                        <p className="card-text">Precio: <b>{producto.precio} USD</b></p>
                        <p className="card-text">Stock disponible:{producto.cantidad}</p>
                        <div className="buyButton">
                        <button className="btnBuy btn btn-primary">Comprar</button>
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
