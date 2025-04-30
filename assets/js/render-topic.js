async function renderTopicStructure() {
  try {
    const response = await fetch('/lessons.json');
    const lessons = await response.json();

    const container = document.getElementById('topic-structure');
    if (!container) return;

    // Получаем путь текущего topic.html
    const currentPath = window.location.pathname;
    const basePath = currentPath.replace(/topic\.html$/, '');

    // Отбираем только subtopic, вложенные в этот topic
    const subtopics = lessons.filter(item =>
      item.type === 'subtopic' && item.path.startsWith(basePath)
    );

    subtopics.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item.title; // Без ссылки
      container.appendChild(li);
    });

  } catch (error) {
    console.error('Ошибка при загрузке структуры topic:', error);
  }
}

window.addEventListener('DOMContentLoaded', renderTopicStructure);