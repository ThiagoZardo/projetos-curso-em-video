function contar(){

    var numeroInicial = document.getElementById('inicio')
    var numeroFim = document.getElementById('fim')
    var numeroPasso = document.getElementById('passo')

    var res = document.getElementById('res')

    var resultadoInicial = Number(inicio.value)
    var resultadoFim = Number(fim.value)
    var resultadoPasso = Number(passo.value)
  
    if (resultadoInicial == '' || resultadoPasso == '' || resultadoFim ==''){
        alert('Insira todos os dados')
    }else{
            res.innerHTML=`Contando...`
        
        if(resultadoInicial < resultadoFim){

            for (var contador = resultadoInicial ; contador <= resultadoFim ; contador += resultadoPasso){
                res.innerHTML += `&#128073 ${contador} `           
            }    

        }else if(resultadoInicial > resultadoFim){
            for (var contador = resultadoInicial ; contador >= resultadoFim ; contador -= resultadoPasso){
                res.innerHTML += `&#128073 ${contador} `           
            } 
            res.innerHTML += `&#9940 `
        }
    
    }


}