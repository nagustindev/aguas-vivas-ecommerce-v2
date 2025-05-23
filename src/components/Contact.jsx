function Contact() {  
    return (
        <section className="font-[Archivo] text-[#333]">
            <div className="border-b  font-bold text-4xl p-4">Contacto</div>
            <main className="grid grid-cols-2">
                <div className="flex border-r border-b items-center justify-center p-4">
                    <img className="rounded-2xl" src="/images/contact.jpeg" alt="foto contacto" />
                </div>
                 <div className="border-b p-7">
                    <h2 className="font-bold text-4xl mb-4">¡Ponete en contacto!</h2>
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
                 <div className="p-4 border-r">
                    <p className="font-bold text-4xl">Otras Contactos</p>
                    <br />
                    <p>Devoluciones y otras gestiones sobre tu pedido - <a href="mailto:soporte@aguasvivas.ar" className="underline font-bold">soporte@aguasvivas.ar</a></p>
                    <br />
                    <p>Marketing - <a href="mailto:marketing@aguasvivas.ar" className="underline font-bold">marketing@aguasvivas.ar</a></p>
                    <br />
                </div>
                 <div className="flex items-center justify-center cursor-not-allowed">
                    <p>Formulario en desarrollo ! </p>
                </div>
            </main>

        </section>
    );  
}

export default Contact
