export default () => {

  const FPS = 12;
  const fpsInterval = 1000 / FPS;

  const screen = document.querySelector(`.screen--prizes`);
  const CONTAINER_CASES = screen.querySelector(`.prizes__item--cases`).querySelector(`.prizes__desc`).querySelector(`b`);
  const CONTAINER_CODES = screen.querySelector(`.prizes__item--codes`).querySelector(`.prizes__desc`).querySelector(`b`);

  const CASES = {
    START_VALUE: 1,
    END_VALUE: 7,
    DURATION: 500,
    START_TIME: 5300
  };

  const CODES = {
    START_VALUE: 11,
    END_VALUE: 900,
    DURATION: 500,
    START_TIME: 7200
  };

  let config = {
    attributes: true,
    attributeOldValue: true
  };

  function animateValue({
    START_VALUE,
    END_VALUE,
    DURATION,
    START_TIME = 0
  }, container) {
    setTimeout(() => {
      let startTimestamp = null;
      let lastTimestamp = 0;

      const step = (timestamp) => {

        if (!startTimestamp) startTimestamp = timestamp;

        const progress = Math.min((timestamp - startTimestamp) / DURATION, 1);

        if (timestamp - lastTimestamp > fpsInterval || progress >= 1) {
          lastTimestamp = timestamp;
          container.textContent = Math.floor(progress * (END_VALUE - START_VALUE) + START_VALUE).toString();
        }

        if (progress < 1) {
          window.requestAnimationFrame(step);
        }

      };
      window.requestAnimationFrame(step);
    }, START_TIME);
  }


  let observer = new MutationObserver((mutations) => {
    mutations.forEach(() => {
      if (screen.classList.contains(`active`)) {
        animateValue(CASES, CONTAINER_CASES);
        animateValue(CODES, CONTAINER_CODES);
      }
    });
  });
  observer.observe(screen, config);
};
