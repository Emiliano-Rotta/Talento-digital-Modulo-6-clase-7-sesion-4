//Un callback es una función pasada como argumento a otra función, que se ejecuta después de que se completa la tarea de la función principal. Los callbacks permiten manejar la asincronía en Node.js, como en operaciones de lectura de archivos, consultas a bases de datos, y solicitudes HTTP.

// function obtenerUsuario (id, callback){
//     setTimeout(()=>{
//         callback({ id, nombre: "Juan" })
//     },3000)
// }

// obtenerUsuario(1, (usuario)=>{
//     console.log(`Usuario: ${usuario.nombre}`)
// })


// //-------------------------------
// //anidamiento de callback
// function obtenerUsuario(id, callback) {
//     setTimeout(() => {
//         callback({ id, nombre: "Juan" });
//     }, 1000);
// }

// function obtenerAmigos(usuarioId, callback) {
//     setTimeout(() => {
//         callback(["Carlos", "Ana"]);
//     }, 1000);
// }

// obtenerUsuario(1, (usuario) => {
//     obtenerAmigos(usuario.id, (amigos) => {
//         console.log(`Amigos de ${usuario.nombre}: ${amigos.join(", ")}`);
//     });
// });

//--------------------------------------------------------
//Orden de Código vs Orden de Ejecución

// // Orden de Código  = Orden de Ejecución
// console.log("primero")
// console.log("segundo")
// console.log("tercero")
// console.log("cuarto")

// //Orden de Código no sea = Orden de Ejecución (asicronismo)

// console.log("Inicio");

// setTimeout(() => {
//     console.log("Tarea asincrónica");
// }, 2000);

// console.log("Fin");

//Promesas en JavaScript

// const promesa = new Promise((resolve, reject) => {
//     let verdadero = true
//     if (verdadero) {
//         resolve("Resultado exitoso");
//     } else {
//         reject("Algo salió mal");
//     }
// });


// promesa
//     .then((resultado) => {
//         console.log(resultado); // Si se resolvió: "¡La operación fue exitosa!"
//     })
//     .catch((error) => {
//         console.log(error); // Si falló: "Hubo un error en la operación"
//     });


//----------------------------------------------
// function verificarPar(numero){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             if(numero % 2 === 0){
//                 resolve(`El numero ${numero} es par`)
//             } else {
//                 reject(`El numero ${numero} es impar`)
//             }
//         },2000)
//     })
// }
// verificarPar(4)
// .then(mensaje=> console.log(mensaje))
// .catch(error=> console.log(error))


//anidando promesas
// function doble(numero) {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(numero * 2), 2000);
//     });
// }

// doble(2)
//     .then((resultado) => {
//         console.log(resultado); // 4
//         return doble(resultado); 
//     })
//     .then((resultado) => {
//         console.log(resultado); // 8
//         return doble(resultado);
//     })
//     .then((resultado) => {
//         console.log(resultado); // 16
//     });


//----------------------------------------------------------------------------
// // async y await

// const obtenerUsuario = (id) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({ id, nombre: "Juan" });
//         }, 1000);
//     });
// };

// async function mostrarUsuario() {
//     try {
//         const usuario = await obtenerUsuario(1);
//         console.log(`Usuario: ${usuario.nombre}`);
//     } catch (error) {
//         console.log(`Error: ${error}`);
//     }
// }

// mostrarUsuario();

//---------------------------------------------------------
//Módulo fs de Node.js
// fs o fileSisten Concepto: El módulo fs de Node.js (File System) permite interactuar con el sistema de archivos de la computadora para leer, escribir, actualizar y eliminar archivos. Soporta operaciones tanto sincrónicas como asincrónicas.

const fs = require('fs');

// Principales Métodos del Módulo fs:
// fs.readFile(): Lee el contenido de un archivo de manera asincrónica.
// fs.writeFile(): Escribe o crea un archivo de manera asincrónica.
// fs.appendFile(): Agrega contenido al final de un archivo.
// fs.unlink(): Elimina un archivo.

// Escritura de un archivo

// fs.writeFile('archivo.txt', 'Contenido del archivo', (error) => {
//     if (error) {
//         console.log("Error al escribir el archivo:", error);
//     } else {
//         console.log("Archivo escrito exitosamente.");
//     }
// });

// fs.readFile('archivo.txt', 'utf-8', (error, data) => {
//     if (error) {
//         console.log("Error al leer el archivo:", error);
//     } else {
//         console.log("Contenido del archivo:", data);
//     }
// });


// fs.appendFile(): Agrega contenido al final de un archivo.
// Este método permite agregar datos al final de un archivo de manera asincrónica. Si el archivo no existe, fs.appendFile lo crea automáticamente y luego añade el contenido. Es útil para mantener un registro continuo de datos, como logs, registros de actividad o cualquier información que se actualice de forma acumulativa.
// fs.appendFile('archivo.txt', 'Nueva línea agregada al registro.', (error) => {
//     if (error) {
//         console.log("Error al agregar contenido:", error);
//     } else {
//         console.log("Contenido agregado exitosamente.");
//     }})

// fs.unlink(): Elimina un archivo. Este método elimina un archivo de forma asincrónica. Es ideal para limpiar archivos que ya no son necesarios, gestionar archivos temporales o eliminar datos sensibles.

// fs.unlink('archivo.txt', (error) => {
//     if (error) {
//         console.log("Error al eliminar el archivo:", error);
//     } else {
//         console.log("Archivo 'archivo.txt' eliminado exitosamente.");
//     }
// })



// Callback y Asincronía: Crea una función llamada operacionAsincrona que reciba un número y un callback. La función debe esperar 2 segundos y luego ejecutar el callback pasando como argumento el doble del número recibido.

function operacionAsincrona(numero, callback) {
    setTimeout(() => {
        callback(numero * 2);
    }, 2000);
}

operacionAsincrona(5, (resultado) => {
    console.log("Resultado:", resultado); // Resultado: 10
});

// Orden de Ejecución: Crea un programa que tenga tres console.log() con mensajes en el siguiente orden:
// Mensaje inicial
// Un mensaje intermedio, que se ejecute con un setTimeout de 1 segundo
// Mensaje final Observa el orden de ejecución en la consola y explica la razón de ese orden.

console.log("Mensaje inicial");

setTimeout(() => {
    console.log("Mensaje intermedio");
}, 1000);

console.log("Mensaje final");
// Resultado esperado en consola:
// Mensaje inicial
// Mensaje final
// Mensaje intermedio (tras 1 segundo)


// Promesas para Control de Errores: Crea una función verificarNumero que devuelva una promesa. La función debe recibir un número y devolver "El número es mayor a 10" si el número es mayor a 10, o un error si no lo es.
function verificarNumero(numero) {
    return new Promise((resolve, reject) => {
        if (numero > 10) {
            resolve("El número es mayor a 10");
        } else {
            reject("Error: el número no es mayor a 10");
        }
    });
}

verificarNumero(12)
    .then((mensaje) => console.log(mensaje))
    .catch((error) => console.log(error));


// Async/Await en Función de Lectura: Usa fs.promises para crear una función leerArchivoAsync que lea el contenido de un archivo datos.txt y muestre el contenido en la consola. Utiliza try/catch para controlar posibles errores si el archivo no existe.


//usamos una funcion async await, porque lo pide el enunciado, pero no es necesario.
const fs = require('fs');
async function leerArchivoAsync() {
    try{
        const data = await fs.readFile('datos.txt', 'utf-8');
        console.log("Contenido del archivo:", data);
    } catch (error) {
        console.log("Error al leer el archivo:", error);
    }
}
leerArchivoAsync();

// Escritura Asincrónica: Crea una función guardarMensaje que guarde un mensaje en un archivo mensaje.txt. Usa una promesa para esperar 1 segundo antes de escribir el mensaje.


const fs = require('fs')

function guardarMensaje(mensaje) {
    return new Promise((resolve) => {
        setTimeout( () => {
             fs.writeFile('mensaje.txt', mensaje);
            resolve("Mensaje guardado.");
        }, 1000);
    });
}

guardarMensaje("Este es un mensaje de prueba")
    .then((respuesta) => console.log(respuesta));


// Actualización de Registro: Implementa una función actualizarRegistro que verifique si existe un archivo log.txt. (fs.access) Si existe, añade una línea con el mensaje "Actualización registrada". Si no existe, crea el archivo y escribe "Log inicial". Usa async/await para realizar la tarea.

//usamos una funcion async await, porque lo pide el enunciado, pero no es necesario.
//Lo resuelvo en vivo mañana.
const fs = require('fs/promises');

// Función actualizarRegistro
async function actualizarRegistro() {

   // fs.access arrojará un error si el archivo no existe. Usar if...else en lugar de try...catch para este escenario sería menos eficiente, ya que no hay una manera directa de verificar si el archivo existe sin atrapar un posible error.
  try {
    await fs.access('log.txt');

    await fs.appendFile('log.txt', 'Actualización registrada\n');
    console.log('Actualización registrada en log.txt');
  } catch (error) {
    
    await fs.writeFile('log.txt', 'Log inicial\n');
    console.log('Archivo log.txt creado con "Log inicial"');
  }
}
actualizarRegistro() 


// Transformar Callback en Promesa: Crea una función doblePromesa que reciba un número y devuelva una promesa. La promesa debe devolver el doble del número después de 2 segundos. Luego usa async/await para llamar a esta función y mostrar el resultado.
function doblePromesa(numero) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(numero * 2);
        }, 2000);
    });
}

async function ejecutarDoble() {
    const resultado = await doblePromesa(5);
    console.log("Resultado:", resultado); // Resultado: 10
}

ejecutarDoble();



// Uso de fs con Promesas: Crea una función crearYLeerArchivo que primero cree un archivo saludo.txt con el texto "¡Hola desde Node.js!" y luego lo lea para mostrar el contenido en la consola. Usa fs.promises y async/await para controlar el flujo.

const fs = require('fs').promises;

async function crearYLeerArchivo() {
    try {
        await fs.writeFile('saludo.txt', '¡Hola desde Node.js!');
        const contenido = await fs.readFile('saludo.txt', 'utf-8');
        console.log("Contenido del archivo:", contenido);
    } catch (error) {
        console.log("Error:", error);
    }
}

crearYLeerArchivo();

