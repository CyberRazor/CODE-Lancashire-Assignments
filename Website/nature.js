const img1 = document.getElementById('IMG1')
const txt1 = document.getElementById('TXT1')

img1.addEventListener("mouseover", function() {
    txt1.innerHTML = "An easy circular walk offering wonderful views of the Lakeland Fells in Kendal"
})

img1.addEventListener("mouseout", function() {
    txt1.innerHTML = "Scout Scar"
})


const img2 = document.getElementById('IMG2')
const txt2 = document.getElementById('TXT2')

img2.addEventListener("mouseover", function() {
    txt2.innerHTML = "Hyning Scout lies outside Warton and is designated as a Biological Heritage Site."
})

img2.addEventListener("mouseout", function() {
    txt2.innerHTML = "Hyning Scout Wood"
})


const img3 = document.getElementById('IMG3')
const txt3 = document.getElementById('TXT3')

img3.addEventListener("mouseover", function() {
    txt3.innerHTML = "Clougha Pike is a hill in the Forest of Bowland in Lancaster, Lancashire. "
})

img3.addEventListener("mouseout", function() {
    txt3.innerHTML = "Clougha Pike"
})
