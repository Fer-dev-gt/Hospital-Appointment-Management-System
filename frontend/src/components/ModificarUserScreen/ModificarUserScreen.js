import React from "react";
import { HospitalContext } from "../../Context";
import usuarioServicio from "../../services/usuarioServicio";
import './ModificarUserScreen.css';

function ModificarUserScreen() {
  const {
    usuarios,
    // irHomePage,
    getUsuarios,
    usuarioLoggeado,
  } = React.useContext(HospitalContext);
  
  const [newNombre, setNewNombre] = React.useState("");
  const [newApellido, setNewApellido] = React.useState("");
  const [newUserName, setNewUserName] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const [newFechaNacimiento, setNewFechaNacimiento] = React.useState("");

  const handleNewNombreUser = (event) => setNewNombre(event.target.value);
  const handleNewApellidoUser = (event) => setNewApellido(event.target.value);
  const handleNewUserNameUser = (event) => setNewUserName(event.target.value);
  const handleNewPasswordUser = (event) => setNewPassword(event.target.value);
  const handleNewFechaNacimiento = (event) => setNewFechaNacimiento(event.target.value);


  const modificarUsuario = async () => {
    console.log('Datos antes del cambio', usuarioLoggeado);
    
    const userNameRepetido = usuarios.find((user) => user.userName === newUserName);
    
    if(userNameRepetido) {
      alert(`El Username ${newUserName} ya esta registrado, por favor elija otro`);
      return;
    }

    const passwordCorta = newPassword.length < 8;
    if(passwordCorta) {
      alert('Password debe tener al menos 8 caracteres');
      return;
    }

    usuarioLoggeado.nombre = newNombre;
    usuarioLoggeado.apellido = newApellido;
    usuarioLoggeado.userName = newUserName;
    usuarioLoggeado.password = newPassword;
    usuarioLoggeado.fechaNacimiento = newFechaNacimiento;
    console.log('Intentando modificar usuario con estos datos: ', usuarioLoggeado);

    await usuarioServicio.actualizarUsuario(usuarioLoggeado.id, usuarioLoggeado);
    getUsuarios();

    console.log("Nueva lista de usuarios", usuarios);
  }



  return (
    <div>
      <section id="modificarPaciente-section" className="modificar-user-container">
        <h1>UHospital - Modificar Perfil</h1>
          <label>Nombre: </label>
          <input 
            type="text" 
            id="nombre-modificar"
            value={newNombre}
            onChange={handleNewNombreUser}/><br/><br/>
          <label>Apellido: </label>
          <input 
            type="text" 
            id="apellido-modificar"
            value={newApellido}
            onChange={handleNewApellidoUser}/><br/><br/>
          <label>UserName: </label>
          <input 
            type="text" 
            id="userName-modificar"
            value={newUserName}
            onChange={handleNewUserNameUser}/><br/><br/>
          <label>Password: </label>
          <input 
            type="password" 
            id="password-modificar"
            value={newPassword}
            onChange={handleNewPasswordUser}/><br/><br/>
          <label>Fecha de nacimiento: </label>
          <input 
            type="date" 
            id="fecha-nacimiento-modificar"
            value={newFechaNacimiento}
            onChange={handleNewFechaNacimiento}/><br/><br/>
          <button onClick={modificarUsuario} id="ModificarPacienteBtn">Modificar</button>
      </section>
    </div>
  );
}

export { ModificarUserScreen }