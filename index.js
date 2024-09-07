// Cargar variables de entorno desde el archivo .env
require("dotenv").config();

// Importamos el módulo de Express
const express = require("express");

// Módulo para manejar rutas de archivos
const path = require("path");

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
 * Ruta: GET /
 * Descripción: Sirve el archivo HTML index.html ubicado en la carpeta 'views'.
 */
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html")); // Enviamos el archivo index.html
});

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
 * Ruta: POST /estudiantes
 * Descripción: Crea un nuevo estudiante con los datos proporcionados.
 * Cuerpo de la solicitud:
 *  - nombre (requerido): El nombre del estudiante.
 *  - edad (requerido): La edad del estudiante.
 * Respuesta: Un objeto JSON que contiene un mensaje y los detalles del estudiante recién creado.
 */
app.post("/estudiantes", (req, res) => {
  const { nombre, edad } = req.body; // Datos proporcionados por el cliente

  // Validamos que los datos obligatorios estén presentes
  if (!nombre || !edad) {
    return res
      .status(400)
      .json({ error: "El nombre y la edad son requeridos" });
  }

  // Creamos el nuevo estudiante
  const nuevoEstudiante = {
    id: estudiantes.length + 1, // Generamos un nuevo ID de forma incremental
    nombre,
    edad,
  };

  // Agregamos el nuevo estudiante al array de estudiantes
  estudiantes.push(nuevoEstudiante);

  // Devolvemos una respuesta exitosa con el estudiante creado
  res.status(201).json({
    mensaje: "Estudiante creado exitosamente",
    estudiante: nuevoEstudiante,
  });
});

/**
 * Ruta: PUT /estudiante/:id
 * Descripción: Actualiza los datos de un estudiante existente.
 * Parámetros:
 *  - id (requerido): El ID del estudiante que se desea actualizar.
 * Cuerpo de la solicitud:
 *  - nombre: El nuevo nombre del estudiante.
 *  - edad: La nueva edad del estudiante.
 * Respuesta:
 *  - Si el estudiante es encontrado y actualizado: Un objeto JSON con el mensaje y los datos actualizados.
 *  - Si no se encuentra el estudiante: Un mensaje de error con el código 404.
 */
app.put("/estudiante/:id", (req, res) => {
  const { id } = req.params;
  const { nombre, edad } = req.body;

  const estudiante = estudiantes.find((e) => e.id === parseInt(id));

  if (!estudiante) {
    return res.status(404).json({ error: "Estudiante no encontrado" });
  }

  // Actualizamos los datos del estudiante
  estudiante.nombre = nombre || estudiante.nombre;
  estudiante.edad = edad || estudiante.edad;

  res.json({
    mensaje: `Estudiante con ID: ${id} actualizado exitosamente`,
    estudiante,
  });
});

/**
 * Ruta: DELETE /estudiante/:id
 * Descripción: Elimina un estudiante de la lista según su ID.
 * Parámetros:
 *  - id (requerido): El ID del estudiante que se desea eliminar.
 * Respuesta:
 *  - Si el estudiante es encontrado y eliminado: Un objeto JSON con el mensaje de éxito.
 *  - Si no se encuentra el estudiante: Un mensaje de error con el código 404.
 */
app.delete("/estudiante/:id", (req, res) => {
  const { id } = req.params;
  const indice = estudiantes.findIndex((e) => e.id === parseInt(id));

  if (indice === -1) {
    return res.status(404).json({ error: "Estudiante no encontrado" });
  }

  // Eliminamos el estudiante del array
  estudiantes.splice(indice, 1);

  res.json({
    mensaje: `Estudiante con ID: ${id} eliminado exitosamente`,
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

/**
 * Ruta: POST /cursos
 * Descripción: Crea un nuevo curso con los datos proporcionados.
 * Cuerpo de la solicitud:
 *  - nombre (requerido): El nombre del curso.
 *  - duracion (requerido): La duración del curso.
 * Respuesta: Un objeto JSON que contiene un mensaje y los detalles del curso recién creado.
 */
app.post("/cursos", (req, res) => {
  const { nombre, duracion } = req.body;

  if (!nombre || !duracion) {
    return res
      .status(400)
      .json({ error: "El nombre y la duración son requeridos" });
  }

  const nuevoCurso = {
    id: cursos.length + 1,
    nombre,
    duracion,
  };

  cursos.push(nuevoCurso);

  res.status(201).json({
    mensaje: "Curso creado exitosamente",
    curso: nuevoCurso,
  });
});

/**
 * Ruta: PUT /curso/:id
 * Descripción: Actualiza los datos de un curso existente.
 * Parámetros:
 *  - id (requerido): El ID del curso que se desea actualizar.
 * Cuerpo de la solicitud:
 *  - nombre: El nuevo nombre del curso.
 *  - duracion: La nueva duración del curso.
 * Respuesta:
 *  - Si el curso es encontrado y actualizado: Un objeto JSON con el mensaje y los datos actualizados.
 *  - Si no se encuentra el curso: Un mensaje de error con el código 404.
 */
app.put("/curso/:id", (req, res) => {
  const { id } = req.params;
  const { nombre, duracion } = req.body;

  const curso = cursos.find((c) => c.id === parseInt(id));

  if (!curso) {
    return res.status(404).json({ error: "Curso no encontrado" });
  }

  curso.nombre = nombre || curso.nombre;
  curso.duracion = duracion || curso.duracion;

  res.json({
    mensaje: `Curso con ID: ${id} actualizado exitosamente`,
    curso,
  });
});

/**
 * Ruta: DELETE /curso/:id
 * Descripción: Elimina un curso de la lista según su ID.
 * Parámetros:
 *  - id (requerido): El ID del curso que se desea eliminar.
 * Respuesta:
 *  - Si el curso es encontrado y eliminado: Un objeto JSON con el mensaje de éxito.
 *  - Si no se encuentra el curso: Un mensaje de error con el código 404.
 */
app.delete("/curso/:id", (req, res) => {
  const { id } = req.params;
  const indice = cursos.findIndex((c) => c.id === parseInt(id));

  if (indice === -1) {
    return res.status(404).json({ error: "Curso no encontrado" });
  }

  cursos.splice(indice, 1);

  res.json({
    mensaje: `Curso con ID: ${id} eliminado exitosamente`,
  });
});

// Iniciar el servidor en el puerto especificado
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
