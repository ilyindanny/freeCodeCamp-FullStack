console.log('script.js загружен');

fetch('/lessons.json')
  .then(response => {
    if (!response.ok) {
      throw new Error(`Ошибка загрузки lessons.json: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    if (!Array.isArray(data)) {
      console.warn('Формат данных неожиданен:', data);
      return;
    }

    console.log('Количество лекций:', data.length);
    console.log('Первая лекция:', data[0]);

    // Выводим в консоль
    data.forEach(lesson => {
      console.log(`${lesson.title} -> ${lesson.path}`);
    });

    // Теперь добавим их в HTML-страницу, если там есть <ul id="lesson-list">
    const list = document.getElementById('lesson-list');
    if (list) {
      data.forEach(lesson => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = lesson.path;
        a.textContent = lesson.title;
        li.appendChild(a);
        list.appendChild(li);
      });
    } else {
      console.warn('Элемент #lesson-list не найден в HTML.');
    }
  })
  .catch(error => {
    console.error('Ошибка при получении данных:', error);
  });