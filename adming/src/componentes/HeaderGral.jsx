import React,{ useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import '../estilos/headerGral.css';

function HeaderGral(props){
    const [ isVisible, setIsVisible ] = useState(false);
    const [ isActive, setIsActive ] = useState(false);

    const toggleMenu =()=>{
        setIsVisible(!isVisible);
        setIsActive(!isActive);
    };

    return(
        <>
            <header className="headerGral">
                <a href="index.html" className="logo">Electronica Inteligente</a>
                <div className={classNames('menuToggle', { active: isActive })} onClick={toggleMenu}></div>
            </header>
            <ul className={`navigation ${isActive ? 'active' : ''}`}>
                <li><Link to="/">Principal</Link>
                    </li>
                <li><Link to="/desarrollo">Desarrollos</Link>
                    </li>
                <li><Link to="/#about">Nosotros</Link>
                    </li>
                <li><Link to="/#contact">Contact</Link>
                    </li>
            </ul>
        </>
    );
}

export default HeaderGral;

/*
import React from 'react';
import {Link} from 'react-router-dom';
import '../estilos/headerGral.css';
function HeaderGral(){
    const menuToggle=document.querySelector('.menuToggle');
    const navigation=document.querySelector('.navigation');
    menuToggle.onclick=function(){menuToggle.classList.toggle('active');navigation.classList.toggle('active');}
    function toggleMenu(){menuToggle.classList.remove('active');navigation.classList.remove('active');}
    return(
        <>
            <header className="headerGral">
                <Link to="/" className="logo">Electronica Inteligente</Link>
                <div className="menuToggle"></div>
            </header>
            <ul className="navigation">
                <li><Link to="/" data-text="Portada" onClick={toggleMenu()}>Principal
                    </Link></li>
                <li><Link to="/ #about" data-text="Quien escribe esto" onClick={toggleMenu()}>Nosotros
                    </Link></li>
                <li><Link to="/ #post" data-text="Publicaciones" onClick={toggleMenu()}>poster
                    </Link></li>
                <li><Link to="/ #contact" data-text="Contacto" onClick={toggleMenu()}>Contact
                    </Link></li>
            </ul>
        </>
    );
}
export default HeaderGral;



import React, { useState } from 'react';

function HeaderGral() {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };
    return (
        <header>
            <div className={`menuToggle ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
                Toggle Menu
            </div>
            <nav className={`navigation ${isActive ? 'active' : ''}`}>
                {/ * Aquí van los elementos de navegación * /}
                </nav>
                </header>
            );
        }



import React, { useState } from 'react';
import classNames from 'classnames';

function HeaderGral() {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };
    return (
        <header>
            <div className={classNames('menuToggle', { active: isActive })} onClick={toggleMenu}>
                Toggle Menu
            </div>
            <nav className={classNames('navigation', { active: isActive })}>
                {/ * Aquí van los elementos de navegación * /}
                </nav>
                </header>
            );
        }
*/