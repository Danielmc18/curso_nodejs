

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
        salarios: 1000
    },
    {
        id:2,
        salarios: 2000
    },
    
];

// e=empleado
const getEmpleado = (id,callback)=>{

    const empleado = empleados.find( (e) => {
        return e.id == id
    })

    if(empleado)
    {
        callback(null, empleado.nombre);
    }else
    {
        callback(`empleado con id ${id} no existe`)
    }

   
}

const getSalario = (id , callback) => {

    const salario = salarios.find((salario)=> salario.id == id)?.salarios;

    if(salario)
    {
        callback(null,salario);
    }else
    {
        callback(`El salario del empleado con id ${id} no tiene salario`);
    }
}


const id = 1;

getEmpleado(id, (err, empleado) => {

    if(err)
    {
        console.log('no existe');
        return console.log(err);
    }

    getSalario(id, ( err, salarios) => {

        if(err)
        {
            console.log('No existe ese salario');
            return console.log(err);
        }
        console.log('El empleado: ',empleado, ' tiene un salario de:',salarios);
    })

    
})

