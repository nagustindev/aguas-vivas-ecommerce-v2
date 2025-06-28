import { useState } from 'react';
import { toast } from 'sonner';
import { useAuthContext } from '../../context/AuthContext';
import { Navigate } from 'react-router-dom';
import { useProductosContext } from '../../context/ProductosContext';

function ProductsForm() {
  const { agregarProducto } = useProductosContext();
  const { admin } = useAuthContext();

  const [producto, setProducto] = useState({
    name: '',
    badge: '',
    type:'',
    price: '',
    description: '',
    image: ""
  });

  const validarFormulario = () => {
    if (!producto.name.trim()) {
      return ("El nombre es obligatorio.")
    }
    if (!producto.badge.trim()) {
      return ("La insignia es obligatoria.")
    }
    if (!producto.price || producto.price <= 0) {
      return ("El precio debe ser mayor a 0.")
    }
    if (!producto.description.trim() || producto.description.length < 10) {
      return ("La descripción debe tener al menos 10 caracteres.")
    }
    if (!producto.image.trim()) {
      return ("La url de la imagen no debe estar vacía")
    }
    else {
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
        setProducto({ name: '', badge: '', tipo:'', price: '', description: '', image: '' });
      }).catch((error) => {
        toast.error('Hubo un problema al agregar el producto');
      })
    } else {
      toast.error('Error en la carga de producto');
    }
  }

  if (!admin) {
    return (
      <Navigate to="/login" replace />
    )
  }

  return (
    <form onSubmit={handleSubmit2} className='flex flex-col justify-center items-center'>
      <div className='flex flex-col border p-6 items-center justify-items-center font-[Archivo] text-[#333]'>
        <h2 className='font-bold'>Agregar Producto</h2>
        <div>
          <label>Nombre:</label>
          <input
            type="text" name="name" value={producto.name} onChange={handleChange} required className='border m-1 rounded-3xl' />
        </div>
        <div>
          <label>Insignia:</label>
          <input
            type="text" name="badge" value={producto.badge} onChange={handleChange} required className='border m-1 rounded-3xl' />
        </div>
        <div>
          <label>Tipo</label>
          <select
            name="type"
            value={producto.type}
            onChange={handleChange}
            required
            className="border m-1 rounded-3xl"
          >
            <option value="">Seleccioná un tipo</option>
            <option value="Surf">Surf</option>
            <option value="SUP">SUP</option>
            <option value="Wind">Wind</option>
            <option value="Kite">Kite</option>
          </select>
        </div>
        <div>
          <label>Imagen</label>
          <input
            type="text" name="image" value={producto.image} onChange={handleChange} required className='border m-1 rounded-3xl' />
        </div>
        <div>
          <label>Precio:</label>
          <input type="number" name="price" value={producto.price} onChange={handleChange} required
            min="0" className='border m-1 rounded-3xl' />
        </div>
        <div className='flex'>
          <label>Descripción:</label>
          <textarea
            name="description"
            value={producto.description}
            onChange={handleChange}
            required
            className='border m-1 rounded-sm'
          />
        </div>
        <button type="submit" className="border rounded-2xl border-black bg-primary px-3 py-1 text-sm font-bold">Agregar Producto</button>
      </div>
    </form>
  );
}

export default ProductsForm;