document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("lessons-collection");

  if (!container) return;

  try {
    const response = await fetch("/lessons.json");
    const data = await response.json();

    for (const item of data) {
      const res = await fetch(item.path);
      const text = await res.text();

      const parser = new DOMParser();
      const doc = parser.parseFromString(text, "text/html");

      // Мы больше не нуждаемся в headContent
      const mainContent = doc.querySelector("main");

      const section = document.createElement("section");

      // Создаем id из типа и заголовка
      const slug = slugify(item.title);
      section.id = `${item.type}-${slug}`;

      // Вставляем main (если он есть)
      if (mainContent) {
        const clonedMain = document.createElement("div");
        clonedMain.innerHTML = mainContent.innerHTML;
        section.appendChild(clonedMain);
      }

      // Разделитель
      const hr = document.createElement("hr");
      hr.style.margin = "3rem 0";
      hr.style.border = "none";
      hr.style.borderTop = "1px solid #444";
      section.appendChild(hr);

      container.appendChild(section);
    }
  } catch (err) {
    console.error("Failed to load lessons collection:", err);
  }

  // Простой slugify
  function slugify(str) {
    return str
      .toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // убираем акценты
      .replace(/[^\w\s-]/g, "")                         // убираем всё, кроме букв, цифр, пробелов и дефисов
      .trim()
      .replace(/\s+/g, "-");
  }
});