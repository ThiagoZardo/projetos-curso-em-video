function tabuada(){

  var numero = document.getElementById('numero');
  var resultado = document.getElementById('resultado');

    if (numero.value.length == 0){
      alert('Digite um número');
    }else{
      var n = Number(numero.value)

      for(var c = 1; c <= 10; c++ ){
        resultado.innerHTML += `${n} x ${c} = ${n*c} </br>`
        
       
        
      }
  

    }




  
  
  

   
     

   






  

    
}


