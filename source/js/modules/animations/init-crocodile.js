import DrawScene2DCrocodile from "./main-lose-crocodile.js";
export default () => {

  let config = {
    attributes: true,
    attributeOldValue: true
  };

  const screen = document.querySelector(`#result3`);

  let observer = new MutationObserver((mutations) => {
    mutations.forEach(() => {
      if (screen.classList.contains(`screen--show`)) {
        const scene = new DrawScene2DCrocodile();
      }
    });
  });
  observer.observe(screen, config);
};
