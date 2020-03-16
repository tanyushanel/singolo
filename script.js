window.onload = function() {
    subscribeClick();
    subcribeSlide(nextSlide, prevSlide);
    document.querySelectorAll('.menu-item').forEach(ele => ele.addEventListener('click', switchElem));
    document.querySelectorAll('.screen').forEach(ele => ele.addEventListener('click', turnOffScreen));
    document.querySelectorAll('.buttn').forEach(ele => ele.addEventListener('click', turnOffScreenFromLink));
    document.querySelectorAll('.gr').forEach(ele => ele.addEventListener('click', switchImg));
    document.forms.singolo_form.addEventListener('submit', submitForm);
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
    document.querySelectorAll('.button').forEach(el => el.classList.remove('active'));
    this.classList.toggle('active');
}

function subscribeClick() {
    let grid = document.querySelector('.portfolio .grid');
    document.querySelector('.all').addEventListener('click', () => grid.style.flexDirection = 'row');
    document.querySelector('.web-design').addEventListener('click', () => grid.style.flexDirection = 'row-reverse');
    document.querySelector('.graph-design').addEventListener('click', () => grid.style.flexDirection = 'column');
    document.querySelector('.art').addEventListener('click', () => grid.style.flexDirection = 'column-reverse');
    document.querySelectorAll('.button').forEach(el => el.addEventListener('click', switchFilter));

}

function switchElem() {
    document.querySelectorAll('.menu-item').forEach(el => el.classList.remove('active'));
    this.classList.toggle('active');
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
    alert('Message is sent');

    let theme = document.getElementById('theme_subject').value;
    theme ?
        theme.toLowerCase() === 'singolo' ? alert('Theme: Singolo') : alert(theme.substr(0, 20) + '...') :
        alert('Without theme');

    let description = document.getElementById('textarea_details').value;
    description ?
        description.toLowerCase() === 'portfolio project' ? alert('Description: Portfolio project') : alert(description.substr(0, 20) + '...') :
        alert('Without description');
    this.reset();

}