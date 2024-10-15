import React from 'react';
//import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './componentes/Index.jsx';
import AvisoPrivacidad from './componentes/AvisoPrivacidad.jsx';
import PoliticaCookies from './componentes/PoliticaCookies.jsx';
//import Articulo from './componentes/Articulo.jsx';
import AvisoLegal from './componentes/AvisoLegal.jsx';

import BasesDeDatos from './componentes/BasesDeDatos.jsx';
import BasesNoSQL from './componentes/BasesNoSQL.jsx';
import Programacion from './componentes/Programacion.jsx';
import ProgramacionWeb from './componentes/ProgramacionWeb.jsx';
import Aplicaciones from './componentes/Aplicaciones.jsx';
import Contabilidad from './componentes/Contabilidad.jsx';
import Finanzas from './componentes/Finanzas.jsx';
import InvOperaciones from './componentes/InvOperaciones.jsx';
import Redes from './componentes/Redes.jsx';
import SimulacionRedes from './componentes/SimulacionRedes.jsx';
import Calculo from './componentes/Calculo.jsx';
import Probabilidad from './componentes/Probabilidad.jsx';
import Metodologias from './componentes/Metodologias.jsx';
import PosicionamientoSEO from './componentes/PosicionamientoSEO.jsx';
import MarketingDigital from './componentes/PosicionamientoSEO.jsx';

function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />

        <Route path="/base-de-datos-relacional" element={<BasesDeDatos />} />
        <Route path="/base-de-datos-nosql" element={<BasesNoSQL />} />
        <Route path="/programacion" element={<Programacion />} />
        <Route path="/aplicaciones" element={<Aplicaciones />} />
        <Route path="/programacion-web" element={<ProgramacionWeb />} />
        <Route path="/contabilidad" element={<Contabilidad />} />
        <Route path="/finanzas" element={<Finanzas />} />
        <Route path="/investigacion-de-operaciones" element={<InvOperaciones />} />
        <Route path="/redes" element={<Redes />} />
        <Route path="/simulacion-de-redes" element={<SimulacionRedes />} />
        <Route path="/calculo" element={<Calculo />} />
        <Route path="/probabilidad" element={<Probabilidad />} />
        <Route path="/metodologias" element={<Metodologias />} />
        <Route path="/posicionamiento-SEO" element={<PosicionamientoSEO />} />
        <Route path="/marketing-digital" element={<MarketingDigital />} />

        <Route path="/privacidad" element={<AvisoPrivacidad />} />
        <Route path="/cookies" element={<PoliticaCookies />} />
        <Route path="/avisoLegal" element={<AvisoLegal />} />
      </Routes>
    </Router>
  );
}
export default App;
