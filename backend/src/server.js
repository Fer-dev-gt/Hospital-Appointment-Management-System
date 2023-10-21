const express = require('express');                       // Importando express        
const app = express();                                    // Inicializando express que va a ser nuestro servidor
const cors = require('cors');                             // Importando cors para poder hacer peticiones desde el frontend

// Configuraciones
app.use(express.json());
app.use(cors());

// Mis rutas
const rutasUsuarios = require('./rutas/usuarios');

app.set('port', process.env.PORT || 4000);                // Configurando el puerto que vamos a utilizar   

app.get('/', (req, res) => {                              // Ruta inicial de mi servidor
  res.send('Hola alumnos de ipc1 aaaa');
});

app.use('/usuarios', rutasUsuarios);

app.listen(app.get('port'), () => {                      // Inicializando el servidor, aqui estoy levantanado el servidor
  console.log(`Server on port ${app.get('port')}`);
});

module.exports = app;                                     // Exportando mi servidor para poder utilizarlo en mis pruebas unitarias