async function renderSubtopic() {
  try {
    const response = await fetch('/lessons.json');
    const lessons = await response.json();

    const currentPath = window.location.pathname;
    const subtopicFolder = currentPath.substring(0, currentPath.lastIndexOf('/'));

    const filtered = lessons.filter(item => {
      return item.type === 'lesson' && item.path.startsWith(subtopicFolder);
    });

    const ul = document.getElementById('subtopic-lessons');
    if (!ul) return;

    filtered.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item.title;
      ul.appendChild(li);
    });
  } catch (error) {
    console.error('Ошибка при загрузке уроков:', error);
  }
}

window.addEventListener('DOMContentLoaded', renderSubtopic);