import { allCuisines, cuisineMap, wildCards } from './allCuisines.js';

const get = (id) => document.getElementById(id);

const createWheel = (options, nextOnClick) => {
  while (box.childNodes.length > 0) {
    box.removeChild(box.childNodes[0]);
  }

  box.style.transition = 'all ease 0s';
  box.style.transform = 'rotate(0deg)';

  console.log(options);

  const numOptions = options.length;
  options.forEach((cuisine, i) => {
    const text = document.createElement('p');
    text.textContent = cuisine;
    const span = document.createElement('span');
    span.appendChild(text);
    span.classList.add(`span${i}`);
    if (numOptions % 3 === 1) {
      span.classList.add(`color${i % 5}`);
    } else {
      span.classList.add(`color${i % 3}`);
    }
    span.classList.add(`elements-${numOptions}`);
    span.style.transform = `rotate(${i * 360 / numOptions}deg)`;
    box.appendChild(span);
  });

  button.textContent = 'SPIN';
  button.onclick = nextOnClick;
};

function resetGame() {
  result1.textContent = 'Cuisine 1: ';
  result2.textContent = 'Cuisine 2: ';
  wildcard.textContent = 'Wild Card: ';
  createWheel(allCategories, () => spinWheel(allCategories, 1));
}

function spinWheel(options, spinNum) {
  const numOptions = options.length;
  const min = numOptions * 3;
  const max = numOptions * 5;
  const rand = Math.floor(Math.random() * (max - min)) + min;
  const ix = (numOptions - (rand % numOptions)) % numOptions
  const deg = rand * (360 / numOptions);
  const selectedOption = options[ix];

  box.style.transition = 'all ease 5s';
  box.style.transform = `rotate(${deg}deg)`;

  const categoryCuisines = allCuisines[selectedOption];

  setTimeout(() => {
    button.textContent = 'RESET';
    switch(spinNum) {
      case 1:
        button.onclick = () => createWheel(categoryCuisines, () => spinWheel(categoryCuisines, 2));
        break;
      case 2:
        result1.textContent = `Cuisine 1: ${selectedOption}`;
        const remainingCategories = allCategories.filter(c => c !== cuisineMap[selectedOption]);
        button.onclick = () => createWheel(remainingCategories, () => spinWheel(remainingCategories, 3));
        break;
      case 3:
        button.onclick = () => createWheel(categoryCuisines, () => spinWheel(categoryCuisines, 4));
        break;
      case 4:
        result2.textContent = `Cuisine 2: ${selectedOption}`;
        button.onclick = () => createWheel(wildCards, () => spinWheel(wildCards, 5));
        break;
      case 5:
        wildcard.textContent = `Wild Card: ${selectedOption}`;
        button.onclick = resetGame;
        button.textContent = "AGAIN";
        break;
    }
  }, 5000);

  return selectedOption;
}

const button = get('button');
const box = get('box');
const result1 = get('result1');
const result2 = get('result2');
const wildcard = get('wildcard');
const allCategories = Object.keys(allCuisines);

resetGame();
