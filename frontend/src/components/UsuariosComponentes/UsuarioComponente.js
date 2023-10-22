import React from "react";
import { HospitalContext } from "../../Context";

function UsuarioComponente() {

  const {
    nombre,
    id,
    agregarUsuario,
    handleNombreChange,
    handleIdChange
  } = React.useContext(HospitalContext);
  
  return (
    <div>
      <div className="form-container"> 
        <h2>Formulario</h2>
        <label htmlFor="nombre" className="form-label">Nombre:</label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={handleNombreChange}
          className="form-input"
        />
        <br/>
        <label htmlFor="id" className="form-label">ID:</label>
        <input
          type="text"
          id="id"
          value={id}
          onChange={handleIdChange}
          className="form-input" 
        />
        <br/>
        <button onClick={agregarUsuario} className="form-button">Enviar</button> {/* Aplica la clase CSS al botón */}
      </div>
    </div>
  );
}


export { UsuarioComponente };