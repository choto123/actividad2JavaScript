/*
//1.	Pide al usuario un número y determina si es par o impar y si es positivo o negativo.
var numero = parseInt( prompt("Ingresa un numero "));
    //para ver si el numero seleccionado es positivo (mayor a 0) o negativo(menor que 0)
    if (numero > 0){
        console.log("el numero ingresado es positivo")
    }
    else if (numero < 0){
        console.log("el numero ingresado es negativo")
    }
    else{
        console.log("el numero es 0")

    }
    //aqui podemos saber si el numero ingresado es par o impar
    if (numero % 2 == 0){
        console.log("el numero es par")
    }
    else {
    console.log("el numero es impar")
    }
    
//2.	Pide al usuario dos números y determina cual es el número mayor y cual es el menor.
var numero1 =  parseInt(prompt("ingresa el numero 1"))
var numero2 =  parseInt(prompt("ingresa el numero 2"))

    if (numero1 > numero2){
        console.log("el numero mayor es "+ numero1 + " y el numero menor es "+ numero2)
    }
    else{
        console.log("el numero mayor es "+ numero2 + " y el numero menor es "+ numero1)
    }

//3.	Pide al usuario que digite un numero del 1 al 7 y Realiza el código correspondiente para saber cuál es el dia de la semana correspondiente al número digitado;
var dia = parseInt(prompt("ingresa un numero del 1-7 dependiendo del dia de la semana siendo 1(lunes)-7(domingo): "))

    switch(dia){
        case(1) :
            console.log("Lunes")
            break;
        case(2):
            console.log("Martes")
            break;
        case(3):
            console.log("Miercoles")
            break;
        case(4):
            console.log("Jueves")
            break;
        case(5):
            console.log("Viernes")
            break;
        case(6):
            console.log("Sabado")
            break;
        case(7):
            console.log("Domingo")
            break;        
    }

//4.Se necesita clasificar la etapa de una persona solo pidiéndole como dato su edad. (Si la edad es menor de 18 es adolente), 
//(si la edad está en el rango de 18 a 28 es adulto adolecente), (si la edad está entre 29 a 49 es adulto), (si la edad está entre 50 en adelante es adulto mayor). 
var edad  =parseInt(prompt("Ingresa tu edad: "));

if (edad > 0 && edad <18){
    console.log("eres un adolecente ya que tienes "+ edad+ " años");
}
else if (edad >= 18 && edad <28){
    console.log("eres un adulto adolecente ya que tienes "+ edad+ " años");
}
else if (edad > 29 && edad <49){
    console.log("eres un adulto ya que tienes "+ edad+ " años");
}
else if (edad > 50 ){
    console.log("eres un adulto mayor ya que tienes "+ edad+ " años");
}
else{
    console.log("ingresar un dato valido")
}


//punto5
var producto1 = parseFloat(prompt("ingresa el valor del producto1"));

var producto2 = parseFloat(prompt("ingresa el valor del producto2"));

var producto3 = parseFloat(prompt("ingresa el valor del producto3"));

var total  = producto1 + producto2 + producto3;

var metodoPago =prompt("ingresa metodo de pago -efectivo-cupon-credito");

switch(metodoPago){
    case("efectivo"):
    console.log("el valor a pagar es de: "+ total);
    break;

    case("cupon"):
    let descuento = total * 0.03;
    var cupon =total-descuento;
    console.log("el valor a pagar aplicando el cupon del 0.3% es de: "+ cupon)
    break;

    case("credito"):
    let aumento = total * 0.05;
    var credito =total + aumento;
    console.log("el valor a pagar aplicando con el credito de 0.5% es de: "+ credito)
    break;

}

//punto6

var nota1 = parseFloat(prompt("ingresa la nota: "));
var nota2 = parseFloat(prompt("ingresa la nota2: "));
var nota3 = parseFloat(prompt("ingresa la nota3: "));

var notatotal = ((nota1+nota2+nota3)/3)
if (notatotal < 2.0) {
    nivel = "Malo";
} else if (notatotal < 2.9) {
    nivel = "Debe recuperar";
} else if (notatotal < 3.9) {
    nivel = "Regular";
} else if (notatotal < 4.5) {
    nivel = "Bueno";
} else {
    nivel = "Muy bueno";
}
console.log("Promedio: " + notatotal);
console.log("Nivel: " + nivel);

//punto7
var diaNacimiento = parseInt(prompt("Ingrese el día de nacimiento:"));
var mesNacimiento = parseInt(prompt("Ingrese el mes de nacimiento (en número):"));
var añoNacimiento = parseInt(prompt("Ingrese el año de nacimiento:"));

var añoActual = parseInt(prompt("ingresa el año actual"));
var mesActual = parseInt(prompt("ingresa el mes actual"));
var diaActual = parseInt(prompt("ingresa el dia actual"));

if (mesActual > mesNacimiento){
    if (diaActual > diaNacimiento){
        var edad = añoActual - añoNacimiento;
    }
}
else {
    var edad = (añoActual - 1) - añoNacimiento
}
console.log("La edad actual es: " + edad);
*/
//Punto8
var Edad = parseInt(prompt("Ingrese la Edad Del paciente"));
var Dias = parseInt(prompt("Ingrese Los Dias de Estadia"));

var valorDia;

if (Dias <= 1) {
    valorDia = parseFloat(20000);
} else if (Dias >= 2 && Dias <= 4) {
    valorDia = parseFloat(30000);
} else if (Dias >= 5 && Dias <= 7) {
    valorDia = parseFloat(25000);
} else {
    valorDia = parseFloat(15000);
}

var subtotal;
var recargo= 0.00;
if (Edad > 0 && Edad <= 10) {
    if (Dias >= 1) {
        subtotal = valorDia * Dias;
    } else if (Dias >= 2 && Dias <= 4) {
        subtotal = valorDia * Dias;
    } else if (Dias >= 5 && Dias <= 7) {
        var recargo = parseFloat(0.05);
        subtotal = valorDia * Dias;
        subtotal += subtotal * recargo;
    } else {
        var recargo = parseFloat(0.10);
        subtotal = valorDia * Dias;
       
        subtotal += subtotal * recargo;
    }
} else if (Edad >= 11 && Edad <= 17) {
    if (Dias >= 1) {
        subtotal = valorDia * Dias;
    } else if (Dias >= 2 && Dias <= 4) {
        subtotal = valorDia * Dias;
    } else if (Dias >= 5 && Dias <= 7) {
        subtotal = valorDia * Dias;
    } else {
        var recargo = parseFloat(0.10);
        subtotal = valorDia * Dias;
        subtotal += subtotal * recargo;
    }
} else if (Edad >= 18 && Edad <= 49) {
    if (Dias >= 1) {
        subtotal = valorDia * Dias;
    } else if (Dias >= 2 && Dias <= 4) {
        subtotal = valorDia * Dias;
    } else if (Dias >= 5 && Dias <= 7) {
        subtotal = valorDia * Dias;
    } else {
        var recargo = parseFloat(0.15);
        subtotal = valorDia * Dias;
        subtotal += subtotal * recargo;
    }
} else {
    if (Dias >= 1) {
        subtotal = valorDia * Dias;
    } else if (Dias >= 2 && Dias <= 4) {
        subtotal = valorDia * Dias;
    } else if (Dias >= 5 && Dias <= 7) {
        var recargo = parseFloat(0.15);
        subtotal = valorDia * Dias;
        subtotal += subtotal * recargo;
    } else {
        var recargo = parseFloat(0.20);
        subtotal = valorDia * Dias;
        subtotal += subtotal * recargo;
    }
}

console.log("Dias de hospitalizacion: " + Dias);
console.log("Por tener " + Edad + " años, el valor de hospitalizacion diaria es de: " + valorDia);
console.log("El valor del recargo es de: " + recargo.toFixed(2) + " y el total a pagar es de: " + subtotal);

