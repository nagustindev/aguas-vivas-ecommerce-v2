import React from 'react'; 
import Form from './Form';
import { JellyfishIcon } from './Icons';
 
function Footer() {  
    return (  
        <footer className="font-[Archivo] text-[#333]"> 
            <div className="p-3">
                <ul className="flex justify-around font-medium">
                    <li><a href="index.html">Acerca de Nosotros</a></li>
                    <li><a href="index.html">Ubicación</a></li>
                    <li><a href="index.html">Instagram</a></li>
                    <li><a href="index.html">Contacto</a></li>
                    <li><a href="index.html">FAQ</a></li>
                </ul>
                <div className="flex justify-between w-full p-10 ">
                    <ul className="max-w-[500px] ">
                        <strong>Newsletter</strong>
                        <Form />
                    </ul>
                    <div className="flex flex-col p-10">
                        <div className="flex wrap">
                            <JellyfishIcon size={96} />
                            <JellyfishIcon size={96} />
                            <JellyfishIcon size={96} />
                        </div>
                        <p className="font-bold text-3xl">Enteráte de las últimas novedades, ofertas exclusivas y mucho más.</p>
                    </div>
                
                    <ul>
                        <strong>Legal</strong>
                        <li><a href="index.html">Política Privacidad</a></li>
                        <li><a href="index.html">Términos y Condiciones</a></li>
                        <li><a href="index.html">Devoluciones</a></li>
                        <li><a href="index.html">Envios</a></li>
                    </ul>
                </div>
            </div>
            <p className="font-bold font-[Archivo] text-[#333] text-center border-t">&copy; 2025 - Aguas Vivas. Todos los derechos reservados.</p>  
        </footer>  
    );  
}  

export default Footer;  