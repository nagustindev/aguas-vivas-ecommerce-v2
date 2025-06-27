import { useState } from 'react';
import { toast } from 'sonner';
import { useAuthContext } from '../../context/AuthContext';
import { Navigate } from 'react-router-dom';
import { useProductosContext } from '../../context/ProductosContext';

function ProductsForm() {
  const {agregarProducto} = useProductosContext();
  const {admin} = useAuthContext();

  const [producto, setProducto] = useState({
    name: '',
    price: '',
    description: '',
    image: ""
  });

  const validarFormulario = () => {
    if (!producto.name.trim()) {
      return("El nombre es obligatorio.")
    }
    if (!producto.price || producto.price <= 0) {
      return("El precio debe ser mayor a 0.")
    }
    if (!producto.description.trim() || producto.description.length < 10) {
      return("La descripción debe tener al menos 10 caracteres.")
    }
    if(!producto.image.trim()){
      return("La url de la imgaen no debe estar vacía")
    }
    else{
      return true
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    const validarForm = validarFormulario()
    if (validarForm == true) {
      agregarProducto(producto).then((data) => {
        setProducto({ name: '', price: '', description: '', image: ""});
      }).catch((error) => {
        toast.error('Hubo un problema al agregar el producto');
      })
    } else{
        toast.error('Error en la carga de producto');
    }
  }

  if(!admin){
    return(
      <Navigate to="/login" replace/>
    )
  }

  return ( 
    <form onSubmit={handleSubmit2}>
      <h2>Agregar Producto</h2>
      <div>
        <label>Nombre:</label>
        <input
          type="text" name="name" value={producto.name} onChange={handleChange} required/>
      </div>
      <div>
        <label>URL de la Imagen</label>
        <input
          type="text" name="image" value={producto.image} onChange={handleChange} required/>
      </div>
      <div>
        <label>Precio:</label>
        <input type="number" name="price" value={producto.price} onChange={handleChange} required
          min="0"/>
      </div>
       <div>
        <label>Descripción:</label>
        <textarea
          name="description"
          value={producto.description}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Agregar Producto</button>
    </form>
  );
}

export default ProductsForm;