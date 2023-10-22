import React from "react";
import { HospitalContext } from "../../Context";


function RegisterUserScreen() {

  const {
    irHomePage
  } = React.useContext(HospitalContext);
  

  return(
    <div>
      <section id="registrarPaciente-section" className="registerPatient-container">
        <h1>UHospital - Registro de Paciente</h1>
        <label>Nombre:</label>
        <input type="text" id="nombre" /><br /><br />
        <label>Apellido:</label>
        <input type="number" id="age" /><br /><br />
        <label>UserName:</label>
        <input type="text" id="userName" /><br /><br />
        <label>Fecha de nacimiento:</label>
        <input type="date" id="fecha-nacimiento" /><br /><br />
        <label>Gender:</label>
        <select id="gender" >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select><br /><br />
        <label>Password:</label>
        <input type="password" id="passwordNewPatient" /><br /><br />
        <label>Phone:</label>
        <input type="tel" id="phone" /><br /><br />
        <button id="registrarUsuarioBtn">Registrar nuevo Usuario</button>
        <button onClick={irHomePage} id="regresar al Login">Regresar</button>
      </section>
    </div>
  );
}

export { RegisterUserScreen };
