/*
    Instrucciones del trabajo en clase:
    Escribir un nuevo archivo JS que lea el archivo de ejemplo que tenemos, y concatenarle al contenido actual del archivo + la fecha (toString) al final.
*/

const fs = require('fs');
const path = require('path');

// Función para leer archivo usando callbacks
function leerArchivoConCallback(callback) {
    const rutaArchivo = path.join(__dirname, 'a.txt');

    fs.readFile(rutaArchivo, 'utf8', (err, data) => {
        if (err) {
            callback(err, null);
            return;
        }

        // Concatenar el contenido actual con la fecha
        const fechaActual = new Date().toString();
        const nuevoContenido = data + ' ' + fechaActual;

        // Escribir el nuevo contenido al archivo
        fs.writeFile(rutaArchivo, nuevoContenido, 'utf8', (err) => {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, nuevoContenido);
        });
    });
}

// Ejecutar la función
console.log('=== Usando Callbacks ===');
leerArchivoConCallback((err, resultado) => {
    if (err) {
        console.error('Error:', err);
    } else {
        console.log('Archivo actualizado exitosamente!');
        console.log('Nuevo contenido:', resultado);
    }
});