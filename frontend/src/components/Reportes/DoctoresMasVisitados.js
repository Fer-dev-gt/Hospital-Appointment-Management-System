import React from "react";
import { HospitalContext } from "../../Context";

const DoctoresMasVisitados = () => {
  const {
    irManejarCitasAsginadas,
    irSolictarCitaPage,
    usuarioLoggeado,
    irVerCitasPage,
  } = React.useContext(HospitalContext);


  return (
    <div>
      <h1>Doctores mas visitados</h1>
    </div>
  );
};

export { DoctoresMasVisitados };
