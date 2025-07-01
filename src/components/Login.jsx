import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { crearUsuario, loginEmailPass } from '../auth/firebase';
import { toast } from 'sonner';

function Login2() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(true)
  const { login, user, logout, admin } = useAuthContext();

  function registrarUsuario(e) {
    e.preventDefault();
    crearUsuario(usuario, password).then((user) => {
      login(usuario)
      navigate('/');
      toast.success('Usuario Registrado');
    }).catch((error) => {
      if (error.code == "auth/invalid-credential") {
        toast.error('Credenciales incorrectas');
      }
      if (error.code == "auth/weak-password") {
        toast.error('Contraseña débil');
      }
      if (error.code == "auth/email-already-in-use") {
        toast.error('Usuario ya registrado');
      }
      if (error.code == "auth/invalid-email") {
        toast.error('Ingrese un Email válido');
      }
      if (error.code == "auth/missing-password") {
        toast.error('Ingrese una contraseña válida');
      }
    })
  }

  const handleSubmit2 = (e) => {
    logout()
    navigate('/');
  }

  function iniciarSesionEmailPass(e) {
    e.preventDefault();
    loginEmailPass(usuario, password).then((user) => {
      login(usuario)
      navigate('/');
      toast.success('Logeo Exitoso');
    }).catch((error) => {
      if (error.code == "auth/invalid-credential") {
        toast.error('Credenciales incorrectas');
      }
      if (error.code == "auth/invalid-email") {
        toast.error('Ingrese un Email válido');
      }
      if (error.code == "auth/missing-password") {
        toast.error('Ingrese una contraseña válida');
      }
    })
  }

  function handleShow(e) {
    e.preventDefault();
    setShow(!show)
  }

  if (user || admin) {
    return (
      <form onSubmit={handleSubmit2} className='flex items-center justify-center min-h-screen  font-[Archivo] text-[#333]'>
        <button
          type="submit"
          className='border rounded-2xl border-black bg-primary px-3 py-1 text-sm font-bold m-2'
        >
          Cerrar sesión
        </button>
      </form>
    )
  } if (!user && show) {
    return (
      <div className='flex items-center justify-center min-h-screen  font-[Archivo] text-[#333]'>
        <form onSubmit={iniciarSesionEmailPass} className='flex flex-col rounded-2xl p-6 bg-[#f1e5cd]'>
          <Link to="/" className="font-[Chicle] text-4xl p-6 text-center">Aguas Vivas</Link>
          <h2 className='font-bold text-lg'>Iniciar sesión</h2>
          <div>
            <input
              type="text"
              placeholder='Correo electrónico'
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              className='border m-1 rounded-3xl p-0.5 w-full'
            />
          </div>
          <div>
            <input
              type="password"
              placeholder='Contraseña'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='border m-1 rounded-3xl p-0.5 w-full'
            />
          </div>
          <button
            type="submit" className='border rounded-2xl border-black bg-primary px-3 py-1 text-sm font-bold m-2'
          >
            Continuar</button>
          <button className='m-2 underline hover:text-primary duration-150' onClick={handleShow}>No tenes una cuenta? Registrate</button>
        </form>
      </div>
    )
  } if (!user && !show) {
    return (
      <div className='flex items-center justify-center min-h-screen  font-[Archivo] text-[#333]'>
        <form onSubmit={registrarUsuario} className='flex flex-col rounded-2xl p-6 bg-[#f1e5cd]'>
          <Link to="/" className="font-[Chicle] text-4xl p-6 text-center">Aguas Vivas</Link>
          <h2 className='font-bold text-lg'>Registrarse</h2>
          <div>
            <input
              type="text"
              value={usuario}
              placeholder='Correo electrónico'
              onChange={(e) => setUsuario(e.target.value)}
              className='border m-1 rounded-3xl p-0.5 w-full'
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Contraseña'
              className='border m-1 rounded-3xl p-0.5 w-full'
            />
          </div>
          <button
            type="submit" className='border rounded-2xl border-black bg-primary px-3 py-1 text-sm font-bold m-2'>Continuar</button>
          <button onClick={handleShow} className='m-2 underline hover:text-primary duration-150'>Ya tenes una cuenta? Inicia Sesión</button>
        </form>
      </div>
    )
  }
}
export default Login2;
