import { Link } from "react-router-dom";
import CartButton from "./CartButton";


function Nav() {  
    return (  
        <nav className='text-[#333] border border-t-transparent rounded-b-lg'>  
            <ul className='flex justify-around m-0 items-center font-bold'>  
                <li className='font-[Chicle] text-3xl'><Link to="/">Aguas Vivas</Link></li>
                <li><Link to="/productos">Productos</Link></li>
                <li><Link>Surf</Link></li> 
                <li><Link>Stand Up Paddle</Link></li>  
                <li><Link>Windsurf</Link></li>  
                <li><Link>Kitesurf</Link></li>  
                <li><Link>Indumentaria</Link></li>  
                <li><Link>Accesorios</Link></li>
                <li className="relative"><CartButton /></li>  
            </ul>  
        </nav>  
    );  
}  


export default Nav; 