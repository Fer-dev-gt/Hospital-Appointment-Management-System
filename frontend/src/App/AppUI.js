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
import { ComprarMedicina } from "../components/ComprarMedicina/ComprarMedicina";
import { CitasSolicitadas } from "../components/ModuloEnfermera/CitasSolicitadas";
import { CrearRecetas } from "../components/ModuloDoctor/CrearRecetas";

function AppUI() {
  const {
    usuarioLogIn,
    irHomePage,
    registrandoNuevoUsario,
    modificarUserScreen,
    solicitarCitaScreen,
    verCitas,
    verRecetas,
    comprarMedicina,
    usuarioPacienteLogIn,
    usuarioEnfermeraLogIn,
    usuarioDoctorLogIn,
  } = React.useContext(HospitalContext);


  return (
    <>
      <h1 onClick={irHomePage} id="home">UHospital</h1>
      {(!usuarioLogIn && !registrandoNuevoUsario) && <LoginScreen />}
      {!!usuarioPacienteLogIn && <ModuloPacientes />}
      {!!registrandoNuevoUsario && <RegisterUserScreen />}
      {!!modificarUserScreen && <ModificarUserScreen />}
      {!!solicitarCitaScreen && <SolicitarCita />}
      {!!verCitas && <VerCitas />}
      {!!verRecetas && <VerRecetas />}
      {!!comprarMedicina && <ComprarMedicina />}
      {!!usuarioEnfermeraLogIn && <CitasSolicitadas />}
      {!!usuarioDoctorLogIn && <CrearRecetas />}
    </>
  );

}


export { AppUI };   