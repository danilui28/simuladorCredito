//AQUI TODA LA LOGICA DE LAS FUNCIONES DEL NEGOCIO
function calcularDisponible(ingresos,egresos){
    let Disponible
    Disponible = ingresos - egresos
    if (Disponible < 0) {
        Disponible = 0
    }
    return Disponible
}