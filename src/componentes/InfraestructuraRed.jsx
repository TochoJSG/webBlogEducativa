import ReactShadow from 'react-shadow'; 
import { useState } from 'react';
import estiloInfraestructura from '../estilos/Infraestructura.module.css';
const nodo1 = require("../imagenes/lap2.png");
const nodo2 = require("../imagenes/celi.png");
const nodo3 = require("../imagenes/pc.png");
const nodo4 = require("../imagenes/impresoras.png");
const nodo5 = require("../imagenes/lp.png");
const nodo6 = require("../imagenes/cel.png");
const servidor = require("../imagenes/servidores4.png");
function InfraestructuraRed(){
    const[activo,setActivo] = useState(false);
    const btnToggle = () =>{
        setActivo( prendido=>!prendido );
    };

    return(
        <ReactShadow.div>
            <style>{`
                .contenedorRed{
                    all:initial;
                    display: block;
                    margin:0;
                    padding:0;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    width:100%;
                    height:100%;
                    background:#222;
                    user-select:none;
                }
                .contenedorRed .light{
                    position:relative;
                    display:flex;
                    margin:0;
                    padding:0;
                    justify-content:center;
                    align-items:center;
                    width:500px;
                    height:600px;
                }
                .contenedorRed .light .box{
                    position:absolute;
                    left:0;
                    width:80px;
                    height:80px;
                    transform-origin:250px;
                    transform:rotate(calc(300deg * var(--i) ) );
                }
                .contenedorRed .light .box::before{
                    content:'______________';
                    top:3px;
                    position:absolute;
                    font-size:2em;
                    text-decoration:underline;
                    text-decoration-style:wavy;
                }
                .contenedorRed .light .box .bulb{
                    position:absolute;
                    left:0;
                    width:100%;
                    height:100%;
                    background:#444;
                    border-radius:50%;
                    /*transform:rotate(90deg);*/
                }
                .contenedorRed .light .box .bulb img{
                    width:80px;
                    height:80px;
                }
                .contenedorRed .light .box .bulb img:nth-child(1){
                    transform:rotate(-90deg);
                    transition-delay:0.3s;
                    transition:0.3s;
                }
                
                        
                
                .contenedorRed.encendido .light .box{
                    position:absolute;
                    left:0;
                    width:80px;
                    height:80px;
                    transform-origin:250px;
                    transform:rotate(calc(300deg * var(--i) ) );
                }
                .contenedorRed.encendido .light .box .bulb{
                    box-shadow: 0 0 50px #fff,
                                0 0 100px #fff,
                                0 0 150px #fff,
                                0 0 200px #fff,
                                0 0 300px #fff,
                                0 0 350px #fff;
                }
                .contenedorRed.encendido .light .box .bulb,
                .contenedorRed.encendido .light .box .bulb::before{
                    background:#fff;
                }
                .contenedorRed.encendido .light .box .bulb::nth-child(1){
                    box-shadow:20px 20px 0 10px #fff;
                }
                .contenedorRed.encendido .light .box .bulb::nth-child(2){
                    box-shadow:-20px 20px 0 10px #fff;
                }				
                .contenedorRed.encendido .light .box .bulb::nth-child(1){
                    transform:rotate(-90deg);
                    transition-delay:0.3s;
                    transition:0.3s;
                }
                .contenedorRed.encendido .light .box .bulb img{
                    width:80px;
                    height:80px;
                    translate:rotate(360deg);
                }                
                .switch{
                    position:absolute;
                    width:80px;
                    height:90px;
                    border:3px solid #000;
                    background-image:linear-gradient(#eee,#ccc,#eee);
                    border-radius:10px;
                    justify-content:center;
                    align-items:center;
                }
                .switch .btn{
                    position:absolute;
                    width:25px;
                    height:25px;
                    bottom:-50px;
                    z-index:10000;
                    font-size:6px;
                    padding:0;
                    background:linear-gradient(#777,#fff,#777);
                    border-radius:6px;
                    border:2px solid #000;
                    cursor:pointer;
                }
                .switch img{
                    width:100%;
                    height:100%;
                }
                .switch .btn::before{
                    content:'';
                    position:absolute;
                    top:0;
                    left:0;
                    width:100%;
                    height:85%;
                    background:linear-gradient(#ddd,#fff);
                    border-radius:4px;
                }
                .encendido .btn::before{
                    top:15%;
                }
            `}</style>
        <div className={`contenedorRed ${activo ? 'encendido' : ''}`}>
            <div className="light">
            
                <div className="box" style={{ '--i': 1 }}>
                    <div className="bulb">
                       <img src={nodo1} alt="cargando..." />
                    </div>
                </div>
                
                <div className="box" style={{ '--i': 2 }}>
                    <div className="bulb">
                        <img src={nodo2} alt="cargando..." />
                    </div>
                </div>
                
                <div className="box" style={{ '--i': 3 }}>
                    <div className="bulb">
                        <img src={nodo3} alt="cargando..." />
                    </div>
                </div>
                
                <div className="box"  style={{ '--i': 4 }}>
                    <div className="bulb">
                        <img src={nodo4} alt="cargando..." />
                    </div>
                </div>
                
                <div className="box" style={{ '--i': 5 }}>
                    <div className="bulb">
                        <img src={nodo5} alt="cargando..." />
                    </div>
                </div>
                
                <div className="box" style={{ '--i': 6 }}>
                    <div className="bulb">
                        <img src={nodo6} alt="cargando..." />
                    </div>
                </div>
                
                <div className="switch">
                    <img src={servidor} alt="cargando..." />
                    <div className={estiloInfraestructura.btn} onClick={btnToggle}
                        style={{
                            position:'absolute',
                            width:'33px',
                            height:'25px',
                            left:'21px',
                            bottom:'-21px',
                            zIndex:'10000',
                            fontSize:'6px',
                            padding:0,
                            background:'linear-gradient(#777,#fff,#777)',
                            borderRadius:'6px',
                            border:'2px solid #000',
                            cursor:'pointer',
                            fontSize:'.9em',
                            fontWeight:600,
                            textAlign:'center'
                        }}
                    >Press</div>
                </div>
            </div>
        </div>
        </ReactShadow.div>
    );
}
/*
<div className={estiloInfraestructura.contenedorRed+`${activo? 'encendido':''}`}>
            <div className={estiloInfraestructura.light}>
		
                <div classNaame={estiloInfraestructura.box} style={{ '--i': 1 }}>
                    <div className={estiloInfraestructura.bulb}>
                        <img src={nodo1} alt="cargando..." />
                    </div>
                </div>
                
                <div className={estiloInfraestructura.box} style={{ '--i': 2 }}>
                    <div className={estiloInfraestructura.bulb}>
                        <img src={nodo1} alt="cargando..."/>
                    </div>
                </div>
                
                <div className={estiloInfraestructura.box} style={{ '--i': 3 }}>
                    <div className={estiloInfraestructura.bulb}>
                        <img src={nodo1} alt="cargando..."/>
                    </div>
                </div>
                
                <div className={estiloInfraestructura.box} style={{ '--i': 4 }}>
                    <div className={estiloInfraestructura.bulb}>
                        <img src={nodo1} alt="cargando..."/>
                    </div>
                </div>
                
                <div className={estiloInfraestructura.box} style={{ '--i': 5 }}>
                    <div className={estiloInfraestructura.bulb}>
                        <img src={nodo1} alt="cargando..."/>
                    </div>
                </div>
                
                <div className={estiloInfraestructura.box} style={{ '--i': 6 }}>
                    <div className={estiloInfraestructura.bulb}>
                        <img src={nodo1} alt="cargando..."/>
                    </div>
                </div>
                
                <div className={estiloInfraestructura.switch}>
                    <img src={servidor} alt="cargando..."/>
                    <div className={estiloInfraestructura.btn} onClick={btnToggle}></div>
                </div>
            </div>
        </div>
*/
export default InfraestructuraRed;