import React, { useEffect, useRef } from 'react';
import estiloCubo from '../estilos/CuboTecnologico.module.css';

function CuboInteractivo() {
  const cuboRef = useRef(null);
const gridRefs = useRef([]);
let intervaloId = useRef(null);
let timeoutIds = useRef([]);

useEffect(() => {
  // Crear los spans
  gridRefs.current.forEach((grid) => {
    if (grid) {
      grid.innerHTML = '';
      for (let i = 0; i < 100; i++) {
        const span = document.createElement('span');
        grid.appendChild(span);
      }
    }
  });

  function randomActive() {
    gridRefs.current.forEach((grid) => {
      const spans = grid?.querySelectorAll('span');
      if (!spans) return;

      const randomIndex = Math.floor(Math.random() * spans.length);
      spans[randomIndex]?.classList.add(estiloCubo.active);

      const removeTime = Math.floor(Math.random() * 1000) + 500;
      const timeoutId = setTimeout(() => {
        spans[randomIndex]?.classList.remove(estiloCubo.active);
      }, removeTime);
      timeoutIds.current.push(timeoutId);
    });
  }

  function randomInterval() {
    const interval = Math.floor(Math.random() * 200) + 100;
    randomActive();
    const timeoutId = setTimeout(randomInterval, interval);
    timeoutIds.current.push(timeoutId);
  }

  randomInterval();

  const handleMouseMove = (e) => {
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;
    if (cuboRef.current) {
      cuboRef.current.style.transform = `rotateX(${y * 360}deg) rotateY(${x * 360}deg)`;
    }
  };

  document.addEventListener('mousemove', handleMouseMove);
  intervaloId.current = setInterval(randomActive, 500);

  return () => {
    document.removeEventListener('mousemove', handleMouseMove);
    clearInterval(intervaloId.current);
    timeoutIds.current.forEach((id) => clearTimeout(id));
    timeoutIds.current = [];
  };
}, []);

  const caras = ['front', 'back', 'left', 'right', 'top', 'bottom'];

  return (
    <div className={estiloCubo.contenedorCubo}>
        <div className={estiloCubo.contCubo}>
            <div className={estiloCubo.cubo} ref={cuboRef}>
                {caras.map((cara, index) => (
                <div key={cara} className={`${estiloCubo.cara} ${estiloCubo[cara]}`}>
                    <div
                    className={estiloCubo.grid}
                    ref={(el) => (gridRefs.current[index] = el)}
                    ></div>
                    <h2>_El Backend</h2>
                    <p>Son los procesos internos, lo que vuelve funcional al diseño Frontend</p>
                </div>
                ))}
            </div>
        </div>
    </div>
  );
}

export default CuboInteractivo;