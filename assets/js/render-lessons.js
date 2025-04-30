async function renderLessons() {
  try {
    const response = await fetch('/lessons.json');
    const lessons = await response.json();

    const container = document.getElementById('lessons-list');
    if (!container) return;

    const ul = document.createElement('ul');
    container.appendChild(ul);

    lessons.forEach(item => {
      let li = document.createElement('li');
      let link = document.createElement('a');
      link.href = item.path;
      link.textContent = item.title;
      
      // Стилизация для разных типов
      switch(item.type) {
        case 'topic':
          link.style.fontWeight = 'bold';
          link.style.fontSize = '1.2em';
          break;
        case 'subtopic':
          link.style.fontStyle = 'italic';
          link.style.marginLeft = '1em';
          break;
        case 'lesson':
          link.style.marginLeft = '2em';
          break;
      }
      
      li.appendChild(link);
      ul.appendChild(li);
    });
  } catch (error) {
    console.error('Ошибка при загрузке lessons.json:', error);
  }
}

window.addEventListener('DOMContentLoaded', renderLessons);