const sliderImages = document.querySelectorAll('.slide-in')

function checkSlide(e){

    sliderImages.forEach(sliderImage => {
        const slideInAt = (window.scrollY + window.window.innerHeight) - sliderImage.height / 2;

        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        const isHalfShown = slideInAt > sliderImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;

        if(isHalfShown && isNotScrolledPast){
            sliderImage.classList.add('active')
        }
        else{
            sliderImage.classList.remove('active')
        }
    });
}
window.addEventListener('scroll', checkSlide);