// Importa el módulo de modelo de estudiante desde el archivo estudianteModel en el directorio 'models'
const estudiantes = require("../models/estudianteModel");

/**
 * Ruta: GET /estudiantes
 * Descripción: Devuelve la lista completa de estudiantes.
 * Respuesta: Un objeto JSON que contiene un mensaje y la lista de estudiantes.
 */
const obtenerEstudiantes = (req, res) => {
  res.json({ mensaje: "Lista de estudiantes", estudiantes });
};

/**
 * Ruta: GET /estudiante/:id
 * Descripción: Devuelve la información de un estudiante según su ID.
 * Parámetros:
 *  - id (requerido): El ID del estudiante que se desea obtener.
 * Respuesta:
 *  - Si el estudiante es encontrado: Un objeto JSON con un mensaje y la información del estudiante.
 *  - Si no se encuentra el estudiante: Un mensaje de error con el código 404.
 */
const obtenerEstudiantePorId = (req, res) => {
  const { id } = req.params;
  const estudiante = estudiantes.find((e) => e.id === parseInt(id));

  if (!estudiante) {
    return res.status(404).json({ error: "Estudiante no encontrado" });
  }

  res.json({ mensaje: `Información del estudiante con ID: ${id}`, estudiante });
};

/**
 * Ruta: POST /estudiantes
 * Descripción: Crea un nuevo estudiante con los datos proporcionados.
 * Cuerpo de la solicitud:
 *  - nombre (requerido): El nombre del estudiante.
 *  - edad (requerido): La edad del estudiante.
 * Respuesta: Un objeto JSON que contiene un mensaje y los detalles del estudiante recién creado.
 */
const crearEstudiante = (req, res) => {
  const { nombre, edad } = req.body;

  if (!nombre || !edad) {
    return res
      .status(400)
      .json({ error: "El nombre y la edad son requeridos" });
  }

  const nuevoEstudiante = {
    id: estudiantes.length + 1,
    nombre,
    edad,
  };

  estudiantes.push(nuevoEstudiante);

  res.status(201).json({
    mensaje: "Estudiante creado exitosamente",
    estudiante: nuevoEstudiante,
  });
};

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
const actualizarEstudiante = (req, res) => {
  const { id } = req.params;
  const { nombre, edad } = req.body;

  const estudiante = estudiantes.find((e) => e.id === parseInt(id));

  if (!estudiante) {
    return res.status(404).json({ error: "Estudiante no encontrado" });
  }

  estudiante.nombre = nombre || estudiante.nombre;
  estudiante.edad = edad || estudiante.edad;

  res.json({
    mensaje: `Estudiante con ID: ${id} actualizado exitosamente`,
    estudiante,
  });
};

/**
 * Ruta: DELETE /estudiante/:id
 * Descripción: Elimina un estudiante de la lista según su ID.
 * Parámetros:
 *  - id (requerido): El ID del estudiante que se desea eliminar.
 * Respuesta:
 *  - Si el estudiante es encontrado y eliminado: Un objeto JSON con el mensaje de éxito.
 *  - Si no se encuentra el estudiante: Un mensaje de error con el código 404.
 */
const eliminarEstudiante = (req, res) => {
  const { id } = req.params;
  const indice = estudiantes.findIndex((e) => e.id === parseInt(id));

  if (indice === -1) {
    return res.status(404).json({ error: "Estudiante no encontrado" });
  }

  estudiantes.splice(indice, 1);

  res.json({ mensaje: `Estudiante con ID: ${id} eliminado exitosamente` });
};

// Exporta los métodos del controlador para ser utilizados en las rutas
module.exports = {
  obtenerEstudiantes,
  obtenerEstudiantePorId,
  crearEstudiante,
  actualizarEstudiante,
  eliminarEstudiante,
};
