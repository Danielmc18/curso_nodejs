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

//transorma una funcion en una promesa y te retorna la misma 
const getInfoUsuario = async( ) =>
{
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        return `El salario del empleado: ${empleado} es de ${salario}`
        
    } catch (error) {
        
        //es para arrojar el error
        throw error;
        
    }
    
}


const id = 1;

getInfoUsuario()
.then(msg => console.log(msg));










