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

export default usuarioServicio ;
