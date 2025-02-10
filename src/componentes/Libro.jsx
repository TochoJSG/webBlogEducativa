import React from 'react';
import styles from '../estilos/Libro.module.css';

const Libro = ()=>{
    return(
            <div className={styles.book}>{/*<div className="containerBook">*/}
                <div className={styles.coverBook}></div>
                <h2><span>FullStack</span> Book</h2>
                <span className={styles.text}>Develop By<i>AdmIng</i></span>
                {/*</div>*/}
            </div>
    )
};

export default Libro;