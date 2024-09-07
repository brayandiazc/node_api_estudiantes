// Propósito: Manejar las rutas de la API relacionadas con los cursos
const express = require("express");
const router = express.Router();
const cursoController = require("../controllers/cursoController");

/**
 * @swagger
 * /cursos:
 *   get:
 *     summary: Obtiene todos los cursos
 *     responses:
 *       200:
 *         description: Lista de cursos
 */
router.get("/", cursoController.obtenerCursos);

/**
 * @swagger
 * /curso/{id}:
 *   get:
 *     summary: Obtiene un curso por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del curso
 *     responses:
 *       200:
 *         description: Detalle del curso
 *       404:
 *         description: Curso no encontrado
 */
router.get("/:id", cursoController.obtenerCursoPorId);

/**
 * @swagger
 * /cursos:
 *   post:
 *     summary: Crea un nuevo curso
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               duracion:
 *                 type: string
 *     responses:
 *       201:
 *         description: Curso creado exitosamente
 *       400:
 *         description: Faltan parámetros requeridos
 */
router.post("/", cursoController.crearCurso);

/**
 * @swagger
 * /curso/{id}:
 *   put:
 *     summary: Actualiza un curso
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del curso a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               duracion:
 *                 type: string
 *     responses:
 *       200:
 *         description: Curso actualizado
 *       404:
 *         description: Curso no encontrado
 */
router.put("/:id", cursoController.actualizarCurso);

/**
 * @swagger
 * /curso/{id}:
 *   delete:
 *     summary: Elimina un curso por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del curso a eliminar
 *     responses:
 *       200:
 *         description: Curso eliminado
 *       404:
 *         description: Curso no encontrado
 */
router.delete("/:id", cursoController.eliminarCurso);

// Exporta el router para ser utilizado en la aplicación principal
module.exports = router;
