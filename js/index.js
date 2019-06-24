const h = document.querySelector('h1');

console.log(h);

h.addEventListener('click', event => {
    h.classList.toggle('none');
})
