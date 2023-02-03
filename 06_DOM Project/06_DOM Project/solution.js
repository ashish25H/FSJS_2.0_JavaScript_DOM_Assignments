// task-1
const oldElement = document.querySelector('.logo');
const img = document.createElement('img');
img.src = './assets/ineuron-logo.png';
img.alt = 'logo';
img.classList.add('logo');

oldElement.replaceWith(img);

//task-2
document.querySelector('.app_price span').innerText = '$10';

//task-3
const parentDiv = document.querySelector('.footer_social');

const div = document.createElement('div');
div.classList.add('.footer_social_ico');

const img = document.createElement('img');
img.src = './assets/icons8-linkedin-30.png';
img.alt = 'linkedin icon';
img.classList.add('fa-brands');

div.appendChild(img);
parentDiv.appendChild(div);