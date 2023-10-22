import React from "react";
import usuarioServicio from "../services/usuarioServicio";

const HospitalContext = React.createContext();  

function HopitalProvider({ children }) {
  const [usuarios, setUsuarios] = React.useState([]);
  const [nombre, setNombre] = React.useState("");
  const [id, setId] = React.useState("");

  
  React.useEffect(() => {
    getUsuarios();
  }, [])


  const eliminarUsuario = async (id) => {
    await usuarioServicio.eliminarUsuario(id);
    getUsuarios();
  }


  const getUsuarios = async () => {
    const usuarios = await usuarioServicio.obtenerUsuarios();
    if (usuarios) setUsuarios(usuarios);
    console.log(usuarios);
  };


  const agregarUsuario = async () => {
    const usuario = { nombre, id };
    await usuarioServicio.crearUsuario(usuario);
    getUsuarios();
  }


  const editarUsuario = async (id) => {
    const usuario = { nombre, id };
    console.log('editando usuario', usuario)
    await usuarioServicio.actualizarUsuario(id, usuario);
    getUsuarios();
  }


  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  
  const handleIdChange = (event) => {
    setId(event.target.value);
  };


  return (
    <HospitalContext.Provider value = {                                                       // Retornamos todos los States y props que se usaran en el proyecto
      {                                                      
        eliminarUsuario,
        getUsuarios,
        agregarUsuario,
        editarUsuario,
        handleNombreChange,
        handleIdChange,
      }
    }>
      {children}
    </HospitalContext.Provider>
  );
}


export { HospitalContext, HopitalProvider };