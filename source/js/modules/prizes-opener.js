export default () => {
  const LINK_PRIZES = document.querySelector(`a[href="#prizes"]`);
  const SOFT_TIMEOUT = 100;
  const DURATION_TIMEOUT = 1000;
  const REMOVE_TIMEOUT = 1000;

  let blockCreator = function (classCSS, height) {
    let block = document.createElement(`div`);
    block.className = classCSS;
    document.body.appendChild(block);
    setTimeout(() => {
      block.style.height = height;
    }, SOFT_TIMEOUT);
    setTimeout(() => block.remove(), REMOVE_TIMEOUT);
  };


  LINK_PRIZES.addEventListener(`click`, function (event) {
    event.preventDefault();
    blockCreator(`screen--closer`, `100%`);

    setTimeout(function () {
      window.location = LINK_PRIZES;
      blockCreator(`screen--opener`, `0`);
    }, DURATION_TIMEOUT);

  });
};
