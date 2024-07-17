const img1 = document.getElementById('IMG1')
const txt = document.getElementById('SubjectInfo')

img1.addEventListener("mouseover", function() {
    txt.innerHTML = "Charles LeClerc<br><br>Six time Grand Prix winner from Monaco.<br><br>Champion FIA Formula 2 (Prema Racing)"
    img1.src="/images/F_LeClerc_S.png"
})

img1.addEventListener("mouseout", function() {
    txt.innerHTML = "Favourite driver"
    img1.src="/images/LeClerc.png"
})




const img2 = document.getElementById('IMG2')

img2.addEventListener("mouseover", function() {
    txt.innerHTML = "Scuderia Ferrari<br><br>Founded in Italy, 1929.<br><br> The team has won 16 Constructors championship titles since 1961. "
    img2.src="/images/F_Ferrari_S.png"
})

img2.addEventListener("mouseout", function() {
    txt.innerHTML = "Favourite Team"
    img2.src="/images/FerarriBadge.png"
})




const img3 = document.getElementById('IMG3')

img3.addEventListener("mouseover", function() {
    txt.innerHTML = "Spa-Francorchamps <br><br>Belgian Grand Prix. <br><br>The original, triangle-shaped track was built in 1921, and is 7 kilometers long."
    img3.src="/images/F_Spa_S.png"
})

img3.addEventListener("mouseout", function() {
    txt.innerHTML = "Favourite Track"
    img3.src="/images/F1spa.jpg"
})

