import logo from './logo.svg';
import React from 'react';
import './App.css';
import Bienvenida from './componentes/Bienvenida.jsx';
import Posts from './componentes/Posts.jsx';
import Carrusel from './componentes/Carrusel.jsx';
import Nosotros from './componentes/Nosotros.jsx';
import Contacto from './componentes/Contacto.jsx';
import Footer from './componentes/Footer.jsx';
function App(){
  return (
    <>
      <Bienvenida />
      <Posts/>
      <Carrusel/>
      <Nosotros/>
      <Contacto />
      <Footer/>
    </>
  );
}
export default App;
