//import CarruselCv from './CarrucelCv';
import React from 'react';
import { useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import DarkVariantExample from './CarrucelCv';
import '../estilos/estiloCurriculum.css';

//const cv = require('../imagenes/Jorge-Salgado.pdf');

const HeaderCv = () =>{
    const secRefCv = useRef(null);
    const navRefCv = useRef(null);
    const { hash } = useLocation();

    useEffect( () =>{
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if(element){
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);

    const toggleMenu=()=>{
        if(secRefCv.current && navRefCv.current){
            secRefCv.current.classList.toggle('active');
            navRefCv.current.classList.toggle('active');
        }
    };

    return(
        <section className="sectionFS">
            <section className="banner parallax" id="sec" ref={secRefCv}>{/* class = cover */}
                <header>
                    <Link to="/desarrollo">
                        <img className="logo" src={ require('../imagenes/jorge_1.jpeg') } alt="cargando..." />
                    </Link>

                    <div id="toggle" onClick={ toggleMenu }></div>
                </header>
                
                <div className="content">

                    <DarkVariantExample />

                    <div className="contBtnLuz">
                        <Link to="/curriculum">
                            <span>Ver CV Resumido</span>
                        </Link>
                    </div>
                
                </div>

                <ul className="sci">
                    <li><a href="https://github.com/TochoJSG?tab=repositories"><img src={ require('../imagenes/github.png') } alt="cargando..." /></a></li>
                    <li><a href="https://www.facebook.com/jorge.salgadogarcia.334/"><img src={ require('../imagenes/fb.png') } alt="cargando..." /></a></li>
                    <li><a href="https://www.youtube.com/channel/UCBOZY7qmDMyctdp1EkMOG9A"><img src={ require('../imagenes/youtube.png') } alt="cargando..." /></a></li>
                </ul>
            </section>
            <div id="navigation" ref={navRefCv}>
                <ul>
                    <li data-text="Home"><Link to="/">Principal
                        </Link></li>
                    <li data-text="About"><Link to="/home#about">Nosotros
                        </Link></li>
                    <li data-text="Contact"><Link to="/desarrollo#contact">Contact
                        </Link></li>
                    <li data-text="Contact">
                        <a href="/Jorge-Salgado-Garcia.pdf" rel="noopener noreferrer" type="application/pdf" download>
                            Descargar CV
                        </a></li>
                </ul>
            </div>
        </section>
    );
};

export default HeaderCv;