// toggle nav button "hamburger"
const hamburger = document.querySelector('.nav-button');
console.log(hamburger);

const aLinks = document.querySelectorAll('header a');
console.log(aLinks);

hamburger.addEventListener('click', event => {
    hamburger.style.border = '1px solid gray';
})

hamburger.addEventListener('click', event => {
    aLinks.forEach(link => {
        link.classList.toggle('displayA');
    })
})