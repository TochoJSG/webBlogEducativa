import ShadowRoot from 'react-shadow';
//import estiloPhone from '../estilos/Phone.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function SmartPhonePro(){
    const fondo = require('../imagenes/bg_2.png');
    const item1 = require('../imagenes/whats.png');
    const item2 = require('../imagenes/icono.png');
    const item3 = require('../imagenes/folder.png');
    const item4 = require('../imagenes/nav.png');
    const[active,setActive] = useState(false);
    const pressButton = ()=>{
        setActive(action=>!action);
        //setActive(true);
    };
    return(
        <ShadowRoot.div>
            <style>{`
            .mobile{
                all:initial;
                display:block;
                left:40%;
                transform:rotate(-50%,-50%);
                position:relative;
                width:270px;
                height:480px;
                background:#020c17;
                margin:66px 0 66px;
                user-select:none;
            }
            .topPhone{
                position:absolute;
                top:-50px;
                width:100%;
                height:50px;
                background:#0000008f;
                border-top-left-radius:40px;
                border-top-right-radius:40px;
            }
            .topPhone:before{
                content:'';
                position:absolute;
                top:50%;
                left:35%;
                transform:translateY(-50%);
                width:4px;
                height:4px;
                background:#ccc;
                border:2px solid #aaa;
                border-radius:50%;
                box-shadow:0 0 0 1px #999;
            }
            .topPhone:after{
                content:'';
                position:absolute;
                top:50%;
                left:50%;
                transform:translate(-50%,-50%);
                width:40px;
                height:3px;
                background:#333;
                border:2px solid #aaa;
                border-radius:3px;
            }
            .bottomPhone{
                position:absolute;
                bottom:-50px;
                width:100%;
                height:50px;
                background:#0000008f;
                border-bottom-left-radius:40px;
                border-bottom-right-radius:40px;
            }
            .bottomPhone:before{
                content:'';
                position:absolute;
                top:50%;
                left:50%;
                transform:translate(-50%,-50%);
                width:15px;
                height:15px;
                border:2px solid #999;
                border-radius:50%;
                cursor:pointer;
                border-radius:6px;
            }
            .bottomPhone:hover:before{
                border:1px solid #000;
            }
            .screen{
                position:relative;
                width:100%;
                height:100%;
                overflow:hidden;
                display:flex;
                justify-content:center;
                /*align-items:center;*/
            }
            .screen img{
                position:absolute;
                top:0;
                left:0;
                width:100%;
                height:100%;
                object-fit:cover;
                opacity:0;
                transition:0.6s;
            }
            .screen.active img{
                opacity:1;
            }
            .screen:before{
                content:'';
                position:absolute;
                top:0;
                left:-50%;
                width:100%;
                height:100%;
                background:rgba(255,255,255,0.1);
                z-index:1;
                transform:skewX(-6deg);
            }
            h2{
                color:#fff;
                font-weight:200;
                font-size:3.5em;
                z-index:1;
                transform:translateY(50px);
                line-height:0.6em;
                transition:0.7s;
                text-shadow:0 1px 3px rgba(0,0,0,0.5);
                opacity:0;
            }
            h2 span{
                font-size:0.4em;
            }
            h3{
                text-align:center;
            }
            .screen.active h2{
                opacity:1;
                transition-delay:0.6s;
                transform:translateY(0px);
            }
            .screen ul{
                position:absolute;
                margin:0;
                padding:0;
                bottom:0;
                display:flex;
                z-index:1;
                justify-content:space-around;
                width:100%;
                flex-direction:row;
                align-items:space-between;
            }
            .screen ul li{
                position:relative;
                list-style:none;
                color:#fff;
                font-size:1.5em;
                padding-bottom:33px;
                cursor:pointer;
                transition:0.5s;
                opacity:0;
                transform:translateY(20px);
            }
            .screen.active ul li{
                opacity:1;
                transform:translateY(0px);
                transition-delay:0.5s;
            }
            .screen.active ul li:nth-child(2){
                transition-delay:0.7s;
            }
            .screen.active ul li:nth-child(3){
                transition-delay:0.9s;
            }
            .screen.active ul li:nth-child(4){
                transition-delay:1.1s;
            }
            .screen ul li img{
                width:20px;
                height:33px;
            }
            .screen.active ul li:hover img{
                transform:transateY(-10px);
            }
            @media(max-width:666px){
                .mobile{left:30%;}
            }
            @media(max-width:450px){
                .mobile{left:20%;}
            }
            @media(max-width:375px){
                .mobile{left:10%;}
            }         
            `}</style>
            <div class="mobile">
                <div class="topPhone"></div>
                <div class="bottomPhone" onClick={pressButton}></div>
                
                <div className={`screen ${active ? 'active' : ''}`}>
                    <img src={fondo}  alt="cargando fondo..."/>
                    <h2>5.40<span>AM</span><br/><span>25th Aug, 2025</span></h2>
                    
                    <ul>
                        <li>
                        <a href="https://api.whatsapp.com/send/?phone=525517971706&amp;text=Hola%20deseo%20una,%20cotizacion%20%C2%BFNecesito%20ayuda%20con%20..." className="btn-wsp" target="_blank" rel="noreferrer">
                            <img src={item1} alt="cargando icono..."/>
                        </a>
                        </li>
                        <li>
                            <Link to="/desarrollo#videoHeader">
                                <img src={item2} alt="cargando icono..."/>
                            </Link>
                        </li>
                        <li><img src={item3} alt="cargando icono..."/></li>
                        <li><img src={item4} alt="cargando icono..."/></li>
                    
                    </ul>
                </div>
            </div>
            <h3>Esto se puede lograr con puro CSS. Esto es frontend.</h3>
        </ShadowRoot.div>
    );
}
export default SmartPhonePro;