let numero1 = prompt("Ingrese el primer número");
let numero2 = prompt("Ingrese el segundo número");
let numero3 = prompt("Ingrese el tercer número");

if(isNaN (numero1 || isNaNnumero2 || isNaNnumero3)){
    console.log("Solo puede ingresar números")
} else {

if(numero1 != numero2 && numero2 != numero3 && numero1 != numero3){
    if (numero1 < numero2 && numero2 <numero3){
    console.log("Orden Ascendente: " + numero1 + " " + numero2 + " " + numero3);
} else if (numero1 < numero3 && numero3 < numero2){
    console.log("Orden Ascendente: " + numero1 + " " + numero3 + " " + numero2);
} else if (numero2 < numero1 && numero1 < numero3){
    console.log("Orden Ascendente: " + numero2 + " " + numero1 + " " + numero3);
} else if(numero2 < numero3 && numero3 < numero1){
    console.log("Orden Ascendente: " + numero2 + " " + numero3 + " " + numero1);
} else if (numero3 < numero1 && numero1 < numero2){
    console.log("Orden Ascendente: " + numero3 + " " + numero1 + " " + numero2);
} else if (numero3 < numero2 && numero2 < numero1){
    console.log("Orden Ascendente: " + numero3 + " " + numero2 + " " + numero1);
}
} else{
    console.log("Ingrese números distintos");
}
}