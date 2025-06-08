/*
    Instrucciones del trabajo en clase:
    Escribir un nuevo archivo JS que lea el archivo de ejemplo que tenemos, y concatenarle al contenido actual del archivo + la fecha (toString) al final.
*/

const fs = require('fs').promises;
const path = require('path');

// Función para leer archivo usando promesas
function leerArchivoConPromesas() {
    const rutaArchivo = path.join(__dirname, 'a.txt');

    return fs.readFile(rutaArchivo, 'utf8')
        .then(data => {
            // Concatenar el contenido actual con la fecha
            const fechaActual = new Date().toString();
            const nuevoContenido = data + ' ' + fechaActual;

            // Escribir el nuevo contenido al archivo
            return fs.writeFile(rutaArchivo, nuevoContenido, 'utf8')
                .then(() => nuevoContenido);
        });
}

// Ejecutar la función
console.log('=== Usando Promesas con then/catch ===');
leerArchivoConPromesas()
    .then(resultado => {
        console.log('Archivo actualizado exitosamente!');
        console.log('Nuevo contenido:', resultado);
    })
    .catch(err => {
        console.error('Error:', err);
    });