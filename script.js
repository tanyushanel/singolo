window.onload = function() {
    window.scrollTo(0, 0);

    subcribeSlide(nextSlide, prevSlide);

    document.querySelectorAll('.menu-item').forEach(ele => ele.addEventListener('click', scrollToChapter));
    document.querySelectorAll('.screen').forEach(ele => ele.addEventListener('click', turnOffScreen));
    document.querySelectorAll('.buttn').forEach(ele => ele.addEventListener('click', turnOffScreenFromLink));
    document.querySelectorAll('.gr').forEach(ele => ele.addEventListener('click', switchImg));
    document.forms.singolo_form.addEventListener('submit', submitForm);
    document.querySelector('.close').addEventListener('click', closeModal);

    document.querySelectorAll('.filter-buttons .button').forEach(el => el.addEventListener('click', switchFilter));

    //opening burger menu
    document.querySelector('.hamburger').addEventListener('click', (e) => {
        e.currentTarget.classList.toggle('active');
        document.getElementById('menu').classList.toggle('active');
        document.querySelector('.logo').classList.toggle('burger-active');
    });

    //close burger menu
    document.addEventListener('click', (e) => {
        let isBurgerActive = document.querySelector('.hamburger').classList.contains('active');
        if (isBurgerActive && e.target.tagName === 'A' || e.target.tagName === 'NAV') {
            document.querySelector('.hamburger').classList.toggle('active');
            document.getElementById('menu').classList.toggle('active');
            document.querySelector('.logo').classList.toggle('burger-active');
        }
    }, true);
}

function scrollToChapter() {
    document.querySelectorAll('.menu-item').forEach(el => el.classList.remove('active'));
    this.classList.toggle('active');
    window.scrollTo(0, 0);
}

let current = 1;

function goToSlide(n) {
    let slides = document.querySelectorAll('.slide-img');
    slides[current].classList.toggle('showing');
    current = (n + slides.length) % slides.length;
    slides[current].classList.remove('showing');
}

function nextSlide() {
    goToSlide(current + 1);
}

function prevSlide() {
    goToSlide(current - 1);
}

function subcribeSlide(nextSlide, prevSlide) {
    document.querySelector('.slider-arrow.next').addEventListener('click', nextSlide);
    document.querySelector('.slider-arrow.prev').addEventListener('click', prevSlide);
}

function switchFilter() {
    let clickHandler = function(elem) {
        elem.addEventListener('click', function() {
            navPortfolio.forEach(el => el.classList.remove('active'));
            elem.classList.toggle('active');
            let portfolioImages = document.querySelectorAll('.portfolio .grid img');
            let firstElemSrc = portfolioImages[0].src;

            for (let i = 0; i < portfolioImages.length; i++) {
                if (i == portfolioImages.length - 1) {
                    portfolioImages[i].src = firstElemSrc;
                } else {
                    portfolioImages[i].src = portfolioImages[i + 1].src;
                }
            }
        })
    }
    let navPortfolio = document.querySelectorAll('.filter-buttons .button');
    for (let i = 0; i < navPortfolio.length; i++) {
        clickHandler(navPortfolio[i]);
    }
}

function switchImg() {
    document.querySelectorAll('.gr').forEach(el =>
        el === this ? this.classList.toggle('active') : el.classList.remove('active'));
}

function turnOffScreen() {
    this.classList.toggle('black');
}

function turnOffScreenFromLink(e) {
    e.currentTarget.parentElement.querySelector('.screen').classList.toggle('black');
}

function submitForm(e) {
    e.preventDefault();

    let theme = document.getElementById('theme_subject').value;
    let description = document.getElementById('textarea_details').value;

    document.querySelector('.modal_text').innerHTML = `The letter was sent <br>
    ${theme ?
        theme.toLowerCase() === 'singolo' ? 'Theme: Singolo' : 'Theme: ' + theme.substr(0, 20) + '...' :
        'Without theme'}<br>
    ${ description ?
        description.toLowerCase() === 'portfolio project' ? 'Description: Portfolio project' : 'Description: ' + description.substr(0, 20) + '...' :
       'Without description'}`;
    document.querySelector('.modal').style.display = 'block';
    this.reset();
}

function closeModal() {
    document.querySelector('.modal').style.display = 'none';
    document.forms.singolo_form.reset();
}