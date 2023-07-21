const router = require('express').Router()
const controller = require('../controller/cursosController');

const { validateToken } = require("../middleware/validateToken")
router.get("/", controller.obtenerTodosCursos) 
router.post("/", controller.crearCursos) 
router.get("/:id", controller.obtenerCursosPorId) 
router.put("/:id", controller.actualizarCursos) 
router.delete("/:id", controller.eliminarCursos) 

module.exports = { router }
