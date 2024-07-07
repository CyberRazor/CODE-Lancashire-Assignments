const img1 = document.getElementById('IMG1')
const txt1 = document.getElementById('TXT1')

img1.addEventListener("mouseover", function() {
    txt1.innerHTML = "Charles LeClerc<br><br>Six time Grand Prix winner from Monaco"
})

img1.addEventListener("mouseout", function() {
    txt1.innerHTML = "Favourite driver"
})




const img2 = document.getElementById('IMG2')
const txt2 = document.getElementById('TXT2')

img2.addEventListener("mouseover", function() {
    txt2.innerHTML = "Scuderia Ferrari<br><br>Founded in Italy, 1929"
})

img2.addEventListener("mouseout", function() {
    txt2.innerHTML = "Favourite Team"
})




const img3 = document.getElementById('IMG3')
const txt3 = document.getElementById('TXT3')

img3.addEventListener("mouseover", function() {
    txt3.innerHTML = "Spa-Francorchamps <br><br>Belgian Grand Prix"
})

img3.addEventListener("mouseout", function() {
    txt3.innerHTML = "Favourite Track"
})

