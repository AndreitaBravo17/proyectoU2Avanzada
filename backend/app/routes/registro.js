const router = require('express').Router()
const controller = require('../controller/registroController');
const { validateToken } = require("../middleware/validateToken")
router.get("", controller.obtenerTodosRegistro) 
router.post("", controller.crearRegistro) 
router.get("/:id", controller.obtenerRegistroPorId) 
router.put("/:id", controller.actualizarRegistro) 
router.delete("/:id", controller.eliminarRegistro) 

module.exports = { router }