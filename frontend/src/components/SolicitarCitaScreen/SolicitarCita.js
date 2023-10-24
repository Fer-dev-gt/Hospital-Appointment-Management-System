import React from "react";
import { HospitalContext } from "../../Context";


function SolicitarCita() {
  const {
    usuarios,
    getCitas,
  } = React.useContext(HospitalContext);

  React.useEffect(() => {
    console.log('SolicitarCita.js - useEffect');
    getCitas();
  }, [])

  return (
    <section id="hacerCita-section" className="hacer-cita">
      <h1>Solicitar una cita</h1>
      <form>
        <label>Fecha:</label>
        <input type="date" id="fecha-cita"/><br/><br/>
        <label>Hora:</label>
        <input type="time" id="hora-cita"/><br/><br/>
        <label>Motivo:</label>
        <textarea id="motivo-cita"></textarea><br/><br/>
        <button id="hacerCitaBtn">Hacer cita</button>
      </form>
    </section>
  );
}


export { SolicitarCita };
