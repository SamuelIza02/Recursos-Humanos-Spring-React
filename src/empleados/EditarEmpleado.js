import axios from 'axios' // Cliente HTTP para realizar peticiones al backend
import React, { useEffect, useState } from 'react' // Importación de React y hooks
import { useNavigate, useParams } from 'react-router-dom' // Hooks para navegación y obtener parámetros de URL

/**
 * Componente para editar un empleado existente.
 * Carga los datos del empleado desde el backend y permite modificarlos.
 * Al enviar el formulario, realiza una petición PUT al backend.
 */
export default function EditarEmpleado() {

    // URL base para las peticiones al backend
    const urlBase = "http://localhost:8080/rh-app/empleados";

    // Hook para redireccionar después de editar el empleado
    let navegacion = useNavigate();

    // Obtiene el ID del empleado desde los parámetros de la URL
    const {id} = useParams();

    // Estado para almacenar los datos del empleado
    // Inicializado con valores vacíos que serán reemplazados al cargar
    const [empleado, setEmpleado]=useState({
        nombre:"",
        departamento:"",
        sueldo:""
    })

    // Desestructuración del objeto empleado para facilitar el acceso a sus propiedades
    const{nombre, departamento, sueldo} = empleado

    // Hook que se ejecuta al montar el componente
    // Carga los datos del empleado desde el backend
    useEffect(()=>{
        cargarEmpleado();
    },[])

    /**
     * Carga los datos del empleado desde el backend usando su ID.
     * Actualiza el estado con los datos obtenidos.
     */
    const cargarEmpleado = async () => {
        const resultado = await axios.get(`${urlBase}/${id}`)
        setEmpleado(resultado.data);
    }

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
     * Realiza una petición PUT al backend para actualizar el empleado.
     * 
     * @param {Event} e - Evento de envío del formulario
     */
    const onSubmit = async (e) => {
        e.preventDefault(); // Previene el comportamiento por defecto del formulario
        await axios.put(`${urlBase}/${id}`, empleado); // Envía los datos actualizados al backend
        // Redirigimos a la página de inicio después de editar el empleado
        navegacion('/');
    }


  return (
    <div className='container'>
        {/* Título del formulario */}
        <div className='container text-center' style={{margin: "30px"}}>
            <h3>Editar Empleado</h3>
        </div>

        {/* Formulario para editar empleado */}
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
                className="btn btn-warning btn-sm me-3">Guardar</button>
            <a href='/' className='btn btn-danger btn-sm'>Regresar</a>    
        </div>
        </form>
    </div>
  )
}
