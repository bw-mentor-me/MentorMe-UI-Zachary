//BUTTON LINK TO WEB APP
const actionButton = document.querySelector('.action-button');
console.log(actionButton);

actionButton.addEventListener('click', event => {
    window.location="https://happy-turing-9cd6b1.netlify.com";
})

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
