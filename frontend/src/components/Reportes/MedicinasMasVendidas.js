import React from "react";
import { HospitalContext } from "../../Context";

const MedicinasMasVendidas = () => {
  const {
    getReporteMedicinas,
    medicinasReportes,
  } = React.useContext(HospitalContext);

  React.useEffect(() => {
    console.log('Reporte de medinians en MedicinasMasVendidas.bin');
    getReporteMedicinas();
  }, [])

  const medicinasVendidas = medicinasReportes.filter(medicina => medicina.cantidadVendidas > 0);
  console.log('medicinasVendidas:', medicinasVendidas);


  const medicinasVendidasOrdenadas = medicinasVendidas.sort((a, b) => b.cantidadVendidas - a.cantidadVendidas);
  console.log('medicinasVendidasOrdenadas:', medicinasVendidasOrdenadas);


  return (
    <>
      <div className="ver-citas-container">
        <h1>Medicinas más vendidas</h1>
        {medicinasVendidasOrdenadas.map(medicina => (<div key={`${medicina.id} ${medicina.nombre}`}>
          <div className="cita-container" key={medicina.id}>
            <p>Nombre de la medicina: {medicina.nombre}</p>
            <p>Unidades vendidas: {medicina.cantidadVendidas}</p>
            <p>Precio: Q{medicina.precio}.00</p>
          </div>
          <label className="separator">---------------------------------------------------------</label>
          </div>
        ))}
        {medicinasVendidasOrdenadas.length === 0 && <p>No se han vendido medicinas</p>}
      </div>
    </>
  );
};

export { MedicinasMasVendidas };
