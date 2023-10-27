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
    cita.statusDoctor = 'creando';
    setMostrarVentanaCreaReceta(!mostrarVentanaCreaReceta);
  }

  const [mostrarVentanaCreaReceta, setMostrarVentanaCreaReceta] = React.useState(false);      
  const citasPaciente = citas.filter(cita => cita.doctor === usuarioLoggeadoDoctor.nombre && cita.statusDoctor !== 'completada');                  

  return (
    <div className="citas-container">
      <h1>Citas asignadas</h1>
      <div className="receta-paciente">
      {citasPaciente.map(cita => (
        <div className="datos-citas" key={cita.idCita}>
          <p>Fecha: {cita.fechaCita}</p>
          <p>Hora: {cita.horaCita}</p>
          <p>Motivo: {cita.motivoCita}</p>
          <p>Estado de la cita: {cita.status}</p>
          <p>Doctor: {cita.doctor} {usuarioLoggeadoDoctor.apellido}</p>
          <button onClick={()=>{abrirVentanaCreaReceta(cita)}}>Crear receta para la cita</button>
          {cita.statusDoctor =='creando' && <CrearRecetas objetoCita={cita} actualizarPantalla={setMostrarVentanaCreaReceta} valorAnterior={mostrarVentanaCreaReceta}/>}
          <p>---------------------------------------------------------</p>
        </div>
      ))}
      {citasPaciente.length === 0 && <p>No tiene citas asignadas o pendientes de revisar</p>}
    </div>
      
    </div>
  );
};

export { ManejarCitasAsignadas };
