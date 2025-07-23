import { BrowserRouter, Route, Routes } from "react-router-dom"; // Componentes para el enrutamiento
import ListadoEmpleados from "./empleados/ListadoEmpleados"; // Componente para mostrar la lista de empleados
import Navegacion from "./plantilla/Navegacion"; // Componente de navegación
import AgregarEmpleado from "./empleados/AgregarEmpleado"; // Componente para agregar empleados
import EditarEmpleado from "./empleados/EditarEmpleado"; // Componente para editar empleados

/**
 * Componente principal de la aplicación.
 * Define las rutas y la estructura general de la aplicación.
 */
function App() {
  return (
    <div className="container">
     {/* BrowserRouter es el componente principal para el enrutamiento */}
     <BrowserRouter>
      {/* Barra de navegación que se muestra en todas las páginas */}
      <Navegacion/>
      {/* Definición de las rutas de la aplicación */}
      <Routes>
        {/* Ruta principal: muestra la lista de empleados */}
        <Route exact path='/' element={<ListadoEmpleados/>}/>
        {/* Ruta para agregar un nuevo empleado */}
        <Route exact path='/agregar' element={<AgregarEmpleado/>}/>
        {/* Ruta para editar un empleado existente, con parámetro id */}
        <Route exact path='/editar/:id' element={<EditarEmpleado/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
