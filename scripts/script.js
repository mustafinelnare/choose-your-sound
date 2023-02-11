const button = document.querySelector('.header__button');
const title = document.querySelector('.intro__title');
const subtitle = document.querySelector('.intro__paragraph');
const image = document.querySelector('.intro__image');
const link = document.querySelector('.intro__link');

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
};

button.addEventListener('click', function () {
  let randomElement = getRandomElement(albumCovers);
  title.textContent = randomElement.title;
  subtitle.textContent = randomElement.subtitle;
  image.src = randomElement.image;
  link.href = randomElement.link;
});
