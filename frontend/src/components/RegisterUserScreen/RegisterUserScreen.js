import React from "react";
import { faker } from "@faker-js/faker";
import { HospitalContext } from "../../Context";
import usuarioServicio from "../../services/usuarioServicio";

function RegisterUserScreen() {

  const {
    usuarios,
    irHomePage,
    getUsuarios,
  } = React.useContext(HospitalContext);

  const [nombre, setNombre] = React.useState("");
  const [apellido, setApellido] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [fechaNacimiento, setFechaNacimiento] = React.useState("");
  const [gender, setGender] = React.useState("Masculino");
  const [password, setPassword] = React.useState("");
  const [phone, setPhone] = React.useState("");

  const handleNombreNewUser = (event) => setNombre(event.target.value);
  const handleApellidoNewUser = (event) => setApellido(event.target.value);
  const handleUserNameNewUser = (event) => setUserName(event.target.value);
  const handleFechaNacimientoNewUser = (event) => setFechaNacimiento(event.target.value);
  const handleGenderNewUser = (event) => setGender(event.target.value);
  const handlePasswordNewUser = (event) => setPassword(event.target.value);
  const handlePhoneNewUser = (event) => setPhone(event.target.value);


  const registrarNuevoUsuario = async () => {
    const id = faker.number.int({ min: 10, max: 10000 });
    const userType = 'paciente';
    const usuario = {id, userType, userName, password, nombre, apellido, fechaNacimiento, gender, phone };
    console.log('Intentando registrar nuevo usuario', usuario);

    const userNameRepetido = usuarios.find((user) => user.userName === usuario.userName);
    const passwordCorta = usuario.password.length < 8;

    if(userNameRepetido) {
      alert('Usuario ya existe');
      return;
    }

    if(passwordCorta) {
      alert('Password debe tener al menos 8 caracteres');
      return;
    }

    // Revisa que todos los campos obligatorios estén llenos
    if (!usuario.nombre || !usuario.apellido || !usuario.userName || !usuario.fechaNacimiento || !usuario.gender || !usuario.password) {
      alert('Todos los campos son obligatorios, excepto el teléfono');
      return;
    }

    await usuarioServicio.crearUsuario(usuario);
    getUsuarios();
  }
  

  return(
    <div>
      <section id="registrarPaciente-section" className="registerPatient-container">
        <h1>UHospital - Registro de Paciente</h1>
        <label>Nombre: </label>
        <input 
          type="text"
          id="nombre"
          value={nombre}
          onChange={handleNombreNewUser} /><br /><br />
        <label>Apellido: </label>
        <input 
          type="text"
          id="apellido"
          value={apellido}
          onChange={handleApellidoNewUser}  /><br /><br />
        <label>UserName: </label>
        <input 
          type="text"
          id="userName"
          value={userName}
          onChange={handleUserNameNewUser}
           /><br /><br />
        <label>Fecha de nacimiento: </label>
        <input 
          type="date"
          id="fecha-nacimiento"
          value={fechaNacimiento}
          onChange={handleFechaNacimientoNewUser} /><br /><br />
        <label>Gender: </label>
        <select 
          id="gender"
          value={gender}
          onChange={handleGenderNewUser}
          >
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
          <option value="Otro">Otro</option>
        </select><br /><br />
        <label>Password: </label>
        <input 
          type="password" 
          id="passwordNewPatient"
          value={password}
          onChange={handlePasswordNewUser}
           /><br /><br />
        <label>Phone: (Opcional) </label>
        <input 
          type="tel" 
          id="phone"
          value={phone}
          onChange={handlePhoneNewUser}
           /><br /><br />
        <button onClick={registrarNuevoUsuario} id="registrarUsuarioBtn">Registrar nuevo Usuario</button>
        <button onClick={irHomePage} id="regresar al Login">Regresar</button>
      </section>
    </div>
  );
}

export { RegisterUserScreen };
