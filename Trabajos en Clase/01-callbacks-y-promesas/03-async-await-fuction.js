/*
    Instrucciones del trabajo en clase:
    Escribir un nuevo archivo JS que lea el archivo de ejemplo que tenemos, y concatenarle al contenido actual del archivo + la fecha (toString) al final.
*/

const fs = require('fs').promises;
const path = require('path');

// Función async para leer archivo usando async/await
async function leerArchivoConAsyncAwait() {
    try {
        const rutaArchivo = path.join(__dirname, 'a.txt');

        // Leer el contenido actual del archivo
        const data = await fs.readFile(rutaArchivo, 'utf8');

        // Concatenar el contenido actual con la fecha
        const fechaActual = new Date().toString();
        const nuevoContenido = data + ' ' + fechaActual;

        // Escribir el nuevo contenido al archivo
        await fs.writeFile(rutaArchivo, nuevoContenido, 'utf8');

        return nuevoContenido;
    } catch (err) {
        throw err;
    }
}

// Función principal async para ejecutar
async function main() {
    console.log('=== Usando Async/Await ===');
    try {
        const resultado = await leerArchivoConAsyncAwait();
        console.log('Archivo actualizado exitosamente!');
        console.log('Nuevo contenido:', resultado);
    } catch (err) {
        console.error('Error:', err);
    }
}

// Ejecutar la función principal
main();