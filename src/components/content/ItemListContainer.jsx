import React, {useState, useEffect} from 'react';
import { BDD } from '../utils/functions';

const ItemListContainer = () => {
    const [stock, setStock] = useState([]);
    useEffect(() => {
        BDD().then(stock => setStock(stock))
    }, []);


    return (
        <div className="row">
            {stock}
        </div>
    );
}

export default ItemListContainer;
