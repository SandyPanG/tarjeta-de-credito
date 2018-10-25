var credCard = "";

do {
  credCard = prompt("Ingresa tu numero de Tarjeta de Credito a 16 digitos \n sin espacios."); // Aquí se da al usuario las instrucciones para que ingrese su número de T.C. 
}

	while( !credCard || !/^[0-9]*$/.test(credCard));//prueba que no se pueda dejar sin ingresar datos o que no pase si la información no contiene sólo números
  isValidCard(credCard);
  document.getElementById("numero").innerHTML = credCard

/**************Función que prueba si el número es válido************/ 
function isValidCard (card) {
  var newArray = (credCard.split(""));//convirtiendo en array el número ingresado
	var reverseArray = (credCard.split("")).reverse();//colocando al revés el array
	var pairNum = [];//Guarda números pares del array
	var sumPair = 0;
  var newMultArray = [];
  
  for(var i = 0; i < credCard.length; i++) {//se inicia for que recorre array
    if (i % 2 !== 0) {//se inicia "if" para identificar numeros impares
      var multiply = reverseArray[i]*2;//Multiplica por dos los números en posición par
        if(multiply >= 10) {//indica que si el resultado de la multiplicación es mayor a 10...

          while (multiply) {//suma los digitos hasta que sólo quede un número de un dígito
            sumPair += multiply % 10;
            multiply = Math.floor(multiply/10);//se redonde ahacia abajo a su mas cercano entero

          }

        }
    }
  }
  
  console.log(newArray);
  console.log(reverseArray);
  console.log(sumPair);
  
  
  
    };

