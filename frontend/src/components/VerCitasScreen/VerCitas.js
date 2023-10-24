import React from "react";
import { HospitalContext } from "../../Context";

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
    <div>
      {citasPaciente.map(cita => (
        <div key={cita.idCita}>
          <p>Fecha: {cita.fechaCita}</p>
          <p>Hora: {cita.horaCita}</p>
          <p>Motivo: {cita.motivoCita}</p>
          <p>Estado de la cita: {cita.status}</p>
          <p>Doctor: {cita.doctor}</p>
          <p>---------------------------------------------------------</p>
        </div>
      ))}
      {citasPaciente.length === 0 && <p>No tiene citas programadas</p>}
    </div>
  )
}


export { VerCitas };