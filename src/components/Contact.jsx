function Contact() {  
    return (
        <section className="font-[Archivo] text-[#333]">
            <h2 className="border-b font-bold text-4xl p-4">Contacto</h2>
            <main className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                <div className="flex border-r border-b items-center justify-center p-4 md:border-r">
                    <img className="rounded-2xl max-w-full h-auto" src="/images/contact.jpeg" alt="foto contacto" />
                </div>
                 <div className="border-b p-7">
                    <h2 className="font-bold text-3xl md:text-4xl mb-4">¡Ponete en contacto!</h2>
                    <strong>Náutica Aguas Vivas</strong>
                    <p className="italic">Local de equipos e indumentaria para deportes náuticos/extremos</p>
                    <p>Acassuso 1599, Beccar, San Isidro</p>
                    <p>Horario: Lunes a Sábados 10 a.m. - 7 p.m.</p>
                    <br />
                    <p>Email: <a href="mailto:info@agusvivas.ar" className="underline font-bold">info@aguasvivas.ar</a></p>
                    <p>Teléfono:  (011) 4300 6270</p>
                    <br />
                    <p>O rellená el formulario abajo con tus datos.</p>
                    <p>Seguinos en <a href="https://www.instagram.com" target="_blank" className="underline">Instagram</a>, <a href="https://www.facebook.com/" target="_blank" className="underline">Facebook</a> y suscribite a nuestro newsletter.</p>
                </div>
                 <div className="p-4 md:border-r border-b lg:border-b-0">
                    <h2 className="font-bold text-3xl md:text-4xl">Otros Contactos</h2>
                    <br />
                    <p>Devoluciones y otras gestiones sobre tu pedido - <a href="mailto:soporte@aguasvivas.ar" className="underline font-bold">soporte@aguasvivas.ar</a></p>
                    <br />
                    <p>Marketing - <a href="mailto:marketing@aguasvivas.ar" className="underline font-bold">marketing@aguasvivas.ar</a></p>
                    <br />
                </div>
                 <div className="p-4 items-center justify-center">
                    <h2 className="font-bold text-3xl">Tenes alguna duda? Consultanos!</h2>
                    <form action="https://formspree.io/f/mnnqppkv" method="post" id="contactForm" className="flex flex-col">
                        <input 
                        type="text" name="name" id="name" placeholder="Nombre" className="border m-1 rounded-3xl p-0.5"/>
                        <input 
                        type="email" name="email" id="email" placeholder="Email" className="border m-1 rounded-3xl p-0.5" required/>
                        <textarea name="message" id="message" placeholder="Mensaje" className="border m-1 rounded-md p-0.5" required></textarea>
                        <button type="submit" className="border rounded-2xl border-black bg-primary px-3 py-1 text-sm font-bold" required>Enviar</button>
                    </form>
                </div>
            </main>

        </section>
    );  
}

export default Contact
