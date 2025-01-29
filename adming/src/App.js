import React from 'react';
//import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './componentes/Index.jsx';
import AvisoPrivacidad from './componentes/AvisoPrivacidad.jsx';
import PoliticaCookies from './componentes/PoliticaCookies.jsx';
//import Articulo from './componentes/Articulo.jsx';
import AvisoLegal from './componentes/AvisoLegal.jsx';

import BasesDeDatos from './componentes/publicaciones/BasesDeDatos.jsx';
import BasesNoSQL from './componentes/publicaciones/BasesNoSQL.jsx';
import Programacion from './componentes/publicaciones/Programacion.jsx';
import ProgramacionWeb from './componentes/publicaciones/ProgramacionWeb.jsx';
import Aplicaciones from './componentes/publicaciones/Aplicaciones.jsx';
import Contabilidad from './componentes/publicaciones/Contabilidad.jsx';
import Finanzas from './componentes/publicaciones/Finanzas.jsx';
import InvOperaciones from './componentes/publicaciones/InvOperaciones.jsx';
import Redes from './componentes/publicaciones/Redes.jsx';
import SimulacionRedes from './componentes/publicaciones/SimulacionRedes.jsx';
import Calculo from './componentes/publicaciones/Calculo.jsx';
import Probabilidad from './componentes/publicaciones/Probabilidad.jsx';
import Metodologias from './componentes/publicaciones/Metodologias.jsx';
import TecnicasSeo from './componentes/publicaciones/TecnicasSeo.jsx';
import MarketingDigital from './componentes/publicaciones/MarketingDigital.jsx';
import Desarrollo from './componentes/Desarrollo.jsx';
import Backend from './componentes/publicaciones/Backend.jsx';
import POO from './componentes/publicaciones/POO.jsx';
import Informatica from './componentes/publicaciones/Informatica.jsx';
import DisenioFrontend from './componentes/publicaciones/DisenioFrontend.jsx';
import Algebra from './componentes/publicaciones/Algebra.jsx';
import BigData from './componentes/publicaciones/BigData.jsx';
import Infraestructura from './componentes/publicaciones/Infraestructura.jsx';
import DesarrolloDeSistemas from './componentes/publicaciones/DesarrolloDeSistemas.jsx';
import ModelosPruebas from './componentes/publicaciones/ModelosPruebas.jsx';
import IngenieriaRequerimientos from './componentes/publicaciones/IngenieriaRequerimientos.jsx';

function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />

        <Route path="/base-de-datos-relacional" element={<BasesDeDatos />} />
        <Route path="/backend" element={<Backend />} />
        <Route path="/diseño-frontend" element={<DisenioFrontend />} />
        <Route path="/base-de-datos-nosql" element={<BasesNoSQL />} />
        <Route path="/programacion" element={<Programacion />} />
        <Route path="/aplicaciones" element={<Aplicaciones />} />
        <Route path="/programacion-web" element={<ProgramacionWeb />} />
        <Route path="/poo" element={<POO />} />
        <Route path="/contabilidad" element={<Contabilidad />} />
        <Route path="/finanzas" element={<Finanzas />} />
        <Route path="/investigacion-de-operaciones" element={<InvOperaciones />} />
        <Route path="/redes" element={<Redes />} />
        <Route path="/algebra" element={<Algebra/>} />
        <Route path="/modelos-de-pruebas" element={<ModelosPruebas />} />
        <Route path="/redes-simulacion" element={<SimulacionRedes />} />
        <Route path="/metodologias-de-desarrollo" element={<Metodologias />} />
        <Route path="/simulacion-de-redes" element={<SimulacionRedes />} />
        <Route path="/calculo" element={<Calculo />} />
        <Route path="/probabilidad" element={<Probabilidad />} />
        <Route path="/investigacion-operaciones" element={<InvOperaciones />} />
        <Route path="/posicionamiento-SEO" element={<TecnicasSeo />} />
        <Route path="/marketing-digital" element={<MarketingDigital />} />
        <Route path="/tecnicas-seo" element={<TecnicasSeo />} />
        <Route path="/desarrollo" element={<Desarrollo />}/>
        <Route path="/informatica" element={<Informatica />}/>
        <Route path="/big-data" element={<BigData />}/>
        <Route path="/desarrollo-de-sistemas" element={<DesarrolloDeSistemas />}/>
        <Route path="/requerimientos" element={<IngenieriaRequerimientos />}/>
        <Route path="/infraestructuras" element={<Infraestructura />}/>
        
        <Route path="/privacidad" element={<AvisoPrivacidad />} />
        <Route path="/cookies" element={<PoliticaCookies />} />
        <Route path="/avisoLegal" element={<AvisoLegal />} />
      </Routes>
    </Router>
  );
}
export default App;
