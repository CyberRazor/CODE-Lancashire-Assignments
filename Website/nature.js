const img1 = document.getElementById('IMG1')

const txt = document.getElementById('SubjectInfo')


//image 1 //
img1.addEventListener("mouseover", function() {
    txt.innerHTML = "Scout Scar<br><br>An easy circular walk offering wonderful views of the Lakeland Fells in Kendal, Cumbria"
    img1.src = "images/N_ScoutScar_M.jpg"
})

img1.addEventListener("mouseout", function() {
    txt.innerHTML = ""
    img1.src="images/ScoutScar.jpg"
})




//image 2 //
const img2 = document.getElementById('IMG2')


img2.addEventListener("mouseover", function() {
    txt.innerHTML = "Hyning Scout Wood<br><br>Hyning Scout lies outside Warton,and is designated as a Biological Heritage Site."
    img2.src = "images/N_HSW_M.jpg"
})

img2.addEventListener("mouseout", function() {
    txt.innerHTML = ""
    img2.src="images/Warton.jpg"
})



//image 3 //
const img3 = document.getElementById('IMG3')


img3.addEventListener("mouseover", function() {
    txt.innerHTML = "Clougha Pike<br><br> Clougha Pike is a hill in the Forest of Bowland in Lancaster, Lancashire. "
    img3.src = "images/N_CP_M.jpg"
})

img3.addEventListener("mouseout", function() {
    txt.innerHTML = ""
    img3.src="images/Clougha.jpg"
})


