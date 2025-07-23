import React from 'react' // Importación de React
import { Link } from 'react-router-dom' // Componente para navegación sin recargar la página

/**
 * Componente de navegación que muestra la barra superior de la aplicación.
 * Contiene enlaces a las diferentes secciones de la aplicación.
 */
export default function Navegacion() {
  return (
    <div className='container'>
        {/* Barra de navegación con estilo Bootstrap */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    {/* Título de la aplicación que enlaza a la página principal */}
    <a className="navbar-brand" href="/">Sistema de Recursos Humanos</a>
    {/* Botón de hamburguesa para menú responsive */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    {/* Menú de navegación colapsable */}
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        {/* Enlace a la página principal */}
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" 
          href="/">Inicio</a>
        </li>
        {/* Enlace para agregar un nuevo empleado */}
        <li className="nav-item">
          <Link className="nav-link" to="/agregar">Agregar Empleado</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
