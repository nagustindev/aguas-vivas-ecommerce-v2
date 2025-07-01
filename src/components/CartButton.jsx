import { HiOutlineShoppingCart } from "react-icons/hi2";
import CartContent from "./Cart.jsx";
import { toast } from "sonner";
import { useAuthContext } from "../context/AuthContext.jsx";
import { useState } from "react";

function CartButton() {
  const { user } = useAuthContext();
  const [abierto, setAbierto] = useState(false);

  const handleCartToggle = () => {
    if (!user) {
      toast.error('Debés iniciar sesión como usuario para ver el carrito.');
      return;
    }
    setAbierto(true);
  };

  const cerrarCarrito = () => setAbierto(false);

  return (
    <>
      <button
        onClick={handleCartToggle}
        className="hover:bg-primary text-2xl duration-150 border rounded-full flex items-center justify-center w-8 h-8 relative z-10"
        aria-label="Abrir carrito"
      >
        <HiOutlineShoppingCart />
      </button>

      {abierto && (
        <div className="fixed inset-0 z-[9999] flex justify-end p-2">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={cerrarCarrito}
          />

          <aside className="relative z-10 w-[350px] max-w-full h-full bg-secondary p-6 shadow-lg overflow-y-auto rounded-2xl border font-[Archivo]">
            <button
              onClick={cerrarCarrito}
              className="absolute top-4 right-4 font-medium border border-[#333] rounded-full w-8 h-8 flex items-center justify-center"
              aria-label="Cerrar carrito"
            >
              X
            </button>
            <CartContent />
          </aside>
        </div>
      )}
    </>
  );
}

export default CartButton;
