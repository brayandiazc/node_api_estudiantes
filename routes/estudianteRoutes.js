// Propósito: Define las rutas de la API para el recurso de estudiantes
const express = require("express");
const router = express.Router();
const estudianteController = require("../controllers/estudianteController");

/**
 * @swagger
 * /estudiantes:
 *   get:
 *     summary: Obtiene todos los estudiantes
 *     responses:
 *       200:
 *         description: Lista de estudiantes
 */
router.get("/", estudianteController.obtenerEstudiantes);

/**
 * @swagger
 * /estudiante/{id}:
 *   get:
 *     summary: Obtiene un estudiante por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del estudiante
 *     responses:
 *       200:
 *         description: Detalle del estudiante
 *       404:
 *         description: Estudiante no encontrado
 */
router.get("/:id", estudianteController.obtenerEstudiantePorId);

/**
 * @swagger
 * /estudiantes:
 *   post:
 *     summary: Crea un nuevo estudiante
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               edad:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Estudiante creado exitosamente
 *       400:
 *         description: Faltan parámetros requeridos
 */
router.post("/", estudianteController.crearEstudiante);

/**
 * @swagger
 * /estudiante/{id}:
 *   put:
 *     summary: Actualiza un estudiante
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del estudiante a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               edad:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Estudiante actualizado
 *       404:
 *         description: Estudiante no encontrado
 */
router.put("/:id", estudianteController.actualizarEstudiante);

/**
 * @swagger
 * /estudiante/{id}:
 *   delete:
 *     summary: Elimina un estudiante por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del estudiante a eliminar
 *     responses:
 *       200:
 *         description: Estudiante eliminado
 *       404:
 *         description: Estudiante no encontrado
 */
router.delete("/:id", estudianteController.eliminarEstudiante);

// Exporta el router para ser utilizado en la aplicación principal
module.exports = router;
