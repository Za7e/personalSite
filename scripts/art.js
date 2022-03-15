const imgContainer = document.querySelector('.imgContainer');
const previewModal = document.getElementById("previewModal");
const slideModal = document.getElementById("slideModal");
const color = document.querySelector('.container');


function backgroundColor(a) {
    color.style.backgroundColor = a;
}

let slideIndex = 1;
let previewIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function currentPreview(n) {
    showPreview(previewIndex = n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

function showPreview(n) {
    const previews = document.getElementsByClassName("myPreviews");
    for (let i = 0; i < previews.length; i++) {
        previews[i].style.display = "none";
    }
    previews[previewIndex - 1].style.display = "block";
}

function openSlideModal() {
    slideModal.classList.add('active');
    closePreviewModal();
    slideModal.style.display = "block";
    imgContainer.classList.add('greyOut');
}

function closeSlideModal() {
    slideModal.style.display = "none";
    imgContainer.classList.remove('greyOut');
    slideModal.classList.remove('active');
}

function openPreviewModal() {
    if (!slideModal.classList.contains('active')) {
        previewModal.style.display = "block";
    }
}

function closePreviewModal() {
    previewModal.style.display = "none";
}

closeSlideModal();