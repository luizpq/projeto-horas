function carregar () {
   var agora = new Date()
    var hora = agora.getHours()
    var img = document.getElementById('imagem')
    
    horas.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        img.src = 'foto-manha.jpg'
        document.body.style.backgroundColor = '#c7ae3ba4'
    }
    else if (hora >= 12 && hora < 18) {
        img.src = "foto-tarde.jpg"
        document.body.style.backgroundColor = '#bb8013'
    }

    else{
        img.src = 'foto-noite.jpg'
        document.body.style.backgroundColor = '#113591e2'
    }
}