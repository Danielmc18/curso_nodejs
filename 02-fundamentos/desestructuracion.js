const deadpool = {

    nombre: "Wade",
    apellido: "Winsont",
    poder: "regenacion",
    // edad: 50,

    getNombre() {
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
}

// forma tradicional y mas de flojera
// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;


//entre las llaves estan lo que queremos
function imprimeHeroe( {nombre, apellido, poder}){

    console.log(nombre,apellido,poder);
}

// imprimeHeroe(deadpool);

const heroes = ['deadpool','superman','batman'];

const [h1,h2,h3] = heroes;
// si quieres saltarte un lugar del arreglo es con la " , "

