import { useId } from "react";
import { CartIcon } from "./Icons.jsx";
import CartContent from "./Cart.jsx";
import { toast } from "sonner";
import { useAuthContext } from "../context/AuthContext.jsx";
import { Navigate } from "react-router-dom";

function CartButton() {
  const {user} = useAuthContext();
  const cartCheckboxId = useId();

  const handleCartToggle = () => {
    if (!user) {
      toast.error('Debés iniciar sesión como usuario para ver el carrito.');
      
      return (
        <Navigate to="/login" replace/>
      )
    }

    const checkbox = document.getElementById(cartCheckboxId);
    if (checkbox) checkbox.checked = !checkbox.checked;
  };

  return (
    <>
      <input id={cartCheckboxId} type="checkbox" hidden className="peer" />

      <button
        onClick={handleCartToggle}
        className="hover:bg-primary border rounded-4xl cursor-pointer flex h-[32px] justify-center p-[4px] transition duration-150 w-[32px] z-50"
        aria-label="Abrir carrito"
      >
        <CartIcon />
      </button>

      <aside className="hidden peer-checked:block h-[800px] bg-secondary p-[32px] border rounded-2xl border-black fixed right-0 top-0 w-[300px] z-[9999] overflow-y-auto">
        <label
          htmlFor={cartCheckboxId}
          className="absolute top-2 right-4 cursor-pointer border border-black rounded-full w-6 h-6 flex items-center justify-center"
        >
          ×
        </label>

        <CartContent />
      </aside>
    </>
  );
}

export default CartButton;
