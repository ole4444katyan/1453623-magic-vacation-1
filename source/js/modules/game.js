
export default () => {
  const TIME = 5;

  let screen = document.querySelector(`.screen--game`);
  let config = {attributes: true, attributeOldValue: true};

  let counter = document.querySelector(`.game__counter`);
  let minutesContainer = counter.children[0];
  let secondsContainer = counter.children[1];

  let observer = new MutationObserver((mutations) => {
    mutations.forEach(() => {
      if (screen.classList.contains(`active`)) {
        let then = Date.now();

        let now;
        let elapsed;


        let seconds;
        let minutes = TIME;
        let divisor = 0;

        let request;
        let required = 60000 * TIME;

        let timeCounter = () => {
          request = requestAnimationFrame(timeCounter);

          now = Date.now();
          elapsed = now - then;

          if (seconds === 0 || seconds < 0) {
            divisor++;
          }

          minutes = Math.floor((required - elapsed) / 60000);
          seconds = 60 - (Math.floor(elapsed / 1000)) + (60 * divisor);

          if (minutes < 0) {
            minutes = 0;
          }
          minutesContainer.textContent = minutes.toString();

          if (seconds < 10) {
            secondsContainer.textContent = `0${seconds.toString()}`;
          } else {
            secondsContainer.textContent = seconds.toString();
          }

          if (elapsed > required) {
            cancelAnimationFrame(request);
          }
        };
        request = requestAnimationFrame(timeCounter);
      }
    });
  });
  observer.observe(screen, config);










};
