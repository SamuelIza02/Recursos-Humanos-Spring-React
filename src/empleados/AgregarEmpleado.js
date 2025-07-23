import axios from 'axios' // Cliente HTTP para realizar peticiones al backend
import React, { useState } from 'react' // Importación de React y el hook useState
import { useNavigate } from 'react-router-dom' // Hook para la navegación entre páginas

/**
 * Componente para agregar un nuevo empleado al sistema.
 * Presenta un formulario con campos para nombre, departamento y sueldo.
 * Al enviar el formulario, realiza una petición POST al backend.
 */
export default function AgregarEmpleado() {
    // Hook para redireccionar después de agregar el empleado
    let navegacion = useNavigate();

    // Estado para almacenar los datos del formulario
    // Inicializado con valores vacíos
    const [empleado, setEmpleado]=useState({
        nombre:"",
        departamento:"",
        sueldo:""
    })

    // Desestructuración del objeto empleado para facilitar el acceso a sus propiedades
    const{nombre, departamento, sueldo} = empleado

    /**
     * Maneja los cambios en los campos del formulario.
     * Actualiza el estado del empleado con los nuevos valores.
     * 
     * @param {Event} e - Evento de cambio del input
     */
    const onInputChange = (e) => {
        //spread operator ... (expandir los atributos)
        setEmpleado({...empleado, [e.target.name]: e.target.value})
    }

    /**
     * Maneja el envío del formulario.
     * Realiza una petición POST al backend para crear un nuevo empleado.
     * 
     * @param {Event} e - Evento de envío del formulario
     */
    const onSubmit = async (e) => {
        e.preventDefault(); // Previene el comportamiento por defecto del formulario
        const urlBase = "http://localhost:8080/rh-app/empleados";
        await axios.post(urlBase, empleado); // Envía los datos al backend
        // Redirigimos a la página de inicio después de agregar el empleado
        navegacion('/');
    }


  return (
    <div className='container'>
        {/* Título del formulario */}
        <div className='container text-center' style={{margin: "30px"}}>
            <h3>Agregar Empleado</h3>
        </div>

        {/* Formulario para agregar empleado */}
        <form onSubmit={(e) => onSubmit(e)}>
        {/* Campo para el nombre del empleado */}
        <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input type="text" className="form-control" 
            id="nombre" name='nombre' required={true} 
            value={nombre} onChange={(e)=>onInputChange(e)}/>
        </div>
        {/* Campo para el departamento del empleado */}
        <div className="mb-3">
            <label htmlFor="departamento" 
                className="form-label">Departamento</label>
            <input type="text" className="form-control" 
            id="departamento" name='departamento'
            value={departamento} onChange={(e) => onInputChange(e)} />
        </div>
        {/* Campo para el sueldo del empleado */}
        <div className="mb-3">
            <label htmlFor="sueldo" 
                className="form-label">Sueldo</label>
            <input type="number" step="any" className="form-control" 
            id="sueldo" name='sueldo'
            value={sueldo} onChange={(e) => onInputChange(e)}/>
        </div>
        {/* Botones de acción */}
        <div className='text-center'>
            <button type="submit" 
                className="btn btn-warning btn-sm me-3">Agregar</button>
            <a href='/' className='btn btn-danger btn-sm'>Regresar</a>    
        </div>
        </form>
    </div>
  )
}
