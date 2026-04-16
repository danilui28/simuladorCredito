//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML
function calcular(){
    let ingresos = parseFloat(document.getElementById("txtIngresos").value);
    let egresos = parseFloat(document.getElementById("txtEgresos").value);

    let Disponible=calcularDisponible(ingresos,egresos);

    let Capacidad=calcularCapacidadPago(Disponible);

    cambiarTexto("spnDisponible",Disponible)
    cambiarTexto("spnCapacidadPago",Capacidad)
}

cambiarTexto=function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.innerText=mensaje;
}