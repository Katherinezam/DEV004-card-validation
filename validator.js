const validator = {
  isValid(tarjeta){
    
        
        
    console.log(tarjeta);
        
    const numerosAlreves = tarjeta.split('').reverse();
        
    console.log( numerosAlreves);
        
    const numeroTarjetaNuevo = [];
        
    for (let i = 0; i < numerosAlreves.length; i++) {
      const numero = parseInt(numerosAlreves[i]);
      if (i % 2 !== 0) {
        numeroTarjetaNuevo.push(numero * 2);
      } 
      else{
        numeroTarjetaNuevo.push(numero);
      }
    }
    console.log(numeroTarjetaNuevo);
        
    const numeroSumado =[];
        
    for (let i = 0; i < numeroTarjetaNuevo.length; i++){
          
      if (numeroTarjetaNuevo[i] >= 10){
        const num = numeroTarjetaNuevo[i].toString();
        numeroSumado.push(Number(num[0]) + Number(num[1]));
      }
      else{ 
        numeroSumado.push(numeroTarjetaNuevo[i]);
              
      }
        
    }
    console.log(numeroSumado);
        
    let resultadoFinal = 0;
        
    for(let i =0; i< numeroSumado.length; i++){
          
      resultadoFinal = resultadoFinal + numeroSumado[i];    
          
    }
        
    console.log(resultadoFinal)
       
    if(resultadoFinal % 10 ===0) {

      return true
        
    } else {
      return false
    } 
        
        
  },

  maskify(numerosDeTarjeta) {
    // Paso 1
    let numerosOcultos = ""

    // Paso 2
    for (let i = 0; i < numerosDeTarjeta.length; i++) {

      //Paso 3
      if (i < numerosDeTarjeta.length - 4) {
        // estra aqui si de la primera posiciones antes de los ultimos 4
        numerosOcultos= numerosOcultos.concat("#")// vuelvo a reemplazar con un nuevo valor concatenado.
            
      } else {
        // estra aqui si es de las  ultimos 4 posisicones 

        //  5 4 3 2 1 5 4 3 2 1   . lentg = 10
        //  0 1 2 3 4 5 6 7 8 9

        numerosOcultos= numerosOcultos.concat(numerosDeTarjeta[i])
            
      }
    }
    return numerosOcultos
  }

    

};

export default validator;

