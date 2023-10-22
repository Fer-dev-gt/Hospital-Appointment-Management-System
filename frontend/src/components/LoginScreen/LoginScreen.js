import React from 'react';


function LoginScreen() {
  



  
  return(
    <div>
      <section id="login-section" className="login-container">
        <h1>UHospital - Inicio de Sesión</h1>
        <form>
          <label>Name:</label>
          <input type="text" id="userNameLogin"/><br/><br/>
          
          <label>Password:</label>
          <input type="password" id="passwordLogin"/><br/><br/>
          <button id="loginBtn">Iniciar Sesión</button>
          <button id="irRegistrarUsarioPageBtn">Registrar nuevo Usuario</button>
        </form>
      </section>
    </div>
  );
}


export { LoginScreen };