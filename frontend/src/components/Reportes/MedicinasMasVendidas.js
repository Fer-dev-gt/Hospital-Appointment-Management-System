import React from "react";
import { HospitalContext } from "../../Context";

const MedicinasMasVendidas = () => {
  const {
    irManejarCitasAsginadas,
    irSolictarCitaPage,
    usuarioLoggeado,
    irVerCitasPage,
  } = React.useContext(HospitalContext);


  return (
    <div>
      <h1>Medicinas mas vendidas</h1>
    </div>
  );
};

export { MedicinasMasVendidas };
