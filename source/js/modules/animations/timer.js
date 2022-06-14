export default () => {
  const TIME = 5;

  let screen = document.querySelector(`.screen--game`);
  let config = {
    attributes: true,
    attributeOldValue: true
  };

  let counter = document.querySelector(`.game__counter`);
  let minutesContainer = counter.children[0];
  let secondsContainer = counter.children[1];

  let observer = new MutationObserver((mutations) => {
    mutations.forEach(() => {
      if (screen.classList.contains(`active`)) {
        let then = Date.now();

        let request;
        let deadline = 60000 * TIME;


        let timeCounter = () => {
          setTimeout(() => {
            request = requestAnimationFrame(timeCounter);

            let now = Date.now();
            let passed = now - then;
            let remained = deadline - passed;

            if (passed >= deadline) {
              cancelAnimationFrame(request);
            }

            const minutes = remained > 0 ? Math.floor(remained / 1000 / 60) % 60 : 0;
            const seconds = remained > 0 ? Math.floor(remained / 1000) % 60 : 0;

            minutesContainer.textContent = minutes.toString();
            secondsContainer.textContent = seconds < 10 ? `0${seconds.toString()}` : seconds.toString();
          }, 250);

        };

        request = requestAnimationFrame(timeCounter);
      }
    });
  });
  observer.observe(screen, config);
};
