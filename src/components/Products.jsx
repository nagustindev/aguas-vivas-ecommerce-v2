import { useEffect, useState } from "react";
import Card from './Card';
import { Link, useLocation } from "react-router-dom";
import { useProductosContext } from '../context/ProductosContext.jsx';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Products() {
  const productosPorPagina = 8;
  const [paginaActual, setPaginaActual] = useState(1);
  const { productos, obtenerProductos, filtrarProductos } = useProductosContext();
  const indiceUltimoProducto = paginaActual * productosPorPagina;
  const indicePrimerProducto = indiceUltimoProducto - productosPorPagina;
  const productosActuales = productos.slice(indicePrimerProducto, indiceUltimoProducto);
  const query = useQuery();
  const searchTerm = query.get("search") || "";
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setCargando(true);

    obtenerProductos()
      .then((productosCargados) => {
        if (searchTerm) {
          const productosFiltrados = productosCargados.filter((producto) =>
            producto.name.toLowerCase().includes(searchTerm.toLowerCase())
          );
          filtrarProductos(searchTerm); 
          setPaginaActual(1);
        } else {
          filtrarProductos(""); 
        }

        setCargando(false);
      })
      .catch(() => {
        setError("Hubo un problema al cargar los productos.");
        setCargando(false);
      });
  }, [searchTerm]);


  useEffect(() => {
    const totalPaginas = Math.ceil(productos.length / productosPorPagina);
    if (paginaActual > totalPaginas && totalPaginas > 0) {
      setPaginaActual(totalPaginas);
    }
  }, [productos, paginaActual]);

  const totalPaginas = Math.ceil(productos.length / productosPorPagina);
  const cambiarPagina = (numeroPagina) => setPaginaActual(numeroPagina);

  if (cargando) {
    return <p>Cargando productos...</p>;
  } else if (error) {
    return <p>{error}</p>;
  } else {
    return (
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {productosActuales.map((producto) => (
            <Link key={producto.id} to={"/products/" + producto.id}>
              <Card producto={producto} />
            </Link>
          ))}
        </div>
        <div className="flex justify-content-center my-4">
          {Array.from({ length: totalPaginas }, (_, index) => (
            <button
              key={index + 1}
              className={`hover:bg-primary duration-150 border p-2 rounded-full flex items-center justify-center w-8 h-8 mx-1 ${paginaActual === index + 1}`}
              onClick={() => cambiarPagina(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default Products;
