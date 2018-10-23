var credCard = prompt("Ingresa tu número de tarjeta de crédito");

function itsWrong (credCard) {
  
  while(credCard == '' || credCard == null){
		credCard = prompt('Por favor ingresa un numero de tarjeta');
	} // termina while

	return credCard;
};

// function isValidCard (num) {
//   var array = [];
//   console.log(array);
  
//     };

