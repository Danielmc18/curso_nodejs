
const nombre  = 'deadpool';
const real = "wade winston";

const normal = nombre + ' ' + real;



//es una nueva forma de string y puedes hacer 
// una concatenacion, nos permten de multilinea

const template = `${nombre} ${real}`;

console.log(normal);
console.log(template);

const html = ` //aqui ocurre un salto de linea

<h1>Hola</h1>
<p>Mundo</p>

`; //aqui tmb

console.log(html);