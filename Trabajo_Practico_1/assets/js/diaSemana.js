let dias = prompt("Seleccione el día de la semana con un número");
let dia1 = "Lunes";
let dia2 = "Martes";
let dia3 = "Miércoles";
let dia4 = "Jueves";
let dia5 = "Viernes";
let dia6 = "Sábado";
let dia7 = "Domingo";

switch (dias){
    case "1":
        console.log(dia1);
        break;
    case "2":
        console.log(dia2);
        break;
    case "3":
        console.log(dia3)
        break;
    case "4":
        console.log(dia4);
        break;
    case "5":
        console.log(dia5);
        break;
    case "6":
        console.log(dia6);
        break;
    case "7":
        console.log(dia7);
        break;    
}

if (dias > 7 || dias <= 0){
    console.log("Ingrese un día de la semana");
}