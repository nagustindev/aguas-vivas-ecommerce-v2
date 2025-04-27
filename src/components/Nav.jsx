import React from 'react';  


function Nav() {  
    return (  
        <nav className='bg-[#f6ecd9] text-gray-950 border border-black border-t-transparent rounded-b-lg'>  
            <ul className='flex justify-around m-0 items-center'>  
                <li><a href="index.html" className='font-[Chicle] text-gray-700 text-3xl'>Aguas Vivas</a></li>  
                <li><a href="index.html" className=''>Inicio</a></li>  
                <li><a href="index.html" className=''>Acerca de</a></li>  
                <li><a href="index.html" className=''>Contacto</a></li>  
            </ul>  
        </nav>  
    );  
}  


export default Nav; 