    let primerNumero = parseInt(prompt("Ingrese un número: "))
    let operacion = prompt("Ingrese la operación: + , - , / , * ")
    let segundoNumero = parseInt(prompt("Ingrese otro número: "))
    

    
    
if(operacion == "+"){
    let suma = primerNumero + segundoNumero
    alert("Su resultado es: " + suma)
    
}
else if(operacion == "-"){
        let resta = primerNumero - segundoNumero
        alert("Su resultado es: " + resta)
} 
    
else if(operacion == "/"){
        if(segundoNumero == 0){
            alert("No se puede dividir un numero por 0")
        }else {let division = primerNumero / segundoNumero 
        alert("Su resultado es: " + division)}
} 
else if(operacion == "*"){
    let multiplicacion = primerNumero * segundoNumero
    alert("Su resultado es: " + multiplicacion)
} 




    





