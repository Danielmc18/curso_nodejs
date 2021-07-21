
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();

//es para ver los argumentos de la consola
// console.log(process.argv);

//es para poder ver los argumentos y esta tedioso
// const [ , , arg3= 'base=5'] = process.argv;
// const [ , base=5] = arg3.split('=');

//esto es de la consola
// console.log(process.argv);

//y esto es de los yargs
// console.log(argv);

//este metodo de yargs te ayuda para los argumentos 
// de la consola como por ejemplo
// node app --base 5
// aqui node es para ejecutar despues va el archivo y 
// lo siguiente es donde en automatico el 5 te lo toma
// como un argumento y si quieres agregar uno mas seria: 
// node app --base 5 --limite 10
// y en automatico te tomaria los 2 
console.log('base: yargs'.red , argv.base);




// const base = 3;

crearArchivo( argv.b, argv.l , argv.h)
    .then(nombreArchivo => console.log (nombreArchivo.yellow, 'creado'.rainbow))
    .catch(err => console.log(err) );
