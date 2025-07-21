package gm.rh.controlador;

import gm.rh.excepcion.RecursoNoEncontradoExcepcion;
import gm.rh.modelo.Empleado;
import gm.rh.servicio.IEmpleadoServicio;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Controlador REST para gestionar las operaciones CRUD de empleados.
 * Proporciona endpoints para listar, crear, actualizar y eliminar empleados.
 */
@RestController
//http://localhost:8080/rh-app/
@RequestMapping("rh-app")
@CrossOrigin(value = "http://localhost:3000") // Permite solicitudes desde el frontend React
public class EmpleadoControlador {

    /**
     * Logger para registrar información y errores.
     */
    private static final Logger logger =
            LoggerFactory.getLogger(EmpleadoControlador.class);

    /**
     * Servicio de empleados inyectado automáticamente.
     */
    @Autowired
    private IEmpleadoServicio empleadoServicio;

    /**
     * Obtiene todos los empleados del sistema.
     * URL: http://localhost:8080/rh-app/empleados (GET)
     * 
     * @return Lista de todos los empleados
     */
    @GetMapping("/empleados")
    public List<Empleado> obtenerEmpleados(){
        var empleados = empleadoServicio.listarEmpleados();
        empleados.forEach((empleado -> logger.info(empleado.toString())));
        return empleados;
    }

    /**
     * Agrega un nuevo empleado al sistema.
     * URL: http://localhost:8080/rh-app/empleados (POST)
     * 
     * @param empleado Datos del empleado a agregar (en formato JSON)
     * @return Empleado creado con su ID generado
     */
    @PostMapping("/empleados")
    public Empleado agregarEmpleado(@RequestBody Empleado empleado){
        logger.info("Empleado a agregar: " + empleado);
        return empleadoServicio.guardarEmpleado(empleado);
    }

    /**
     * Obtiene un empleado por su ID.
     * URL: http://localhost:8080/rh-app/empleados/{id} (GET)
     * 
     * @param id ID del empleado a buscar
     * @return ResponseEntity con el empleado encontrado
     * @throws RecursoNoEncontradoExcepcion Si no se encuentra el empleado con el ID especificado
     */
    @GetMapping("/empleados/{id}")
    public ResponseEntity<Empleado>
        obtenerEmpleadoPorId(@PathVariable Integer id){
        Empleado empleado = empleadoServicio.buscarEmpleadoPorId(id);
        if(empleado == null)
            throw new RecursoNoEncontradoExcepcion("No se encontro el id: " + id);
        return ResponseEntity.ok(empleado);
    }

    /**
     * Actualiza los datos de un empleado existente.
     * URL: http://localhost:8080/rh-app/empleados/{id} (PUT)
     * 
     * @param id ID del empleado a actualizar
     * @param empleadoRecibido Nuevos datos del empleado (en formato JSON)
     * @return ResponseEntity con el empleado actualizado
     * @throws RecursoNoEncontradoExcepcion Si no se encuentra el empleado con el ID especificado
     */
    @PutMapping("/empleados/{id}")
    public ResponseEntity<Empleado>
        actualizarEmpleado(@PathVariable Integer id,
                           @RequestBody Empleado empleadoRecibido){
        Empleado empleado = empleadoServicio.buscarEmpleadoPorId(id);
        if (empleado == null)
            throw new RecursoNoEncontradoExcepcion("El id recibido no existe: " + id);
        empleado.setNombre(empleadoRecibido.getNombre());
        empleado.setDepartamento(empleadoRecibido.getDepartamento());
        empleado.setSueldo(empleadoRecibido.getSueldo());
        empleadoServicio.guardarEmpleado(empleado);
        return ResponseEntity.ok(empleado);
    }

    /**
     * Elimina un empleado del sistema.
     * URL: http://localhost:8080/rh-app/empleados/{id} (DELETE)
     * 
     * @param id ID del empleado a eliminar
     * @return ResponseEntity con un mapa que confirma la eliminación {"eliminado": true}
     * @throws RecursoNoEncontradoExcepcion Si no se encuentra el empleado con el ID especificado
     */
    @DeleteMapping("/empleados/{id}")
    public ResponseEntity<Map<String, Boolean>>
        eliminarEmpleado(@PathVariable Integer id){
        Empleado empleado = empleadoServicio.buscarEmpleadoPorId(id);
        if(empleado == null)
            throw new RecursoNoEncontradoExcepcion("El id recibido no existe: " + id);
        empleadoServicio.eliminarEmpleado(empleado);
        // Json {"eliminado": "true"}
        Map<String, Boolean> respuesta = new HashMap<>();
        respuesta.put("eliminado", Boolean.TRUE);
        return ResponseEntity.ok(respuesta);
    }


}
