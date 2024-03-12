// ComponentSelector.js
import React, { useState } from "react";
import availableComponents from "./avaiableComponents";

const ComponentSelector = ({ onAddComponent }) => {
  const [selectedComponent, setSelectedComponent] = useState("");

  return (
    <div>
      <select
        value={selectedComponent}
        onChange={(e) => setSelectedComponent(e.target.value)}
      >
        <option value="">Selecciona un componente</option>
        {availableComponents.map((component) => (
          <option key={component.id} value={component.id}>
            {component.name}
          </option>
        ))}
      </select>
      <button onClick={() => onAddComponent(selectedComponent)}>
        Agregar Componente
      </button>
    </div>
  );
};

export default ComponentSelector;
