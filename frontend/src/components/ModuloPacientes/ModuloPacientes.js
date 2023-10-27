import React from "react";
import { HospitalContext } from "../../Context";
import "./ModuloPacientes.css"

const ModuloPacientes = () => {
  const {
    irModificarUsuarioPage,
    irSolictarCitaPage,
    usuarioLoggeado,
    irVerCitasPage,
    irVerRecetasPage,
    irCompraMedicinaPage,
  } = React.useContext(HospitalContext);

  console.log('usuarioLoggeado', usuarioLoggeado);

  return (
    <div className="modulo-pacientes-container">
      <button onClick={irModificarUsuarioPage}>Modificar Perfil</button>
      <button onClick={irSolictarCitaPage}>Solicitar cita</button>
      <button onClick={irVerCitasPage}>Ver estado de citas creadas</button>
      <button onClick={irVerRecetasPage}>Ver Recetas con Factura </button>
      <button onClick={irCompraMedicinaPage}>Comprar medicina</button>
    </div>
  );
};

export { ModuloPacientes };
