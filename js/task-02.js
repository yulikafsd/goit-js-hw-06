const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEl = document.querySelector('ul#ingredients');

const makeIngredients = ingredientsArr => {
  return ingredientsArr.map(ingredient => {
    const ingredientMarkup = document.createElement('li');
    ingredientMarkup.textContent = ingredient;
    ingredientMarkup.classList.add('item');
    return ingredientMarkup;
  });
};

const ingredientsListMarkup = makeIngredients(ingredients);
ingredientsListEl.append(...ingredientsListMarkup);
