// " RFC " para auto crear

import React from 'react';
import './components/styles/App.css'
import Navbar from './components/content/Navbar.jsx';
// import Pruebo from './components/Pruebo.jsx';
import ItemListContainer from './components/layouts/ItemListContainer';

const App = () => {
    return (
        <>
            <Navbar/>
            <ItemListContainer greeting="Excelente calidad!"/>
            {
            //<Pruebo/>
            }
        </>
    );
}

export default App;
