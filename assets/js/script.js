// Пример скрипта для динамической генерации навигации по урокам
document.addEventListener("DOMContentLoaded", function() {
  const currentLesson = window.location.pathname.split('/').pop(); // Получаем имя текущего урока из пути

  // Определение пути для следующего и предыдущего урока
  const lessonPath = window.location.pathname.split('/').slice(0, -1).join('/'); // Путь без текущего урока
  const previousLesson = getAdjacentLesson(currentLesson, -1); // Получаем предыдущий урок
  const nextLesson = getAdjacentLesson(currentLesson, 1); // Получаем следующий урок

  // Обновляем ссылки на "предыдущий" и "следующий" уроки
  document.querySelector(".lesson-navigation .previous").href = previousLesson ? `${lessonPath}/${previousLesson}/index.html` : "#";
  document.querySelector(".lesson-navigation .next").href = nextLesson ? `${lessonPath}/${nextLesson}/index.html` : "#";
});

function getAdjacentLesson(currentLesson, direction) {
  // Получаем список всех уроков для текущей темы (например, из списка на сервере или заранее известный список)
  const lessons = ["01-what-is-html", "02-basic-html", "03-forms", "04-css-basics", "05-javascript-basics"];
  const currentIndex = lessons.indexOf(currentLesson);
  
  if (currentIndex === -1) return null; // Урок не найден в списке
  
  const adjacentIndex = currentIndex + direction; // Получаем индекс для предыдущего или следующего урока
  
  if (adjacentIndex >= 0 && adjacentIndex < lessons.length) {
    return lessons[adjacentIndex]; // Возвращаем путь к соседнему уроку
  }
  
  return null; // Если нет соседнего урока
}
