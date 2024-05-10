let cantidadArticulo = parseInt(prompt("Ingrese la cantidad de artículos a llevar"));
let precioArticulo = parseInt(prompt("Ingrese el precio de cada artículo"));
let precioTotal = (cantidadArticulo * precioArticulo);
let descuento = 0;
let precioConDescuento = 0;
if (isNaN(cantidadArticulo) || isNaN(precioTotal) || cantidadArticulo < 1 || precioTotal < 1){
    console.log("Solo debe ingresar números y que sean mayores a 1");
} else {

    switch(true){
        case (cantidadArticulo >= 10 && precioTotal >= 20000):
            descuento = precioTotal * 0.15;
            precioConDescuento = precioTotal - descuento;
            console.log("Se aplicá el descuento del 15%");
            console.log("Precio con Descuento: $" + precioConDescuento);
            break;
        case (cantidadArticulo >= 10 && precioTotal <= 20000):
            console.log("No se aplica descuento porque no supera los $20000");
            console.log("Precio Total (sin descuento): $" + precioTotal);
            break;
        case (cantidadArticulo < 10 && precioTotal >= 20000):
            console.log("No se aplica descuento porque se requieren más de 10 artículos");
            console.log("Precio Total (sin descuento): $" + precioTotal);
            break;
        case (cantidadArticulo < 10 && precioTotal < 20000):
            console.log("No se aplica el descuento porque se requieren más de 10 artículos y tiene que ser mayor a $20000");
            console.log("Precio Total (sin descuento): $" + precioTotal);
    }
}