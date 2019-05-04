import _ from 'lodash';


document.addEventListener('DOMContentLoaded', () => {
  let body = document.getElementsByTagName('body')[0];
  body.innerHTML = "Hello webpack by js!";

  body.innerHTML = _.join(["Hello", " Webpack", " is", " joined", " by", " lodash"], '');
  body.classList.add("webpacked");
  document.onclick = e => import(/* webpackChunkName: "click" */ './click').then(({ default: print }) => {
    console.log("inside click");
    print();
  });
});