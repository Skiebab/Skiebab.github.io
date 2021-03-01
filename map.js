let mymap = L.map('mapid').setView([43.6043, 1.4437], 13);
let TOKEN = 'pk.eyJ1Ijoic2tpZWJhYiIsImEiOiJja2xseXZtM2gwNDYwMnZtdWliOWVnbXF4In0.w1usP69bwdCfw-7lBaDNwg'

L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${TOKEN}`, {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 25,
    id: 'mapbox/light-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: `${TOKEN}`
})
.addTo(mymap);