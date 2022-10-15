import reload from './assets/reload.png';
import './style.css';

const title = document.createElement('h3');
title.textContent = 'This is a webpack configuration practice';

const page = document.querySelector('body');
page.append(title);
const img = new Image();
img.src = reload;
page.appendChild(img);