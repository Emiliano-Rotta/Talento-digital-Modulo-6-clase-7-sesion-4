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

