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

// ===== Функция показа уведомления =====
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');

  // Если на странице нет контейнера, ничего не делаем
  if (!container) return;

  // 1. Создаем элемент уведомления
  const toast = document.createElement('div');
  toast.classList.add('toast', type); // добавляем классы .toast и .success / .error
  toast.textContent = message;

  // 2. Добавляем его в контейнер
  container.appendChild(toast);

  // 3. Принудительно даем браузеру отрисовать его, чтобы сработала анимация
  // (микро-задержка)
  setTimeout(() => {
    toast.classList.add('show');
  }, 10);

  // 4. Удаляем уведомление через 3 секунды
  setTimeout(() => {
    toast.classList.remove('show'); // запускаем анимацию исчезновения

    // Ждем, пока закончится анимация (300мс), и удаляем элемент из HTML
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3000);
}

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
const mainItems = [
  { img: 'kukla3.jpg', title: 'Мини-кукла' },
  { img: 'volkgips.jpg', title: 'Волк и Красная Шапочка' }
];

if (window.location.pathname === '/' ||
  window.location.pathname.endsWith('/') ||
  window.location.pathname.includes('index')) {
  mainItems.forEach(function (item) {
    document.querySelector('.gallery').appendChild(createCard(item));
  });
}

// ===== Новые карточки для страницы "Фарфор" =====
const farforItems = [
  { img: 'teapair.jpg', title: 'Чайная пара' },
  { img: 'uzbeshka.jpg', title: 'Узбечка с чайником' },
  { img: 'dog.jpg', title: 'Сеттер' },
  { img: 'hozyajka.jpg', title: 'Хозяйка медной горы' }
];

if (window.location.pathname.includes('farfor')) {
  farforItems.forEach(function (item) {
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
  moneyItems.forEach(function (item) {
    document.querySelector('.gallery').appendChild(createCard(item));
  });
}


// ===== Новые карточки для страницы "Винтажные вещи" =====
const thingItems = [
  { img: 'grafin.jpg', title: 'Графин "Дама" с бокалами' },
  { img: 'neznakomka.jpg', title: 'Картина "Незнакомка"' },
  { img: 'pugovizy.jpg', title: 'Коллекция пуговиц' },
  { img: 'sigaretnica.jpg', title: 'Сигаретница СССР' }
];

if (window.location.pathname.includes('vintagethings')) {
  thingItems.forEach(function (item) {
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
  bookItems.forEach(function (item) {
    document.querySelector('.gallery').appendChild(createCard(item));
  });
}

// ===== Модальное окно =====
const modal = document.querySelector('.modal');

if (modal) {
  // Закрытие по клику на фон
  modal.addEventListener('click', function (e) {
    if (e.target === modal) {
      modal.classList.remove('open');
    }
  });

  // Закрытие по клавише Esc
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      modal.classList.remove('open');
    }
  });

  document.querySelectorAll('.card').forEach(function (card) {
    card.addEventListener('click', function () {
      let title = card.querySelector('figcaption').textContent;

      modal.innerHTML = `
  <div class="modal-content">
    <h2>${title}</h2>
    <p>Здесь будет подробное описание.</p>
    <button class="modal-close">Закрыть</button>
  </div>
`;
      modal.classList.add('open');

      modal.querySelector('.modal-close').addEventListener('click', function () {
        modal.classList.remove('open');
      });
    });
  });
}

// ===== Сохранение черновика формы =====
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

// Загружаем сохранённые значения при открытии страницы
if (nameInput && emailInput && messageInput) {
  nameInput.value = localStorage.getItem('draft-name') || '';
  emailInput.value = localStorage.getItem('draft-email') || '';
  messageInput.value = localStorage.getItem('draft-message') || '';

  // Сохраняем при вводе
  nameInput.addEventListener('input', function () {
    localStorage.setItem('draft-name', nameInput.value);
  });

  emailInput.addEventListener('input', function () {
    localStorage.setItem('draft-email', emailInput.value);
  });

  messageInput.addEventListener('input', function () {
    localStorage.setItem('draft-message', messageInput.value);
  });
}

// ===== Отправка формы через fetch =====
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', async function (event) {
    // 1. Останавливаем перезагрузку страницы
    event.preventDefault();

    // 2. Собираем значения
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const messageValue = messageInput.value.trim();

    // 3. Проверяем на ошибки
    let errors = [];

    if (nameValue === '') {
      errors.push('Введите имя');
    }

    if (!emailValue.includes('@')) {
      errors.push('Введите корректный email');
    }

    if (messageValue.length < 6) {
      errors.push('Сообщение должно быть длиннее 5 символов');
    }

    if (errors.length > 0) {
      // Показываем первую ошибку красным цветом
      showToast(errors[0], 'error');
    } else {

      // Если ошибок нет — ОТПРАВЛЯЕМ НА СЕРВЕР
      const formData = new FormData(contactForm);
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;

      try {
        submitBtn.textContent = 'Отправка...';
        submitBtn.disabled = true;

        // Вот здесь находится та самая строка
        const response = await fetch('https://formspree.io/f/mgaokqoe', {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          localStorage.removeItem('draft-name');
          localStorage.removeItem('draft-email');
          localStorage.removeItem('draft-message');
          contactForm.reset();
          showToast('Форма отправлена успешно!', 'success');
        } else {
          showToast('Ошибка при отправке. Попробуйте позже.', 'error');
        }
      } catch (error) {
        showToast('Ошибка сети. Проверьте интернет.', 'error');
      }
     finally {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  }
  });
}

// ===== Загрузка новостей с API =====
const newsContainer = document.getElementById('news-container');

if (newsContainer) {
  // Эта функция будет получать данные с сервера
  async function loadNews() {
    try {
      // 1. Отправляем GET-запрос на сервер
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      
      // 2. Проверяем, успешно ли прошел запрос
      if (!response.ok) {
        throw new Error('Ошибка сервера');
      }

      // 3. Превращаем ответ в объект JavaScript (JSON)
      const data = await response.json();

      // 4. Берем только первые 6 постов, чтобы не перегружать страницу
      const posts = data.slice(0, 6);

      // 5. Очищаем контейнер перед добавлением
      newsContainer.innerHTML = '';

      // 6. Создаем карточку для каждого поста
      posts.forEach(function(post) {
        // Создаем саму карточку (как вы делали это для книг)
        const card = document.createElement('article');
        card.classList.add('card');

        // Внутри карточки будет заголовок и текст
        // Поскольку в API нет картинок, мы можем использовать серую заглушку
        const img = document.createElement('img');
        img.src = 'https://via.placeholder.com/200x300?text=News'; // Заглушка
        img.alt = 'Новость';
        img.style.objectFit = 'cover';
        
        const title = document.createElement('h3');
        title.textContent = post.title; // Название поста из API
        title.style.fontSize = '16px';
        title.style.margin = '10px 0';

        const body = document.createElement('p');
        // Обрезаем текст, чтобы он не был слишком длинным
        body.textContent = post.body.slice(0, 50) + '...'; 
        body.style.fontSize = '14px';
        body.style.color = '#666';

        // Собираем карточку
        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(body);

        // Добавляем в контейнер на странице
        newsContainer.appendChild(card);
      });

    } catch (error) {
      // Если произошла ошибка (например, нет интернета)
      console.error('Ошибка загрузки:', error);
      newsContainer.innerHTML = '<p>Не удалось загрузить новости. Попробуйте позже.</p>';
    }
  }

  // Вызываем функцию
  loadNews();
}