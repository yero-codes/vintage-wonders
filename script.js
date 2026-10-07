// Кнопка "Наверх"
const buttonUp = document.querySelector('.button-up');

// Показывать кнопку при прокрутке вниз
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
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