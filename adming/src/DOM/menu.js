import { useRef } from 'react';
function Menu(){
        const secRef = useRef(null);
        const navRef = useRef(null);
        const toggleMenu = () =>{
            if (secRef.current && navRef.current){
            secRef.current.classList.toggle('active');
            navRef.current.classList.toggle('active');
            }
    }
}
export default Menu;