import { useAuthContext } from "../context/AuthContext.jsx";
import { toast } from "sonner";

export default function Admin() {
    const {user} = useAuthContext();

    if (!user) {
      toast.error('Debés iniciar sesión como admin.');
      return;
    }

    return(
        <div>
            <p>Componente Admin</p>
        </div>
    )
}