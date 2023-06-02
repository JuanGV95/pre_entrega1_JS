//este es un ejemplo que quiero desarrollar para mi proyecto final
//la idea es un aplicativo con el que se pueda llevar registro de ingresos
//egresos y mas adelante planeo añadir funciones para control de gastos
//impuestos y cuotas faltantes para pagar
let cuenta = 0;
function nombre() {
    let nombreI = prompt("Ingresa tu nombre");
    if(nombreI == ""){
        nombre();
    } else {
    saludar(nombreI);}
}
function saludar(persona) {
    alert(`Bienvenido/a ${persona} ¿Qué deseas hacer?`);
}
function revSaldo() {
    alert(`Su saldo actual es de ${cuenta} USD`);
}
function consignacion() {
    let valorIng = parseInt(prompt("Digita el valor a consignar"));
    cuenta = valorIng + cuenta;
    alert(`Su nuevo saldo es de ${cuenta} USD`);
}
function retirando() {
    let valorRes = parseInt(prompt("Digita el valor a retirar"));
    if (valorRes > cuenta) {
        alert("Saldo Insuficiente");
    } else {
        cuenta = cuenta - valorRes;
        alert("¡Transaccion exitosa!");
        alert(`Su nuevo saldo es de ${cuenta} USD`);
    }
}

nombre();
if (salida = true) {

    let salida = false;
    do {
        let menu = parseInt(prompt(`Ingresa la opción que deseas realizar
            1 - Revisar saldo
            2 - Consignar
            3 - Retirar
            4 - Salir`))
        switch (menu) {
            case 1:
                revSaldo();
                break

            case 2:
                consignacion();
                break
            case 3:
                retirando();
                break
            case 4:
                alert("Usaste la salida segura, ¡hasta pronto!");
                salida = true;
                break
                default:
                    alert("Este menu esta en construcción, por favor elige un número habilitado");
                    break
        }
    } while (!salida);
}

