// TOGGLE NAV BUTTON 'HAMBURGER'
const hamburger = document.querySelector('.nav-button');
console.log(hamburger);

const aLinks = document.querySelectorAll('.nav a');
console.log(aLinks);

const nav = document.querySelector('.nav');
console.log(nav);

hamburger.addEventListener('click', event => {
    aLinks.forEach(link => {
        link.classList.toggle('displayA');
    })
})

hamburger.addEventListener('click', event => {
    nav.classList.toggle('border');
})

//TOGGLE A-LINK BACKGROUND COLOR
aLinks.forEach(link => {
    link.addEventListener('mouseover', event => {
        link.style.backgroundColor = 'lightgray';
    })
})

aLinks.forEach(link => {
    link.addEventListener('mouseout', event => {
        link.style.backgroundColor = 'white';
    })
})