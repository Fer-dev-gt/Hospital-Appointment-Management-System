import React from "react";
import { HospitalContext } from "../Context";
import { LoginScreen } from "../components/LoginScreen/LoginScreen";
import { UsuarioComponente } from "../components/UsuariosComponentes/UsuarioComponente";

function AppUI() {
  const {

  } = React.useContext(HospitalContext);


  return (
    <>
      <LoginScreen />
      <UsuarioComponente />
    </>
  );

}


export { AppUI };   