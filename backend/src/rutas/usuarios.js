const express = require('express');               // Importando express
const router = express.Router();                  // Inicializando express y Router sera el encargado de las rutas


//  Controlador
const controlador = require('../controladores/usuarios');

//  Ruta para traer usuarios
router.get('/', controlador.leerUsuarios);
router.get('/citas', controlador.leerCitas);
router.get('/medicinas', controlador.leerMedicinas);

//  Ruta para crear usuarios
router.post('/', controlador.crearUsuario);
router.post('/citas', controlador.crearCita);

//  Ruta para editar usuarios
router.put('/:id', controlador.actualizarUsuario);        // :id es un parametro que se envia por la url el cual indica el id del usuario que se va a editar
router.put('/citas/:id', controlador.actualizarCita);
router.put('/medicinas/:id', controlador.actualizarMedicina);

//  Ruta para eliminar usuarios
router.delete('/:id', controlador.eliminarUsuario);       // :id es un parametro que se envia por la url el cual indica el id del usuario que se va a eliminar
router.delete('/citas/:id', controlador.eliminarCita);


module.exports = router;                                  // Exportando mi servidor para poder utilizarlo en mis pruebas unitarias