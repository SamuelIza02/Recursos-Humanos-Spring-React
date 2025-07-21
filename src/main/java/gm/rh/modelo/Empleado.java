package gm.rh.modelo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * Entidad que representa a un empleado en el sistema de Recursos Humanos.
 * Esta clase se mapea directamente a una tabla en la base de datos.
 */
@Entity
@Data // Genera getters, setters, equals, hashCode y toString
@NoArgsConstructor // Constructor sin argumentos
@AllArgsConstructor // Constructor con todos los argumentos
@ToString // Genera método toString
public class Empleado {
    /**
     * Identificador único del empleado, generado automáticamente.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer idEmpleado;
    
    /**
     * Nombre completo del empleado.
     */
    String nombre;
    
    /**
     * Departamento al que pertenece el empleado.
     */
    String departamento;
    
    /**
     * Sueldo del empleado.
     */
    Double sueldo;
}
