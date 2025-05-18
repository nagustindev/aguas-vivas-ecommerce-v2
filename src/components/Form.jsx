import { useState } from 'react';

export default function Form() {
  const [nombre, setNombre] = useState('');
  function manejarEnvio(evento) {
      evento.preventDefault();
      alert(`Formulario enviado por: ${nombre}`);
  }
  return (
      <form onSubmit={manejarEnvio} className="font-[Archivo] text-[#333]">
          <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="EMAIL"
              className="border rounded-sm"
          />
          <button type="submit" className="border rounded-2xl cursor-pointer bg-[#89c3d2] hover:bg-[#63a4b4] p-0.5 font-medium transition">Suscribirse</button>
          <br />
          <div className="flex flex-col items-start font-bold">
            <input type="checkbox" className="w-5 h-5 mt-3" required/>
            <label htmlFor="input"> Al registrarte, aceptas recibir correos electrónicos de marketing. Consulta nuestra Política de privacidad y nuestros Términos del Servicio para obtener más información. </label>
          </div>
      </form>
  );
}
