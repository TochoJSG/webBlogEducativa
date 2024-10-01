import React from 'react';
//import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';
import './App.css';
import Index from './componentes/Index.jsx';
import PaginaContenido from './componentes/PaginaContenido.jsx';
function App(){
  return (
    <PaginaContenido/>
  );
}
export default App;

/*

<Router>
  <Routes>
    <Route path="/" element={<Index />}>
  </Routes>
</Router>

*/