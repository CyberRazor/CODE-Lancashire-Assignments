var imgS = document.getElementById('SonicIMG')
var txtS = document.getElementById('SonicTXT')

imgS.addEventListener("mouseout", function() {
    txtS.textContent = "Sonic The Hedgehog"
})

imgS.addEventListener("mouseover", function() {
    txtS.textContent = "Action Platformer. Released on the Sega Mega Drive, 1991"
})


var imgN = document.getElementById('NightsIMG')
var txtN = document.getElementById('NightsTXT')

imgN.addEventListener("mouseout", function() {
    txtN.textContent = "Nights Into Dreams"
})

imgN.addEventListener("mouseover", function() {
    txtN.textContent = "Action Adventure. Released on the Sega Saturn, 1996"
})


var imgO = document.getElementById('OutrunIMG')
var txtO = document.getElementById('OutrunTXT')

imgO.addEventListener("mouseout", function() {
    txtO.textContent = "Outrun"
})

imgO.addEventListener("mouseover", function() {
    txtO.textContent = "Driving simulator. Released in arcades, 1986"
})