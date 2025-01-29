import '../estilos/Taza.css';

const Coffe =()=>{
    return(
        <div className="container">
            <div className="plate"></div>
            <div className="cup">
                <div className="top">
                    <div className="vapour">
                        {
                            Array.from({ length: 20 }, (_, index) => (
                                <span key={index} style={{ '--i': index + 1 }}></span>
                        ))}
                    </div>
                    <div className="circle">
                        <div className="tea"></div>
                    </div>
                </div>
                <div className="handle"></div>
            </div>

           <p className='textoPromocion'>La promocion de la correcta imagen cierra ventas y cada venta nos acerca a un Negocio exitoso</p>
        
        </div>
    )
};

export default Coffe;