  var num = document.getElementById('numero');
  var lista = document.getElementById('resultado')
  var btnFinalizar = document.getElementById('btn_finalizar')
  var res = document.getElementById('texto')
  let valores = []
  
function isNumero(n){
  if(Number(n) >= 1 && Number(n) <= 100){
    return true
  }else{
    return false
  }
}

function inLista(n, l){
  if(l.indexOf(Number(n)) != -1){
    return true
  }else{
    return false
  }
}

function adcionar(){
  if(isNumero(num.value) && !inLista(num.value, valores)){
    valores.push(Number(num.value))
    lista.innerHTML += `O valor ${num.value} foi adicionado<br>`
  }else{
    alert('Valor Inválido, ou já se encontra na lista')
  }
    num.value = ''
    num.focus()
    res.innerHTML = ''
}

function finalizar(){
  if(valores.length == 0){
    alert('Adicione valores antes de finalizar')
  }else{

    let total = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0

    for(let pos in valores){
      soma += valores[pos]
      if(valores[pos] > maior)
      maior = valores[pos]
      if(valores[pos] < menor)
      menor = valores[pos]
    }

    media = soma / total
    res.innerHTML = ''
    res.innerHTML += `<p>Ao todo temos ${total} números cadastrados </p>`
    res.innerHTML += `<p>O maior valor informado foi ${maior} </p>`
    res.innerHTML += `<p>O menos valor informado foi ${menor} </p>`
    res.innerHTML += `<p>Somando todos os valores temos ${soma} </p>`
    res.innerHTML += `<p>A média dos valores é ${media} </p>`
  }
}