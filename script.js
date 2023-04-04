function carregar(){
    let msg = document.getElementById("msg")
    let img = document.getElementById("img")
    let msg1 = document.querySelector(".mensagem")
    let title = document.querySelector(".title")
    let data = new Date()
    let hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    
    if(hora >= 6 && hora <9){
        img.src="./img/manha.jpeg"
        document.body.style.background = "#cb743e"
        msg1.innerHTML = `Tenha uma boa manhã!`
        title.innerHTML = `<h1>Hora da manhã</h1>`
    
    }else if(hora == 9){
        img.src="./img/cafe.jpeg"
        document.body.style.background = "#cb743e"
        msg1.innerHTML = `Tenha um bom café da manhã!`
        title.innerHTML = `<h1>Hora do café da manhã</h1>`

    }else if ( hora >= 10 && hora <12 ){
        
        img.src="./img/manha.jpeg"
        document.body.style.background = "#cb743e"
        msg1.innerHTML = `Tenha uma boa manhã!`
        title.innerHTML = `<h1>Hora da manhã</h1>`
    }
    else if(hora == 12){
        img.src = "./img/almoco.jpeg"
        document.body.style.background = "#a2573a"
        msg1.innerHTML = `Tenha um bom almoço!`
        title.innerHTML = `<h1>Hora do almoço!</h1>`
    
    }else if(hora > 12 && hora <18 ){
        img.src="./img/tarde.jpeg"
        document.body.style.background = "#118980"
        msg1.innerHTML = `Tenha uma boa tarde!`
        title.innerHTML = `<h1>Hora da tarde</h1>`

    }else if(hora == 18){
        img.src="./img/cafeT.jpeg"
        document.body.style.background = "#e79a40"
        msg1.innerHTML = `Tenha um bom café da tarde!`
        title.innerHTML = `<h1>Hora do Café da tarde</h1>`
        
    }else if(hora >= 19 && hora < 21) {
        img.src = "./img/noite.jpeg"
        document.body.style.background = "#835174"
        msg1.innerHTML = "Tenha uma excelente noite!"
        title.innerHTML = `<h1>Hora da noite</h1>`
    
    }else if(hora == 21) {
        img.src = "./img/janta.jpeg"
        document.body.style.background = "#a45200"
        msg1.innerHTML = "Tenha uma excelente janta!"
        title.innerHTML = `<h1>Hora da janta</h1>`

    }else if(hora > 21 && hora <= 24){
        img.src = "./img/noite.jpeg"
        document.body.style.background = "#835174"
        msg1.innerHTML = "Tenha uma excelente noite!"
        title.innerHTML = `<h1>Hora da noite</h1>`
    }
    else{
        img.src = "./img/madrugada.jpeg"
        document.body.style.background = "#3d666c"
        msg1.innerHTML = "Vai dormir, está na hora já!"
        title.innerHTML = `<h1>Hora da madrugada</h1>`
    }
}