// news.js
const newsContainer = document.getElementById('news-container');
const searchInput = document.getElementById('search-input');
let allNews = []; // Здесь мы будем хранить все скачанные новости

// Экспортируем функцию загрузки, чтобы script.js мог её вызвать
export async function loadNews() {
  if (!newsContainer) return;

  try {
    const response = await fetch('data.json');
    if (!response.ok) throw new Error('Ошибка сервера');
    
    const data = await response.json();

    // Сортируем новости по дате (сначала самые свежие)
    data.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    // Сохраняем все новости в глобальную переменную (берем первые 20)
    allNews = data.slice(0, 20); 
    
    // Первый раз отрисовываем всё
    renderNews(allNews);
    
  } catch (error) {
    console.error('Ошибка загрузки:', error);
    newsContainer.innerHTML = '<p>Не удалось загрузить новости. Попробуйте позже.</p>';
  }
}

// Функция 1: Отрисовка карточек (принимает массив)
function renderNews(newsArray) {
  if (!newsContainer) return;
  
  newsContainer.innerHTML = ''; // Очищаем контейнер

  if (newsArray.length === 0) {
    newsContainer.innerHTML = '<p>Ничего не найдено.</p>';
    return;
  }

  newsArray.forEach(function(post) {
    const card = document.createElement('article');
    card.classList.add('card');
    card.dataset.fullText = post.body;

    const placeholder = document.createElement('div');
    placeholder.classList.add('news-placeholder');
    placeholder.textContent = 'Новость';

    // ========Дата=======
    const dateObj = new Date(post.date);
    const dateStr = dateObj.toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });

    const dateEl = document.createElement('div');
    dateEl.textContent = dateStr;
    dateEl.style.fontSize = '12px';
    dateEl.style.color = '#999';
    dateEl.style.marginBottom = '5px';
    // =====================================

    const title = document.createElement('h3');
    title.textContent = post.title;
    title.style.fontSize = '16px';
    title.style.margin = '10px 0';

    const body = document.createElement('p');
    // Оставляем только первые 60 символов для карточки
    body.textContent = post.body.slice(0, 60) + '...';
    body.style.fontSize = '14px';
    body.style.color = '#666';

    card.appendChild(placeholder);
    card.appendChild(dateEl);
    card.appendChild(title);
    card.appendChild(body);
    newsContainer.appendChild(card);
  });
}

// Функция 3: Фильтрация с использованием Debounce
if (searchInput) {
  let debounceTimer; // Переменная для хранения таймера

  searchInput.addEventListener('input', function() {
    // Очищаем предыдущий таймер, если он был
    clearTimeout(debounceTimer);

    // Запускаем новый таймер на 300 мс
    debounceTimer = setTimeout(function() {
      const searchTerm = searchInput.value.toLowerCase().trim();
      
      const filteredNews = allNews.filter(function(post) {
        const titleMatch = post.title.toLowerCase().includes(searchTerm);
        const bodyMatch = post.body.toLowerCase().includes(searchTerm);
        return titleMatch || bodyMatch;
      });
      
      renderNews(filteredNews);
    }, 300); // 300 миллисекунд = 0.3 секунды
  });
}

// ===== Модальное окно для новостей (делегирование) =====
const newsModal = document.querySelector('.modal');

if (newsModal && newsContainer) {
  newsContainer.addEventListener('click', function(event) {
    // Ищем, есть ли среди родителей кликнутого элемента карточка .card
    const card = event.target.closest('.card');
    
    // Если кликнули мимо карточки, ничего не делаем
    if (!card) return;

    // Если кликнули по карточке — достаем из нее заголовок
    const title = card.querySelector('h3').textContent;

    // Наполняем модалку
    newsModal.innerHTML = `
      <div class="modal-content">
        <h2>${title}</h2>
        <p>${card.dataset.fullText}</p>
        <button class="modal-close">Закрыть</button>
      </div>
    `;
    
    // Открываем модалку
    newsModal.classList.add('open');

    // Закрытие по кнопке
    newsModal.querySelector('.modal-close').addEventListener('click', function() {
      newsModal.classList.remove('open');
    });
  });

  // Закрытие по клику на фон
  newsModal.addEventListener('click', function(e) {
    if (e.target === newsModal) {
      newsModal.classList.remove('open');
    }
  });

  // Закрытие по Esc
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      newsModal.classList.remove('open');
    }
  });
}