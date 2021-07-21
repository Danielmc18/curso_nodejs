const empleados=[
    {
        id:1,
        nombre: 'Karen'
    },
    {
        id:2,
        nombre: 'Nina'
    },
    {
        id:3,
        nombre: 'Daniel'
    }
];

const salarios=[
    {
        id:1,
        salario: 1000
    },
    {
        id:2,
        salario: 2000
    },
    
];

const id = 1;

// e=empleado
const getEmpleado = ( id )=>{

    return  new Promise((resolver,reject)=>{

        const empleado = empleados.find(e => e.id===id)?.nombre;

        // es el if simplificado los : es el else
        // el ? es como la llaves del antiguo if
        (empleado)
            ? resolver(empleado)
        
            : reject(`No existe empleado`);
        
    });
};



const getSalario = () => {

    return new Promise( (resolver,reject) => {

        const salario = salarios.find(s => s.id===id)?.salario;

        (salario)
            ? resolver(salario)
            : reject(`No existe el salario del empleado`);
    });
};

getEmpleado(id)
    .then(empleado => console.log(empleado))
    .catch(err=> console.log(err));


getSalario(id)
    .then(salario => console.log(salario))
    .catch(err=> console.log(err));


let nombre;
getEmpleado(id)
    .then(empleado =>{
        nombre = empleado;
        return getSalario(id)
    })
    .then(salario => console.log(`El empleado:`,nombre,`tiene un salario de:`,salario))
    .catch(err => console.log(err));