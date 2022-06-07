export default () => {
  let pagination = document.querySelector(`.slider__pagination`).children;

  const CONTROL_NEXT = document.querySelector(`.slider__control--next`);
  const CONTROL_PREV = document.querySelector(`.slider__control--prev`);

  const colors = {
    purple: `link--purple`,
    blue: `link--blue`,
    lightBlue: `link--light-blue`
  };

  const classAttach = (paginationClass) => {
    document.body.classList.add(paginationClass);
  };

  const classRemove = (paginationClass) => {
    document.body.classList.remove(paginationClass);
  };

  const comparer = (count) => {
    if (count === `2`) {
      classRemove(colors.purple);
      classRemove(colors.blue);

      classAttach(colors.lightBlue);

    } else if (count === `3`) {
      classRemove(colors.lightBlue);
      classRemove(colors.purple);

      classAttach(colors.blue);

    } else if (count === `1` || count === `4`) {
      classRemove(colors.lightBlue);
      classRemove(colors.blue);

      classAttach(colors.purple);
    }
  };

  const controlEventMaker = (button) => {
    button.addEventListener(`click`, () => {
      let paginationCount = pagination[0].textContent;
      comparer(paginationCount);
    });
  };

  const sliderListener = () => {
    controlEventMaker(CONTROL_NEXT);
    controlEventMaker(CONTROL_PREV);
  };

  sliderListener();
};
