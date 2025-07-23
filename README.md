# Sistema de Recursos Humanos

Este proyecto es una aplicación full-stack para la gestión de empleados, desarrollada con React en el frontend y Spring Boot en el backend.

## Descripción

El Sistema de Recursos Humanos permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre los empleados de una organización. La aplicación consta de:

- **Frontend**: Desarrollado con React, Bootstrap y Axios para las peticiones HTTP
- **Backend**: Desarrollado con Spring Boot, Spring Data JPA y MySQL

## Estructura del Proyecto

### Frontend (React)

- **src/empleados/**: Componentes para la gestión de empleados
  - `ListadoEmpleados.js`: Muestra la lista de empleados y permite eliminarlos
  - `AgregarEmpleado.js`: Formulario para crear nuevos empleados
  - `EditarEmpleado.js`: Formulario para actualizar empleados existentes
- **src/plantilla/**: Componentes de estructura
  - `Navegacion.js`: Barra de navegación de la aplicación
- **src/App.js**: Componente principal con las rutas de la aplicación

### Backend (Spring Boot)

- **modelo/**: Entidades JPA
  - `Empleado.java`: Entidad que representa a un empleado
- **repositorio/**: Interfaces de acceso a datos
  - `EmpleadoRepositorio.java`: Repositorio para operaciones CRUD
- **servicio/**: Lógica de negocio
  - `IEmpleadoServicio.java`: Interfaz con operaciones de servicio
  - `EmpleadoServicio.java`: Implementación de la interfaz
- **controlador/**: Endpoints REST
  - `EmpleadoControlador.java`: Controlador REST para empleados
- **excepcion/**: Manejo de excepciones
  - `RecursoNoEncontradoExcepcion.java`: Excepción para recursos no encontrados

## Requisitos

- Node.js y npm para el frontend
- Java 17+ y Maven para el backend
- MySQL Server

## Configuración

1. Crear una base de datos MySQL llamada `recursos_humanos_db` o configurar el archivo `application.properties`
2. Ejecutar el backend Spring Boot
3. Ejecutar el frontend React con `npm start`

---

# Instrucciones de React

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
