import React, { useState } from "react";
import '../estilos/collapsible.css';
import classNames from "classnames";

const Conceptos = (props)=>{
    const [ isActive, setIsActive ] = useState(false);
    const desplegarCola = () =>{
        setIsActive(!isActive);
    };
    return(
        <div>
            <h2>Conceptos Relacionados Relevantes</h2>
            <button className={classNames('collapsible', { active:isActive })} onClick={desplegarCola}>{props.titulo1}</button>
                <div className={ `contentCola ${ isActive ? 'active' : '' }` }>
                    <p>{props.concepto1}</p>
                </div>
            <button className={classNames('collapsible', { active:isActive })} onClick={desplegarCola}>{props.titulo2}</button>
                <div className={ `contentCola ${ isActive ? 'active' : '' }` }>
                    <p>{props.concepto2}</p>
                </div>
            <button className={classNames('collapsible', { active:isActive })} onClick={desplegarCola}>{props.titulo3}</button>
                <div className={ `contentCola ${ isActive ? 'active' : '' }` }>
                    <p>{props.concepto3}</p>
                </div>
            <button className={classNames('collapsible', { active:isActive })} onClick={desplegarCola}>{props.titulo4}</button>
                <div className={ `contentCola ${ isActive ? 'active' : '' }` }>
                    <p>{props.concepto4}</p>
                </div>
            <button className={classNames('collapsible', { active:isActive })} onClick={desplegarCola}>{props.titulo5}</button>
                <div className={ `contentCola ${ isActive ? 'active' : '' }` }>
                    <p>{props.concepto5}</p>
                </div>
        </div>
    );
};

export default Conceptos;

/**
<button className="collapsible">{props.titulo1}</button>
    <div className="contentCola">
        <p>{props.conceptosC1}</p>
    </div>
<button className="collapsible">{props.titulo2}</button>
    <div className="contentCola">
        <p>{props.conceptosC2}</p>
    </div>
<button className="collapsible">{props.titulo3}</button>
    <div className="contentCola">
        <p>{props.conceptosC3}</p>
    </div>
<button className="collapsible">{props.titulo4}</button>
    <div className="contentCola">
        <p>{props.conceptosC4}</p>
    </div>
<button className="collapsible">{props.titulo5}</button>
    <div className="contentCola">
        <p>{props.conceptosC5}</p>
    </div>
 */