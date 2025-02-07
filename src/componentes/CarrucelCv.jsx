import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../estilos/carrusel.css';

function DarkVariantExample() {
  return (
    <Carousel className="carousel-cv" data-bs-theme="dark"  controls={true} indicators={true}>
        
      <Carousel.Item className="carousel-item" interval={600} >
        <span>
        <img
          className="d-block w-100"
          src={ require('../imagenes/jorge_1.jpeg') }
          alt="First slide"
        />
        </span>
        <Carousel.Caption className="carousel-caption">
          <h5>Salgado Garcia Jorge Arturo, <span>Fullstack Developer</span></h5>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="carousel-item" interval={600}>
        <span>
        <img
          className="d-block w-100"
          src={ require('../imagenes/jorge_2.jpeg') }
          alt="Second slide"
        />
        </span>
        <Carousel.Caption>
          <h5>Licenciatura en Ciencias de la Informatica UPIICSA, <span>IPN</span></h5>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="carousel-item" interval={600}>
        <span>
        <img
          className="d-block w-100"
          src={ require('../imagenes/jorge_3.jpg') }
          alt="Third slide"
        />
        </span>
        <Carousel.Caption>
          <h5>.:JAVA::C++/C#::JavaScript con Node.js, Express, React,CSS,Boostrap::PHP::SQL:.</h5>
        </Carousel.Caption>
      </Carousel.Item>


    </Carousel>
  );
}

export default DarkVariantExample;
/*
const styles = StyleSheet({
    Carousel:{
        display:'block',
        width:'100%',
        height:'450px',
        backgroundColor:'#000'
    },
    Item:{
        display:'block',
        width:'250px',
        height:'350px',
        color:'yellow',
        backgroundColor:'#000'
    },
    Caption:{
        display:'block',
        postion:'relative',
        width:'250px',
        height:'350px',
        color:'yellow',
        backgroundColor:'#000'
    }
});*/

/*const CarruselCv = () =>{
    return(
        <div id="carouselExampleDark" className="carousel carousel-dark slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                <img src="..." className="d-block w-100" alt="...">
                <div className="carousel-caption d-none d-md-block">
                    <h2>Salgado Garcia Jorge Arturo, <span>Fullstack Developer</span></h2>
                    <p>Licenciatura en Ciencias de la Informatica</p>
                </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                <img src="..." className="d-block w-100" alt="...">
                <div className="carousel-caption d-none d-md-block">
                    <h2>Salgado Garcia Jorge Arturo, <span>Fullstack Developer</span></h2>
                    <p>UPIICSA, <span>IPN</span></p>
                </div>
                </div>
                <div className="carousel-item">
                <img src="..." className="d-block w-100" alt="...">
                <div className="carousel-caption d-none d-md-block">
                    <h2>Salgado Garcia Jorge Arturo, <span>Fullstack Developer</span></h2>
                    <p>.:JAVA::C++/C#::JavaScript con Node.js, Express, React[CSS,Boostrap]::PHP::SQL:.</p>
                </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};*/