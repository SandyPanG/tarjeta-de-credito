var credCard = "";

do {
  credCard = prompt("Ingresa tu numero de Tarjeta de Credito a 16 digitos \n sin espacios."); // Aquí se da al usuario las instrucciones para que ingrese su número de T.C. 
}

	while( !credCard || !/^[0-9]*$/.test(credCard));

// function isValidCard (num) {
//   var array = [];
//   console.log(array);
  
//     };

