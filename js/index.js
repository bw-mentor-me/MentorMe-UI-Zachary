const headerButton = document.querySelector('.hamburger');

const headerA = document.querySelectorAll('header a');
console.log(headerA);

headerButton.addEventListener('click', event => {
    headerA.forEach(a => {
       a.classList.toggle('toggleA');
    })
})

const nav = document.querySelector('header');

headerButton.addEventListener('click', event => {
    nav.classList.toggle('backgroundBlue');
})

const contactButton = document.querySelector('header button');

headerButton.addEventListener('click', event => {
    contactButton.classList.toggle('backgroundBlue');
})
