import React from 'react';
//import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './componentes/Index.jsx';
import AvisoPrivacidad from './componentes/AvisoPrivacidad.jsx';
import PoliticaCookies from './componentes/PoliticaCookies.jsx';
import Articulo from './componentes/Articulo.jsx';
import AvisoLegal from './componentes/AvisoLegal.jsx';
function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/articulo" element={<Articulo />} />
        <Route path="/privacidad" element={<AvisoPrivacidad />} />
        <Route path="/cookies" element={<PoliticaCookies />} />
        <Route path="/avisoLegal" element={<AvisoLegal />} />
      </Routes>
    </Router>
  );
}
export default App;
