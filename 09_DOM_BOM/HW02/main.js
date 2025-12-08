document.addEventListener("DOMContentLoaded", () => {
    const galleryImage = document.getElementById('galleryImage');
    const prevBtn = document.getElementById('prevBtn');
    prevBtn.addEventListener("click", pressPrevBtn);
    const nextBtn = document.getElementById('nextBtn');
    nextBtn.addEventListener("click", pressNextBtn);

});

const images = [
        'images/image1.jpg',
        'images/image2.jpg',
        'images/image3.jpg',
    ];

pressPrevBtn.disabled = true;
let currentIndex = 0;   
function pressPrevBtn() {
    if (currentIndex > 0) {
        currentIndex--;
        galleryImage.src = images[currentIndex];
        nextBtn.disabled = false;
    }
    if (currentIndex === 0) {
        prevBtn.disabled = true;
    }
}

function pressNextBtn() {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        galleryImage.src = images[currentIndex];
        prevBtn.disabled = false;
    }
    if (currentIndex === images.length - 1) {
        nextBtn.disabled = true;
    }
}   
   