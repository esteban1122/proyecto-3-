AngularCrashCourse

Proyecto generado con Angular CLI
 versión 20.3.9.

🧩 Paso 1: Iniciar el servidor de desarrollo

Ejecuta el siguiente comando:

ng serve


Luego abre tu navegador en http://localhost:4200/
.
La aplicación se recargará automáticamente al modificar los archivos fuente.

⚙️ Paso 2: Generar código (componentes, directivas o tuberías)

Para crear un nuevo componente:

ng generate component nombre-del-componente


Para ver todas las opciones disponibles:

ng generate --help

🏗️ Paso 3: Compilar el proyecto

Para generar una versión optimizada de tu aplicación:

ng build


Los archivos compilados se guardan en la carpeta dist/ listos para producción.

🧪 Paso 4: Ejecutar pruebas unitarias

Usa el comando:

ng test


Estas pruebas se ejecutan con el entorno Karma.

🌐 Paso 5: Ejecutar pruebas end-to-end (e2e)

Ejecuta:

ng e2e


Angular CLI no incluye un framework e2e por defecto, pero puedes usar Cypress o Playwright.