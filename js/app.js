var credCard = "";

do {
  credCard = prompt("Ingresa tu numero de Tarjeta de Credito a 16 digitos \n sin espacios."); // Aquí se da al usuario las instrucciones para que ingrese su número de T.C. 
}

	while( !credCard || !/^[0-9]*$/.test(credCard));//prueba que no se pueda dejar sin ingresar datos o que no pase si la información no contiene sólo números
  isValidCard(credCard);
  document.getElementById("numero").innerHTML = credCard

/**************Función que prueba si el número es válido************/ 
function isValidCard (card) {
  var array = (credCard.split(""));//convirtiendo en array el número ingresado
	var reverseArray = array.reverse();//colocando al revés el array
	var posPair = [];
	var sumPair = 0;
	var newMultArray = [];
  
  console.log(array);
  console.log(reverseArray);
  
  
    };

