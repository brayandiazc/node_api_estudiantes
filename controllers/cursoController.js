// Importa el módulo de modelo de curso desde el archivo cursoModel en el directorio 'models'
const cursos = require("../models/cursoModel");

/**
 * Ruta: GET /cursos
 * Descripción: Devuelve la lista completa de cursos.
 * Respuesta: Un objeto JSON que contiene un mensaje y la lista de cursos.
 */
const obtenerCursos = (req, res) => {
  res.json({ mensaje: "Lista de cursos", cursos });
};

/**
 * Ruta: GET /curso/:id
 * Descripción: Devuelve la información de un curso según su ID.
 * Parámetros:
 *  - id (requerido): El ID del curso que se desea obtener.
 * Respuesta:
 *  - Si el curso es encontrado: Un objeto JSON con un mensaje y la información del curso.
 *  - Si no se encuentra el curso: Un mensaje de error con el código 404.
 */
const obtenerCursoPorId = (req, res) => {
  const { id } = req.params;
  const curso = cursos.find((c) => c.id === parseInt(id));

  if (!curso) {
    return res.status(404).json({ error: "Curso no encontrado" });
  }

  res.json({ mensaje: `Información del curso con ID: ${id}`, curso });
};

/**
 * Ruta: POST /cursos
 * Descripción: Crea un nuevo curso con los datos proporcionados.
 * Cuerpo de la solicitud:
 *  - nombre (requerido): El nombre del curso.
 *  - duracion (requerido): La duración del curso.
 * Respuesta: Un objeto JSON que contiene un mensaje y los detalles del curso recién creado.
 */
const crearCurso = (req, res) => {
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

  res
    .status(201)
    .json({ mensaje: "Curso creado exitosamente", curso: nuevoCurso });
};

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
const actualizarCurso = (req, res) => {
  const { id } = req.params;
  const { nombre, duracion } = req.body;

  const curso = cursos.find((c) => c.id === parseInt(id));

  if (!curso) {
    return res.status(404).json({ error: "Curso no encontrado" });
  }

  curso.nombre = nombre || curso.nombre;
  curso.duracion = duracion || curso.duracion;

  res.json({ mensaje: `Curso con ID: ${id} actualizado exitosamente`, curso });
};

/**
 * Ruta: DELETE /curso/:id
 * Descripción: Elimina un curso de la lista según su ID.
 * Parámetros:
 *  - id (requerido): El ID del curso que se desea eliminar.
 * Respuesta:
 *  - Si el curso es encontrado y eliminado: Un objeto JSON con el mensaje de éxito.
 *  - Si no se encuentra el curso: Un mensaje de error con el código 404.
 */
const eliminarCurso = (req, res) => {
  const { id } = req.params;
  const indice = cursos.findIndex((c) => c.id === parseInt(id));

  if (indice === -1) {
    return res.status(404).json({ error: "Curso no encontrado" });
  }

  cursos.splice(indice, 1);

  res.json({ mensaje: `Curso con ID: ${id} eliminado exitosamente` });
};

// Exporta los controladores para ser utilizados en las rutas
module.exports = {
  obtenerCursos,
  obtenerCursoPorId,
  crearCurso,
  actualizarCurso,
  eliminarCurso,
};
