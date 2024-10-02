// api document: acceder a los elementos
// del árbol DOM

const boton=document.getElementById("#btn");
const contenedor=document.getElementById("contenedor");
console.log(boton);
var contador=0;

template=`<div class='salida'>El total de clicks es
${contador} </div>`;

boton.addEventListener('click', function (){
contador++;
contenedor.insertAdjacentHTML('beforeend', template);
});