document.addEventListener("DOMContentLoaded", async () => {
  const tocContainer = document.getElementById("lessons-toc");
  if (!tocContainer) return;

  try {
    const response = await fetch("/lessons.json");
    const items = await response.json();

    // Группировка по topic -> subtopic -> lessons
    const structure = [];

    let currentTopic = null;
    let currentSubtopic = null;

    for (const item of items) {
      if (item.type === "topic") {
        currentTopic = {
          title: item.title,
          slug: slugify(item.title),
          subtopics: []
        };
        structure.push(currentTopic);
        currentSubtopic = null; // сбрасываем
      } else if (item.type === "subtopic") {
        if (!currentTopic) continue; // подстраховка
        currentSubtopic = {
          title: item.title,
          slug: slugify(item.title),
          lessons: []
        };
        currentTopic.subtopics.push(currentSubtopic);
      } else if (item.type === "lesson") {
        if (!currentSubtopic) continue; // подстраховка
        currentSubtopic.lessons.push({
          title: item.title,
          slug: slugify(item.title)
        });
      }
    }

    // Рендерим в DOM
    for (const topic of structure) {
      const topicEl = document.createElement("div");
      topicEl.className = "toc-topic";

      const topicLink = document.createElement("a");
      topicLink.href = `#topic-${topic.slug}`;
      topicLink.textContent = topic.title;
      topicLink.className = "toc-topic-link";
      topicEl.appendChild(topicLink);

      for (const sub of topic.subtopics) {
        const subEl = document.createElement("div");
        subEl.className = "toc-subtopic";

        const subLink = document.createElement("a");
        subLink.href = `#subtopic-${sub.slug}`;
        subLink.textContent = sub.title;
        subLink.className = "toc-subtopic-link";
        subEl.appendChild(subLink);

        const ul = document.createElement("ul");
        ul.className = "toc-lesson-list";

        for (const lesson of sub.lessons) {
          const li = document.createElement("li");
          const lessonLink = document.createElement("a");
          lessonLink.href = `#lesson-${lesson.slug}`;
          lessonLink.textContent = lesson.title;
          lessonLink.className = "toc-lesson-link";
          li.appendChild(lessonLink);
          ul.appendChild(li);
        }

        subEl.appendChild(ul);
        topicEl.appendChild(subEl);
      }

      tocContainer.appendChild(topicEl);
    }
  } catch (err) {
    console.error("Failed to render table of contents:", err);
  }

  // Простой slugify
  function slugify(str) {
    return str
      .toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .replace(/[^\w\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");
  }
});