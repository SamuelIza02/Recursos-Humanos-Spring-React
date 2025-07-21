package gm.rh.repositorio;

import gm.rh.modelo.Empleado;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Repositorio para la entidad Empleado.
 * Proporciona operaciones CRUD estándar y consultas personalizadas para la entidad Empleado.
 * Extiende JpaRepository para heredar métodos como findAll(), findById(), save(), deleteById(), etc.
 */
public interface EmpleadoRepositorio extends JpaRepository<Empleado, Integer> {
    // No se requieren métodos adicionales ya que se utilizan los proporcionados por JpaRepository
}
