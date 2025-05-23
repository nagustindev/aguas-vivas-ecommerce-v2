
import { useCart } from '../hooks/useCart.js';

function CartItem({ image, price, name, quantity, addToCart, removeFromCart }) {
  const itemSubtotal = price * quantity;

  return (
    <li className="border-b border-black pb-[16px] mb-[16px]">
      <img className="aspect-16/9 w-full mb-2 rounded" src={image} alt={name} />
      <div className="text-sm font-semibold">
        <strong>{name}</strong> - ${price}
      </div>
      <div className="text-xs text-gray-600">Subtotal: ${itemSubtotal.toFixed(2)}</div>
      <footer className="flex gap-[8px] justify-center items-center mt-2">
        <small>Cant: {quantity}</small>
        <button
          className="border rounded-2xl border-black bg-primary px-3 py-1 text-sm font-bold"
          onClick={addToCart}
        >
          +
        </button>
        <button
          className="border rounded-2xl border-black bg-primary px-3 py-1 text-sm font-bold"
          onClick={removeFromCart}
        >
          -
        </button>
      </footer>
    </li>
  );
}

function Cart() {
  const { cart, clearCart, addToCart, removeFromCart } = useCart();
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
        <ul>
          {cart.map(product => (
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              removeFromCart={() => removeFromCart(product)}
              {...product}
            />
          ))}
        </ul>

        {cart.length > 0 && (
          <>
            <button
              onClick={clearCart}
              className="bg-primary border rounded-xl text-sm border-black text-[#333] hover:bg-primary-hover cursor-pointer p-2 mt-5 w-full"
            >
              Vaciar carrito
            </button>

            <div className="text-right font-bold mt-4">
              Total: ${total.toFixed(2)}
            </div>
          </>
        )}
    </div>
  );
}

export default Cart;
