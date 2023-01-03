const allCuisines = {
  'North American': [
    'Southern Soul',
    'Cajun',
    'Fast Food',
    'Midwestern',
    'Tex Mex',
    'Tlingit (Native)',
    'Mid Atlantic',
    'Canadian',
  ],
  'Central American + Caribbean': [
    'Mexican',
    'Guatemalan',
    'Costa Rican',
    'Cuban',
    'Jamaican',
    'Haitian',
    'Nicaraguan',
    'Puerto Rican',
    'Dominican',
  ],
  'South American': [
    'Brazilian',
    'Guyanese',
    'Venezuelan',
    'Peruvian',
    'Colombian',
    'Chilean',
    'Argentinian',
    'Ecuadorean',
  ],
  'Western European + Mediterranean': [
    'Portuguese',
    'Spanish',
    'French',
    'British',
    'Irish',
    'Scottish',
    'Italian',
    'Greek',
    'Croatian',
    'Albanian',
    'Belgian',
    'Australian',
  ],
  'Central + Eastern European': [
    'German',
    'Dutch',
    'Swiss',
    'Czech',
    'Polish',
    'Romanian',
    'Russian',
    'Swedish',
    'Danish',
    'Nordic',
    'Icelandic',
    'Lithuanian',
    'Ukrainian',
  ],
  'Middle Eastern': [
    'Turkish',
    'Syrian',
    'Israeli',
    'Iraqi',
    'Persian',
    'Arabian',
    'Afghani',
    'Georgian',
    'Turkmeni',
    'Armenian',
    'Kazakh',
    'Pakistani',
    'Lebanese',
  ],
  'North African': [
    'Egyptian',
    'Libyan',
    'Moroccan',
    'Tunisian',
    'Sudanese',
  ],
  'Sub-Saharan': [
    'Nigerian',
    'Gambian',
    'Ethiopian',
    'South African',
    'Kenyan',
    'Ugandan',
  ],
  'Indian/Himalayan': [
    'North Indian',
    'South Indian',
    'Gujarati',
    'Sri Lankan',
    'Nepalese',
    'Bangladeshi',
  ],
  'East Asian': [
    'Cambodian',
    'Lao',
    'Taiwanese',
    'Japanese',
    'Korean',
    'Mongolian',
  ],
  'Chinese': [
    'Sichuan',
    'Fujian',
    'Hunan',
    'Cantonese',
    'Shandong',
    'Jiangsu',
    'Hong Kong',
  ],
  'Southeast Asian/Micronesian': [
    'Malaysian',
    'Singaporean',
    'Filipino',
    'Indonesian',
    'Papua New Guinean',
    'Hawaiian',
    'Thai',
    'Vietnamese',
  ],
};

const cuisineMap = {
  'Southern Soul': 'North American',
  'Cajun': 'North American',
  'Fast Food': 'North American',
  'Midwestern': 'North American',
  'Tex Mex': 'North American',
  'Tlingit (Native)': 'North American',
  'Mid Atlantic': 'North American',
  'Canadian': 'North American',
  'Mexican': 'Central American + Caribbean',
  'Guatemalan': 'Central American + Caribbean',
  'Costa Rican': 'Central American + Caribbean',
  'Cuban': 'Central American + Caribbean',
  'Jamaican': 'Central American + Caribbean',
  'Haitian': 'Central American + Caribbean',
  'Nicaraguan': 'Central American + Caribbean',
  'Puerto Rican': 'Central American + Caribbean',
  'Dominican': 'Central American + Caribbean',
  'Brazilian': 'South American',
  'Guyanese': 'South American',
  'Venezuelan': 'South American',
  'Peruvian': 'South American',
  'Colombian': 'South American',
  'Chilean': 'South American',
  'Argentinian': 'South American',
  'Ecuadorean': 'South American',
  'Portuguese': 'Western European + Mediterranean',
  'Spanish': 'Western European + Mediterranean',
  'French': 'Western European + Mediterranean',
  'British': 'Western European + Mediterranean',
  'Irish': 'Western European + Mediterranean',
  'Scottish': 'Western European + Mediterranean',
  'Italian': 'Western European + Mediterranean',
  'Greek': 'Western European + Mediterranean',
  'Croatian': 'Western European + Mediterranean',
  'Albanian': 'Western European + Mediterranean',
  'Belgian': 'Western European + Mediterranean',
  'Australian': 'Western European + Mediterranean',
  'German': 'Central + Eastern European',
  'Dutch': 'Central + Eastern European',
  'Swiss': 'Central + Eastern European',
  'Czech': 'Central + Eastern European',
  'Polish': 'Central + Eastern European',
  'Romanian': 'Central + Eastern European',
  'Russian': 'Central + Eastern European',
  'Swedish': 'Central + Eastern European',
  'Danish': 'Central + Eastern European',
  'Nordic': 'Central + Eastern European',
  'Icelandic': 'Central + Eastern European',
  'Lithuanian': 'Central + Eastern European',
  'Ukrainian': 'Central + Eastern European',
  'Turkish': 'Middle Eastern',
  'Syrian': 'Middle Eastern',
  'Israeli': 'Middle Eastern',
  'Iraqi': 'Middle Eastern',
  'Persian': 'Middle Eastern',
  'Arabian': 'Middle Eastern',
  'Afghani': 'Middle Eastern',
  'Georgian': 'Middle Eastern',
  'Turkmeni': 'Middle Eastern',
  'Armenian': 'Middle Eastern',
  'Kazakh': 'Middle Eastern',
  'Pakistani': 'Middle Eastern',
  'Lebanese': 'Middle Eastern',
  'Egyptian': 'North African',
  'Libyan': 'North African',
  'Moroccan': 'North African',
  'Tunisian': 'North African',
  'Sudanese': 'North African',
  'Nigerian': 'Sub-Saharan',
  'Gambian': 'Sub-Saharan',
  'Ethiopian': 'Sub-Saharan',
  'South African': 'Sub-Saharan',
  'Kenyan': 'Sub-Saharan',
  'Ugandan': 'Sub-Saharan',
  'North Indian': 'Indian/Himalayan',
  'South Indian': 'Indian/Himalayan',
  'Gujarati': 'Indian/Himalayan',
  'Sri Lankan': 'Indian/Himalayan',
  'Nepalese': 'Indian/Himalayan',
  'Bangladeshi': 'Indian/Himalayan',
  'Cambodian': 'East Asian',
  'Lao': 'East Asian',
  'Taiwanese': 'East Asian',
  'Japanese': 'East Asian',
  'Korean': 'East Asian',
  'Mongolian': 'East Asian',
  'Sichuan': 'Chinese',
  'Fujian': 'Chinese',
  'Hunan': 'Chinese',
  'Cantonese': 'Chinese',
  'Shandong': 'Chinese',
  'Jiangsu': 'Chinese',
  'Hong Kong': 'Chinese',
  'Malaysian': 'Southeast Asian/Micronesian',
  'Singaporean': 'Southeast Asian/Micronesian',
  'Filipino': 'Southeast Asian/Micronesian',
  'Indonesian': 'Southeast Asian/Micronesian',
  'Papua New Guinean': 'Southeast Asian/Micronesian',
  'Hawaiian': 'Southeast Asian/Micronesian',
  'Thai': 'Southeast Asian/Micronesian',
  'Vietnamese': 'Southeast Asian/Micronesian',
};

const wildCards = [
  'Cold',
  'Vegan',
  'Dessert',
  'Main',
  'Side',
  'Small Bites/Finger Food',
  'Snack',
  'Drink (non-alcoholic)',
  'Drink (alcoholic)',
  'Style of First, Flavor of Second',
  'Flavor of First, Style of Second',
  'Spin for a 3rd',
  'Replace First with Your Choice',
  'Replace Second with Your Choice',
  'Replace Both with Your Choice',
  'Vegetarian',
  'Dairy free',
  'Gluten free',
  'Breakfast',
];

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
