import React from "react";
import { HospitalContext } from "../../Context";
import "./VerRecetas.css";

function VerRecetas() {
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
      {citasPaciente.length === 0 && <p>No tiene citas/Recetas</p>}

      <table className="two-column-table">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Padecimiento</th>
            <th>Descripción</th>
            <th>Precio de la consulta</th>
          </tr>
        </thead>
        <tbody>
          {
            citasPaciente.map((cita) => (
              <tr key={cita.receta.padecimiento + cita.horaCita}>
                <td>{cita.receta.fecha}</td>
                <td>{cita.receta.padecimiento}</td>
                <td>{cita.receta.descripcion}</td>
                <td>{cita.receta.precioConsulta}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}


export { VerRecetas };