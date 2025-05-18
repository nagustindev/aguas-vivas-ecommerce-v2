import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useCart } from '../hooks/useCart.js';
import { AddToCartIcon, RemoveFromCartIcon } from './Icons.jsx';

function ProductsDetail() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  const { addToCart, removeFromCart, cart } = useCart();

  useEffect(() => {
    fetch(`https://6753ae52f3754fcea7bc389c.mockapi.io/api/aguas-vivas-ecommerce/productos/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProducto(data);
        setCargando(false);
      })
      .catch((error) => {
        console.error("Error al cargar el producto:", error);
        setError("No se pudo cargar el producto.");
        setCargando(false);
      });
  }, [id]);

  const isInCart = producto && cart.some(item => item.id === producto.id);

  if (cargando) return <p className="text-center">Cargando producto...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!producto) return <p className="text-center">Producto no encontrado.</p>;

  return (
    <div className="font-[Archivo] text-[#333333] flex flex-col items-center justify-center p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">{producto.name}</h1>
      <p className="mb-2 text-sm border border-black rounded px-2 py-1">{producto.badge}</p>
      <img className="w-64 h-auto mb-4" src={producto.image} alt={producto.name} />
      <p className="mb-4">{producto.description}</p>
      <p className="text-xl font-semibold mb-4">${producto.price}</p>

      <button
        className="px-6 py-2 text-white rounded w-full transition-colors duration-200"
        style={{ backgroundColor: isInCart ? 'red' : '#09f' }}
        onClick={() => {
          isInCart ? removeFromCart(producto) : addToCart(producto);
        }}
      >
        {isInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
      </button>
    </div>
  );
}

export default ProductsDetail;
