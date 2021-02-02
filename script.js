var slideIndex = 1;
slidesShow(slideIndex);
function nextSlide(n) {
    slidesShow(slideIndex += n);
}
function currentSlide(n) {
    slidesShow(slideIndex = n);
}
function slidesShow(n) {
    var i;
    var sliderImg = document.getElementsByClassName("slideimg");
    var dots = document.getElementsByClassName("dot");
    if (n > sliderImg.length) {slideIndex = 1}
    if (n < 1) {slideIndex = sliderImg.length}
    for (i = 0; i < sliderImg.length; i++) {
        sliderImg[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    sliderImg[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}