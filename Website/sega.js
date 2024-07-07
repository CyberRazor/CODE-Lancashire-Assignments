const imgS = document.getElementById('SonicIMG')
const txtS = document.getElementById('SonicTXT')

imgS.addEventListener("mouseover", function() {
    txtS.innerHTML = "High Speed Action <br><br>Released on the Sega Mega Drive, 1991"
})

imgS.addEventListener("mouseout", function() {
    txtS.innerHTML = "Sonic The Hedgehog"
})




const imgN = document.getElementById('NightsIMG')
const txtN = document.getElementById('NightsTXT')

imgN.addEventListener("mouseover", function() {
    txtN.innerHTML = "Action Adventure <br><br>Released on the Sega Saturn, 1996"
})

imgN.addEventListener("mouseout", function() {
    txtN.innerHTML = "Nights Into Dreams"
})




const imgO = document.getElementById('OutrunIMG')
const txtO = document.getElementById('OutrunTXT')

imgO.addEventListener("mouseover", function() {
    txtO.innerHTML = "Driving simulator <br><br>Released in arcades, 1986"
})

imgO.addEventListener("mouseout", function() {
    txtO.innerHTML = "Outrun"
})

