import React from "react";
import { HospitalContext } from "../../Context";
import './ModuloDoctor.css';

const ModuloDoctor = () => {
  const {
    irManejarCitasAsginadas,
    irVentanaReportesMedicina,
    irVentanaReportesDoctores,
    getCitas,
    usuarioLoggeadoDoctor,
  } = React.useContext(HospitalContext);

  React.useEffect(() => {
    console.log('Lista de citas en Citas.bin');
    getCitas();
    console.log('usuarioLoggeadoDoctor', usuarioLoggeadoDoctor);
  }, [])  


  return (
    <div className="menu-botones">
      <button onClick={irManejarCitasAsginadas}>Atender citas asignadas</button>
      <button onClick={irVentanaReportesMedicina}>Top 5 medicamentos más vendidos</button>
      <button onClick={irVentanaReportesDoctores}>Top 3 doctores con más citas atendidas</button>
    </div>
  );
};

export { ModuloDoctor };
