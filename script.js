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

// ===== Новые карточки для страницы "Монеты" =====
const moneyItems = [
  { img: 'money4.jpg', title: 'Президенты США' },
  { img: 'money5.jpg', title: 'Десяти- и двухрублёвые монеты' },
  { img: 'money6.jpg', title: 'Пятирублёвые монеты' }
];

const moneyGallery = document.querySelector('.gallery');

if (moneyGallery && window.location.pathname.includes('money')) {
  moneyItems.forEach(function(item) {
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
    moneyGallery.appendChild(card);
  });
}

// ===== Новые карточки для страницы "Винтажные вещи" =====
const thingItems = [
  { img: 'grafin.jpg', title: 'Графин "Дама" с бокалами' },
  { img: 'neznakomka.jpg', title: 'Картина "Незнакомка"' },
  { img: 'pugovizy.jpg', title: 'Коллекция пуговиц' }
];

const thingGallery = document.querySelector('.gallery');

if (thingGallery && window.location.pathname.includes('vintagethings')) {
  thingItems.forEach(function(item) {
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
    thingGallery.appendChild(card);
  });
}

// ===== Новые карточки для страницы "Книги СССР" =====
const bookItems = [
  { img: 'book4.jpg', title: 'И.А. Бунин. Стихотворения и переводы' },
  { img: 'book5.jpg', title: 'Марина Цветаева. Стихи. Проза' },
  { img: 'book6.jpg', title: 'Г.Ф. Шумахер. Паутина жизни' }
];

const bookGallery = document.querySelector('.gallery');

if (bookGallery && window.location.pathname.includes('books')) {
  bookItems.forEach(function(item) {
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
    bookGallery.appendChild(card);
  });
}