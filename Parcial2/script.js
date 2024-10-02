console.log("JS cargado");

let edad;//declaración
edad=18;//asignación
let nombre="Juan";//declaro y asigno
console.log("Mi nombre es "+nombre);

nombre=50;
console.log(nombre);

var apellidoPaterno="De la cruz";
console.log("Mi apellido es "+apellidoPaterno);

var preferencia="tacos";
if(true)
{
    let preferencia="pizza";
    console.log(preferencia);
}
console.log(preferencia);

//var se utiliza para variables globales
//let se utiliza para variables locales
//que su alcance es limitado solo a un bloque de código


const sexo="F";
console.log(sexo);
//sexo="M";// variables de tipo constante 
//no permiten la asignación de nuevos valores
//uncaught typeError:Assigment to constant variable


//alt + 96
//código ascii
let template=` Mi nombre es ${nombre} y 
    mi apellido es ${apellidoPaterno}
    y mi edad es ${edad}`;

    console.log(template);
