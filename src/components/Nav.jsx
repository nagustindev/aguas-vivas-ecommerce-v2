import { Link } from "react-router-dom";
import CartButton from "./CartButton";
import { useAuthContext } from "../context/AuthContext";
import { useState } from "react";

function Nav({ usuarioLogeado }) {
  const { admin } = useAuthContext();
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <nav className="text-[#333] border border-t-transparent rounded-b-lg px-4 py-2">
      {/* Navbar visible en pantallas grandes */}
      <ul className="hidden lg:flex items-center justify-between gap-6 font-bold">
        <li className="font-[Chicle] text-3xl">
          <Link to="/">Aguas Vivas</Link>
        </li>
        <li><Link to="/products">Productos</Link></li>
        <li><Link to="/about">Acerca de Nosotros</Link></li>
        <li><Link to="/contact">Contacto</Link></li>
        <li><Link to="/login">Login</Link></li>
        {admin && (
          <li>
            <Link to="/agregarProductos" className="text-white">
              Agregar productos
            </Link>
          </li>
        )}
        <li>
          <CartButton usuarioLogeado={usuarioLogeado} />
        </li>
      </ul>

      {/* Botón Menú visible en pantallas chicas */}
      <div className="flex justify-between items-center lg:hidden">
        <span className="font-[Chicle] text-3xl">
          <Link to="/">Aguas Vivas</Link>
        </span>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setMenuAbierto(!menuAbierto)}
            className="font-bold border px-3 py-1 rounded"
          >
            Menú
          </button>
          <CartButton usuarioLogeado={usuarioLogeado} />
        </div>
      </div>

      {/* Menú desplegable en mobile */}
      {menuAbierto && (
        <ul className="mt-4 flex flex-col gap-2 font-bold lg:hidden">
          <li><Link to="/products" onClick={() => setMenuAbierto(false)}>Productos</Link></li>
          <li><Link to="/about" onClick={() => setMenuAbierto(false)}>Acerca de Nosotros</Link></li>
          <li><Link to="/contact" onClick={() => setMenuAbierto(false)}>Contacto</Link></li>
          <li><Link to="/login" onClick={() => setMenuAbierto(false)}>Login</Link></li>
          {admin && (
            <li>
              <Link to="/agregarProductos" onClick={() => setMenuAbierto(false)} className="text-white">
                Agregar productos
              </Link>
            </li>
          )}
        </ul>
      )}
    </nav>
  );
}

export default Nav;
