import React from "react";
import { HospitalContext } from "../../Context";
import { CrearRecetas } from "../ModuloDoctor/CrearRecetas";

const ManejarCitasAsignadas = () => {

  const {
    citas,
    getCitas,
    usuarioLoggeadoDoctor
  } = React.useContext(HospitalContext);

  const abrirVentanaCreaReceta = (cita) => {
    cita.receta = 'creando';
    setMostrarVentanaCreaReceta(!mostrarVentanaCreaReceta);
  }

  const [mostrarVentanaCreaReceta, setMostrarVentanaCreaReceta] = React.useState(false);      
  const citasPaciente = citas.filter(cita => cita.doctor === usuarioLoggeadoDoctor.nombre);                  

  return (
    <div>
      <h1>Citas asignadas</h1>
      <div>
      {citasPaciente.map(cita => (
        <div key={cita.idCita}>
          <p>Fecha: {cita.fechaCita}</p>
          <p>Hora: {cita.horaCita}</p>
          <p>Motivo: {cita.motivoCita}</p>
          <p>Estado de la cita: {cita.status}</p>
          <p>Doctor: {cita.doctor} {usuarioLoggeadoDoctor.apellido}</p>
          <button onClick={()=>{abrirVentanaCreaReceta(cita)}}>Crear receta para la cita</button>
          {cita.receta =='creando' && <CrearRecetas objetoCita={cita}/>}
          <p>---------------------------------------------------------</p>
        </div>
      ))}
      {citasPaciente.length === 0 && <p>No tiene citas programadas</p>}
    </div>
      
    </div>
  );
};

export { ManejarCitasAsignadas };
