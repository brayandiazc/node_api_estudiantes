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

/**
 * Ruta: GET /
 * Descripción: Sirve el archivo HTML index.html ubicado en la carpeta 'views'.
 */
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html")); // Enviamos el archivo index.html
});

// Importar las rutas de los recursos (estudiantes y cursos)
const estudianteRoutes = require("./routes/estudianteRoutes");
const cursoRoutes = require("./routes/cursoRoutes");

// Usar las rutas de los recursos (estudiantes y cursos)
app.use("/estudiantes", estudianteRoutes);
app.use("/cursos", cursoRoutes);

// Iniciar el servidor en el puerto especificado
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
