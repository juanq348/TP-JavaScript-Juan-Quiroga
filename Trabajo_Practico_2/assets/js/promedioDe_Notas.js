let nota1 = parseInt(prompt("Ingrese la nota del primer trimestre"));
let nota2 = parseInt(prompt("Ingrese la nota del segundo trimestre"));
let nota3 = parseInt(prompt("Ingrese la nota del tercer trimestre"));

if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)){
    console.log("Ingrese solo números");
} else if (nota1 > 10 || nota2 > 10 || nota3 > 10 || nota1 < 1 || nota2 < 1 || nota3 < 1) {
    console.log("Ingrese una nota entre 1 y 10");
} else {
let promedio_Nota = Math.floor((nota1 + nota2 + nota3) / 3);
console.log("Su promedio es igual a: " + (promedio_Nota));

if(promedio_Nota >= 1 && promedio_Nota <= 3){
    console.log("Nota Insuficiente");
} else if(promedio_Nota >= 4 && promedio_Nota <=5){
    console.log("Nota Regular");
} else if(promedio_Nota >= 6 && promedio_Nota <= 7){
    console.log("Nota Buena");
} else if(promedio_Nota >= 8 && promedio_Nota <= 9){
    console.log("Nota Muy Buena");
} else if(promedio_Nota === 10){
    console.log("Nota Sobresaliente");
}
} 