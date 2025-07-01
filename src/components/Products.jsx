import { useEffect, useState } from "react";
import Card from './Card';
import { Link } from "react-router-dom";
import { useProductosContext } from '../context/ProductosContext.jsx';

function Products() {
  const productosPorPagina = 6;
  const [paginaActual, setPaginaActual] = useState(1);
  const { productos, obtenerProductos } = useProductosContext();
  const indiceUltimoProducto = paginaActual * productosPorPagina;
  const indicePrimerProducto = indiceUltimoProducto - productosPorPagina;
  const productosActuales = productos.slice(indicePrimerProducto, indiceUltimoProducto);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    obtenerProductos().then((productos) => {
      setCargando(false);
    }).catch((error) => {
      setError('Hubo un problema al cargar los productos.');
      setCargando(false);
    })
  }, []);

  const totalPaginas = Math.ceil(productos.length / productosPorPagina);
  const cambiarPagina = (numeroPagina) => setPaginaActual(numeroPagina);

  if (cargando) {
    return <p>Cargando productos...</p>;
  } else if (error) {
    return <p>{error}</p>;
  } else {
    return (
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 divide-x-1">
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
              className={`btn mx-1 ${paginaActual === index + 1 ? "btn-primary" : "btn-outline-primary"}`}
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
