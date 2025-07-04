export default function Form() {
return (
      <form action="https://formspree.io/f/mnnqppkv" method="post" id="subscriptionForm" className="font-[Archivo] text-[#333]">
          <input
              type="email"
              name="subscription-email"
              id="subscription-email"
              placeholder="EMAIL"
              className="border rounded-sm m-1"
              required
          />
          <button type="submit" className="border rounded-2xl cursor-pointer bg-primary hover:bg-primary-hover p-0.5 font-medium transition">Suscribirse</button>
          <br />
          <div className="flex flex-col items-start font-bold">
            <input type="checkbox" className="w-5 h-5 mt-3" required/>
            <label htmlFor="input"> Al registrarte, aceptas recibir correos electrónicos de marketing. Consulta nuestra Política de privacidad y nuestros Términos del Servicio para obtener más información. </label>
          </div>
      </form>
  );
}
