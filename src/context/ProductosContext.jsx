import { createContext, useState, useContext } from 'react';

const ProductosContext = createContext();
export function ProductosProvider({ children }) {
    const [productos, setProductos] = useState([]);
    const [productosOriginales, setProductosOriginales] = useState([])
    const [productoEncontrado, setProductoEncontrado] = useState([])

    function obtenerProductos() {
        return (
            new Promise((res, rej) => {
                fetch('https://6753ae52f3754fcea7bc389c.mockapi.io/api/aguas-vivas-ecommerce/productos')
                    .then((respuesta) =>
                        respuesta.json()
                    )
                    .then((datos) => {
                        console.log(datos)
                        setProductos(datos)
                        setProductosOriginales(datos)
                        res(datos)
                    })
                    .catch((error) => {
                        console.log("Error", error)
                        rej(error)
                    })
                    ;
            })
        )
    }

    const agregarProducto = (producto) => {
        return (
            new Promise(async (res, rej) => {
                try {
                    const respuesta = await fetch('https://6753ae52f3754fcea7bc389c.mockapi.io/api/aguas-vivas-ecommerce/productos', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(producto),
                    });

                    if (!respuesta.ok) {
                        throw new Error('Error al agregar el producto.');
                    }
                    const data = await respuesta.json();
                    console.log('Producto agregado:', data);
                    res(data)
                } catch (error) {
                    console.error(error.message);
                    rej(error.message)
                }
            })
        )
    };

    function obtenerProducto(id) {
        return (
            new Promise((res, rej) => {
                fetch("https://6753ae52f3754fcea7bc389c.mockapi.io/api/aguas-vivas-ecommerce/productos")
                    .then((res) => res.json())
                    .then((datos) => {
                        const productoEncontrado = datos.find((item) => item.id === id);
                        if (productoEncontrado) {
                            setProductoEncontrado(productoEncontrado);
                            res(datos)
                        } else {
                            rej("Producto no encontrado")
                        }
                    })
                    .catch((err) => {
                        console.log("Error:", err);
                        rej("Hubo un error al obtener el producto.");
                    });
            })
        )
    }

    function editarProducto(producto) {
        return (
            new Promise(async (res, rej) => {
                try {
                    const respuesta = await fetch(`https://6753ae52f3754fcea7bc389c.mockapi.io/api/aguas-vivas-ecommerce/productos/${producto.id}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(producto),
                    });
                    if (!respuesta.ok) {
                        throw new Error('Error al actualizar el producto.');
                    }
                    const data = await respuesta.json();
                    res(data)
                } catch (error) {
                    console.error(error.message);
                    rej(error)
                }
            })
        )
    }

    const eliminarProducto = (id) => {
        const confirmar = window.confirm('¿Estás seguro de eliminar?');
        if (confirmar) {
            return (
                new Promise(async (res, rej) => {
                    try {
                        const respuesta = await fetch(`https://6753ae52f3754fcea7bc389c.mockapi.io/api/aguas-vivas-ecommerce/productos/${id}`, {
                            method: 'DELETE',
                        });
                        if (!respuesta.ok) throw new Error('Error al eliminar');
                        alert('Producto eliminado correctamente.');
                        res()
                    } catch (error) {
                        console.error(error.message);
                        alert('Hubo un problema al eliminar el producto.');
                        rej(error)
                    }
                })
            )
        }
    }

    function filtrarProductos(filtro) {
        if (!productosOriginales || productosOriginales.length === 0) return;

        if (!filtro || filtro.trim() === "") {
            setProductos(productosOriginales);
            return;
        }

        const productosFiltrados = productosOriginales.filter((producto) =>
            producto.name.toLowerCase().includes(filtro.toLowerCase())
        );

        setProductos(productosFiltrados);
    }


    return (
        <ProductosContext.Provider value={{ obtenerProductos, productos, agregarProducto, obtenerProducto, productoEncontrado, editarProducto, eliminarProducto, filtrarProductos }}>
            {children}
        </ProductosContext.Provider>
    );
}
export const useProductosContext = () => useContext(ProductosContext);

