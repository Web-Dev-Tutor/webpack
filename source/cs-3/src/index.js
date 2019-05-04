// import _ from 'lodash';


document.addEventListener('DOMContentLoaded', () => {
  let body = document.getElementsByTagName('body')[0];
  body.innerHTML = "Hello webpack by js!";
  import(/* webpackPrefetch: true */ './prefetch').then(() => {
    import(/* webpackPreload: true */ './preload').then(() => {
      import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => {
        body.innerHTML = _.join(["Hello", " Webpack", " is", " joined", " by", " lodash"], '');
        body.classList.add("webpacked");
      });
    });
  });
});