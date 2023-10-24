import React from "react";
import usuarioServicio from "../services/usuarioServicio";

const HospitalContext = React.createContext();  

function HopitalProvider({ children }) {
  const [usuarios, setUsuarios] = React.useState([]);
  const [citas, setCitas] = React.useState([]);
  const [usuarioLoggeado, setUsuarioLoggeado] = React.useState({});

  const [usuarioLogIn, setUsuarioLogIn] = React.useState(false);                                                // Estado para saber si el usuario esta logeado o no
  const [registrandoNuevoUsario, setregistrandoNuevoUsario] = React.useState(false);                            // Estado para saber si el usuario quiere ir a la pagina de registrar usuario
  const [modificarUserScreen, setModificarUserScreen] = React.useState(false);                                  // Estado para saber si el usuario quiere ir a la pagina de modificar usuario
  const [solicitarCitaScreen, setSolicitarCitaScreen] = React.useState(false);                                  // Estado para saber si el usuario quiere ir a la pagina de solicitar cita
  const [verCitas, setVerCitas] = React.useState(false);                                                        // Estado para saber si el usuario quiere ir a la pagina de ver citas

  const [nombre, setNombre] = React.useState("");
  const [passwordLogin, setPasswordLogin] = React.useState("");
  const [id, setId] = React.useState("");


  React.useEffect(() => {
    getUsuarios();
  }, [])
  

  const verificarLogin = () => {
    const usuario = { nombre, passwordLogin };
    console.log('verificando login', usuario);

    const UsuarioLoggeado = usuarios.find((user) => user.userType === 'paciente' && user.userName === usuario.nombre && user.password === usuario.passwordLogin)
    setUsuarioLoggeado(UsuarioLoggeado)
    const usuarioEsPaciente = !!UsuarioLoggeado

    const usuarioEsDoctor = !!usuarios.find((user) => user.userType === 'doctor' && user.userName === usuario.nombre && user.password === usuario.passwordLogin)
    const usuarioEsEnfermera = !!usuarios.find((user) => user.userType === 'enfermera' && user.userName === usuario.nombre && user.password === usuario.passwordLogin)

    if(usuarioEsDoctor) console.log('Usuario es doctor, mostrando su pantalla');
    if(usuarioEsEnfermera) console.log('Usuario es enfermera, mostrando su pantalla');

    console.log('Usuario es paciente?', usuarioEsPaciente);
    console.log('Usuario es doctor?', usuarioEsDoctor);
    console.log('Usuario es enfermera?', usuarioEsEnfermera);

    if(usuarioEsDoctor) {
      console.log('Usuario encontrado:', usuarioEsDoctor);
    }

    if(usuarioEsEnfermera) {
      console.log('Usuario encontrado:', usuarioEsEnfermera);
    }

    if(!usuarioEsPaciente) {
      alert('Usuario no es paciente');
      return;
    }

    if (usuarioEsPaciente) {
      setUsuarioLogIn(true);
    } else {
      alert('Usuario no encontrado');
      setUsuarioLogIn(false);
    }
  };

  // Navegacion de paginas
  const irHomePage =  () => {
    console.log('Regresando al home')
    setUsuarioLogIn(false);
    setregistrandoNuevoUsario(false);
    setModificarUserScreen(false);
    setSolicitarCitaScreen(false);
    setVerCitas(false);
  }

  const irRegistrarUsuarioPage =  () => {
    console.log('ir a registrar usuario')
    setregistrandoNuevoUsario(true);
  }

  const irModificarUsuarioPage =  () => {
    console.log('ir a modificar usuario')
    setModificarUserScreen(true);
    setSolicitarCitaScreen(false);
    setVerCitas(false);
  }

  const irSolictarCitaPage =  () => {
    console.log('ir a solicitar cita')
    setSolicitarCitaScreen(true);
    setVerCitas(false);
    setModificarUserScreen(false);
  }

  const irVerCitasPage =  () => {
    console.log('ir a ver citas')
    setModificarUserScreen(false);
    setSolicitarCitaScreen(false);
    setVerCitas(true);
  }



  // Funciones CRUD de usuarios
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

  // Funciones CRUD de citas
  const eliminarCita = async (id) => {
    await usuarioServicio.eliminarCita(id);
    getCitas();
  }

  const getCitas = async () => {
    const citas = await usuarioServicio.obtenerCitas();
    if (citas) setCitas(citas);
    console.log(citas);
  }

  const agregarCita = async () => {
    const cita = { nombre, id };
    await usuarioServicio.crearCita(cita);
    getCitas();
  }

  const editarCita = async (id) => {
    const cita = { nombre, id };
    console.log('editando cita', cita)
    await usuarioServicio.actualizarCita(id, cita);
    getCitas();
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
        irModificarUsuarioPage,
        irSolictarCitaPage,
        irVerCitasPage,
        handlePasswordChange,
        getCitas,
        agregarCita,
        usuarios,
        usuarioLogIn,
        modificarUserScreen,
        solicitarCitaScreen,
        registrandoNuevoUsario,
        usuarioLoggeado,
        verCitas,
        citas,
      }
    }>
      {children}
    </HospitalContext.Provider>
  );
}

export { HospitalContext, HopitalProvider };