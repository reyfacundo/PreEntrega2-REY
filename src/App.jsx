// " RFC " para auto crear
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react';
import './components/styles/App.css'
import Navbar from './components/content/Navbar.jsx';
// import Pruebo from './components/Pruebo.jsx';
import ItemListContainer from './components/content/ItemListContainer';
import Producto from './components/content/Producto';
import Contacto from './components/content/Contacto';
import Carrito from './components/content/Carrito';
import About from './components/content/About';
import Footer from './components/content/Footer';
import Categoria from './components/content/Categoria';


const App = () => {
    return (
        <>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route element={<ItemListContainer/>} path="/"/>
                <Route element={<Producto/>} path="/producto/:id"/>
                <Route element={<Categoria/>} path="/categoria/:id"/>
                <Route element={<About/>} path="/about"/>
                <Route element={<Contacto/>} path="/contacto"/>
                <Route element={<Carrito/>} path="/carrito"/>
            </Routes>
            <Footer/>
        </BrowserRouter>
            {
            //<Pruebo/>
            }
        </>
    );
}

export default App;
