import React from "react";
import { HospitalContext } from "../../Context";
import './CrearRecetas.css'

const CrearRecetas = ({objetoCita}) => {

  const {
    irManejarCitasAsginadas,
    irSolictarCitaPage,
    usuarioLoggeado,
    irVerCitasPage,
  } = React.useContext(HospitalContext);

  React.useEffect(() => {console.log('objetoCita', objetoCita)}, [])

  return(
    <div className="crear-recetas">
      <h1>Creando Recetas</h1>
      <div className="crear-recetas__form">
        <label htmlFor="fecha" className="crear-recetas__label">Fecha:</label>
        <input type="date" id="fecha" name="fecha" className="crear-recetas__input" />

        <label htmlFor="nombre-paciente" className="crear-recetas__label">Nombre Paciente:</label>
        <input type="text" id="nombre-paciente" name="nombre-paciente" className="crear-recetas__input" />

        <label htmlFor="descripcion" className="crear-recetas__label">Descripción:</label>
        <textarea id="descripcion" name="descripcion" className="crear-recetas__textarea"></textarea>
      </div>
    </div>
  )
};


export { CrearRecetas };