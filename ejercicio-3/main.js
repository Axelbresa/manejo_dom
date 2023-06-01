let num1=document.getElementById("numero1");
let num2=document.getElementById("numero2");
let operacion=document.getElementById("operacion");
let boton=document.getElementById("boton");
let resultado=document.getElementById("Resultado");

boton.addEventListener("click", function(){/* 
    numero1=Number(prompt("ingrese el numero 1"));
    numero2=Number(prompt("ingrese el segundo 2")); */  
    let numero1 = parseInt(num1.value)
    let numero2 = parseInt(num2.value)

    if (operacion.value === "1") {
        resultado.innerHTML = numero1 + numero2
    }
    if (operacion.value === "2") {
        resultado.innerHTML = numero1 - numero2
    }
    if (operacion.value === "3") {
        resultado.innerHTML = numero1 * numero2
    }
    if (operacion.value === "4") {
        resultado.innerHTML = numero1 / numero2
    } 
})
