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

// ===== Функция создания карточки =====
function createCard(item) {
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

  return card;
}

// ===== Карточка для главной =====
if (window.location.pathname.includes('index') || window.location.pathname === '/') {
  const newCard = createCard({ img: 'kukla3.jpg', title: 'Мини-кукла' });
  document.querySelector('.gallery').appendChild(newCard);
}

// ===== Новые карточки для страницы "Фарфор" =====
const farforItems = [
  { img: 'teapair.jpg', title: 'Чайная пара' },
  { img: 'uzbeshka.jpg', title: 'Узбечка с чайником' },
  { img: 'dog.jpg', title: 'Сеттер' }
];

if (window.location.pathname.includes('farfor')) {
  farforItems.forEach(function(item) {
    document.querySelector('.gallery').appendChild(createCard(item));
  });
}

// ===== Новые карточки для страницы "Монеты" =====
const moneyItems = [
  { img: 'money4.jpg', title: 'Президенты США' },
  { img: 'money5.jpg', title: 'Десяти- и двухрублёвые монеты' },
  { img: 'money6.jpg', title: 'Пятирублёвые монеты' }
];

if (window.location.pathname.includes('money')) {
  moneyItems.forEach(function(item) {
    document.querySelector('.gallery').appendChild(createCard(item));
  });
}


// ===== Новые карточки для страницы "Винтажные вещи" =====
const thingItems = [
  { img: 'grafin.jpg', title: 'Графин "Дама" с бокалами' },
  { img: 'neznakomka.jpg', title: 'Картина "Незнакомка"' },
  { img: 'pugovizy.jpg', title: 'Коллекция пуговиц' }
];

if (window.location.pathname.includes('vintagethings')) {
  thingItems.forEach(function(item) {
    document.querySelector('.gallery').appendChild(createCard(item));
  });
}

// ===== Новые карточки для страницы "Книги СССР" =====
const bookItems = [
  { img: 'book4.jpg', title: 'И.А. Бунин. Стихотворения и переводы' },
  { img: 'book5.jpg', title: 'Марина Цветаева. Стихи. Проза' },
  { img: 'book6.jpg', title: 'Г.Ф. Шумахер. Паутина жизни' }
];

if (window.location.pathname.includes('books')) {
  bookItems.forEach(function(item) {
    document.querySelector('.gallery').appendChild(createCard(item));
  });
}