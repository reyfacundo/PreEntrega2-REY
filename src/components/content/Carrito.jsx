import React,{useContext, useEffect, useState} from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';

const Carrito = () => {
    const {cart, agregarProducto, removerProducto, total} = useContext(CarritoContext)
    const [localCart, setlocalCart] = useState([]);
    useEffect(() => {
        const prodMostrar = cart.map(stock =>
        //     <div className="card cardProducto" key={stock.id}>
        //     <img className="card-img-top" src={stock.img} alt={stock.nombre} />
        //     <div className="card-body">
        //         <h5 className="card-title">{stock.nombre}</h5>
        //         <p className="card-text">Precio: <b>${stock.precio} USD</b></p>
        //         <p className="card-text">Precio Total: <b>${stock.precio * stock.stock} USD</b></p>
        //         <p className="card-text">Cantidad: <b>{stock.stock} </b></p>
        //         <div className='btncard'>
        //             <button className="btn-details btn btn-primary" onClick={()=> removerProducto(stock)}>Eliminar</button>
        //         </div>
        //     </div>
        // </div>
        <div className="">
            <div>
  <div className="container">
    <div className="wrapper wrapper-content animated fadeInRight">
      <div className="row">
        <div className="col-md-9">
          <div className="ibox">
            <div className="ibox-content">
              <div className="table-responsive">
                <table className="table shoping-cart-table">
                  <tbody key={stock.id}>
                    <tr>
                      <td width={90}>
                        <div className="cart-product-imitation" >
                            <img className="card-img-top" src={stock.img} alt={stock.nombre} />
                        </div>
                      </td>
                      <td className="desc">
                        <h3>
                          <a href="#" className="text-navy">
                            <h5 className="card-title">{stock.nombre}</h5>
                          </a>
                        </h3>
                        <div className="m-t-sm btnDelete">
                            <button className="btn-details btn btn-primary" onClick={()=> removerProducto(stock)}><a href="#" className="text-muted"><i className="fa fa-trash" /> Remove item</a></button>
                        </div>
                      </td>
                      <td>
                        <b>${stock.precio}</b>
                        </td>
                        <td width={65}>
                            <p>{stock.stock}</p>
                      </td>
                      <td>
                        <h4>
                            <b>${stock.precio * stock.stock}</b>
                        </h4>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
        )
        setlocalCart(prodMostrar)
    }, [cart]);

    const app = (cart.length != 0) ? <div className='row'> {localCart} <div className="col-md-3">
    <div className="ibox">

      <div className="ibox-content totalContent">
        <span>
          Total
        </span>
        <h2 className="font-bold">
          ${total}
        </h2>
        <hr />
        <div className="m-t-sm">
          <div className="btn-group">
            <Link to={"/Checkout"}><a href="#" className="btn btn-primary btn-sm"><i className="fa fa-shopping-cart" /> Checkout</a></Link>
          </div>
        </div>
      </div>
    </div>
    </div></div>
    :
    <><div className="empty"><div className="emptySize"><Link to={"/"}><button className='btn-details btn btn-primary btnHome'>HOME</button></Link><h1>Your Cart is empty</h1></div></div></>;
    return app
}

export default Carrito;

