function About() {
  return (
    <section className="text-[#333] font-[Archivo]">
      <h2 className="font-bold text-4xl p-4 border-b">Acerca de Nosotros</h2>
      <div className="flex justify-center items-center border-b">
        <img
          src="/images/about.jpg"
          alt="foto about"
          className="p-4 w-full max-w-6xl rounded-3xl object-cover"
        />
      </div>

      <main className="grid grid-cols-1 md:grid-cols-2">
        <div className="border-b md:border-r p-4">
          <strong className="text-2xl">
            AGUAS VIVAS ES TU ALIADO EN AVENTURAS ACÚATICAS
          </strong>
        </div>

        <div className="border-b  font-medium p-4">
          <p>
            Más que una tienda de deportes náuticos, somos un espacio pensado
            para quienes sienten el mar como un estilo de vida. Nuestro nombre
            rinde homenaje a las aguas vivas —las medusas— y al movimiento
            constante de quienes eligen deslizarse, volar o remar en libertad.
          </p>
          <br />
          <p>
            Nos especializamos en equipos e indumentaria para windsurf, wing,
            foil, surf, wakeboard, kayak, SUP, kite y más. Seleccionamos cada
            producto con intención: funcionalidad, estética y conexión con el
            entorno son los ejes que nos guían.
          </p>
          <br />
          <p>
            Nuestra identidad visual —minimalista, suave, en tonos pastel—
            refleja lo que sentimos por el mar: respeto, calma, belleza.
            Queremos que tu experiencia en el agua sea segura, cómoda y con
            estilo, ya seas principiante o profesional.
          </p>
        </div>

        <div className="flex items-center justify-center border-b md:border-b-0 md:border-r font-medium italic p-4 text-2xl md:text-4xl text-center">
          <p>
            "Ya sea que estés empezando o vivas conectado al viento y las olas,
            en Aguas Vivas vas a encontrar piezas elegidas con intención: por
            cómo se sienten, cómo rinden y lo que transmiten."
          </p>
        </div>

        <div className="flex items-center justify-center p-2">
          <img
            className="rounded-2xl w-full max-w-2xl object-cover"
            src="/images/about2.jpg"
            alt="foto tablas"
          />
        </div>
      </main>
    </section>
  );
}

export default About;
