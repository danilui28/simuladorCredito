//AQUI TODA LA LOGICA DE LAS FUNCIONES DEL NEGOCIO
function calcularDisponible(ingresos,egresos){
    let Disponible
    Disponible = ingresos - egresos
    if (Disponible < 0) {
        Disponible = 0
    }
    return Disponible
}

function calcularCapacidadPago(disponible){
    let Capacidad
    Capacidad = disponible*0.50
    return Capacidad
}

function calcularInteresesSimple(plazoAnios,monto,tasa){
    let ValorInteres
    ValorInteres = plazoAnios*monto*(tasa/100)
    return ValorInteres
}

function calcularTotalPagar(monto,ValorInteres){
    let Total
    Total = monto+ValorInteres+100
    return Total
}

function calcularCuotaMensual(totalPagar,plazoAnios){
    let Cuota
    Cuota = totalPagar/(plazoAnios*12)
    return Cuota
}

function aprobarCredito(Capacidad,Cuota){
    let Credito
    if (Capacidad >= Cuota){
        Credito = true;
    } else if (Capacidad < Cuota){
        Credito = false;
    }
    return Credito
}