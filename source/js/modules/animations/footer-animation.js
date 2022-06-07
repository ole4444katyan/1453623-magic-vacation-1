export default () => {
  const links = document.querySelector(`.page-header__menu`).getElementsByTagName(`a`);
  const DURATION_TRANSFORM_TIMEOUT = 200;
  const DURATION_TRANSPARENT_TIMEOUT = 1000;

  const footerCloser = (link) => {

    link.addEventListener(`click`, function (event) {
      let section = document.querySelector(`main`).querySelector(`.active`);
      let footer = section.querySelector(`.screen__footer`);

      if (footer !== null) {
        if (link.getAttribute(`href`) !== `#rules` && section.getAttribute(`href`) !== `#prizes`) {

          event.preventDefault();
          footer.classList.add(`footer-closer`);

          setTimeout(function () {
            window.location = link;
            footer.classList.remove(`footer-closer`);
          }, DURATION_TRANSFORM_TIMEOUT);
        } else {
          event.preventDefault();
          footer.classList.add(`from-transparent`);

          setTimeout(function () {
            window.location = link;
            footer.classList.remove(`from-transparent`);
          }, DURATION_TRANSPARENT_TIMEOUT);
        }
      }
    });
  };

  for (let i = 0; i < links.length; i++) {
    footerCloser(links[i]);
  }

};
