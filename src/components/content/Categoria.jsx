import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { BDD } from "../utils/functions";
import { Link } from "react-router-dom";
const Categoria = () => {

    const [stock, setStock] = useState([]);
    const {id} = useParams()
    useEffect(() => {
        BDD().then( stock => {
            const Categorias = stock.filter ( stock => stock.idCategoria == id)
            const cards = Categorias.map(stock =>
                <div className="card cardProducto" key={stock.id}>
                    <img className="card-img-top" src={stock.img} alt={stock.nombre} />
                    <div className="card-body">
                        <h5 className="card-title">{stock.nombre}</h5>
                        <p className="card-text"><h2>${stock.precio} </h2></p>
                        <p className="card-text">Stock disponible: {stock.cantidad}</p>
                        <div className='btncard'>
                            <button className="btn-details btn btn-primary cardCategoria"><Link className='nav-link' to={"/producto/" + stock.id}>Ver Detalles</Link></button>
                        </div>
                    </div>
                </div>)

            setStock(cards)
        })
    }, [id]);
    return (
        <div className="row">
            {stock}
        </div>
    );
}

export default Categoria;