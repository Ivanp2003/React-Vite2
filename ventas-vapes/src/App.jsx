import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import FormularioRegistro from './componentes/FormularioRegistro'; // Componente del formulario
import Footer from './componentes/footer'; // Importar componente Footer
import { Boton } from './componentes/boton'; // Importar componente Botón
import { Menu } from './componentes/menu'; // Importar componente Menu

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Rutas para la navegación

function App() {
  const [count, setCount] = useState(0); // Estado para el contador

  return (
    <>
      <Router>
        <div>
          {/* Renderizar el componente Menu */}
          <Menu />

          {/* Configuración de rutas */}
          <Routes>
            <Route path="/" element={<h2>Inicio</h2>} />
            <Route path="/products" element={<h2>Productos</h2>} />
            <Route path="/contact" element={<h2>Contacto</h2>} />
          </Routes>
        </div>
      </Router>

      <div className="logos">
        {/* Logotipos de Vite y React */}
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>
      <div className="card">
        {/* Botón contador */}
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edita <code>src/App.jsx</code> y guarda para probar HMR.
        </p>
      </div>

      <p className="read-the-docs">
        Haz clic en los logotipos de Vite y React para aprender más.
      </p>

      <FormularioRegistro /> {/* Renderizar FormularioRegistro */}
      <Footer /> {/* Renderizar Footer */}
      <Boton /> {/* Renderizar Botón */}
    </>
  );
}

export default App;
