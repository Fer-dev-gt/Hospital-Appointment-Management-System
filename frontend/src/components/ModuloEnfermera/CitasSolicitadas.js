import React from "react";
import { HospitalContext } from "../../Context";
import usuarioServicio from "../../services/usuarioServicio";


function CitasSolicitadas() {
  const {
    usuarios,
    citas,
    getCitas,
    usuarioLoggeadoEnfermera,
  } = React.useContext(HospitalContext);

  const [selectedDoctor, setSelectedDoctor] = React.useState('');
  const [mostrarDoctores, setMostrarDoctores] = React.useState(false);
  const citasPendientes = citas.filter(cita => (cita.status !== "confirmar" && cita.status !== "rechazada") || cita.doctor == 'no asignado');

  React.useEffect(() => {
    console.log('Lista de citas en Citas.bin');
    getCitas();
    console.log('usuarioLoggeadoEnfermera', usuarioLoggeadoEnfermera);
  }, [])  
  
  React.useEffect(() => {
    console.log('selectedDoctor2:', selectedDoctor);
  }, [selectedDoctor]);
  

  const subirCitaAlArchivo = async (idCita) => {
    const citaToUpdate = citas.find(cita => cita.idCita === idCita);
    console.log('Guardando cita actualizada:', citaToUpdate);
    
    await usuarioServicio.actualizarCita(idCita, citaToUpdate);
    console.log('Datos de citas actualizadas', citas);
  }


  const aceptarCita = (cita) => {
    if(cita.status === 'confirmar' && selectedDoctor === '') alert('No se ha seleccionado doctor');
    if(cita.status === 'confirmar' && selectedDoctor !== '') {
      console.log('guardando doctor');
      cita.status = 'aceptada';
      cita.doctor = selectedDoctor;
      console.log('Datos de citas actualizadas', citas);
      setMostrarDoctores(!mostrarDoctores);
      aceptarCita(cita)
      subirCitaAlArchivo(cita.idCita);
      return;
    }

    if(cita.status === 'aceptada') console.log('quitando cita');

    if(cita.status !== 'confirmar') {
      cita.status = 'confirmar';
      setMostrarDoctores(!mostrarDoctores);
    }
  }

  
  const recharzarCita = (cita) => {
    if(cita.status !== 'rechazada') {
      console.log('rechazando cita');
      cita.doctor = 'Cita fue rechazada';
      cita.status = 'rechazada';
      setMostrarDoctores(!mostrarDoctores);
      subirCitaAlArchivo(cita.idCita);
    }
  }


  const cancelarCita = (cita) => {
    if(cita.status !== 'pendiente') {
      cita.status = 'pendiente';
      setMostrarDoctores(!mostrarDoctores);
    }
  }


  const cambiarDoctor = (event) => {
    if(event.target.value === 'Seleccionar doctor') {
      const nuevoDoctor = '';
      setSelectedDoctor(nuevoDoctor)
      console.log('selectedDoctor: ', nuevoDoctor);
      return;
    }
    const nuevoDoctor = event.target.value;
    setSelectedDoctor(nuevoDoctor)
    console.log('selectedDoctor: ', nuevoDoctor);
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
                
                <td><button onClick={()=>{recharzarCita(cita)}} >Rechazar</button></td>
                <td><button onClick={()=>{aceptarCita(cita)}}>{cita.status!=='confirmar' ? "Aceptar":"Confirmar"}</button> {(cita.status === 'confirmar') && 
                  (<>
                    <select onChange={cambiarDoctor}>
                      <option value={null}>Seleccionar doctor</option>
                      {usuarios.filter(usuario => usuario.userType === 'doctor').map(doctor => (
                        <option id={doctor.nombre} key={doctor.id} value={doctor.nombre}  >{doctor.nombre}</option>
                      ))}
                    </select>
                    <button onClick={()=>{cancelarCita(cita)}}>Regresar</button>
                  </>
                  )}
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