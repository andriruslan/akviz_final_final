document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("formContainer");

  // Список компонентів у потрібному порядку
  const componentFiles = [
    "sector.html",
    "position.html",
    "location.html",
    "target-type.html",
    "side.html",
    "target-number.html",
    "target-name.html",
    "target-count.html",
    "azimuth.html",
    "course.html",
    "distance.html",
    "height.html",
    "time.html",
    "detection.html",
    "result.html",
    "ammo.html",
    "description.html",
    "preview.html",
    "actions.html",
    "debug.html"
  ];

  for (const file of componentFiles) {
    try {
      const res = await fetch(`components/${file}`);
      const html = await res.text();
      const wrapper = document.createElement("div");
      wrapper.innerHTML = html;
      container.appendChild(wrapper);
    } catch (err) {
      console.error(`❌ Помилка завантаження ${file}:`, err);
    }
  }
});
