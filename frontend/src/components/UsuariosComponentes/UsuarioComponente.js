import React from "react";
import usuarioServicio from "../../services/usuarioServicio";


function UsuarioComponente() {
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
    <div>
      <div className="form-container"> 
        <h2>Formulario</h2>
        <label htmlFor="nombre" className="form-label">Nombre:</label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={handleNombreChange}
          className="form-input"
        />
        <br/>
        <label htmlFor="id" className="form-label">ID:</label>
        <input
          type="text"
          id="id"
          value={id}
          onChange={handleIdChange}
          className="form-input" 
        />
        <br/>
        <button onClick={agregarUsuario} className="form-button">Enviar</button> {/* Aplica la clase CSS al botón */}
      </div>
    </div>
  );
}




export { UsuarioComponente };