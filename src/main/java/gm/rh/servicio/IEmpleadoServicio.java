package gm.rh.servicio;

import gm.rh.modelo.Empleado;
import java.util.List;

/**
 * Interfaz que define las operaciones de servicio para la entidad Empleado.
 * Define el contrato para las operaciones CRUD y otras operaciones de negocio relacionadas con los empleados.
 */
public interface IEmpleadoServicio {
    /**
     * Obtiene una lista de todos los empleados en el sistema.
     * @return Lista de empleados
     */
    public List<Empleado> listarEmpleados();

    /**
     * Busca un empleado por su identificador.
     * @param idEmpleado Identificador del empleado a buscar
     * @return Empleado encontrado o null si no existe
     */
    public Empleado buscarEmpleadoPorId(Integer idEmpleado);

    /**
     * Guarda o actualiza un empleado en el sistema.
     * @param empleado Empleado a guardar o actualizar
     * @return Empleado guardado con su ID generado (en caso de ser nuevo)
     */
    public Empleado guardarEmpleado(Empleado empleado);

    /**
     * Elimina un empleado del sistema.
     * @param empleado Empleado a eliminar
     */
    public void eliminarEmpleado(Empleado empleado);

}
