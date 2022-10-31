import { initializeApp } from "firebase/app";
import {collection, doc, addDoc, getFirestore, getDocs, getDoc,updateDoc, deleteDoc} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "proyectofinalreact-rey.firebaseapp.com",
    projectId: "proyectofinalreact-rey",
    storageBucket: "proyectofinalreact-rey.appspot.com",
    messagingSenderId: "60545621567",
    appId: "1:60545621567:web:2debf862e6b2a6635de28a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()

const cargarBdd = async () => {
    const promise = await fetch('../../../public/json/stock.json')
    const productos = await promise.json()
    productos.forEach( async(producto)=> {
        await addDoc(collection(db, "productos"),{
            nombre: producto.nombre,
            categoria: producto.idCategoria,
            stock: producto.stock,
            precio: producto.precio,
            img: producto.img
        })
    })
}

const getProducto = async(id) => {
    const producto = await getDoc(doc(db, "productos" , id))
    const prod = [producto.id, producto.data()]
    console.log(prod)
    return prod
}
const getProductos = async () =>{
    const productos = await getDocs(collection(db,"productos"))
    const items = productos.docs.map(producto => [producto.id, producto.data()])
    return items
}

// const updateProducto = async (id, info)=>{
//     const estado = await updateDoc(doc(db, "productos", id), info)
//     return estado
// }
// const deleteProducto = async(id)=>{
//     const estado = await deleteDoc(doc(db,"producto",id))
//     return estado
// }
// const createProducto = async(objProd) =>{
//     const estado = await addDoc(collection(db,"productos"),{
//         nombre: objProd.nombre,
//         categoria: objProd.idCategoria,
//         stock: objProd.stock,
//         precio: objProd.precio,
//         img: objProd.img
//     })
//     return estado
// }

// const createOC = async (precioTotal, nombre, apellido, email, dni, direccion) =>{
//     const oc = await addDoc(collection(db,"oc"),{
//         nombre:nombre,
//         apellido:apellido,
//         email:email,
//         dni:dni,
//         direccion:direccion,
//         precioTotal: precioTotal
//     })
//     return oc
// }
// const getOc = async(id)=>{
//     const oc = await getDoc(doc(db, "oc",id))
//     return oc
// }
export {cargarBdd, getProductos, getProducto}