import React, { useState } from 'react';
import "../estilos/formularioRegistro.css"; {/*Llamo al archivo css para aplicar los estilos*/}


const FormularioRegistro = () => {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [materias, setMaterias] = useState([{ materia: '', fecha: '' }]);
    const [mensaje, setMensaje] = useState('');

    const handleMateriaChange = (index, field, value) => {
        const nuevasMaterias = [...materias];
        nuevasMaterias[index][field] = value;
        setMaterias(nuevasMaterias);
    };

    const agregarMateria = () => {
        setMaterias([...materias, { materia: '', fecha: '' }]);
    };

    const eliminarMateria = (index) => {
        const nuevasMaterias = materias.filter((_, i) => i !== index);
        setMaterias(nuevasMaterias);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validaciones básicas
        if (!nombre || !correo || materias.some((m) => !m.materia || !m.fecha)) {
            alert('Por favor, completa todos los campos antes de enviar.');
            return;
        }

        const resumenMaterias = materias
            .map((m, index) => `${index + 1}. ${m.materia} (Fecha: ${m.fecha})`)
            .join('\n');

        setMensaje(
            `¡Gracias, ${nombre}!\n\nTu registro ha sido exitoso.\n\nMaterias cursadas:\n${resumenMaterias}`
        );
    };

    return (
        <div className="formulario-container">
            <h2>Registro de Estudiante</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Nombre:
                    <input
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        placeholder="Ingresa tu nombre completo"
                    />
                </label>

                <label>
                    Correo electrónico:
                    <input
                        type="email"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                        placeholder="Ingresa tu correo electrónico"
                    />
                </label>

                <h3>Materias cursadas</h3>
                {materias.map((materia, index) => (
                    <div key={index}>
                        <label>
                            Materia:
                            <input
                                type="text"
                                value={materia.materia}
                                onChange={(e) => handleMateriaChange(index, 'materia', e.target.value)}
                                placeholder={`Materia #${index + 1}`}
                            />
                        </label>
                        <label>
                            Fecha:
                            <input
                                type="date"
                                value={materia.fecha}
                                onChange={(e) => handleMateriaChange(index, 'fecha', e.target.value)}
                            />
                        </label>
                        <button
                            type="button"
                            className="eliminar-materia"
                            onClick={() => eliminarMateria(index)}
                        >
                            Eliminar
                        </button>
                    </div>
                ))}
                <button type="button" onClick={agregarMateria}>
                    Agregar Materia
                </button>
                <button type="submit">Enviar</button>
            </form>

            {mensaje && <div className="mensaje-confirmacion">{mensaje}</div>}
        </div>
    );
};

export default FormularioRegistro;
