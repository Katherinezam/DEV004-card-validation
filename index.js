

import validator from './validator.js';



const bontonFunciona = document.getElementById("botonvalidar");
bontonFunciona.addEventListener("click", mostarMensaje);



function isTarjetaVacia(tarjeta) {
  if (tarjeta === "") {
    return true
  } else {
    return false
  }
}




function mostarMensaje() {
  const tarjeta = document.getElementById("cardnumber").value
  let mensajeNuevo = ""

  if (isTarjetaVacia(tarjeta)) {
    mensajeNuevo = "Por favor, ingrese un número de tarjeta!"

  } else{
    if (validator.isValid(tarjeta)) {
      mensajeNuevo= "Número de tarjeta valida " + validator.maskify(tarjeta)
    } else {
      mensajeNuevo="Número de tarjeta invalida"
    }
  }

 

  const cuadroMensaje = document.getElementById("mensaje");
  cuadroMensaje.innerHTML = mensajeNuevo

}



console.log(validator);
