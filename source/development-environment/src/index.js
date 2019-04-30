import _ from "lodash";
import './style.css';
import Webpack from './webpack.svg';

import printMe from "./print";

import CSV from './aaa.csv'
import XML from './bbb.xml'
import JSONData from './ccc.json'


console.log("Hello world!");


document.addEventListener('DOMContentLoaded', () => {
  let body = document.getElementsByTagName('body')[0];
  body.innerHTML = "Hello webpack by js!";

  body.innerHTML = _.join(["Hello", " Webpack", " is", " joined", " by", " lodash"], '');
  body.classList.add("webpacked");

  printMe();

  // Add the image to our existing div.
  // const myIcon = new Image();
  // myIcon.src = Webpack;

  // body.appendChild(myIcon);
});