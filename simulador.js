//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML
function calcular(){
    let ingresos = parseFloat(document.getElementById("txtIngresos").value);
    let egresos = parseFloat(document.getElementById("txtEgresos").value);

    let Disponible=calcularDisponible(ingresos,egresos);

    let Capacidad=calcularCapacidadPago(Disponible);

    let monto = parseFloat(document.getElementById("txtMonto").value);
    let plazoAnios = parseFloat(document.getElementById("txtPlazo").value);
    let tasa = parseFloat(document.getElementById("txtTasaInteres").value);

    let ValorInteres=calcularInteresesSimple(plazoAnios,monto,tasa)

    let totalPagar=calcularTotalPagar(monto,ValorInteres)

    let Cuota=calcularCuotaMensual(totalPagar,plazoAnios).toFixed(2)

    let Credito=aprobarCredito(Capacidad,Cuota)
    if (Credito==true){
        Credito='CRÉDITO APROBADO'
    } else if (Credito==false) {
        Credito='CRÉDITO REPROBADO'
    }

    cambiarTexto("spnDisponible",'USD '+Disponible)
    cambiarTexto("spnCapacidadPago",'USD '+Capacidad)
    cambiarTexto("spnInteresPagar",'USD '+ValorInteres)
    cambiarTexto("spnTotalPrestamo",'USD '+totalPagar)
    cambiarTexto("spnCuotaMensual",'USD '+Cuota)
    cambiarTexto("spnEstadoCredito",Credito)
}

cambiarTexto=function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.innerText=mensaje;
}