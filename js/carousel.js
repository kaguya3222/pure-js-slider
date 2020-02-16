document.addEventListener("DOMContentLoaded", (event) => {
    const slides = document.getElementsByClassName("carousel-image");
    const dots = document.getElementsByClassName("dot");
    const arrows = document.getElementsByClassName("arrow");
    const images = document.getElementsByClassName("inner-image");

    const modal = document.getElementsByClassName("modal")[0];
    const modalImg = document.getElementsByClassName("modal-img")[0];
    const closeIcon = document.getElementsByClassName("close")[0];

    let slideIndex = 1;
    let timer = setInterval( () => {
        autoSlide(slideIndex);
    }, 3000 );

    showSlides(slideIndex);
    clickForArrows();
    clickForDots();
    setModalForImages();

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {

        if (n > slides.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = slides.length;
        }

        for (let i = 0; i < slides.length; i++ ) {
            slides[i].style.display = "none";
            dots[i].classList.remove("active");
        }

        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].classList.add("active");
    }

    function autoSlide(n) {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            dots[i].classList.remove("active");
        }

        slideIndex++;

        if (slideIndex > slides.length ) {
            slideIndex = 1;
        }

        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].classList.add("active");
    }

    function clickForDots() {
        for (let i = 0; i < dots.length; i++) {
            dots[i].addEventListener("click", () => {
                refreshTimerOnAutoSlide();
                currentSlide(i + 1);
            });
        }
    }

    function clickForArrows() {
        for (let i = 0; i < arrows.length; i++) {
            if ( arrows[i].classList.contains("arrow-left") ) {
                arrows[i].addEventListener("click", () => {
                    refreshTimerOnAutoSlide();
                    plusSlides(-1);
                })
            } else {
                arrows[i].addEventListener("click", () => {
                    refreshTimerOnAutoSlide();
                    plusSlides(1);
                });
            }
        }
    }
    
    function setModalForImages() {
        for ( let i = 0; i < slides.length; i++ ) {
            slides[i].addEventListener("click", () => {
                clearInterval(timer);
                modal.style.display = "block";
                modalImg.src = images[i].src;
            })
        }
        
        closeIcon.addEventListener("click", () => {
            refreshTimerOnAutoSlide();
            modal.style.display = "none";
        });
    }

    function refreshTimerOnAutoSlide() {
        clearInterval(timer);
        timer = setInterval( () => {
            autoSlide(slideIndex);
        }, 3000 );
    }
});