import React from "react";
import { HospitalContext } from "../Context";
import { LoginScreen } from "../components/LoginScreen/LoginScreen";
// import { UsuarioComponente } from "../components/UsuariosComponentes/UsuarioComponente";
import { RegisterUserScreen } from "../components/RegisterUserScreen/RegisterUserScreen";
import { ModuloPacientes } from "../components/ModuloPacientes/ModuloPacientes";
import { ModificarUserScreen } from "../components/ModificarUserScreen/ModificarUserScreen";
import { SolicitarCita } from "../components/SolicitarCitaScreen/SolicitarCita";
import { VerCitas } from "../components/VerCitasScreen/VerCitas";
import { VerRecetas } from "../components/VerRecetas/VerRecetas";

function AppUI() {
  const {
    usuarioLogIn,
    irHomePage,
    registrandoNuevoUsario,
    modificarUserScreen,
    solicitarCitaScreen,
    verCitas,
    verRecetas,
  } = React.useContext(HospitalContext);


  return (
    <>
      <h1 onClick={irHomePage} id="home">UHospital</h1>
      {(!usuarioLogIn && !registrandoNuevoUsario) && <LoginScreen />}
      {/* {!!usuarioLogIn && <UsuarioComponente />} */}
      {!!usuarioLogIn && <ModuloPacientes />}
      {!!registrandoNuevoUsario && <RegisterUserScreen />}
      {!!modificarUserScreen && <ModificarUserScreen />}
      {!!solicitarCitaScreen && <SolicitarCita />}
      {!!verCitas && <VerCitas />}
      {!!verRecetas && <VerRecetas />}
    </>
  );

}


export { AppUI };   