function verificar() {
    var data = new Date()
    anoAtual = data.getFullYear()


    var anoNascimento = document.getElementById('selecionaAno')
    var anoInformado = Number(selecionaAno.value) 
    var res = document.getElementById('res') 
    var idade = anoAtual - anoInformado
    var genero = document.getElementsByName('check')
    var sexoInformado = ''
    var img = document.getElementById('imagem')

    
    if(genero[0].checked){
        sexoInformado = 'Homem'
        if(idade >=0 && idade <9){
            //Criança
            img.src='images/criancaM.jpg'
            img.style.display = 'block'
            res.style.textAlign='center'
            res.innerHTML=`<p>Você é um jovenzinho de ${idade} anos</p>`
            
        }else if(idade >= 9 && idade <21){
            //Adolecente
            img.src='images/adolecenteM.jpg'
            img.style.display = 'block'
            res.style.textAlign='center'
            res.innerHTML=`<p>Você é um jovem de ${idade} anos</p>`

        }else if(idade >=21 && idade < 65){
            //Adulto
            img.src='images/adultoM.jpg'
            img.style.display = 'block'
            res.style.textAlign='center'
            res.innerHTML=`<p>Você é um homem de ${idade} anos</p>`

        }else if(idade >=65 && idade <130){
            //Idoso
            img.src='images/idosoM.jpg'
            img.style.display = 'block'
            res.style.textAlign='center'
            res.innerHTML=`<p>Você é um senhor de ${idade} anos</p>`
        }else if(anoInformado < 1900){
            alert("De acordo com nosso sistema você tem " + idade + " anos isso é meio estranho... :( Coloque sua data de nascimento novamente")
        } 

    
    }else if (genero[1].checked){
        sexoInformado = 'Mulher'
        if(idade >=0 && idade <9){
            //Criança
            img.src='images/criancaF.jpg'
            img.style.display = 'block'
            res.style.textAlign='center'
            res.innerHTML=`<p>Você é uma jovenzinha de ${idade} anos</p>`
            
        }else if(idade >= 9 && idade <21){
            //Adolecente
            img.src='images/adolecenteF.jpg'
            img.style.display = 'block'
            res.style.textAlign='center'
            res.innerHTML=`<p>Você é uma jovem de ${idade} anos</p>`

        }else if(idade >=21 && idade <65){
            //Adulto
            img.src='/images/adultoF.jpg'
            img.style.display = 'block'
            res.style.textAlign='center'
            res.innerHTML=`<p>Você é uma mulher de ${idade} anos</p>`

        }else if(idade >=65 && idade <130){
            //Idoso
            img.src='/images/idosoF.jpg'
            img.style.display = 'block'
            res.style.textAlign='center'
            res.innerHTML=`<p>Você é uma senhora de ${idade} anos</p>`
    
        }else if(anoInformado < 1900){
            alert("De acordo com nosso sistema você tem " + idade + " anos isso é meio estranho... :( Coloque sua data de nascimento novamente")
                
        }
    }   


if(anoInformado > anoAtual){
    alert('Você veio do futuro?')
}

if (sexoInformado == ''){
    alert('Marque o seu sexo')
}

}//verificar()


