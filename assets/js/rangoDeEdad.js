let edadUsuario = prompt("Ingrese su edad ");
console.log(edadUsuario);

if (edadUsuario >= 0 && edadUsuario<= 12){
    console.log("Usted es un niño con la edad de: " + edadUsuario);
} else if (edadUsuario >=13 && edadUsuario <=19){
    console.log("Usted es un adolescente con la edad de: " + edadUsuario);
} else if (edadUsuario >=20 && edadUsuario <=59){
    console.log("Usted es un adulto con la edad de: " + edadUsuario);
} else if (edadUsuario >=60 && edadUsuario <=150){
    console.log("Usted es un adulto mayor con la edad de: " + edadUsuario);
} else {
    console.log("Ingrese una edad Valida");
}