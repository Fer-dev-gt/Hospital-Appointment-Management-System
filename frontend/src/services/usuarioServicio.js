import http from "../libs/http";                // Importamos el objeto http de http.js que nos servirá para hacer peticiones

const usuarioServicio = {};

usuarioServicio.obtenerUsuarios = async () => {
  const data = await http.get("http://localhost:4000/usuarios");
  return data;
}

usuarioServicio.crearUsuario = async (usuario) => {
  const data = await http.post("http://localhost:4000/usuarios", usuario); 
  return data;
}

usuarioServicio.actualizarUsuario = async (id, usuario) => {
  const data = await http.put(`http://localhost:4000/usuarios/${id}`, usuario);
  return data;
}

usuarioServicio.eliminarUsuario = async (id) => {
  const data = await http.delete(`http://localhost:4000/usuarios/${id}`);
  return data;
}



usuarioServicio.obtenerCitas = async () => {
  const data = await http.get("http://localhost:4000/usuarios/citas");
  return data;
}

usuarioServicio.crearCita = async (cita) => {
  const data = await http.post("http://localhost:4000/usuarios/citas", cita); 
  return data;
}

usuarioServicio.actualizarCita = async (id, cita) => {
  const data = await http.put(`http://localhost:4000/usuarios/citas/${id}`, cita);
  return data;
}

usuarioServicio.eliminarCita = async (id) => {
  const data = await http.delete(`http://localhost:4000/usuarios/citas/${id}`);
  return data;
}



usuarioServicio.obtenerMedicinas = async () => {
  const data = await http.get("http://localhost:4000/usuarios/medicinas");
  return data;
}

usuarioServicio.actualizarMedicina = async (id, medicina) => {
  const data = await http.put(`http://localhost:4000/usuarios/medicinas/${id}`, medicina);
  return data;
}

export default usuarioServicio ;
