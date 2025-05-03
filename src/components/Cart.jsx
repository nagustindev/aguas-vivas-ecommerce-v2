import { useId } from "react";
import { CartIcon } from './Icons.jsx';
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
  const cartCheckboxId = useId();
  const { cart, clearCart, addToCart } = useCart();

  return (
    <>
      <input id={cartCheckboxId} type="checkbox" hidden className="peer" />

      <label
        htmlFor={cartCheckboxId}
        className="items-center hover:bg-[#89c3d2] border rounded-4xl cursor-pointer flex h-[32px] justify-center p-[4px] absolute right-8 top-8 transition duration-150 w-[32px] z-50"
      >
        <CartIcon />
      </label>

      <aside className="hidden peer-checked:block h-[800px] bg-[#f6ecd9] p-[32px] border rounded-2xl border-black fixed right-0 top-0 w-[300px] z-9999 overflow-y-auto">
        <label
          htmlFor={cartCheckboxId}
          className="absolute top-2 right-4 cursor-pointer border border-black rounded-full w-6 h-6 flex items-center justify-center"
        >
          ×
        </label>

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
      </aside>
    </>
  );
}

export default Cart;
