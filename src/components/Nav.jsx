import { Link } from "react-router-dom";
import CartButton from "./CartButton";


function Nav() {  
    return (  
        <nav className='text-[#333] border border-t-transparent rounded-b-lg'>  
            <ul className='flex justify-around m-0 items-center font-bold'>  
                <li className='font-[Chicle] text-3xl'><Link to="/">Aguas Vivas</Link></li>
                <li><Link to="/products">Productos</Link></li>
                <li><Link to="/about">Acerca de Nosotros</Link></li>
                <li><Link to="/contact">Contacto</Link></li>
                 <li><Link to="/admin">Admin</Link></li>
                 <li><Link to="/login">Login</Link></li>
                <li className="relative"><CartButton /></li>  
            </ul>  
        </nav>  
    );  
}  


export default Nav; 