let listaDeTareas = [];
let operacion;
const regex = /^\S+$/;

do{
    operacion = parseInt(prompt("ADMINISTRADOR DE TAREAS\n" +
            "Seleccione una operación:\n" +
            "1- Agregar una tarea\n" +
            "2- Listar tareas\n" +
            "3- Editar tarea\n" +
            "4- Eliminar tarea\n" +
            "5- Salir\n"));

switch(operacion){
    case 1:
        let nuevaTarea = prompt("Ingrese la tarea que quiera agregar:");
        if(validacionNombre(nuevaTarea)){
            agregarTarea(nuevaTarea.trim());
        }else{
            alert("El nombre no tiene que ser vacío y no tiene que contener espacios");
        }
        break;
    case 2:
        listarTareas();
        break;
    case 3:
        let editarNombre = prompt("Ingrese la tarea que quiera editar");
        let nombreEditado = prompt("Ingrese el nuevo nombre");
        if(validacionNombre(editarNombre) && validacionNombre(nombreEditado)){
            editarTarea(editarNombre.trim(), nombreEditado.trim());
        } else{
            alert("El nombre no tiene que ser vacío y no tiene que contener espacios");
        }
        break;
    case 4:
        let eliminarNombre = prompt ("Ingrese la tarea que quiera eliminar:");
        if (validacionNombre(eliminarNombre)){
            eliminarTarea(eliminarNombre.trim());
        } else{
        eliminarTarea(eliminarNombre);
            alert("El nombre no tiene que ser vacío y no tiene que contener espacios");
        }
        break;
    case 5:
        alert("PROGRAMA FINALIZADO");
        break;
    default:
        alert("Ingrese una opción válida");
        break;
    }
} while (operacion !== 5);

function validacionNombre(nombreTarea){
    return regex.test(nombreTarea);
}

function agregarTarea(tarea){
    if (tarea && tarea.trim().length > 0){
    listaDeTareas.push(tarea.trim());
    alert("Se agrego la tarea: " + tarea);
} else{
    alert("Tiene que ingresar algo");
}
}

function listarTareas(){
    if(listaDeTareas.length === 0){
        alert("No hay ninguna tarea agregada");
    } else {
        let lista = "LISTA DE TAREAS:\n";
        listaDeTareas.forEach(tarea=>{
            lista += `-${tarea}\n`;
        });
        alert(lista);
    }
}

function editarTarea(nombreTarea, nuevaTarea){
    let indiceTarea = -1;
    for(let i = 0; i < listaDeTareas.length; i++){
        if(listaDeTareas[i] === nombreTarea){
            indiceTarea = i;
            break;
        }
    }
    if(indiceTarea != -1){
        if(nuevaTarea && nuevaTarea.trim().length > 0){
            listaDeTareas[indiceTarea] = nuevaTarea.trim();
            alert("Se edito la tarea: " + nombreTarea  + " y quedo como: " + nuevaTarea);
        }else{
            alert("No se puede guardar una tarea vacia");
        }
    } else{
        alert("No esta en la lista");
    }
}

function eliminarTarea(nombreTarea){
    let indiceTarea = -1;
    for(let i = 0; i < listaDeTareas.length; i++){
        if(listaDeTareas[i] === nombreTarea){
            indiceTarea = i;
            break;
        }
    }
    if(indiceTarea !== -1){
        let tareaEliminada = listaDeTareas.splice(indiceTarea, 1);
        alert("Tarea eliminada");
    } else {
        alert("No esta en la lista");
    }
}