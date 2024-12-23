
const Footer = () => {
    return (
        <footer style={styles.footer}>
            <p style={styles.text}>
                ivan.panchi@epn.edu.ec 2024 | Todos los derechos reservados
            </p>
        </footer>
    );
};

const styles = {
    footer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#61dafb', // Color turquesa
        padding: '15px 20px', // Espaciado interno
        borderRadius: '12px', // Bordes redondeados
        margin: '20px', // Separación respecto a otros elementos
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Sombra ligera
        position: 'sticky', // Fijo en la parte inferior
        bottom: 0, // Se asegura que esté al final de la página
        textAlign: 'center',
    },
    text: {
        color: '#fff', // Texto blanco
        fontSize: '18px',
        fontWeight: '500',
        margin: 0, // Elimina márgenes predeterminados
    },
};

export default Footer;
