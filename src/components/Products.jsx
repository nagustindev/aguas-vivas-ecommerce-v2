import { useEffect, useState } from "react";
import Card from './Card';
import { AddToCartIcon, RemoveFromCartIcon } from './Icons.jsx';

function Products() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://6753ae52f3754fcea7bc389c.mockapi.io/api/aguas-vivas-ecommerce/productos')
      .then(respuesta => respuesta.json())
      .then(datos => {
        setProductos(datos);
        setCargando(false);
      })
      .catch(error => {
        console.log("Error", error);
        setError('Hubo un problema al cargar los productos.');
        setCargando(false);
      });
  }, []);

  if (cargando) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 divide-x-1 ">
      {productos.map((producto) => {

        return (
          <Card key={producto.id} producto={producto}>
          </Card>
        );
      })}
    </div>
  );
}

export default Products;
