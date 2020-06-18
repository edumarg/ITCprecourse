let currentlySelected = 0;
const galleryImgs = document.querySelectorAll(".gallery-img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");



function previous() {
    /*  nextBtn.disabled = false;*/
    nextBtn.style.visibility = "visible"
    galleryImgs[currentlySelected].classList.remove("active");
    currentlySelected--;
    galleryImgs[currentlySelected].classList.add("active");
    if (currentlySelected === 0) {
        /* prevBtn.disabled = true;*/
        prevBtn.style.visibility = "hidden"

    }
}

function next() {
    /*prevBtn.disabled = false;*/
    prevBtn.style.visibility = "visible"
    galleryImgs[currentlySelected].classList.remove("active");
    currentlySelected++;
    galleryImgs[currentlySelected].classList.add("active");
    if (currentlySelected + 1 === galleryImgs.length) {
        /* nextBtn.disabled = true;*/
        nextBtn.style.visibility = "hidden"
    }
}

function init() {
    prevBtn.style.visibility = "hidden"
    prevBtn.addEventListener("click", function() {
        previous();
    });
    nextBtn.addEventListener("click", function(e) {
        next();
    });
}

init();