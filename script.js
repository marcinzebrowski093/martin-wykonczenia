const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header.container');

const images = document.getElementById('images');
const leftButton = document.getElementById('left');
const rightButton = document.getElementById('right');

const imagesList = document.querySelectorAll('#images img');
let index = 0;

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', ()=>{
var scroll_position = window.scrollY;
if(scroll_position > 250){
    header.style.backgroundColor = "#2d3142";
}else{
    header.style.backgroundColor = "transparent";
}
});

const changeImage = () => {
    if (index > imagesList.length - 1) index = 0;
    else if (index < 0) index = imagesList.length - 1;
    images.style.transform = 'translateX(${-index * 500}px)';
};

const run = () => {
    index++;
    changeImage();
};

const resetInterval = () => {
    clearInterval(interval);
    interval = setInterval(run,2000);
};

let interval = setInterval(run,2000);

rightButton.addEventListener("click", () => {
    index++;
    changeImage();
    resetInterval();
});

leftButton.addEventListener("click", () => {
    index--;
    changeImage();
    resetInterval();
});

