document.addEventListener('DOMContentLoaded', () => {
  let body = document.getElementsByTagName('body')[0];
  body.innerHTML = "Hello webpack by js!";
  import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => {
  // import('lodash').then(({ default: _ }) => {
    body.innerHTML = _.join(["Hello", " Webpack", " is", " joined", " by", " lodash"], '');
    body.classList.add("webpacked");
  }).catch(error => 'An error occurred while loading the component');
});