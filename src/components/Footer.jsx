import React from 'react'; 
 
function Footer() {  
    return (  
        <footer> 
            <div className="p-3">
                <ul className="flex justify-around font-medium font-[Archivo]">
                    <li><a href="index.html">Acerca de Nosotros</a></li>
                    <li><a href="index.html">Ubicación</a></li>
                    <li><a href="index.html">Instagram</a></li>
                    <li><a href="index.html">Contacto</a></li>
                    <li><a href="index.html">FAQ</a></li>
                </ul>
                <div className="flex justify-between">
                    <ul>
                        <strong>Newsletter</strong>
                    </ul>
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