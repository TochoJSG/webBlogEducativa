import React, { useEffect, useRef } from 'react';
import '../estilos/Emoji.css';

function Emoji(props){
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
  const eyesRef = useRef([]);

  useEffect(() => {
    const eyeball = (event) => {
      eyesRef.current.forEach((eye) => {
        const rect = eye.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;

        const radian = Math.atan2(event.pageX - x, event.pageY - y);
        const rotation = radian * (180 / Math.PI) * -1 + 333;

        eye.style.transform = `rotate(${rotation}deg)`;
      });
    };

    document.body.addEventListener('mousemove', eyeball);
    return () => {
      document.body.removeEventListener('mousemove', eyeball);
    };
  }, []);

    return(
        <>
            <p>{props.texto}</p>
            <div className="cont_cara">
                <div className="cara" >
                    <div className="eyeS" >
                        <span className="eyes" ref={(el) => (eyesRef.current[0] = el)}></span>
                        <span className="eyes" ref={(el) => (eyesRef.current[1] = el)}></span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Emoji;