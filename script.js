const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header.container');

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

var counter = 1;
setInterval(function(){
document.getElementById('radio' + counter).checked = true;
counter++;
if(counter > 8){
    counter = 1;
}

}, 5000);