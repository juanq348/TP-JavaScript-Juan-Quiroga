let numero = parseInt(prompt("Ingrese un número"));

if (isNaN(numero)){
    console.log("Solo puede ingresar números");
} else {
    console.log(numero);

if (!isNaN(numero)){
if (numero % 2 === 0){
    console.log(numero +" es Par");
} else{
    console.log(numero + " es Impar");
}
}
}