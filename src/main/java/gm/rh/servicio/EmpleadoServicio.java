package gm.rh.servicio;

import gm.rh.modelo.Empleado;
import gm.rh.repositorio.EmpleadoRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Implementación de la interfaz IEmpleadoServicio.
 * Proporciona la lógica de negocio para las operaciones relacionadas con los empleados.
 */
@Service
public class EmpleadoServicio implements IEmpleadoServicio{

    /**
     * Repositorio para acceder a los datos de los empleados.
     * Se inyecta automáticamente mediante Spring.
     */
    @Autowired
    private EmpleadoRepositorio empleadoRepositorio;

    /**
     * {@inheritDoc}
     * Implementación que utiliza el método findAll() del repositorio.
     */
    @Override
    public List<Empleado> listarEmpleados() {
        return empleadoRepositorio.findAll();
    }

    /**
     * {@inheritDoc}
     * Implementación que utiliza el método findById() del repositorio.
     * Retorna null si no encuentra el empleado.
     */
    @Override
    public Empleado buscarEmpleadoPorId(Integer idEmpleado) {
        Empleado empleado = empleadoRepositorio.findById(idEmpleado).orElse(null);
        return empleado;
    }

    /**
     * {@inheritDoc}
     * Implementación que utiliza el método save() del repositorio.
     * Este método sirve tanto para crear como para actualizar empleados.
     */
    @Override
    public Empleado guardarEmpleado(Empleado empleado) {
        return empleadoRepositorio.save(empleado);
    }

    /**
     * {@inheritDoc}
     * Implementación que utiliza el método delete() del repositorio.
     */
    @Override
    public void eliminarEmpleado(Empleado empleado) {
        empleadoRepositorio.delete(empleado);
    }
}
