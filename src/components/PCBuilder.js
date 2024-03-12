import React, { useState } from 'react';
import ComponentImage from './Cimage'; // Asegúrate de que la ruta de importación sea correcta

const PCBuilder = () => {
  const [selectedComponents, setSelectedComponents] = useState([]);

  // Función para manejar la selección de componentes
  const addComponent = (componentName) => {
    setSelectedComponents(prevComponents => [...prevComponents, componentName]);
  };

  return (
    <div>
      <h2>Construye tu PC Gamer</h2>
      <div>
        {/* Botones de ejemplo para seleccionar componentes */}
        <button onClick={() => addComponent('cpu')}>Agregar CPU</button>
        <button onClick={() => addComponent('gpu')}>Agregar GPU</button>
        <button onClick={() => addComponent('ram')}>Agregar RAM</button>
        {/* Añadir más botones según sea necesario */}
      </div>
      <div>
        {/* Aquí se muestran los componentes seleccionados */}
        {selectedComponents.map((componentName, index) => (
          <ComponentImage key={index} componentName={componentName} />
        ))}
      </div>
    </div>
  );
};

export default PCBuilder;
