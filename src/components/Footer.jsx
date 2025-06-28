import Form from './Form';
import { JellyfishIcon } from './Icons';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="font-[Archivo] text-[#333] border-t">
      <div className="p-2 sm:p-4 md:p-5">
        <ul className="flex flex-wrap justify-center gap-4 font-medium text-sm sm:text-base mb-6">
          <li><Link to="/about">Acerca de Nosotros</Link></li>
          <li><a href="https://instagram.com">Instagram</a></li>
          <li><Link to="/contact">Contacto</Link></li>
          <li><a href="/">FAQ</a></li>
        </ul>

        <div className="flex flex-col lg:flex-row justify-between gap-8">
          {/* Newsletter */}
          <div className="max-w-lg flex-1">
            <strong className="block mb-2">Newsletter</strong>
            <Form />
          </div>

          {/* Iconos + texto */}
          <div className="flex-1 flex flex-col items-center text-center gap-4">
            <div className="flex flex-wrap justify-center gap-4">
              <JellyfishIcon size={96} />
              <JellyfishIcon size={96} />
              <JellyfishIcon size={96} />
            </div>
            <p className="font-bold text-lg sm:text-xl md:text-2xl">
              Enteráte de las últimas novedades, ofertas exclusivas y mucho más.
            </p>
          </div>

          {/* Legal */}
          <div className="flex-1">
            <strong className="block mb-2">Legal</strong>
            <ul className="text-sm space-y-1">
              <li><a href="/">Política Privacidad</a></li>
              <li><a href="/">Términos y Condiciones</a></li>
              <li><a href="/">Devoluciones</a></li>
              <li><a href="/">Envíos</a></li>
            </ul>
          </div>
        </div>
      </div>

      <p className="text-center text-sm sm:text-base border-t py-4 font-bold font-[Archivo] text-[#333]">
        &copy; 2025 - Aguas Vivas. Todos los derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;
