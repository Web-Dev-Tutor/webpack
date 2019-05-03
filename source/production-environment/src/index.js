import './style.css';
import { cube } from './math.js';

console.log("Hello world!");


document.addEventListener('DOMContentLoaded', () => {
  let body = document.getElementsByTagName('body')[0];
  body.innerHTML = "Hello webpack by js!";

  body.innerHTML = _.join(["Hello", " Webpack", " is", " joined", " by", " lodash"], '');
  body.classList.add("webpacked");

  let value = cube(100);

  body.innerHTML += value;

  // Add the image to our existing div.
  // const myIcon = new Image();
  // myIcon.src = Webpack;

  // body.appendChild(myIcon);
});