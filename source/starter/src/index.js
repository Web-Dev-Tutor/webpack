import _ from "lodash";
import './style.css';
import Webpack from './webpack.svg';

console.log("Hello world!");


document.addEventListener('DOMContentLoaded', () => {
  let body = document.getElementsByTagName('body')[0];
  body.innerHTML = "Hello webpack by js!";

  body.innerHTML = _.join(["Hello", " Webpack", " is", " joined", " by", " lodash"], '');
  body.classList.add("webpacked");

  // Add the image to our existing div.
  // const myIcon = new Image();
  // myIcon.src = Webpack;

  // body.appendChild(myIcon);
});