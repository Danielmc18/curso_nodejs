// este es el primero porque no es asincrono y es solo esto
console.log('Inicio del Programa'); //1

// esta se va a la esoera de Node Apis solo la registra y
// esta es la ultima porque tiene 3000 milisegundos = 3 segunos
setTimeout( () =>{
    console.log('Primer Timeout') //5
},3000);

//pasa lo mismo, esta es la tercera porue esta en 0segundos
setTimeout( () =>{
    console.log('Segundo Timeout') //2 :: 3
},0);

//pasa lo , por consecuencia sigue esta
setTimeout( () =>{
    console.log('Tercer Timeout') //3 :: 4
},0);

//como no es asincrona la ejecuta y es la segunda
console.log('Fin del programa'); //4 :: 2

