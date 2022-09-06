const categories = document.querySelectorAll('li.item');

const countCategories = () =>
  console.log(`Number of categories: ${categories.length}`);

const showEachCategory = categories =>
  categories.forEach(category => {
    const headerText = category.firstElementChild.textContent;
    const categoryElements = category.querySelectorAll('li');
    const showHeaderText = console.log(`Category: ${headerText}`);
    const showNumberOfElements = console.log(
      `Elements: ${categoryElements.length}`,
    );
    return showHeaderText, showNumberOfElements;
  });

countCategories();
showEachCategory(categories);

// Другой вариант:

// const allItemsEl = document.querySelectorAll('.item');
// console.log(`Number of categories: ${allItemsEl.length}`);

// for (let i = 0; i < allItemsEl.length; i += 1) {
//   const categoryTitle = allItemsEl[i].firstElementChild.textContent;
//   const elementsNumber = allItemsEl[i].lastElementChild.children.length;
//   console.log(`Category: ${categoryTitle}`);
//   console.log(`Elements: ${elementsNumber}`);
// }
