import { useId } from "react";
import { CartIcon } from "./Icons.jsx";
import CartContent from "./Cart.jsx";
import { toast } from "sonner";

function CartButton({ usuarioLogeado }) {
  const cartCheckboxId = useId();

  const handleCartToggle = () => {
    if (!usuarioLogeado) {
      toast.error('Debés iniciar sesión como usuario para ver el carrito.');
      return;
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
