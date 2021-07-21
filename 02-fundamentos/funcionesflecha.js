



const sumar = (a,b) =>{
    return a+b;
}

console.log(sumar(10,20));

//si solo es una linea lo del scope no es
//necesario las llaves
const suma2 = (a,b) => a+b;

//es cuando no ocupas argumentos y solo es eso
const saludar = () => 'Hola'

console.log(saludar());