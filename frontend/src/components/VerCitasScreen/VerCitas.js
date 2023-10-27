import React from "react";
import { HospitalContext } from "../../Context";
import './VerCitas.css'

function VerCitas() {
  const {
    usuarioLoggeado,
    citas,
    getCitas,
  } = React.useContext(HospitalContext);

  React.useEffect(() => {
    console.log('Lista de citas en Citas.bin');
    getCitas();
  }, [])
  

  const citasPaciente = citas.filter(cita => cita.idPaciente === usuarioLoggeado.id);

  return (
    <>
  <div className="ver-citas-container">
    {citasPaciente.map(cita => (<div>
      <div className="cita-container" key={cita.idCita}>
        <p>Fecha: {cita.fechaCita}</p>
        <p>Hora: {cita.horaCita}</p>
        <p>Motivo: {cita.motivoCita}</p>
        <p>Estado de la cita: {cita.status}</p>
        <p>Doctor: {cita.doctor}</p>
      </div>
      <label className="separator">---------------------------------------------------------</label>
      </div>
    ))}
    {citasPaciente.length === 0 && <p>No tiene citas programadas</p>}
  </div>
    </>
  )
}


export { VerCitas };