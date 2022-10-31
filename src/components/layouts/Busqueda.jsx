import React from 'react';

const Busqueda = () => {
    return (
        <>
            <form className="d-flex">
                <input className="form-control me-sm-2" type="text" placeholder="Buscar productos" />
                <button className="btn btn-secondary my-2 my-sm-0" type="submit">BUSCAR</button>
            </form>
        </>
    );
}

export default Busqueda;
