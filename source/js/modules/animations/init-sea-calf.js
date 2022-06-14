import DrawScene2DSeaCalf from "./main-win-sea-calf.js";
export default () => {

  let config = {
    attributes: true,
    attributeOldValue: true
  };

  const screen = document.querySelector(`#result`);

  let observer = new MutationObserver((mutations) => {
    mutations.forEach(() => {
      if (screen.classList.contains(`screen--show`)) {
        const scene = new DrawScene2DSeaCalf();
      }
    });
  });
  observer.observe(screen, config);
};
