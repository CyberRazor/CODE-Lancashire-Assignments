const imgS = document.getElementById('SonicIMG')
const txt = document.getElementById('SubjectInfo')

imgS.addEventListener("mouseover", function() {
    txt.innerHTML = "Sonic The Hedgehog<br><br>High Speed Action <br><br>Released on the Sega Mega Drive, 1991"
    imgS.src="images/S_Sonic_Screen.png"
})

imgS.addEventListener("mouseout", function() {
    txt.innerHTML = ""
    imgS.src="/images/Sonic1.jpg"
})




const imgN = document.getElementById('NightsIMG')


imgN.addEventListener("mouseover", function() {
    txt.innerHTML = "Nights Into Dreams <br><br> Action Adventure <br><br>Released on the Sega Saturn, 1996"
    imgN.src="images/S_Nights_Screen.png"
})

imgN.addEventListener("mouseout", function() {
    txt.innerHTML = ""
    imgN.src="images/NightsIntoDreamsBox.jpg"
})




const imgO = document.getElementById('OutrunIMG')


imgO.addEventListener("mouseover", function() {
    txt.innerHTML = "Outrun <br><br> Driving simulator <br><br>Released in arcades, 1986"
    imgO.src="images/S_Outrun_Screen.png"
})

imgO.addEventListener("mouseout", function() {
    txt.innerHTML = ""
    imgO.src="images/Outrun_Art.jpg"
})



