import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import CartButton from "./CartButton";
import { useAuthContext } from "../context/AuthContext";
import { useProductosContext } from '../context/ProductosContext.jsx';
import { useState, useEffect } from "react";

function Nav({ usuarioLogeado }) {
  const { admin } = useAuthContext();
  const navigate = useNavigate();
  const { filtrarProductos } = useProductosContext();
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [filtro, setFiltro] = useState("")
  const [mostrarBuscador, setMostrarBuscador] = useState(false);

  useEffect(() => {
    filtrarProductos(filtro)
  }, [filtro])//filtro

  function manejarBusqueda(e) {
    e.preventDefault();
    if (filtro.trim() !== "") {
      navigate(`/products?search=${encodeURIComponent(filtro)}`);
      setMostrarBuscador(false);
    }
  }

  return (
    <>
      <nav className="text-[#333] border border-t-transparent rounded-b-lg px-4 py-2 z-40 bg-secondary">
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
            {!mostrarBuscador ? (
              <button onClick={() => setMostrarBuscador(true)}>
                <FaSearch className="text-xl" />
              </button>
            ) : (
              <button onClick={() => setMostrarBuscador(false)} className="text-2xl font-bold">
                ✕
              </button>
            )}
          </li>
          <li>
            <CartButton usuarioLogeado={usuarioLogeado} />
          </li>
        </ul>
        {/* Mobile */}
        <div className="flex justify-between items-center lg:hidden">
          <span className="font-[Chicle] text-3xl">
            <Link to="/">Aguas Vivas</Link>
          </span>

          <div className="flex items-center gap-4">
            <ul>
              {!mostrarBuscador ? (
                <button onClick={() => setMostrarBuscador(true)}>
                  <FaSearch className="text-xl" />
                </button>
              ) : (
                <button onClick={() => setMostrarBuscador(false)} className="text-2xl font-bold">
                  ✕
                </button>
              )}
            </ul>
            <button
              onClick={() => setMenuAbierto(!menuAbierto)}
              className="font-bold border px-3 py-1 rounded"
            >
              Menú
            </button>
            <CartButton usuarioLogeado={usuarioLogeado} />
          </div>
        </div>

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
      {mostrarBuscador && (
        <div className="absolute top-[64px] left-0 w-full h-dvh z-1 bg-gradient-to-b from-primary to-secondary p-8 overflow-y-auto">
          <form onSubmit={manejarBusqueda} className="flex">
            <input
              type="text"
              placeholder="Buscar"
              className="w-full font-bold text-5xl px-6 py-4 rounded-md border-none outline-none shadow-non"
              value={filtro}
              onChange={(e) => setFiltro(e.target.value)}
              autoFocus
            />
            <button type="submit" className="text-3xl ml-4">
              <FaSearch className="text-5xl" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default Nav;
