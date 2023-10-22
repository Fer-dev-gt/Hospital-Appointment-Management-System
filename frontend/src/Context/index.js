import React from "react";
import usuarioServicio from "../services/usuarioServicio";

const HospitalContext = React.createContext();  

function HopitalProvider({ children }) {
  const [usuarios, setUsuarios] = React.useState([]);

  const [usuarioLogIn, setUsuarioLogIn] = React.useState(false);                                                // Estado para saber si el usuario esta logeado o no
  const [registrandoNuevoUsario, setregistrandoNuevoUsario] = React.useState(false);                            // Estado para saber si el usuario quiere ir a la pagina de registrar usuario

  const [nombre, setNombre] = React.useState("");
  const [passwordLogin, setPasswordLogin] = React.useState("");
  const [id, setId] = React.useState("");


  React.useEffect(() => {
    getUsuarios();
  }, [])
  

  const verificarLogin = () => {
    const usuario = { nombre, passwordLogin };
    console.log('verificando login', usuario);

    const foundUsuario = usuarios.find((user) => 
      user.nombre === usuario.nombre && user.password === usuario.passwordLogin
    );

    if (foundUsuario) {
      console.log('Usuario encontrado:', foundUsuario);
      setUsuarioLogIn(true);
    } else {
      alert('Usuario no encontrado');
      setUsuarioLogIn(false);
    }
  };


  const irHomePage =  () => {
    console.log('Regresando al home')
    setUsuarioLogIn(false);
    setregistrandoNuevoUsario(false);
  }


  const irRegistrarUsuarioPage =  () => {
    console.log('ir a registrar usuario')
    setregistrandoNuevoUsario(true);
  }


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


  const handleNombreChange = (event) => setNombre(event.target.value);
  const handleIdChange = (event) => setId(event.target.value);
  const handlePasswordChange = (event) => setPasswordLogin(event.target.value);


  return (
    <HospitalContext.Provider value = {                                                       // Retornamos todos los States y props que se usaran en el proyecto
      {                                                      
        eliminarUsuario,
        getUsuarios,
        agregarUsuario,
        editarUsuario,
        handleNombreChange,
        handleIdChange,
        verificarLogin,
        irRegistrarUsuarioPage,
        irHomePage,
        handlePasswordChange,
        usuarios,
        usuarioLogIn,
        registrandoNuevoUsario,
      }
    }>
      {children}
    </HospitalContext.Provider>
  );
}

export { HospitalContext, HopitalProvider };