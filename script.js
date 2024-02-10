/* Crear un programa en Javascript que realice lo siguiente:
//Debe solicitar al usuario un número por prompt o por input y guardarlo.
//Debe calcular el factorial del número recibido.
//Debe imprimir el resultado por consola o por el DOM.
//Debe ser capaz de identificar si el dato de entrada es de tipo number, en caso contrario debe mandar un mensaje de error y volver a solicitar el dato*/


//Se crea una variable para ingresar el valor del numero
const numero = prompt("Por favor, ingresa el número para obtener el factorial: ");

//Se crea una función con un for para crear la operacion de factorial del número que ingrese el usuario y se verifica que sea un número
function factorial(){     
    if(Number.isFinite(parseFloat(numero))){
        let resultado=1;
        for (let i=1; i <=numero; i++){
            resultado *= i;
        }
        alert("El resultado es: " + resultado);
    } else {
    alert("Número incorrecto. Por favor intente de nuevo");
    } 

}
//se llama la funcion para que se visualice en pantalla
factorial();
