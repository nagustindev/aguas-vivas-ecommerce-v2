import { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import { crearUsuario, iniciarSesionUsuario } from '../auth/firebase';
import { toast } from "sonner";
function Login() {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const { login, user, logout } = useAuthContext();

  function registrarUsuario(e) {
    e.preventDefault();
    crearUsuario(usuario, password).then((user) => {
        login(usuario)
        toast.success('Usuario Registrado');
    }).catch((error) => {
        alert("Error")
    })
   
   
  }

   function iniciarUsuario(e) {
    e.preventDefault();
    iniciarSesionUsuario(usuario, password).then((user) => {
        login(usuario)
        toast.success('Sesión Iniciada');
    }).catch((error)=> {
        alert("Error")
    }) 
  }

  const handleSubmit = (e) => {
    logout()
    toast.success('Sesión Cerrada');
  }

  if (user){
    return (
        <form onSubmit={handleSubmit}>
        <button type="submit">Cerrar Sesión</button>
        </form>
    )
  }

  return (
    <div className='flex justify-around p-6'>
        <form className='' onSubmit={iniciarUsuario}>
          <div>
              <label>Email:</label>
              <input
              className='border rounded-2xl mb-2 ml-2'
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              />
          </div>
          <div>
              <label>Contraseña:</label>
              <input
              className='border rounded-2xl mb-2 ml-2'
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
          </div>
          <button type="submit" className='border rounded-2xl cursor-pointer bg-primary hover:bg-primary-hover p-0.5 font-medium transition'>Iniciar sesión</button>
        </form>

        <form onSubmit={registrarUsuario}>
        <div>
            <label>Email:</label>
            <input
            className='border rounded-2xl mb-2 ml-2'
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            />
        </div>
        <div>
            <label>Contraseña:</label>
            <input
            className='border rounded-2xl mb-2 ml-2'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        <button type="submit" className='border rounded-2xl cursor-pointer bg-primary hover:bg-primary-hover p-0.5 font-medium transition'>Registrarse</button>
        </form>
    </div>
    
  );
}
export default Login;
