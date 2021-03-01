// Mise en place du diaporama

let titreDiapo = document.querySelector('#cadre_diapo>h1')
let explications = document.querySelector('#cadre_diapo>p')
let table = ['bike1.jpg', 'bike2.jpg', 'bike3.jpg']
let suivant = document.getElementById('suivant')
let pause = document.getElementById('pause')
let btnPlay = document.getElementById('btnPlay')
let img = document.getElementById('img')
let compteur = 0

let play = function() {

     if (compteur === 0) {
        img.src = table[1]
        titreDiapo.innerText = ``
        explications.innerText = `Entrer nom et prénom, choisir une station, réserver !`
    } else if (compteur === 1) {
        img.src = table[2]
        explications.innerText = `Vous avez 20 minutes !`
        titreDiapo.innerText = ``
    } else if (compteur === 2) {
        img.src = table[0]
        explications.innerText = ``
        titreDiapo.innerText = `Bienvenue sur Lok'Vélib...`
        compteur = compteur - 3
    }
    
    compteur++
}

let timer = setInterval("play()", 5000)

pause.addEventListener('click', () => {

    clearTimeout(timer)
    pause.style.display = 'none'
    btnPlay.style.display ='block'

})

btnPlay.addEventListener('click', () => {

    clearTimeout(timer)
    timer = setInterval("play()", 5000)
    btnPlay.style.display ='none'
    pause.style.display = 'block'

})

document.addEventListener("keydown", function(e){
    if(e.keyCode === 37){
        if(compteur === 2) {
            img.src = table[1]
            titreDiapo.innerText = ``
            explications.innerText = `Entrer nom et prénom, choisir une station, réserver !`
            compteur --
        } else if (compteur === 1) {
            img.src = table[0]
            titreDiapo.innerText = `Bienvenue sur Lok'Vélib`
            explications.innerHTML = ``
            compteur --
        } else if (compteur === 0) {
            img.src = table[2]
            titreDiapo.innerText = ``
            explications.innerText = `Vous avez 20 minutes !`
            compteur = 2
        }
    }
    else if(e.keyCode === 39){
        if(compteur === 0) {
            img.src = table[1]
            titreDiapo.innerText = ``
            explications.innerText = `Entrer nom et prénom, choisir une station, réserver !`
            compteur ++
        } else if (compteur === 1) {
            img.src = table[2]
            titreDiapo.innerText = ``
            explications.innerText = `Vous avez 20 minutes !`
            compteur ++
        } else if (compteur === 2) {
            img.src = table[0]
            titreDiapo.innerText = `Bienvenue sur Lok'Vélib`
            explications.innerText = ``
            compteur = 0
        } 
    }
    });

suivant.addEventListener('click', () => {

    if(compteur === 0) {
        img.src = table[1]
        titreDiapo.innerText = ``
        explications.innerText = `Entrer nom et prénom, choisir une station, réserver !`
        compteur ++
    } else if (compteur === 1) {
        img.src = table[2]
        titreDiapo.innerText = ``
        explications.innerText = `Vous avez 20 minutes !`
        compteur ++
    } else if (compteur === 2) {
        img.src = table[0]
        titreDiapo.innerText = `Bienvenue sur Lok'Vélib`
        explications.innerText = ``
        compteur = 0
    } 
})

precedent.addEventListener('click', () => {

    if(compteur === 2) {
        img.src = table[1]
        titreDiapo.innerText = ``
        explications.innerText = `Entrer nom et prénom, choisir une station, réserver !`
        compteur --
    } else if (compteur === 1) {
        img.src = table[0]
        titreDiapo.innerText = `Bienvenue sur Lok'Vélib`
        explications.innerText = ``
        compteur --
    } else if (compteur === 0) {
        img.src = table[2]
        titreDiapo.innerText = ``
        explications.innerText = `Vous avez 20 minutes !`
        compteur = 2
    }

})


