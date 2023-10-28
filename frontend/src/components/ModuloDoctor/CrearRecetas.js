import React from "react";
import { HospitalContext } from "../../Context";
import usuarioServicio from "../../services/usuarioServicio";
import './CrearRecetas.css'

const CrearRecetas = ({objetoCita, actualizarPantalla, valorAnterior}) => {
  const {
    citas,
    usuarioLoggeadoDoctor,
    getReporteDoctores,
    doctoresReportes,
  } = React.useContext(HospitalContext);

  React.useEffect(() => {console.log('objetoCita', objetoCita)}, [])

  React.useEffect(() => {
    console.log('Reporte de doctores en doctoresReportes.bin');
    getReporteDoctores();
  }, [])
  
  const [newFecha, setNewFecha] = React.useState("");
  const [newPadecimiento, setNewPadecimiento] = React.useState("");
  const [newDescripcion, setNewDescripcion] = React.useState("");
  
  const handleNewFecha = (event) => setNewFecha(event.target.value);
  const handleNewPadecimiento = (event) => setNewPadecimiento(event.target.value);
  const handleNewDescripcion = (event) => setNewDescripcion(event.target.value);
  
  const [mostrarVentanaCreaReceta, setMostrarVentanaCreaReceta] = React.useState(false);

  const reporteDoctor = doctoresReportes.find(doctor => doctor.id === usuarioLoggeadoDoctor.id);

  const subirCitaAlArchivo = async (idCita) => {
    const citaToUpdate = citas.find(cita => cita.idCita === idCita);
    console.log('Guardando cita actualizada:', citaToUpdate);
    
    await usuarioServicio.actualizarCita(idCita, citaToUpdate);
    console.log('Datos de citas actualizadas', citas);
  }

  const subirReporteAlArchivo = async (idDoctor) => {
    const doctorToUpdate = doctoresReportes.find(doctor => doctor.id === idDoctor);
    console.log('Guardando reporte actualizado:', doctorToUpdate);

    await usuarioServicio.actualizarDoctoresMasSolicitados(idDoctor, doctorToUpdate);
    console.log('Datos de reporte actualizados', doctoresReportes);
  }


  const ocultarMenuCita = () => {
    objetoCita.statusDoctor = 'no creando';
    console.log('objetoCita', objetoCita);
    setMostrarVentanaCreaReceta(!mostrarVentanaCreaReceta);
  }


  const guardarReceta = async () => {
    console.log('objetoCita antes', objetoCita);
    objetoCita.statusDoctor = 'completada';
    objetoCita.status = 'completada';
    
    const datosAnteriores = objetoCita.receta;
    objetoCita.receta = { 
      ...datosAnteriores, 
      fecha: newFecha, 
      padecimiento: newPadecimiento, 
      descripcion: newDescripcion,
      precioConsulta: 100,
      atendioDoctor: `${usuarioLoggeadoDoctor.nombre} ${usuarioLoggeadoDoctor.apellido}`
    };

    reporteDoctor.citasAtendidas += 1;

    console.log('guardando receta', objetoCita);
    subirCitaAlArchivo(objetoCita.idCita);
    actualizarPantalla(!valorAnterior);
    subirReporteAlArchivo(reporteDoctor.id);
  }


  return(
    <>
      {objetoCita.statusDoctor === 'creando' && 
        <div className="crear-recetas">
        <h1>Creando Receta</h1>
        <div className="crear-recetas__form">
          <label htmlFor="fecha" className="crear-recetas__label" id="fechaLable">Fecha:</label>
          <input type="date" id="fecha" name="fecha" className="crear-recetas__input" value={newFecha} onChange={handleNewFecha}/>
  
          <label htmlFor="nombre-paciente" className="crear-recetas__label">Nombre Paciente:</label>
          <input type="text" id="nombre-paciente" name="nombre-paciente" className="crear-recetas__input" />
  
          <label htmlFor="padecimiento-paciente" className="crear-recetas__label">Padecimiento:</label>
          <input type="text" id="padecimiento-paciente" name="padecimiento-paciente" className="crear-recetas__input" value={newPadecimiento} onChange={handleNewPadecimiento} />
  
          <label htmlFor="descripcion" className="crear-recetas__label">Descripción:</label>
          <textarea id="descripcion" name="descripcion" className="crear-recetas__textarea" value={newDescripcion} onChange={handleNewDescripcion}></textarea>
        </div>
        <div className="botones-crear-receta">
          <button onClick={ocultarMenuCita}>Regresar</button>
          <button onClick={guardarReceta}>Crear receta</button>
        </div>
      </div>
      
      }
    </>
  )
};


export { CrearRecetas };