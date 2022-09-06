const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryListEl = document.querySelector('ul.gallery');

// Перенесла це в css + додала базові стилі:
// galleryListEl.style.listStyle = 'none';
// galleryListEl.style.display = 'flex';

const makeImagesMarkup = images => {
  return images
    .map(({ url, alt }) => {
      return `<li><img src="${url}" alt="${alt}" class="gallery__image"/></li>`;
    })
    .join('');
};

const galleryMarkup = makeImagesMarkup(images);
galleryListEl.insertAdjacentHTML('afterbegin', galleryMarkup);
