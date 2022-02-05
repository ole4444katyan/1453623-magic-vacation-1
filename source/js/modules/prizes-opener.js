export default () => {
  const LINK_PRIZES = document.querySelector(`a[href="#prizes"]`);
  const SOFT_TIMEOUT = 100;
  const TRANSITION_TIMEOUT = 500;
  const DURATION_TIMEOUT = (SOFT_TIMEOUT + TRANSITION_TIMEOUT);

  let blockCreator = function (classCSS, height) {
    let block = document.createElement(`div`);
    block.className = classCSS;
    document.body.appendChild(block);
    setTimeout(() => {
      block.style.height = height;
    }, SOFT_TIMEOUT);
    setTimeout(() => block.remove(), DURATION_TIMEOUT);
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
