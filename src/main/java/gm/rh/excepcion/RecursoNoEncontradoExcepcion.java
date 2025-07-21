package gm.rh.excepcion;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Excepción personalizada para manejar recursos no encontrados en la aplicación.
 * Esta excepción se lanza cuando se intenta acceder a un recurso que no existe,
 * como un empleado con un ID que no está en la base de datos.
 * 
 * La anotación @ResponseStatus asegura que cuando esta excepción se lance,
 * la respuesta HTTP tendrá un código de estado 404 (NOT_FOUND).
 */
@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class RecursoNoEncontradoExcepcion extends RuntimeException{
    
    /**
     * Constructor que recibe un mensaje descriptivo del error.
     * 
     * @param mensaje Descripción del error que causó la excepción
     */
    public RecursoNoEncontradoExcepcion(String mensaje){
        super(mensaje);
    }
}
