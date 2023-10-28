import React from 'react';
import { HospitalContext } from "../../Context";
import './LoginScreen.css';

function LoginScreen() {
  
  const {
    verificarLogin,
    irRegistrarUsuarioPage,
    handleNombreChange,
    handlePasswordChange,
    nombre
  } = React.useContext(HospitalContext);

  return(
    <div className='login-component'>
      <section id="login-section" className="login-container">
        <h1>UHospital - Inicio de Sesión</h1>
          <label>Name: </label>
          <input 
            type="text"
            id="userNameLogin"
            value={nombre}
            onChange={handleNombreChange}
            /><br/><br/>
          
          <label>Password: </label>
          <input
            type="password"
            id="passwordLogin"
            value={nombre}
            onChange={handlePasswordChange}
            /><br/><br/>
          <div className='login-buttons'>
            <button onClick={verificarLogin} id="loginBtn">Iniciar Sesión</button>
            <button onClick={irRegistrarUsuarioPage} id="irRegistrarUsarioPageBtn">Registrar nuevo Usuario</button>
          </div>
      </section>
    </div>
  );
}

export { LoginScreen };