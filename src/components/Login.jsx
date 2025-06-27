import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { crearUsuario, loginEmailPass } from '../auth/firebase';
import { toast } from 'sonner';

function Login2() {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(true)
  const { login, user, logout, admin } = useAuthContext();

  function registrarUsuario (e) {
    e.preventDefault();
    crearUsuario(usuario, password).then((user) => {
      login(usuario)
      toast.success('Usuario Registrado');
    }).catch((error) => {
      if(error.code == "auth/invalid-credential"){
        toast.error('Credenciales incorrectas');
      }
      if(error.code == "auth/weak-password"){
        toast.error('Contraseña débil');
      }
      if(error.code == "auth/email-already-in-use"){
        toast.error('Usuario ya registrado');
      }
    })
  }

  const handleSubmit2 = (e) => {
    logout()
  }

  function iniciarSesionEmailPass (e) {
    e.preventDefault();
    loginEmailPass(usuario, password).then((user) => {
      login(usuario)
      toast.success('Logeo Exitoso');
    }).catch((error) => {
      if(error.code == "auth/invalid-credential"){
       toast.error('Credenciales incorrectas');
      }
    })
  }

  function handleShow (e) {
    e.preventDefault();
    setShow(!show)
  }

  if(user || admin){
    return(
        <form onSubmit={handleSubmit2}>
        <button type="submit">Cerrar sesión</button>
        </form>
    )
  }if(!user && show){
    return(
      <div>
        <form onSubmit={iniciarSesionEmailPass}>
          <h2>Iniciar sesión con Email y pass</h2>
          <div>
            <label>Email</label>
            <input
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
          </div>
          <div>
            <label>Contraseña:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Iniciar sesión</button>
        </form>
        <button style={{marginTop:"2px"}}  onClick={handleShow}>Registrate</button>
      </div>
    )
  }if(!user && !show){
    return(
    <div>
      <form onSubmit={registrarUsuario}>
        <h2>Registrarse</h2>
        <div>
          <label>Email:</label>
          <input
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Registrase</button>
      </form>
      <button style={{marginTop:"2px"}} onClick={handleShow}>Iniciar Sesión</button>
    </div>
    )
  }
}
export default Login2;
