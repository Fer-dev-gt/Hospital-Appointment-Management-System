import React from "react";
import usuarioServicio from "../services/usuarioServicio";

const HospitalContext = React.createContext();  

function HopitalProvider({ children }) {
  const [usuarios, setUsuarios] = React.useState([]);
  const [citas, setCitas] = React.useState([]);
  const [medicinas, setMedicinas] = React.useState([]);
  const [usuarioLoggeado, setUsuarioLoggeado] = React.useState({});
  const [usuarioLoggeadoEnfermera, setUsuarioLoggeadoEnfermera] = React.useState({});                           
  const [usuarioLoggeadoDoctor, setUsuarioLoggeadoDoctor] = React.useState({});                                 

  const [usuarioLogIn, setUsuarioLogIn] = React.useState(false);                                                // Estado para saber si el usuario esta logeado o no
  const [usuarioPacienteLogIn, setUsuarioPacienteLogIn] = React.useState(false);                                // Estado para saber si el usuario es paciente o no
  const [usuarioDoctorLogIn, setUsuarioDoctorLogIn] = React.useState(false);                                    // Estado para saber si el usuario es doctor o no
  const [usuarioEnfermeraLogIn, setUsuarioEnfermeraLogIn] = React.useState(false);                              // Estado para saber si el usuario es enfermera o no
  const [registrandoNuevoUsario, setregistrandoNuevoUsario] = React.useState(false);                            // Estado para saber si el usuario quiere ir a la pagina de registrar usuario
  const [modificarUserScreen, setModificarUserScreen] = React.useState(false);                                  // Estado para saber si el usuario quiere ir a la pagina de modificar usuario
  const [solicitarCitaScreen, setSolicitarCitaScreen] = React.useState(false);                                  // Estado para saber si el usuario quiere ir a la pagina de solicitar cita
  const [verCitas, setVerCitas] = React.useState(false);                                                        // Estado para saber si el usuario quiere ir a la pagina de ver citas
  const [verRecetas, setVerRecetas] = React.useState(false);                                                    // Estado para saber si el usuario quiere ir a la pagina de ver recetas
  const [comprarMedicina, setComprarMedicina] = React.useState(false);                                          // Estado para saber si el usuario quiere ir a la pagina de comprar medicina
  const [hacerPedido, setHacerPedido] = React.useState(false);                                                  // Estado para saber si el usuario quiere ir a la pagina de hacer pedido

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
      const UsuarioLoggeadoDoctor = usuarios.find((user) => user.userType === 'doctor' && user.userName === usuario.nombre && user.password === usuario.passwordLogin)
      setUsuarioLoggeadoDoctor(UsuarioLoggeadoDoctor)
      setUsuarioDoctorLogIn(true);
      setUsuarioEnfermeraLogIn(false);
      setUsuarioLogIn(true);
      return;
    }

    if(usuarioEsEnfermera) {
      console.log('Usuario encontrado:', usuarioEsEnfermera);
      const UsuarioLoggeadoEnfermera = usuarios.find((user) => user.userType === 'enfermera' && user.userName === usuario.nombre && user.password === usuario.passwordLogin)
      setUsuarioLoggeadoEnfermera(UsuarioLoggeadoEnfermera)
      setUsuarioEnfermeraLogIn(true);
      setUsuarioDoctorLogIn(false);
      setUsuarioLogIn(true);
      return;
    }

    if(!usuarioEsPaciente) {
      alert('Usuario no es paciente');
      return;
    }

    if (usuarioEsPaciente) {
      setUsuarioPacienteLogIn(true);
      setUsuarioLogIn(true);
    } else {
      alert('Usuario no encontrado');
      setUsuarioLogIn(false);
      setUsuarioPacienteLogIn(false)
    }
  };

  // Navegacion de paginas
  const irHomePage =  () => {
    console.log('Regresando al home')
    setUsuarioEnfermeraLogIn(false);
    setUsuarioDoctorLogIn(false);
    setUsuarioPacienteLogIn(false);
    setUsuarioLogIn(false);
    setregistrandoNuevoUsario(false);
    setModificarUserScreen(false);
    setSolicitarCitaScreen(false);
    setVerCitas(false);
    setVerRecetas(false);
    setComprarMedicina(false);
    setHacerPedido(false);
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
    setComprarMedicina(false);
    setVerRecetas(false);
    setHacerPedido(false);
  }

  const irSolictarCitaPage =  () => {
    console.log('ir a solicitar cita')
    setSolicitarCitaScreen(true);
    setVerCitas(false);
    setModificarUserScreen(false);
    setComprarMedicina(false);
    setVerRecetas(false);
    setHacerPedido(false);
  }

  const irVerCitasPage =  () => {
    console.log('ir a ver citas')
    setModificarUserScreen(false);
    setSolicitarCitaScreen(false);
    setComprarMedicina(false);
    setVerCitas(true);
    setVerRecetas(false);
    setHacerPedido(false);
  }

  const irVerRecetasPage =  () => {
    console.log('ir a ver recetas')
    setModificarUserScreen(false);
    setSolicitarCitaScreen(false);
    setVerCitas(false);
    setComprarMedicina(false);
    setVerRecetas(true);
    setHacerPedido(false);
  }

  const irCompraMedicinaPage =  () => {
    console.log('ir a comprar medicina')
    setModificarUserScreen(false);
    setSolicitarCitaScreen(false);
    setVerCitas(false);
    setVerRecetas(false);
    setComprarMedicina(true);
    setHacerPedido(false);
  }

  const irHacerPedidoPage =  () => {
    console.log('ir a hacer pedido')
    setModificarUserScreen(false);
    setSolicitarCitaScreen(false);
    setVerCitas(false);
    setVerRecetas(false);
    // setComprarMedicina(false);
    setHacerPedido(true);
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


  // Funciones CRUD de medicinas
  const getMedicinas = async () => {
    const medicinas = await usuarioServicio.obtenerMedicinas();
    if (medicinas) setMedicinas(medicinas);
    console.log(medicinas);
  }

  const editarMedicina = async (id) => {
    const medicina = { nombre, id };
    console.log('editando medicina', medicina)
    await usuarioServicio.actualizarMedicina(id, medicina);
    getMedicinas();
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
        irVerRecetasPage,
        irCompraMedicinaPage,
        irHacerPedidoPage,
        setVerRecetas,
        handlePasswordChange,
        getCitas,
        getMedicinas,
        agregarCita,
        usuarios,
        usuarioLogIn,
        modificarUserScreen,
        solicitarCitaScreen,
        registrandoNuevoUsario,
        usuarioLoggeado,
        verCitas,
        comprarMedicina,
        hacerPedido,
        citas,
        verRecetas,
        medicinas,
        usuarioDoctorLogIn,
        usuarioEnfermeraLogIn,
        usuarioPacienteLogIn,
        usuarioLoggeadoEnfermera,
        usuarioLoggeadoDoctor
      }
    }>
      {children}
    </HospitalContext.Provider>
  );
}

export { HospitalContext, HopitalProvider };