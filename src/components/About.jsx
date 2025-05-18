function About() {  
    return (  
        <section className="text-[#333] font-[Archivo]">  
            <div className="border-b  font-bold text-4xl p-4">Acerca de Nosotros</div>
             <div className="flex justify-center items-center border-b">
                <img src="public\images\about.jpg" alt="foto about" className="p-4 w-[100vh] rounded-4xl object-cover"/>
            </div>
            <main className="grid grid-cols-2 border-b">
                <div className="border-b border-r p-4">
                     <strong className="text-2xl">AGUAS VIVAS ES TU ALIADO EN AVENTURAS ACÚATICAS</strong>
                </div>
                 <div className="border-b font-medium p-4">
                    <p >Más que una tienda de deportes náuticos, somos un espacio pensado para quienes sienten el mar como un estilo de vida. Nuestro nombre rinde homenaje a las aguas vivas —las medusas— y al movimiento constante de quienes eligen deslizarse, volar o remar en libertad.</p>
                    <br />
                    <p>Nos especializamos en equipos e indumentaria para windsurf, wing, foil, surf, wakeboard, kayak, SUP, kite y más. Seleccionamos cada producto con intención: funcionalidad, estética y conexión con el entorno son los ejes que nos guían.</p>
                    <br />
                    <p>Nuestra identidad visual —minimalista, suave, en tonos pastel— refleja lo que sentimos por el mar: respeto, calma, belleza. Queremos que tu experiencia en el agua sea segura, cómoda y con estilo, ya seas principiante o profesional.</p>
                </div>
                 <div className="flex items-center justify-center border-r font-medium italic p-4 text-4xl">
                     <p>"Ya sea que estés empezando o vivas conectado al viento y las olas, en Aguas Vivas vas a encontrar piezas elegidas con intención: por cómo se sienten, cómo rinden y lo que transmiten."</p>
                </div>
                <div className="flex border-r items-center justify-center p-2">
                      <img className="rounded-2xl size-5/6 object-cover" src="public\images\about2.jpg" alt="foto tablas" />
                </div>
            </main>
           
   
        </section>  
    );  
}

export default About
