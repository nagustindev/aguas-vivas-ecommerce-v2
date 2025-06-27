import { useParams, Link, useNavigate} from 'react-router-dom';
import { useEffect, useState} from 'react';
import { useCart } from '../hooks/useCart.js';
import { toast } from 'sonner';
import { useAuthContext } from "../context/AuthContext";
import { useProductosContext } from '../context/ProductosContext.jsx';

function ProductsDetail() {

  const navegar = useNavigate();
  const { id } = useParams();

  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  const { admin } = useAuthContext()
  const { productoEncontrado, obtenerProducto, eliminarProducto } = useProductosContext();
  const { addToCart, removeFromCart, cart } = useCart();

  useEffect(() => {
    obtenerProducto(id).then(() => {
      setCargando(false);
    }).catch((error) => {
      if (error == "Producto no encontrado") {
        setError("Producto no encontrado")
      }
      if (error == "Hubo un error al obtener el producto.") {
        setError("Hubo un error al obtener el producto.");
      }
      setCargando(false);
    })
  }, [id]);

  function dispararEliminar(){
    eliminarProducto(id).then(() => {
      navegar("/products")
    }).catch((error) => {
      toast.error('Hubo un problema al agregar el producto')
    })
  }

  const isInCart = productoEncontrado && cart.some(item => item.id === productoEncontrado.id);

  if (cargando) return <p className="text-center">Cargando producto...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!productoEncontrado) return <p className="text-center">Producto no encontrado.</p>;

  return (
    <div className="font-[Archivo] text-[#333333] flex flex-col items-center justify-center p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">{productoEncontrado.name}</h1>
      <p className="mb-2 text-sm border border-black rounded px-2 py-1">{productoEncontrado.badge}</p>
      <img className="w-64 h-auto mb-4" src={productoEncontrado.image} alt={productoEncontrado.name} />
      <p className="mb-4">{productoEncontrado.description}</p>
      <p className="text-xl font-semibold mb-4">${productoEncontrado.price}</p>
      {admin ? (
        <>
          <Link to={`/editarProducto/${id}`}>
            <button>Editar Producto</button>
          </Link>
          <button onClick={dispararEliminar}>Eliminar Producto</button>
        </>
      ) : (
        <button
          onClick={() => {
            if (isInCart) {
              removeFromCart(productoEncontrado);
              toast.success('Producto eliminado del carrito');
            } else {
              addToCart(productoEncontrado);
              toast.success('Producto agregado al carrito');
            }
          }}
          className={`px-6 py-2 text-[#333] rounded-xl w-fit transition-colors duration-200 border ${isInCart ? 'bg-red-500 hover:bg-red-600' : 'bg-primary hover:bg-primary-hover'
            }`}
        >
          {isInCart ? 'Eliminar del carrito' : 'Agregar al carrito'}
        </button>
      )}
    </div>
  );
}

export default ProductsDetail;
