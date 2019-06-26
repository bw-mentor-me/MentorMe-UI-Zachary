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

//MOVING GALLERY FOR MENTOR / MENTEE FUNCTION
let i = 0; //start
let images = [];
let time = 3000;
//images
images[0] = "./img/work.jpeg";
images[1] = "./img/business.jpeg" ;
images[2] = "./img/at-work.jpg" ;

//change image
function changeImg() {
	document.slide1.src = images[i];
	if (i < images.length - 1) {
		i++;
	}
	else {
		i = 0;
	}
	setTimeout("changeImg()", time);
}
window.onload = changeImg();

let j = 0; //start
let images2 = [];
let time2 = 3000;
//images
images2[0] = "./img/entrepreneur.jpg";
images2[1] = "./img/charts.jpg";
images2[2] = "./img/mentee.jpeg";

//change image
function changeImg2() {
	document.slide2.src = images2[j];
	if (j < images2.length - 1) {
		j++;
	}
	else {
		j = 0;
	}
	setTimeout("changeImg2()", time2);
}
window.onload = changeImg2();

//BUTTON LINK TO WEB APP
const actionButton = document.querySelector('.action-button');
console.log(actionButton);

const actionButton2 = document.querySelector('.action-button2')

actionButton.addEventListener('click', event => {
    window.location="https://happy-turing-9cd6b1.netlify.com";
})

actionButton2.addEventListener('click', event => {
    window.location="https://happy-turing-9cd6b1.netlify.com";
})
