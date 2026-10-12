// Кнопка "Наверх"
const buttonUp = document.querySelector('.button-up');

// Показывать кнопку при прокрутке вниз
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    buttonUp.classList.add('visible');
  } else {
    buttonUp.classList.remove('visible');
  }
});

// Прокрутка наверх при клике
buttonUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// ===== Создание карточки =====
if (window.location.pathname.includes('index') || window.location.pathname === '/' )
{
const newCard = document.createElement('article');
newCard.classList.add('card');

const newFigure = document.createElement('figure');
newFigure.classList.add('card-figure');

const newImg = document.createElement('img');
newImg.src = 'images/kukla3.jpg';
newImg.alt = 'Мини-кукла';
newImg.loading = 'lazy';

const newCaption = document.createElement('figcaption');
newCaption.textContent = 'Мини-кукла';

newFigure.appendChild(newImg);
newFigure.appendChild(newCaption);
newCard.appendChild(newFigure);

document.querySelector('.gallery').appendChild(newCard);
}

// ===== Новые карточки для страницы "Фарфор" =====
const farforItems = [
  { img: 'teapair.jpg', title: 'Чайная пара' },
  { img: 'uzbeshka.jpg', title: 'Узбечка с чайником' },
  { img: 'dog.jpg', title: 'Сеттер' }
];

const farforGallery = document.querySelector('.gallery');

if (farforGallery && window.location.pathname.includes('farfor')) {
  farforItems.forEach(function(item) {
    const card = document.createElement('article');
    card.classList.add('card');

    const figure = document.createElement('figure');
    figure.classList.add('card-figure');

    const img = document.createElement('img');
    img.src = 'images/' + item.img;
    img.alt = item.title;
    img.loading = 'lazy';

    const caption = document.createElement('figcaption');
    caption.textContent = item.title;

    figure.appendChild(img);
    figure.appendChild(caption);
    card.appendChild(figure);
    farforGallery.appendChild(card);
  });
}