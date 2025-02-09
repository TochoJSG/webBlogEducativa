import '../estilos/Libro.css';

const Libro = ()=>{
    return(
        <div className="containerBook"> 
            <div className="book">
                <div className="coverBook"></div>
                <h2><span>FullStack</span> Book</h2>
                <span className="text">Develop By<i>AdmIng</i></span>
            </div>
        </div>
    )
};

export default Libro;