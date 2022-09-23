import React from 'react';

const ItemListContainer = ({greeting}) => {
    return (
        <>
        <div className='cardBody'>
        <div className="card text-white bg-primary mb-3" style={{maxWidth: '20rem'}}>
        <div className="card-header">Zapatilla 1</div>
        <div className="card-body">
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, veniam?</p>
            <button type="button" className="btn btn-outline-light">Light</button>
            <p>{greeting}</p>
        </div>
        </div>
        </div>
        </>
    );
}
export default ItemListContainer;
