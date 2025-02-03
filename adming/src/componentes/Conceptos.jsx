import React, { useState } from "react";
import '../estilos/collapsible.css';
import classNames from "classnames";

const Conceptos = (props) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const desplegarCola = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div>
            <h2>Conceptos Relacionados Relevantes</h2>
            {[1, 2, 3, 4, 5].map((num) => (
                <div key={num}>
                    <button 
                        className={classNames('collapsible', { active: activeIndex === num })} 
                        onClick={() => desplegarCola(num)}
                    >
                        {props[`titulo${num}`]}
                    </button>
                    <div className={`contentCola ${activeIndex === num ? 'active' : ''}`}>
                        <p>{props[`concepto${num}`]}</p>
                    </div>
                </div>
            ))}
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










    import React, { useState } from "react";
import '../estilos/collapsible.css';
import classNames from "classnames";

const Conceptos = (props) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleCollapse = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const conceptos = [
        { titulo: props.titulo1, concepto: props.concepto1 },
        { titulo: props.titulo2, concepto: props.concepto2 },
        { titulo: props.titulo3, concepto: props.concepto3 },
        { titulo: props.titulo4, concepto: props.concepto4 },
        { titulo: props.titulo5, concepto: props.concepto5 },
    ];

    return (
        <div>
            <h2>Conceptos Relacionados Relevantes</h2>
            {conceptos.map((item, index) => (
                <div key={index}>
                    <button
                        className={classNames("collapsible", { active: activeIndex === index })}
                        onClick={() => toggleCollapse(index)}
                    >
                        {item.titulo}
                    </button>
                    <div className={`contentCola ${activeIndex === index ? "active" : ""}`}>
                        <p>{item.concepto}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Conceptos;

 */