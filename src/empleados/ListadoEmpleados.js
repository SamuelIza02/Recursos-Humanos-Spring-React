import axios from 'axios'; // Cliente HTTP para realizar peticiones al backend
import React, { useEffect, useState } from 'react' // Importación de React y hooks
import { NumericFormat } from 'react-number-format'; // Componente para formatear números
import { Link } from 'react-router-dom'; // Componente para navegación sin recargar la página

/**
 * Componente principal que muestra la lista de empleados.
 * Permite ver, editar y eliminar empleados.
 */
export default function ListadoEmpleados() {

    // URL base para las peticiones al backend
    const urlBase = "http://localhost:8080/rh-app/empleados";

    // Estado para almacenar la lista de empleados
    const[empleados, setEmpleados] = useState([]);

    // Hook que se ejecuta al montar el componente
    // Carga la lista de empleados desde el backend
    useEffect(() => {
        cargarEmpleados();
    }, []);

    /**
     * Carga la lista de empleados desde el backend.
     * Actualiza el estado con los datos obtenidos.
     */
    const cargarEmpleados = async () => {
        const resultado = await axios.get(urlBase);
        console.log("Resultado cargar empleados");
        console.log(resultado.data);
        setEmpleados(resultado.data);
    }

    /**
     * Elimina un empleado del sistema.
     * Realiza una petición DELETE al backend y recarga la lista.
     * 
     * @param {number} id - ID del empleado a eliminar
     */
    const eliminarEmpleado = async (id) => {
        await axios.delete(`${urlBase}/${id}`);
        cargarEmpleados(); // Recarga la lista después de eliminar
    }

  return (
    <div className="container">
        {/* Título de la página */}
        <div className="container text-center" style={{margin: "30px"}}>
            <h3>Sistema de Recursos Humanos</h3>
        </div>

        {/* Tabla de empleados */}
        <table className="table table-striped table-hover align-middle">
        {/* Encabezado de la tabla */}
        <thead className='table-dark'>
            <tr>
            <th scope="col">Id</th>
            <th scope="col">Empleado</th>
            <th scope="col">Departamento</th>
            <th scope="col">Sueldo</th>
            <th></th>
            </tr>
        </thead>
        <tbody>
            {
            // Iteramos el arreglo de empleados para mostrar cada uno en una fila
            empleados.map((empleado, indice) => (
                <tr key={indice}>
                <th scope="row">{empleado.idEmpleado}</th>
                <td>{empleado.nombre}</td>
                <td>{empleado.departamento}</td>
                {/* Formateamos el sueldo como moneda */}
                <td><NumericFormat value={empleado.sueldo}
                    displayType={'text'}
                    thousandSeparator=',' prefix={'$'}
                    decimalScale={2} fixedDecimalScale/>
                </td>
                {/* Botones de acción para cada empleado */}
                <td className='text-center'>
                    <div>
                        {/* Botón para editar que navega a la ruta de edición */}
                        <Link to={`/editar/${empleado.idEmpleado}`}
                        className='btn btn-warning btn-sm me-3'>Editar</Link>
                        {/* Botón para eliminar que llama a la función eliminarEmpleado */}
                        <button 
                        onClick={()=> eliminarEmpleado(empleado.idEmpleado)}
                        className='btn btn-danger btn-sm'
                        >Eliminar</button>
                    </div>
                </td>
            </tr>
            ))
            }
        </tbody>
        </table>

    </div>
  )
}
