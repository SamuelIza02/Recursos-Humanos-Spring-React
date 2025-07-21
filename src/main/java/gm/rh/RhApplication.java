package gm.rh;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Clase principal de la aplicación de Recursos Humanos.
 * Esta clase inicia la aplicación Spring Boot y configura el contexto de la aplicación.
 * 
 * @author Samuel
 * @version 1.0
 */
@SpringBootApplication
public class RhApplication {

	/**
	 * Método principal que inicia la aplicación Spring Boot.
	 * 
	 * @param args Argumentos de línea de comandos
	 */
	public static void main(String[] args) {
		SpringApplication.run(RhApplication.class, args);
	}

}
