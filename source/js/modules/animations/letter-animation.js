const arr = [];
arr.push(
    (document.querySelector(`.intro__title`)),
    (document.querySelector(`.intro__date`)),
    (document.querySelector(`.slider__item-title`)),
    (document.querySelector(`.prizes__title`))
);

const letterByLetter = (node) => {
  const string = node.textContent.split(` `);
  node.textContent = ``;

  for (let i = 0; i < string.length; i++) {
    const wordSpan = document.createElement(`span`);
    wordSpan.classList.add(`word` + `_` + (i + 1));
    wordSpan.classList.add(`word-span`);
    wordSpan.classList.add(`general-span`);
    node.appendChild(wordSpan);
    node.appendChild(document.createElement(`span`)).textContent = ` `;

    const letters = string[i].split(``);

    for (let j = 0; j < letters.length; j++) {
      const letterSpan = document.createElement(`span`);
      letterSpan.textContent = letters[j];
      letterSpan.classList.add(`letter` + `_` + (j + 1));
      letterSpan.classList.add(`animation__letter-by-letter`);
      letterSpan.classList.add(`general-span`);
      wordSpan.appendChild(letterSpan);
    }
  }
};

const animationPreparer = () => {
  for (let i = 0; i < arr.length; i++) {
    letterByLetter(arr[i]);
  }
};

export {
  animationPreparer
};
