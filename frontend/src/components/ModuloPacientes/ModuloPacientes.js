import React from "react";
import { HospitalContext } from "../../Context";

const ModuloPacientes = () => {
  const {
    irModificarUsuarioPage,
    usuarioLoggeado,
  } = React.useContext(HospitalContext);

  console.log('usuarioLoggeado', usuarioLoggeado);

  return (
    <div>
      <button onClick={irModificarUsuarioPage}>Modificar Perfil</button>
      <button >Solicitar cita</button>
      <button >Ver Recetas con Factura </button>
      <button >Comprar medicina</button>
    </div>
  );
};

export { ModuloPacientes };
