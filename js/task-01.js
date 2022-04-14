const allItemsEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${allItemsEl.length}`);

for (let i = 0; i < allItemsEl.length; i += 1) {
    const categoryTitle = allItemsEl[i].firstElementChild.textContent;
    const elementsNumber = allItemsEl[i].lastElementChild.children.length;
    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${elementsNumber}`);
}

// Можно ли оформить это как-то проще через функцию?