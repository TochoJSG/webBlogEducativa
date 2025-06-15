import '../estilos/Taza.css';

const Coffe =()=>{
    return(
        <section className='displayCup'>
            <div className="containerCup">
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

            <p className='textoPromocion'>Ser programador es diferente a Desarrollador de sistemas, un Desarrollador de Sistemas usualmente sabe programar, pero un a un programador puede complicarsele desarrollar todo un sistema </p>
            
            </div>
        </section>
    )
};

export default Coffe;