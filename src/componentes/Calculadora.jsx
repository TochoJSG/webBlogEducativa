import estiloCalculadora from '../estilos/Calculadora.module.css';
import React, { useState, useRef, useEffect } from 'react';

function Calculadora() {
  const [expresion, setExpresion] = useState('A d m I n g');
  const buttonsRef = useRef(null);

  useEffect(() => {
    const spans = buttonsRef.current.querySelectorAll('span');

    const handleClick = (e) => {
      const valor = e.target.innerText;

      if (valor === '=') {
        try {
          const resultado = eval(expresion); // ⚠️ eval en demo, evitar en producción
          setExpresion(resultado.toString());
        } catch {
          setExpresion('Error');
        }
      } else if (valor.toLowerCase() === 'clear') {
        setExpresion('');
      } else {
        setExpresion((prev) => prev + valor);
      }
    };

    spans.forEach((btn) => {
      btn.addEventListener('click', handleClick);
    });

    return () => {
      spans.forEach((btn) => {
        btn.removeEventListener('click', handleClick);
      });
    };
  }, [expresion]);

  return (
    <div className={estiloCalculadora.contCalculadora}>
      <div className={estiloCalculadora.calculator}>
        <div className={estiloCalculadora.buttons} ref={buttonsRef}>

        {/*<div className={estiloCalculadora.resultado}>
          <p>{expresion}</p>
        </div>*/}

          <h2 id={estiloCalculadora.display}>{expresion}</h2>
          <span id={estiloCalculadora.clear}>Clear</span>
          <span>/</span>
          <span>*</span>
          <span>7</span>
          <span>8</span>
          <span>9</span>
          <span>-</span>
          <span>4</span>
          <span>5</span>
          <span>6</span>
          <span id={estiloCalculadora.plus}>+</span>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>0</span>
          <span>00</span>
          <span>.</span>
          <span id={estiloCalculadora.equal}>=</span>
        </div>
      </div>

      <div className={estiloCalculadora.centerLapizComponente}>
        <div className={estiloCalculadora.lapizComponente}>
          <p>AdmIng</p>
          <div className={estiloCalculadora.topLapizComponente}></div>
        </div>
      </div>
    </div>
  );
}
export default Calculadora;