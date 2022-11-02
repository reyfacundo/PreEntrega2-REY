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
    const total = cart.reduce((acc,prod) => acc + prod.stock * prod.precio, 0);
    const count = cart.reduce((acc, item)=> acc + item.stock,0)
    return (
        <>
            <CarritoContext.Provider value={{cart, agregarProducto, removerProducto, total,count}}>
                {props.children}
            </CarritoContext.Provider>
        </>
    );
}

export {CarritoContext, CarritoProvider};
