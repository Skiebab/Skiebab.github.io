// Appel API
let APIKEY = '445e15571c378e73585d9efdacbdd77409d78939'
let carte = document.getElementById('carte')
let etat_reservation = document.getElementById('etat_reservation')
let adresse = document.getElementById('adresse')
let nbVeloDispo = document.getElementById('nbVeloDispo')
let btnReserver = document.getElementById('btnReserver')
let nom_reservation = document.getElementById('nom_reservation')
let prenom_reservation = document.getElementById('prenom_reservation')
let temps_restant = document.getElementById('temps_restant')
let reserved = false
let termine = false

//Creation timer pour le temps de réservation restant

let timerSet = false
let minutes = 20

let timeOfUse = function() {  

    if(minutes > 0) {
        minutes --
        temps_restant.innerText = `Temps restant : ${minutes} minute(s)`
    }

    else if (minutes == 0) {
        temps_restant.innerText = `Temps écoulé !`
        sessionStorage.clear() 
        clearTimeout(timerReservation)
        setTimeout("location.href = 'index.html'",3000)
        
    }

 }

//Récupération de la localisation de chaque station
fetch(`https://api.jcdecaux.com/vls/v1/stations?contract=Toulouse&apiKey=${APIKEY}`)
.then (res => {
    if (res.ok && res.status == 200) {
        console.log(`C'est good !`)
        return(res.json())
    } else {
        console.log(`C'est pas good !`)
    }
})
.then (data => {
    data.forEach(station => {
        // console.log(station)
        let marker = L.marker([station.position.lat, station.position.lng]).addTo(mymap)

        let onMarkerClick = function(e) {
            adresse.innerText = `Adresse : ${station.address}`
            nbVeloDispo.innerText = `Vélos disponibles : ${station.available_bikes}`
         }
         
         marker.on('click', onMarkerClick)
    })
})

btnReserver.addEventListener('click', () => {

    if(adresse.innerText.slice(10) != '' && nom_reservation.value != '' && prenom_reservation.value !='') {
        
        if(reserved == true) {
            // Enregistrer des données dans localStorage
            localStorage.setItem('Nom', nom_reservation.value)
            localStorage.setItem('Prénom', prenom_reservation.value)
            console.log(window.localStorage)

            // Enregistrer des données dans sessionStorage
            sessionStorage.setItem("timerReservation", "setInterval('timeOfUse()',60000)") 

            etat_reservation.innerText = `Vélo réservé à l'adresse suivante : ${adresse.innerText.slice(10)} par ${localStorage['Prénom']} ${localStorage['Nom']}`
            clearTimeout(timerReservation)
            timerReservation = setInterval('timeOfUse()',60000)
            temps_restant.innerText = `Temps restant : ${minutes} minute(s)`
            timerSet = true 
        }

        if (timerSet == false) {
            
            // Enregistrer des données dans localStorage
            localStorage.setItem('Nom', nom_reservation.value)
            localStorage.setItem('Prénom', prenom_reservation.value)
            
            console.log(window.localStorage)

            // Enregistrer des données dans sessionStorage
            sessionStorage.setItem('Temps_reservation', minutes)

            etat_reservation.innerText = `Vélo réservé à l'adresse suivante : ${adresse.innerText.slice(10)} par ${localStorage['Prénom']} ${localStorage['Nom']}`
            timerReservation = setInterval('timeOfUse()',60000)
            temps_restant.innerText = `Temps restant : ${minutes} minute(s)`
            timerSet = true 
            reserved = true    
            termine = true  
        }
    }
    
})

function dataLoading() {
    nom_reservation.value = localStorage.getItem('Nom')
    prenom_reservation.value = localStorage.getItem('Prénom')
    console.log('patate');
}

window.onload = dataLoading()