const get = (id) => {
  return document.getElementById(id);
};

const selectRandom = (cuisines) => {
  const ix = Math.floor(Math.random() * cuisines.length);
  return cuisines[ix];
};

const areCompatible = (cuisineA, cuisineB) => {
  if (cuisineA === cuisineB) {
    return false;
  }
  const categories = [eastAsianCuisines, southeastAsianCuisines, scandinavianCuisines, hispanicCuisines]
  return !categories.some(category => category.includes(cuisineA) && category.includes(cuisineB));
};

const allCuisines = [
  'American', 
  'Brazilian', 
  'Chilean', 
  'Chinese', 
  'Colombian', 
  'Cuban', 
  'Dominican', 
  'Dutch', 
  'Filipino', 
  'French', 
  'German', 
  'Greek', 
  'Indian', 
  'Indonesian', 
  'Italian', 
  'Jamaican', 
  'Japanese', 
  'Korean', 
  'Lebanese', 
  'Malaysian', 
  'Mexican', 
  'Mongolian',
  'Moroccan', 
  'Nigerian', 
  'Persian', 
  'Peruvian', 
  'Polish', 
  'Spanish',
  'Swedish',
  'Taiwanese', 
  'Thai', 
  'Turkish', 
  'Vietnamese'
];

const eastAsianCuisines = [
  'Chinese',
  'Japanese',
  'Korean',
  'Mongolian',
  'Taiwanese'
];

const southeastAsianCuisines = [
  'Indonesian',
  'Malaysian',
  'Filipino',
  'Thai',
  'Vietnamese'
];

const scandinavianCuisines = [
  'Danish',
  'Swedish'
];

const hispanicCuisines = [
  'Chilean',
  'Colombian',
  'Cuban',
  'Dominican',
  'Mexican',
  'Peruvian',
  'Spanish'
];

const box = get('box');
const cuisine1 = get('cuisine1');
const cuisine2 = get('cuisine2');
const resetMessage = get('reset-message');
const button = get('button');

const createWheel = (cuisines) => {
  cuisines.forEach((cuisine, i) => {
    const b = document.createElement('b');
    const span = document.createElement('span');
    b.textContent = cuisine;
    span.appendChild(b);
    span.classList.add(`span${i}`);
    span.classList.add(`color${i % 3}`)
    span.classList.add((cuisines.length >= 30) ? 'all-elements' : 'fewer-elements');
    span.style.transform = `rotate(${i * 360 / cuisines.length}deg)`;
    box.appendChild(span);
  });
};

function spinWheel(cuisines) {
  const min = 1080;
  const max = 1800;
  const deg = Math.floor(Math.random() * (max - min)) + min;

  box.style.transition = 'all ease 5s';
  box.style.transform = `rotate(${deg}deg)`;

  const numCuisines = cuisines.length;
  const ix = numCuisines - Math.round((deg % 360) * (numCuisines / 360));
  const cuisine = (ix === cuisines.length) ? cuisines[0] : cuisines[ix];

  return cuisine;
}

function spin(n, cuisines) {
  resetMessage.textContent = ""
  const cuisine = spinWheel(cuisines);
  setTimeout(() => {
    if (n === 1) {
      cuisine1.textContent = `Cuisine 1: ${cuisine}`;
      button.textContent = `RESET`;
      button.onclick = () => reset(cuisine);
    } else {
      cuisine2.textContent = `Cuisine 2: ${cuisine}`;
      b
    }
  }, 5000);
}

function reset(cuisine) {
  while (box.childNodes.length > 0) {
    box.removeChild(box.childNodes[0]);
  }

  box.style.transition = 'all ease 0s';
  box.style.transform = 'rotate(0deg)';

  const compatibleCuisines = allCuisines.filter((c) => areCompatible(cuisine, c));
  const removedCuisines = allCuisines.filter((c) => !compatibleCuisines.includes(c));
  createWheel(compatibleCuisines);
  if (removedCuisines.length === 1) {
    resetMessage.textContent = `Removed ${removedCuisines}`;
  } else {
    resetMessage.textContent = `Removed ${removedCuisines.length} cuisines: ${removedCuisines}`
  }

  button.textContent = `SPIN`;
  button.onclick = () => spin(2, compatibleCuisines);
}

button.onclick = () => spin(1, allCuisines);
createWheel(allCuisines);
