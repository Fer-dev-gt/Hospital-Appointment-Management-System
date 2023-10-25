import React from "react";
import { HospitalContext } from "../../Context";


function CitasSolicitadas() {
  const {
    usuarios,
    citas,
    getCitas,
    usuarioLoggeadoEnfermera,
  } = React.useContext(HospitalContext);

  React.useEffect(() => {
    console.log('Lista de citas en Citas.bin');
    getCitas();
    console.log('usuarioLoggeadoEnfermera', usuarioLoggeadoEnfermera);
  }, [])
  
  const [selectedDoctor, setSelectedDoctor] = React.useState('');
  const [mostrarDoctores, setMostrarDoctores] = React.useState(false);
  
  const citasPendientes = citas.filter(cita => cita.status !== "conrirmar" && cita.status !== "rechazado");

  const aceptarCita = (cita) => {
    if(cita.status !== 'confirmar') {
      console.log('status 1', cita);
      cita.status = 'confirmar';
      console.log('status 2', cita);
      setMostrarDoctores(!mostrarDoctores);
    }
  }


  return(
    <div>
      <h1>Listado de citas pendientes</h1>
      {citasPendientes.length === 0 && <p>No Hay citas por administrar</p>}

      {citasPendientes.length > 0 && (
      <table className="two-column-table">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Motivo</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            citasPendientes.map((cita) => (
              <tr key={cita.receta.padecimiento + cita.horaCita}>
                <td>{cita.fechaCita}</td>
                <td>{cita.horaCita}</td>
                <td>{cita.motivoCita}</td>
                
                <td><button>Rechazar</button></td>
                <td><button onClick={()=>{aceptarCita(cita)}}>Atender</button> {(cita.status === 'confirmar') && 
                  <select  onChange={(e) => setSelectedDoctor(e.target.value)}>
                    <option value={null}>Seleccionar doctor</option>
                    {usuarios.filter(usuario => usuario.userType === 'doctor').map(doctor => (
                      <option key={doctor.id} value={doctor.nombre}>{doctor.nombre}</option>
                    ))}
                  </select>}
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>)}
      
    </div>
  )

}

export { CitasSolicitadas };