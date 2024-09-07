// Cargar variables de entorno desde el archivo .env
require("dotenv").config();

// Importamos el módulo de Express
const express = require("express");

// Creamos una instancia de la aplicación Express
const app = express();

// Definimos el puerto en el que correrá el servidor, usando la variable de entorno PORT o el puerto 3000 por defecto
const PORT = process.env.PORT || 3000;

// Middleware para parsear el cuerpo de las solicitudes con formato JSON
app.use(express.json());

// Simulamos una base de datos con listas de estudiantes y cursos
const estudiantes = [
  { id: 1, nombre: "Juan Pérez", edad: 20 },
  { id: 2, nombre: "Ana Gómez", edad: 22 },
];

const cursos = [
  { id: 1, nombre: "Curso de Node.js", duracion: "4 semanas" },
  { id: 2, nombre: "Curso de React", duracion: "6 semanas" },
];

/**
 * Ruta: GET /estudiantes
 * Descripción: Devuelve la lista completa de estudiantes.
 * Respuesta: Un objeto JSON que contiene un mensaje y la lista de estudiantes.
 */
app.get("/estudiantes", (req, res) => {
  res.json({ mensaje: "Lista de estudiantes", estudiantes });
});

/**
 * Ruta: GET /estudiante/:id
 * Descripción: Devuelve la información de un estudiante según su ID.
 * Parámetros:
 *  - id (requerido): El ID del estudiante que se desea obtener.
 * Respuesta:
 *  - Si el estudiante es encontrado: Un objeto JSON con un mensaje y la información del estudiante.
 *  - Si no se encuentra el estudiante: Un mensaje de error con el código 404.
 */
app.get("/estudiante/:id", (req, res) => {
  const { id } = req.params; // Extraemos el parámetro 'id' de la URL
  const estudiante = estudiantes.find((e) => e.id === parseInt(id)); // Buscamos el estudiante por ID

  if (!estudiante) {
    // Si no se encuentra el estudiante, devolvemos un error 404
    return res.status(404).json({ error: "Estudiante no encontrado" });
  }

  // Si se encuentra el estudiante, devolvemos la información
  res.json({
    mensaje: `Información del estudiante con ID: ${id}`,
    estudiante: estudiante,
  });
});

/**
 * Ruta: GET /cursos
 * Descripción: Devuelve la lista completa de cursos.
 * Respuesta: Un objeto JSON que contiene un mensaje y la lista de cursos.
 */
app.get("/cursos", (req, res) => {
  res.json({ mensaje: "Lista de cursos", cursos });
});

/**
 * Ruta: GET /curso/:id
 * Descripción: Devuelve la información de un curso según su ID.
 * Parámetros:
 *  - id (requerido): El ID del curso que se desea obtener.
 * Respuesta:
 *  - Si el curso es encontrado: Un objeto JSON con un mensaje y la información del curso.
 *  - Si no se encuentra el curso: Un mensaje de error con el código 404.
 */
app.get("/curso/:id", (req, res) => {
  const { id } = req.params; // Extraemos el parámetro 'id' de la URL
  const curso = cursos.find((c) => c.id === parseInt(id)); // Buscamos el curso por ID

  if (!curso) {
    // Si no se encuentra el curso, devolvemos un error 404
    return res.status(404).json({ error: "Curso no encontrado" });
  }

  // Si se encuentra el curso, devolvemos la información
  res.json({
    mensaje: `Información del curso con ID: ${id}`,
    curso: curso,
  });
});

// Iniciar el servidor en el puerto especificado
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
