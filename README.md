# API de Estudiantes y Cursos UDD

Este proyecto es una API desarrollada con **Node.js** y **Express** para gestionar estudiantes y cursos. La API permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre estudiantes y cursos, y está documentada con **Swagger**. El proyecto sigue una arquitectura **MVC** para separar la lógica de negocio, controladores y modelos, y está estilizado con **NES.css** en su interfaz básica.

## Descripción del Proyecto

Este proyecto tiene como objetivo servir como una base para aprender y practicar el desarrollo de una API RESTfull con **Node.js**. Se construyó en diversas etapas, cada una reflejada en una rama distinta, para facilitar la comprensión y evolución del código.

## Capturas de Pantalla del Proyecto

![Home](home.png)
Vista de inicio de la aplicación.

## Etapas y Ramas Disponibles

El proyecto fue desarrollado en las siguientes etapas, cada una asociada a una rama en Git:

### Etapa 1: Crear el Servidor Básico

- **Rama**: [etapa_1-crear_servidor_basico](https://github.com/brayandiazc/node_api_estudiantes/tree/etapa_1/crear_server)
- **Descripción**: Iniciamos el proyecto con Node.js y Express para levantar el primer servidor básico.

### Etapa 2: Configuración Inicial con Nodemon y dotenv

- **Rama**: [etapa_2-configuracion_inicial](https://github.com/brayandiazc/node_api_estudiantes/tree/etapa_2/nodemon_y_nodenv)
- **Descripción**: Se agregaron nodemon y dotenv para mejorar el flujo de desarrollo y configuración.

### Etapa 3: Implementar API v1 con Rutas y CRUD Parcial

- **Rama**: [etapa_3-api_v1_crud_parcial](https://github.com/brayandiazc/node_api_estudiantes/tree/etapa_3/api_v1)
- **Descripción**: Se implementaron rutas iniciales para gestionar estudiantes y cursos (solo lectura con GET).

### Etapa 4: Añadir Vistas HTML

- **Rama**: [etapa_4-anadir_vistas_html](https://github.com/brayandiazc/node_api_estudiantes/tree/etapa_4/vista_index)
- **Descripción**: Se agregó una vista HTML para mostrar información básica en la página de inicio, sirviendo el archivo desde la ruta raíz.

### Etapa 5: Implementar CRUD Completo para Estudiantes y Cursos

- **Rama**: [etapa_5-crud_completo](https://github.com/brayandiazc/node_api_estudiantes/tree/etapa_5/simulacion_crud)
- **Descripción**: Se implementaron las operaciones completas de CRUD (Crear, Leer, Actualizar, Eliminar) para estudiantes y cursos.

### Etapa 6: Aplicar el Patrón MVC

- **Rama**: [etapa_6-aplicar_patron_mvc](https://github.com/brayandiazc/node_api_estudiantes/tree/etapa_6/modelo_vista_controlador)
- **Descripción**: Se reorganizó el proyecto siguiendo el patrón de arquitectura MVC para separar la lógica en controladores, modelos y vistas.

### Etapa 7: Integrar Swagger para Documentación de la API

- **Rama**: [etapa_7-integrar_swagger](https://github.com/brayandiazc/node_api_estudiantes/tree/etapa_7/swangger)
- **Descripción**: Se integró Swagger para documentar automáticamente la API. La documentación está disponible en `/api-docs`.

## Despliegue

El proyecto ha sido desplegado exitosamente en Vercel. Puedes acceder a la API y a su documentación de Swagger en los siguientes enlaces:

- **API en producción**: [https://node-api-estudiantes.vercel.app/](https://node-api-estudiantes.vercel.app/)

## Prerrequisitos o Dependencias

Para ejecutar este proyecto, necesitas las siguientes herramientas y dependencias:

- **Node.js**: v14.0 o superior
- **NPM**: v6.0 o superior
- **Express.js**
- **Swagger UI**: Para la documentación de la API
- **NES.css**: Para los estilos en la página de inicio

## Instalación del Proyecto

Sigue estos pasos para instalar y configurar el proyecto en tu máquina local:

```bash
# Clonar el repositorio
git clone https://github.com/brayandiazc/node_api_estudiantes.git

# Entrar en el directorio del proyecto
cd node_api_estudiantes

# Instalar dependencias
npm install
```

## Instrucciones para Ejecutar el Proyecto

Una vez instaladas las dependencias, puedes ejecutar el servidor con el siguiente comando:

```bash
# Ejecutar el proyecto en modo desarrollo con nodemon
npm run dev
```

El servidor se levantará en `http://localhost:3000`, y podrás acceder a la documentación Swagger en `http://localhost:3000/api-docs`.

## Instrucciones para Cargar la Base de Datos o Migrar los Modelos

Este proyecto utiliza arrays simulados como base de datos, por lo que no se requiere una base de datos real ni migraciones de modelos.

- Este proyecto utiliza un simulador de base de datos en memoria, por lo que los datos no son persistentes entre reinicios del servidor.
- Para probar las operaciones CRUD puedes usar herramientas como **Postman**, **curl**, o directamente desde **Swagger UI** en `/api-docs`.

## Credenciales de Acceso

Este proyecto no incluye autenticación ni credenciales de acceso, ya que su propósito es educativo.

## Autor

- [Tu Nombre](https://github.com/brayandiazc)

## Licencia

Este proyecto está bajo la Licencia MIT - ve el archivo [LICENSE.md](LICENSE) para detalles.

---

⌨️ con ❤️ por [Tu Nombre](https://github.com/brayandiazc) 😊
