// Propósito: Manejar las rutas de la API relacionadas con los cursos
const express = require("express");
const router = express.Router();
const cursoController = require("../controllers/cursoController");

// Rutas de cursos
router.get("/", cursoController.obtenerCursos);
router.get("/:id", cursoController.obtenerCursoPorId);
router.post("/", cursoController.crearCurso);
router.put("/:id", cursoController.actualizarCurso);
router.delete("/:id", cursoController.eliminarCurso);

// Exporta el router para ser utilizado en la aplicación principal
module.exports = router;
