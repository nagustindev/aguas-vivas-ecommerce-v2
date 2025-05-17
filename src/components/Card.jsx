function Card({ producto, children }) {
    return (
        <div className="font-[Archivo] text-[#333333] flex flex-col justify-center items-center p-4 hover:bg-[#89c3d2] duration-150 group border-b">
            <h1 className="font-bold">{producto.name}</h1>
            <p className="rounded-xl border text-sm border-black group-hover:bg-black group-hover:text-[#f6ecd9] p-0.5">{producto.badge}</p>
            <p>{producto.description}</p>
            <img src={producto.image} alt={producto.name} />
            <p>${producto.price}</p>

            {children}
        </div>
    );
}

export default Card;

