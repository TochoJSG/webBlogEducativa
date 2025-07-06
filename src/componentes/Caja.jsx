import caja from '../../src/estilos/Caja.module.css';
//import { useRef,useEffect } from 'react';

function Caja(){
    /*const boxRef = useRef(null);

    useEffect(() => {
        const handleMouseOver = (e) => {
        const rotationY = e.clientX;
        if (boxRef.current) {
            boxRef.current.style.transform = `rotateX(-30deg) rotateY(${rotationY}deg)`;
        }
        };

        window.addEventListener('mouseover', handleMouseOver);
        
        return () => {
        window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);*/
    return(
        <div className={caja.cont_caja}>{/*ref={boxRef}*/}
            <div id={caja.box}>
                <div className={caja.top}></div>
                <div>
                    <span></span>
                    <span>
                        <i className={caja.tape}></i>
                    </span>
                    <span></span>
                    <span>
                        <i className={caja.tape}></i>
                    </span>
                </div>
            </div>
		</div>
    );
}

export default Caja;