import React from "react";
import { HospitalContext } from "../../Context";
import { faker } from "@faker-js/faker";
import usuarioServicio from "../../services/usuarioServicio";
import './SolicitarCita.css';


function SolicitarCita() {
  const {
    usuarioLoggeado,
    getCitas,
    agregarCita,
    citas,
  } = React.useContext(HospitalContext);

  React.useEffect(() => {
    console.log('Lista de citas en Citas.bin');
    getCitas();
  }, [])

  const [fechaCita, setFechaCita] = React.useState("");
  const [horaCita, setHoraCita] = React.useState("");
  const [motivoCita, setMotivoCita] = React.useState("");

  const handleFechaCita = (event) => setFechaCita(event.target.value);
  const handleHoraCita = (event) => setHoraCita(event.target.value);
  const handleMotivoCita = (event) => setMotivoCita(event.target.value);


  const hacerCita = async () => {
    const idPaciente = usuarioLoggeado.id;
    const idCita = faker.number.int({ min: 10, max: 10000 });

    const datosCita = {idCita, idPaciente, fechaCita, horaCita, motivoCita};
    datosCita.status = 'pendiente';
    datosCita.doctor = 'no asignado';
    datosCita.receta = {};
    datosCita.receta.fecha = fechaCita;
    datosCita.receta.padecimiento = '';
    datosCita.receta.descripcion = '';
    datosCita.receta.precioConsulta = 0;

    const citaRepetida = citas.some(cita => cita.fechaCita === fechaCita && cita.horaCita === horaCita && cita.idPaciente === idPaciente);

    if (citaRepetida) {
      alert('Ya existe una cita programada para esta fecha y hora');
      return;
    }

    console.log('Intentando registrar nueva cita', datosCita);

    await usuarioServicio.crearCita(datosCita);
    getCitas();
  }



  return (
    <section id="hacerCita-section" className="solicitar-cita-container">
      <h1>Solicitar una cita</h1>
        <label>Fecha:</label>
        <input 
          type="date" 
          id="fecha-cita"
          value={fechaCita}
          onChange={handleFechaCita}
          /><br/><br/>
        <label>Hora:</label>
        <input 
          type="time" 
          id="hora-cita"
          value={horaCita}
          onChange={handleHoraCita}
          /><br/><br/>
        <label>Motivo:</label>
        <textarea 
          id="motivo-cita"
          value={motivoCita}
          onChange={handleMotivoCita}
        ></textarea><br/><br/>
        <button onClick={hacerCita} id="hacerCitaBtn">Hacer cita</button>
    </section>
  );
}


export { SolicitarCita };
