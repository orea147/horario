function load() {
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('img#imagem')
    var hora = new Date().getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'fotomanha.png'
        document.body.style.background = '#f6cc97'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'fototarde.png'
        document.body.style.background = '#fc9c3b'
    } else {
        img.src = 'fotonoite.png'
        document.body.style.background = '#152140'
    }
}
