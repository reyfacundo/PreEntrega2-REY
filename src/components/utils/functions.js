export const BDD = async() =>{
    const response = await fetch ('./json/stock.json')
    const stock = await response.json()
    const cards = stock.map(stock=>
        <div className="card cardProducto" key={stock.id}>
            <img className="card-img-top" src={"./img/" + stock.img} alt={stock.nombre} />
            <div className="card-body">
                <h5 className="card-title">{stock.nombre}</h5>
                <p className="card-text">Precio: <b>${stock.precio} USD</b></p>
                <p className="card-text">Stock disponible: {stock.cantidad}</p>
                <div className='btncard'>
                    <button className="btn btn-primary">Go somewhere</button>
                </div>
            </div>
        </div>
    )
return cards
}
