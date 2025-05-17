
import { useCart } from '../hooks/useCart.js';

function CartItem({ image, price, name, quantity, addToCart }) {
  return (
    <li className="border-b border-black pb-[16px] mb-[16px]">
      <img className="aspect-16/9 w-full mb-2 rounded" src={image} alt={name} />
      <div className="text-sm font-semibold">
        <strong>{name}</strong> - ${price}
      </div>
      <footer className="flex gap-[8px] justify-center items-center mt-2">
        <small>Qty: {quantity}</small>
        <button
          className="border rounded-2xl border-black bg-[#89c3d2] px-3 py-1 text-sm font-bold"
          onClick={addToCart}
        >
          +
        </button>
      </footer>
    </li>
  );
}

function Cart() {
  const { cart, clearCart, addToCart } = useCart();

  return (
    <div>
        <ul>
          {cart.map(product => (
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              {...product}
            />
          ))}
        </ul>

        {cart.length > 0 && (
          <button
            onClick={clearCart}
            className="bg-[#89c3d2] border rounded-xl text-sm border-black text-white font-bold cursor-pointer p-[8px] mt-5 w-full"
          >
            Vaciar carrito
          </button>
        )}
    </div>
  );
}

export default Cart;
