import React,{createContext, useState} from 'react';

const CarritoContext = createContext()

const CarritoProvider = (props) => {
    const [cart, setCart] = useState([]);
    const agregarProducto = (prod, cant) => {
        const aux = cart
            let indice = aux.findIndex( producto => producto.id == prod.id)
        if (indice != -1){
            aux[indice].stock = cant
        }else{
            const id= prod[0]
            const x= prod[1]
            const prodCarrito = {id, ...x, stock:cant}
            aux.push(prodCarrito)
        }
        setCart(structuredClone(aux))
        console.log(cart)
    }
    const removerProducto = (prod) => {
        const aux = cart
        let indice = aux.findIndex( producto => producto.id == prod.id)
        aux.splice(indice,1)
        setCart(structuredClone(aux))
        console.log(cart)
    }
    return (
        <>
            <CarritoContext.Provider value={{cart, agregarProducto, removerProducto}}>
                {props.children}
            </CarritoContext.Provider>
        </>
    );
}

export {CarritoContext, CarritoProvider};
