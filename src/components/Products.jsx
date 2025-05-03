import { useEffect, useState } from "react";
import Card from './Card';
import { AddToCartIcon, RemoveFromCartIcon } from './Icons.jsx';
import { useCart } from '../hooks/useCart.js';

function Products() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  const { addToCart, removeFromCart, cart } = useCart();

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

  const checkProductInCart = producto => cart.some(item => item.id === producto.id);

  if (cargando) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  border">
      {productos.map((producto) => {
        const isInCart = checkProductInCart(producto);

        return (
          <Card key={producto.id} producto={producto}>
            <button
              className="mt-auto px-4 py-2 text-white rounded w-full"
              style={{ backgroundColor: isInCart ? 'red' : '#09f' }}
              onClick={() => {
                isInCart ? removeFromCart(producto) : addToCart(producto);
              }}
            >
              {isInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
            </button>
          </Card>
        );
      })}
    </div>
  );
}

export default Products;
