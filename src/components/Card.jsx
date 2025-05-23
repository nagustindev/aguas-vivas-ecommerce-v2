function Card({ producto }) {
    return (
            <div className="font-[Archivo] text-[#333333] flex flex-col justify-center items-center p-4 hover:bg-primary duration-150 group">
                <h1 className="font-bold">{producto.name}</h1>
                <p className="rounded-xl border text-sm border-black group-hover:bg-black group-hover:text-secondary p-0.5">{producto.badge}</p>
                <img src={producto.image} alt={producto.name} />
                <p>${producto.price}</p>
            </div>
    );
}

export default Card;

