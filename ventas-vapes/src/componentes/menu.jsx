import React from 'react';
import { Link } from 'react-router-dom';

export function Menu() {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.logo}>Ventas Vapes</h1>
      <ul style={styles.menu}>
        <li><Link to="/" style={styles.link}>Inicio</Link></li>
        <li><Link to="/products" style={styles.link}>Productos</Link></li>
        <li><Link to="/contact" style={styles.link}>Contacto</Link></li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 20px',
    backgroundColor: '#61dafb', // Color turquesa (igual al logo de React)
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Sombra ligera para efecto flotante
    borderRadius: '12px', // Bordes redondeados
    position: 'sticky', // Menú fijo en la parte superior
    top: '10px', // Separación del borde superior
    margin: '10px 20px', // Espaciado alrededor del menú
    zIndex: 1000,
  },
  logo: {
    color: '#fff', // Texto blanco para contraste
    fontSize: '28px',
    fontWeight: 'bold',
  },
  menu: {
    listStyle: 'none',
    display: 'flex',
    gap: '20px',
    margin: 0,
    padding: 0,
  },
  link: {
    textDecoration: 'none',
    color: '#fff', // Color blanco para enlaces
    fontSize: '18px',
    fontWeight: '500',
    padding: '8px 15px', // Espaciado interno de los enlaces
    borderRadius: '8px', // Bordes redondeados para los enlaces
    transition: 'background-color 0.3s ease, color 0.3s ease', // Efecto suave al pasar el ratón
  },
  linkHover: {
    backgroundColor: '#003a4b', // Fondo más oscuro al pasar el ratón
    color: '#61dafb', // Texto cambia a turquesa
  },
};
