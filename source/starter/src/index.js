import _ from "lodash";

console.log("Hello world!");


document.addEventListener('DOMContentLoaded', () => {
  let body = document.getElementsByTagName('body')[0];
  body.innerHTML = "Hello webpack by js!";

  body.innerHTML = _.join(["Hello", " Webpack", " is", " joined", " by", " lodash"], '');
});