// lesson-nav.js

// Получаем текущий путь (например: /content/.../note/lesson.html)
const currentPath = window.location.pathname;

// Загружаем список лекций
fetch('/lessons.json')
  .then(res => res.json())
  .then(lessons => {
    // Находим индекс текущей лекции в списке
    const currentIndex = lessons.findIndex(lesson => lesson.path === currentPath);

    // Назначаем действия для кнопок "previous" и "next"
    const prevLink = document.querySelector('a.previous');
    const nextLink = document.querySelector('a.next');

    if (currentIndex > 0 && prevLink) {
      prevLink.href = lessons[currentIndex - 1].path;
    } else {
      prevLink.style.display = 'none'; // Скрываем, если нет предыдущей
    }

    if (currentIndex >= 0 && currentIndex < lessons.length - 1 && nextLink) {
      nextLink.href = lessons[currentIndex + 1].path;
    } else {
      nextLink.style.display = 'none'; // Скрываем, если это последняя лекция
    }
  })
  .catch(error => {
    console.error('Ошибка загрузки списка лекций:', error);
  });