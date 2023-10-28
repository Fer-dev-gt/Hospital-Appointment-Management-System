import React from "react";
import { HospitalContext } from "../../Context";

const DoctoresMasVisitados = () => {
  const {
    getReporteDoctores,
    doctoresReportes
  } = React.useContext(HospitalContext);

  React.useEffect(() => {
    console.log('Reporte de doctores en doctoresReportes.bin');
    getReporteDoctores();
  }, [])

  const doctoresTrabajando = doctoresReportes.filter(doctor => doctor.citasAtendidas > 0);
  console.log('reporte de doctores:', doctoresTrabajando);

  const doctoresMasSolicitados = doctoresTrabajando.sort((a, b) => b.citasAtendidas - a.citasAtendidas);
  console.log('Doctores mas visitados:', doctoresMasSolicitados);


  return (
    <>
      <div className="ver-citas-container">
        <h1>Medicinas más vendidas</h1>
        {doctoresMasSolicitados.map(doctor => (<div key={`${doctor.id} ${doctor.nombre}`}>
          <div className="cita-container" key={doctor.id}>
            <p>Nombre del Dr./Dra. : {`${doctor.nombre} ${doctor.apellido}`}</p>
            <p>Consultas que atendio: {doctor.citasAtendidas}</p>
            <p>Precio por consulta: Q{doctor.precioConsulta}.00</p>
          </div>
          <label className="separator">---------------------------------------------------------</label>
          </div>
        ))}
        {doctoresMasSolicitados.length === 0 && <p>Los doctores no han atendido citas</p>}
      </div>
    </>
  );
};

export { DoctoresMasVisitados };
