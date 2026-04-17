function calcular() {

    limpiarErrores();

    if (!validarFormulario()) return;

    let ingresos = parseFloat(txtIngresos.value);
    let egresos = parseFloat(txtEgresos.value);
    let monto = parseFloat(txtMonto.value);
    let plazo = parseFloat(txtPlazo.value);
    let tasa = parseFloat(txtTasaInteres.value);

    let disponible = calcularDisponible(ingresos, egresos);
    let capacidad = calcularCapacidadPago(disponible);
    let interes = calcularInteresesSimple(plazo, monto, tasa);
    let total = calcularTotalPagar(monto, interes);
    let cuota = calcularCuotaMensual(total, plazo);

    let aprobado = aprobarCredito(capacidad, cuota);

    spnDisponible.innerText = "USD " + disponible.toFixed(2);
    spnCapacidadPago.innerText = "USD " + capacidad.toFixed(2);
    spnInteresPagar.innerText = "USD " + interes.toFixed(2);
    spnTotalPrestamo.innerText = "USD " + total.toFixed(2);
    spnCuotaMensual.innerText = "USD " + cuota.toFixed(2);

    spnEstadoCredito.classList.remove("aprobado", "rechazado");

    if (aprobado) {
        spnEstadoCredito.innerText = "CRÉDITO APROBADO";
        spnEstadoCredito.classList.add("aprobado");
    } else {
        spnEstadoCredito.innerText = "CRÉDITO RECHAZADO";
        spnEstadoCredito.classList.add("rechazado");
    }
}

/* VALIDACIONES */

function validarFormulario() {

    let valido = true;

    valido &= validarNumero("txtIngresos", 100, 1000000);
    valido &= validarNumero("txtEgresos", 0, 1000000);
    valido &= validarNumero("txtMonto", 500, 500000);
    valido &= validarNumero("txtPlazo", 1, 30);
    valido &= validarNumero("txtTasaInteres", 1, 60);

    if (parseFloat(txtEgresos.value) > parseFloat(txtIngresos.value)) {
        mostrarError("txtEgresos", "Los egresos no pueden ser mayores que los ingresos.");
        valido = false;
    }

    return Boolean(valido);
}

function validarNumero(id, min, max) {

    let input = document.getElementById(id);
    let valor = parseFloat(input.value);

    if (input.value.trim() === "") {
        mostrarError(id, "Campo obligatorio.");
        return false;
    }

    if (isNaN(valor)) {
        mostrarError(id, "Debe ser un número válido.");
        return false;
    }

    if (valor < min || valor > max) {
        mostrarError(id, `Valor permitido entre ${min} y ${max}.`);
        return false;
    }

    return true;
}

function mostrarError(id, mensaje) {

    let input = document.getElementById(id);
    input.classList.add("input-error");

    let error = document.createElement("div");
    error.className = "error-message";
    error.innerText = mensaje;

    input.closest(".form-group").appendChild(error);
}

function limpiarErrores() {
    document.querySelectorAll(".error-message").forEach(e => e.remove());
    document.querySelectorAll("input").forEach(i => i.classList.remove("input-error"));
}