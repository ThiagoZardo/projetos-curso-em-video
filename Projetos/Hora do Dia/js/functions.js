function acao() {
        
    var msg = document.getElementById('msg')
    var img = document.getElementById('foto')
    var titulo = document.getElementById('titulo')
    
   var data = new Date();
   var horaAtual = data.getHours()

      

        if(horaAtual >= 6 && horaAtual < 12){
            msg.innerHTML = `Bom Dia agora são ${horaAtual} horas`;
            img.src='images/manha.jpg'
            document.body.style.background='#87ceeb'

        }else if(horaAtual >= 12 && horaAtual < 18){
            msg.innerHTML = `Boa Tarde agora são ${horaAtual} horas`;
            img.src='images/tarde.jpg'
            document.body.style.background='#90EE90'

        }else{
            msg.innerHTML = `Boa Noite agora são ${horaAtual} horas`; 
            titulo.style.color='white'
            img.src='images/noite.jpg'
            document.body.style.background='#1C1C1C'
        } 

}